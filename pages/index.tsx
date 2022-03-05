import type { NextPage } from 'next';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';
import MyInput from '../components/Input';
import CustomSelect from '../components/Select';
import Button from '@mui/material/Button';

const CorporateLogin: NextPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    let loginOptions = [
        {
            value: 'agent',
            label: 'Agent',
        },
        {
            value: 'owner',
            label: 'Owner',
        },
        {
            value: 'tenant',
            label: 'Tenant',
        },
    ];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginAs, setLoginAs] = useState('');

    return (
        <>
            <div className="w-screen h-screen bg-green-200">
                <Image
                    src={`/images/wallpapers/${
                        isMobile ? 'corporate-mobile.png' : 'corporate.png'
                    }`}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="fill"
                />
                <div className="p-4 md:p-12 bg-glassEffect w-4/5 md:w-1/3 h-4/5 top-20 left-9 md:left-1/3  flex flex-col justify-center items-center relative rounded shadow-lg shadow-black">
                    <div className="flex flex-col justify-center items-center h-32 text-primary">
                        <AccountCircleIcon fontSize="large" />
                        <h3>Corporate Login</h3>
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
                    <div className="mt-4 bg-loginButton rounded">
                        <Button variant="contained">
                            <a href="/agent"> Login</a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateLogin;
