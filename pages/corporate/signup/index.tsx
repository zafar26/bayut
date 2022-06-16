import type { NextPage } from 'next';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState,forwardRef } from 'react';
import MyInput from '../../../components/Input';
import CustomSelect from '../../../components/Select';
import Button from '@mui/material/Button';
import PhoneNoInput from '../../../components/PhoneInput';
import axios from 'axios';
import { useRouter } from 'next/router';
import { onCorporateSignUp } from '../../../helpers/apis/auth';
import corporate from '../../../public/images/wallpapers/corporate.png';
import { myLoader } from '../../../helpers/helper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MenuAppBar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar/Navbar';


const Alert = forwardRef(function Alert(props:any, ref:any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const CorporateCreateLogin: any = () => {
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
    const [signupAs, setSignupAs] = useState<Number>(2);
    const [phoneNo, setPhoneNO] = useState<String>('971');

    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const router = useRouter();
    const [open, setOpen] = useState<any>(false);
    const [validationError, setValidationError] = useState<Boolean>(false);
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    
    
    useEffect(() => {
        const { signupas }: any = router.query;
        if (!signupas) {
            router.push('/');
        }
        setSignupAs(signupas);
        

       

    }, []);
    function onSubmit() {
        setErrorSnackbar("")

        let body = {
            name: name,
            username: email,
            password: password,
            confirmPassword: confirmPassword,
            mobileNo: '+' + phoneNo,
            userRoleID: signupAs,
        };
        if(validationError){
            setOpen(true)
            setErrorSnackbar('Validation Error')
            return
        }
        if(password != confirmPassword){
            setOpen(true)
            setErrorSnackbar("Password Didn't Match")
            return    
        }
        console.log('Clicked')
        if(name!="" && password != "" && email != ""){
            onCorporateSignUp(body).then((r: any) => {
                console.log(r, 'RESULTSS');
                
                if(!r){
                    return
                }
                if (r.error) {

                    setSnackbar(true);

                    setErrorSnackbar(r.message);
                    return;
                }
                if (r.data.statusCode == 200) {
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                    setTimeout(
                        () => router.push(`/corporate/login?email=${email}`),
                        5000
                    );
                    
                } else {
                    if (r.data.errorData.message) {
                        setErrorSnackbar(r.data.errorData.message);
                        setSnackbar(true);
                    }
                }
                setOpen(true)
                return;
            });
        }else{
            setOpen(true)
            setErrorSnackbar('Please Enter Name, Email, Password and Confirm Password');
        }

    }
    return (
        <>
            <div className="w-screen h-screen ">
                <div className="pt-0">

                </div >
                <Image
                    loader={myLoader}
                    src={'corporate.png'}
                    alt="Background Picture "
                    layout="fill"
                    objectFit="fill"
                />
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
                <div className="h-full w-full pt-20 ">
                    <div className="py-4 px-4 bg-glassEffect w-4/5 md:w-1/3 h-full md:h-full top-0 md:top-0 left-9 md:left-1/3 flex flex-col justify-center items-center relative rounded shadow-lg shadow-black">
                        <div className="flex p-4 flex-col justify-center items-center h-64 text-2xl text-primary">
                            <AccountCircleIcon fontSize="large" />
                            <h1> Create Account</h1>
                        </div>

                        <div className="md:w-72 h-full ">
                            <MyInput
                                name="Name *"
                                value={name}
                                onChange={setName}
                            />
                            <MyInput
                                name="Email *"
                                value={email}
                                onChange={setEmail}
                                validationRequired={true}
                                setValidationError={setValidationError}
                            />
                            <MyInput
                                name="Password *"
                                type="password"
                                value={password}
                                onChange={setPassword}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                validationRequired={true}
                                setValidationError={setValidationError}
                            />
                            <MyInput
                                name="Confirm Password *"
                                type="password"
                                value={confirmPassword}
                                onChange={setConfirmPassword}
                                showPassword={showConfirmPassword}
                                setShowPassword={setConfirmShowPassword}
                                validationRequired={true}
                                setValidationError={setValidationError}
                            />
                            {/* <CustomSelect
                            value={signupAs}
                            onChange={(e: any) => setSignupAs(e.target.value)}
                            label={'Sign Up As'}
                            options={signupOptions}
                            /> */}
                            <div className="mt-4 "id="phoneNo">
                                <PhoneNoInput
                                    phoneNo={phoneNo}
                                    setPhoneNo={setPhoneNO}
                                    onKeyEnter={true}
                                    onClick={() => onSubmit()}

                                />
                            </div>
                        </div>
                        <div className="mt-4 bg-green-700 rounded">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => onSubmit()}
                                id="createAccount"
                            >
                                Create Account
                            </Button>
                        </div>

                        {signupAs == 3 && (<>
                            <div className="mt-4 flex flex-col">
                                <h1 className="font-thin text-sm">
                                    Already Have an Account
                                </h1>

                                <div className=" mt-2 flex justify-center w-full rounded">
                                    <div className="bg-blue-600">
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            router.push('/corporate/login')
                                        }
                                    >
                                        <p> Login</p>
                                    </Button>
                                    </div>
                                    {/* <Button
                                 variant="contained"
                                 color="secondary"
                                 onClick={() =>
                                     router.push('/')
                                 }
                             >
                                Home
                             </Button> */}
                                </div>
                            
                             
                            </div>
                        </>)}
                        {/* <div
                            className={
                                errorSnackbar
                                    ? 'absolute top-1 bg-red-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                                    : 'absolute top-1 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                            }
                            hidden={!snackbar}
                        >
                            {errorSnackbar ? "Request Failed" : 'Succes'}
                        </div> */}
                        {/* {console.log(errorSnackbar,'SNACKBAR')} */}
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                            {errorSnackbar != ""?
                            snackbar ?
                                "Request Failed"
                            :
                            errorSnackbar
                            :
                            "Created Account!"
                            }
                            </Alert>
                        </Snackbar>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateCreateLogin;
