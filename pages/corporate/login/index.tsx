import type { NextPage } from 'next';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import MyInput from '../../../components/Input';
import CustomSelect from '../../../components/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
// import CustomizedSnackbars from '../../../components/SnackBar';
import { db } from '../../../db';
import { useLiveQuery } from 'dexie-react-hooks';
import { useRouter } from 'next/router';
import { Alert } from '@mui/material';

const CorporateLogin: NextPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const router = useRouter();
    let loginOptions = [
        {
            value: '2',
            label: 'Individual',
        },
        {
            value: '3',
            label: 'Company',
        },
    ];
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<Boolean>(false);
    const [loginAs, setLoginAs] = useState<String>('');
    useEffect(() => {
        db.table('user')
            .toArray()
            .then((user: any) => {
                console.log(user, 'USER DATA');
                if (user.length >= 1 && user[0].token) {
                    router.push('/corporate/dashboard');
                }
            });
    }, [db, router]);

    async function onSubmit() {
        try {
            if (email == '' && password == '') {
                alert('Please Enter Email and Password');
                return;
            }
            // console.log('CLicked', process.env.ServerURL);
            const { data } = await axios.post(
                'http://zaki786-001-site1.ftempurl.com/Users/signin',
                {
                    username: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (data) {
                // alert(data, 'Data');
                // console.log('DATA', data.responseData);
                const id = await db.user.add(data.responseData.data);
                router.push('/corporate/dashboard');
            }

            setTimeout(() => setSnackbar(false), 5000);
            // console.log(data.data, 'DATA');
            if (data.message) {
                setErrorSnackbar(data.message);
                setSnackbar(true);
            } else {
                setSnackbar(true);
            }
            return data;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div className="w-screen h-screen ">
                <Image
                    src={`/images/wallpapers/${
                        isMobile ? 'corporate-mobile.png' : 'corporate.png'
                    }`}
                    alt="Background Picture "
                    layout="fill"
                    objectFit="fill"
                />
                <div className="p-4 md:p-12 bg-glassEffect w-4/5 md:w-1/3 h-4/5 md:h-5/6 top-20 left-9 md:left-1/3  flex flex-col justify-center items-center relative rounded shadow-lg shadow-black">
                    <div className="flex flex-col justify-center items-center h-32 text-2xl text-primary">
                        <AccountCircleIcon fontSize="large" />
                        <h1>Corporate Login</h1>
                    </div>

                    <div className="md:w-72 ">
                        <MyInput
                            name="Email"
                            value={email}
                            onChange={setEmail}
                        />
                        <MyInput
                            name="Password"
                            type="password"
                            value={password}
                            onChange={setPassword}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                        <CustomSelect
                            value={loginAs}
                            onChange={(e: any) => setLoginAs(e.target.value)}
                            label={'Login As'}
                            options={loginOptions}
                        />
                    </div>
                    <div className="mt-4 bg-green-700 rounded">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => onSubmit()}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <h1 className="font-thin text-sm">
                            Don't Have an Account
                        </h1>

                        <div className="self-center mt-2 bg-blue-600 w-42 rounded">
                            <Button variant="contained">
                                <a href="/corporate/signup"> Create Account</a>
                            </Button>
                        </div>
                    </div>
                    <div
                        className="absolute top-1 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg"
                        hidden={!snackbar}
                    >
                        {errorSnackbar ? errorSnackbar : 'Succes'}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateLogin;
