import type { NextPage } from 'next';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState,forwardRef } from 'react';
import MyInput from '../../../components/Input';
import CustomSelect from '../../../components/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
// import CustomizedSnackbars from '../../../components/SnackBar';
import { db } from '../../../db';
import { useLiveQuery } from 'dexie-react-hooks';
import { NextRouter, useRouter } from 'next/router';
// import { Alert } from '@mui/material';
import { onCorporateLogin } from '../../../helpers/apis/auth';
import corporate from '../../../public/images/wallpapers/corporate.png';
import { myLoader } from '../../../helpers/helper';
// import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../../../components/Navbar/Navbar';
import MenuAppBar from '../../../components/Appbar';


const Alert = forwardRef(function Alert(props:any, ref:any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const CorporateLogin: NextPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const router: NextRouter = useRouter();
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
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const [loginAs, setLoginAs] = useState<String>('');
    const [open, setOpen] = useState<any>(false);
    const [validationError, setValidationError] = useState<Boolean>(false);
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    useEffect(() => {
        let queryemail: any = router.query.email;
        if (queryemail) setEmail(queryemail);
        // console.log(router, 'ROUTER');
        db.table('corporate')
            .toArray()
            .then((user: any) => {
                // console.log(user, 'USER DATA');
                if (user.length >= 1 && user[0].token) {
                    router.push('/corporate/listings');
                }
            });
    }, [db, router]);

    function onSubmit() {
        setSnackbar(false);
        if(validationError){
            let passw :any=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            console.log(passw,password.match(passw),'PAssword')
            if(!password.match(passw)){
                setError('6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
                props.setValidationError(true)
                return
            }
            if( password.match(passw)){
                // setError('')
                return
            }   console.log(error , "VAlidation Password")
            
            console.log('Validation Error')
            setOpen(true)
            setErrorSnackbar('Enter Details Correctly ')
            return
        }
        let body = {
            username: email,
            password: password,
        };
        if(email!= "" && password != ""){
            onCorporateLogin(body).then((r: any) => {
            // console.log(r, 'RESULTSS');
            setOpen(true)

            if (r.error) {
                setSnackbar(true);

                setErrorSnackbar(r.message);
                return;
            }
            if (r.data.statusCode == 200) {
                setSnackbar(true);
                if (r.localDb) {
                    setTimeout(() => router.push('/corporate/listings'), 2000);
                }
            } else {
                if (r.data.errorData.message) {
                    setErrorSnackbar(r.data.errorData.message);
                    setSnackbar(true);
                }
            }
        });}
        else{
            setOpen(true)
            
            setErrorSnackbar('Please enter valid credentials to login')
            return
        }
    }
    
    return (
        <>
            <div className="w-screen h-screen ">
                <Image
                    loader={myLoader}
                    src={'corporate.png'}
                    alt="Background Picture "
                    layout="fill"
                    objectFit="fill"
                />
                <div className="">
                {isMobile ? (
                <Navbar selectedLink={'Login'} clientUser={true} />
            ) : (
                <MenuAppBar
                // className={styles.container}
                // toggleDrawer={toggleDrawer}
                client={true}
                // login={login}
                // setUserSigned={setUserSigned}
                />
            )}
            </div>
                <div className="p-4 md:p-12 bg-glassEffect w-4/5 md:w-1/3 h-4/5 md:h-5/6 top-20 left-9 md:left-1/3  flex flex-col justify-center items-center relative rounded shadow-lg shadow-black">
                    <div className="flex flex-col justify-center items-center h-32 text-2xl text-primary">
                        <AccountCircleIcon fontSize="large" />
                        <h1> Login</h1>
                    </div>

                    <div className="md:w-72 ">
                        <MyInput
                            name="Email"
                            value={email}
                            onChange={setEmail}
                            validationRequired={true}
                            setValidationError={setValidationError}
                        />
                        <MyInput
                            name="Password"
                            type="password"
                            value={password}
                            onChange={setPassword}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            onPressEnter = {true}
                            onSubmit = {onSubmit}
                            validationRequired={true}
                            setValidationError={setValidationError}
                        />
                        {/* <CustomSelect
                            value={loginAs}
                            onChange={(e: any) => setLoginAs(e.target.value)}
                            label={'Login As'}
                            options={loginOptions}
                        /> */}
                    </div>
                    <div className="flex items-end">
                        <div>
                    <div className="mt-4 bg-green-700 rounded">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => onSubmit()}
                        >
                            Login
                        </Button>
                    </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        

                        {/* <div className="self-center mt-2 ml-2 w-42 rounded">
                        <p className="font-thin text-xs">
                         Go to 
                        </p>
                            {/* <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                     router.push('/')
                                }
                            >
                            
                               Home
                            </Button> */}
                        {/* </div> */} 
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col">
                        <h1 className="font-thin text-sm">
                            Don't Have an Account
                        </h1>

                        <div className="self-center mt-2 bg-blue-600 w-42 rounded">
                            <Button
                                variant="contained"
                                onClick={() =>
                                    router.push('/corporate/signup?signupas=3')
                                }
                            >
                                Create Account
                            </Button>
                        </div>
                    </div>
                    {/* {console.log(errorSnackbar,'ERROR Snackbar')} */}
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                        {errorSnackbar !="" ?
                        
                            errorSnackbar == "Request failed with status code 500" ?
                                'Request Failed'
                            :
                                errorSnackbar
                        :
                        "Login Success!"
                        }
                        </Alert>
                    </Snackbar>
                    {/* <div
                        className={
                            errorSnackbar
                                ? 'absolute top-1 bg-red-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                                : 'absolute top-1 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                        }
                        hidden={!snackbar}
                    >
                        {errorSnackbar ? 'Request Failed' : 'Succes'}
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default CorporateLogin;
