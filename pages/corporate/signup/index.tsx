import type { NextPage } from 'next';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import MyInput from '../../../components/Input';
import CustomSelect from '../../../components/Select';
import Button from '@mui/material/Button';
import PhoneNoInput from '../../../components/PhoneInput';
import axios from 'axios';
import { useRouter } from 'next/router';
import { onCorporateSignUp } from '../../../helpers/apis/auth';

const CorporateCreateLogin: NextPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    let signupOptions = [
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
    const [name, setName] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [confirmPassword, setConfirmPassword] = useState<String>('');

    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [showConfirmPassword, setConfirmShowPassword] =
        useState<Boolean>(false);
    const [signupAs, setSignupAs] = useState<String>('');
    const [phoneNo, setPhoneNO] = useState<String>('');

    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<Boolean>(false);
    const router = useRouter();

    function onSubmit() {
        let body = {
            name: name,
            username: email,
            password: password,
            mobileNo: '+' + phoneNo,
            userRoleID: signupAs,
        };

        onCorporateSignUp(body).then((r: any) => {
            console.log(r, 'RESULTSS');
            if (r.error) {
                setSnackbar(true);

                setErrorSnackbar(r.message);
                return;
            }
            if (r.data.statusCode == 200) {
                setSnackbar(true);
                if (r.localDb) {
                    setTimeout(
                        () => router.push(`/corporate/login?email=${email}`),
                        5000
                    );
                }
            } else {
                if (r.data.errorData.message) {
                    setErrorSnackbar(r.data.errorData.message);
                    setSnackbar(true);
                }
            }
            return;
        });
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
                <div className="p-4  bg-glassEffect w-4/5 md:w-1/3 h-full md:h-5/6 top-0 md:top-20 left-9 md:left-1/3  flex flex-col justify-center items-center relative rounded shadow-lg shadow-black">
                    <div className="flex flex-col justify-center items-center h-32 text-2xl text-primary">
                        <AccountCircleIcon fontSize="large" />
                        <h1> Create Account</h1>
                    </div>

                    <div className="md:w-72 h-full ">
                        <MyInput name="Name" value={name} onChange={setName} />
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
                        <MyInput
                            name="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                            showPassword={showConfirmPassword}
                            setShowPassword={setConfirmShowPassword}
                        />
                        <CustomSelect
                            value={signupAs}
                            onChange={(e: any) => setSignupAs(e.target.value)}
                            label={'Sign Up As'}
                            options={signupOptions}
                        />
                        <div className="mt-4 ">
                            <PhoneNoInput
                                phoneNo={phoneNo}
                                setPhoneNo={setPhoneNO}
                            />
                        </div>
                    </div>
                    <div className="mt-4 bg-green-700 rounded">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => onSubmit()}
                        >
                            Create Account
                        </Button>
                    </div>

                    <div className="mt-4 flex flex-col">
                        <h1 className="font-thin text-sm">
                            Already Have an Account
                        </h1>

                        <div className="self-center mt-2 bg-blue-600 w-20 rounded">
                            <Button variant="contained">
                                <a href="/corporate/login"> Login</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateCreateLogin;
