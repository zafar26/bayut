import { useState,forwardRef } from 'react';
import MyInput from '../../../components/Input';
import Navbar from '../../../components/Navbar/Navbar';
import CustomSelect from '../../../components/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { onAddUser } from '../../../helpers/apis/addUser';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { NextRouter, useRouter } from 'next/router';
import PhoneNoInput from '../../../components/PhoneInput';

const Alert = forwardRef(function Alert(props:any, ref:any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AddUser = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [name, setName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [nameAr, setNameAr] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [confirmPassword, setConfirmPassword] = useState<String>('');
    const [mobileNo, setMobileNo] = useState<String>('971');
    const [landline, setLandline] = useState<String>('');
    const [whatsapp, setWhatsapp] = useState<String>('');
    const [gender, setGender] = useState<Number>(0);
    const [country, setCountry] = useState<String>('');
    const [experience, setExperience] = useState<Number>(0);
    const [specialities, setSpecialities] = useState<String>('');
    const [serviceArea, setServiceArea] = useState<String>('');
    const [languages, setLanguages] = useState<String>('');
    const [facebook, setFacebook] = useState<String>('');
    const [instagram, setInstagram] = useState<String>('');
    const [twitter, setTwitter] = useState<String>('');
    const [youtube, setYoutube] = useState<String>('');
    const [listingQuota, setListingQuota] = useState<String>('');
    const [loginAs, setLoginAs] = useState<String>('');
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const [open, setOpen] = useState<any>(false);
    const [validationError, setValidationError] = useState<Boolean>(false);
    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const router: NextRouter = useRouter();
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    
    let loginOptions = [
        {
            value: '2',
            label: 'Individual',
        },
        {
            value: '3',
            label: 'Company',
        },
        {
            value: '4',
            label: "Company's Agent",
        },
    ];
    let addUserInputs = [
        {
            name: 'Name    *',
            value: name,
            required:true,
            setValue: setName,
            style: 'mx-4 w-72',
        },
        // {
        //     name: 'Name Ar',
        //     value: nameAr,
        //     setValue: setNameAr,
        //     style: 'mx-4 w-72',
        // },
        {
            name: 'Email    *',
            value: email,
            required:true,
            setValue: setEmail,
            style: 'mx-4 w-72',
        },
        {
            name: 'Password    *',
            type:"password",
            value: password,
            required:true,
            validationRequired:true,
            setValidationError:setValidationError,
            setValue: setPassword,
            style: 'mx-4 w-72',
        },
        {
            name: 'Confirm Password    *',
            type:"password",
            value: confirmPassword,
            required:true,
            setValue: setConfirmPassword,
            style: 'mx-4 w-72',
        },
        {
            name: 'Mobile    *',
            value: mobileNo,
            setValue: setMobileNo,
            style: 'mx-4 w-72',
            type:'mobile'
        },
        {
            name: 'Landline',
            value: landline,
            setValue: setLandline,
            style: 'mx-4 w-72',
        },
        {
            name: 'Whatsapp',
            value: whatsapp,
            setValue: setWhatsapp,
            style: 'mx-4 w-72',
        },
        {
            label: 'Agent Profile Details',
            text: true,
            style: 'mt-4 mb-2 ml-4 w-full',
        },
        {
            label: 'Gender',
            value: gender,
            setValue: setGender,
            options: [
                { value: 1, label: 'Male' },
                { value: 2, label: 'FeMale' },
                { value: 3, label: 'other' },
            ],
            style: 'mx-4 w-48',
        },
        // {
        //     label: 'Country',
        //     value: country,
        //     setValue: setCountry,
        //     options: [],
        //     style: 'mx-4 w-48',
        // },
        {
            name: 'Experience (Years)',
            value: experience,
            setValue: setExperience,
            style: 'mx-4 w-72',
        },
        // {
        //     label: 'Specialities',
        //     value: specialities,
        //     setValue: setSpecialities,
        //     options: [],
        //     style: 'mx-4 w-48',
        // },
        // {
        //     label: 'Service Area',
        //     value: serviceArea,
        //     setValue: setServiceArea,
        //     options: [],
        //     style: 'mx-4 w-48',
        // },
        // {
        //     label: 'Languages',
        //     value: languages,
        //     setValue: setLanguages,
        //     options: [],
        //     style: 'mx-4 w-48',
        // },
        {
            name: 'Facebook',
            value: facebook,
            setValue: setFacebook,
            style: 'mx-4 w-72',
        },

        {
            name: 'Instagram',
            value: instagram,
            setValue: setInstagram,
            style: 'mx-4 w-72',
        },
        {
            name: 'Twitter',
            value: twitter,
            setValue: setTwitter,
            style: 'mx-4 w-72',
        },
        {
            name: 'Youtube',
            value: youtube,
            setValue: setYoutube,
            style: 'mx-4 w-72',
        },
        {
            label: 'Agent Profile Details',
            text: true,
            style: 'mt-4 mb-2 ml-4 w-full',
        },
        {
            name: 'Assign Listing Quota',
            value: listingQuota,
            setValue: setListingQuota,
            style: 'mx-4 w-72',
        },
    ];
    function onSubmit() {
        if(name!= ""){setOpen(true);setErrorSnackbar("Please Enter Name");return }
        if(email!= ""){setOpen(true);setErrorSnackbar("Please Enter Email");return }
        if(password != confirmPassword){setOpen(true);setErrorSnackbar("Confirm Password Did'nt MAtch");return}
        if(password != ""){setOpen(true);setErrorSnackbar("Please Enter password");return}
        if(mobileNo != "971" ){setOpen(true);setErrorSnackbar("Please Enter Mobile No");return}
        // if(!email){setErrorSnackbar("Please Enter Email")}
        // if(!email){setErrorSnackbar("Please Enter Email")}
        let addUserBody = {
            user: {
                name: name,
                username: email,
                mobileNo: mobileNo,
                communication: true,
                password: password,
                userRoleID: 4,
                status: 0,
            },
            userDetails: {
                gender: gender,
                landLineNo: landline,
                whatsappNo: whatsapp,
                status: 0,
                countryID: 0,
                experience: experience,
                facebook: facebook,
                instagram: instagram,
                twitter: twitter,
                youtube: youtube,
            },
        };
        console.log(addUserBody, 'BODY');
        onAddUser(addUserBody).then((r: any) => {
            // console.log(r, 'RESULTSS');
            setOpen(true);
            
            if(r.data.statusCode == 404){
                setOpen(true);
                setErrorSnackbar('Invalid Credentials')
            }
            if (r.error) {
                setSnackbar(true);
                setErrorSnackbar("Failed to Add User");
                return;
            }
            if (r.data.statusCode == 200 || r.userID) {
                console.log(r, 'RESULT');
                setSnackbar(true);
                router.push('/corporate/agency')
            } else {
                if (r.data.errorData.message) {
                    setErrorSnackbar(r.data.errorData.message);
                    setSnackbar(true);
                }
            }
        });
        // console.log(addUserBody, 'BODY');
    }

    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            {isMobile ? <Navbar selectedLink={'Add User'} /> : <MenuAppBar />}
            <div className="flex">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Add User'}
                        />
                    </div>
                )}
                <div className=" w-full md:w-5/6 h-full">
                    {/* <Navbar selectedLink={'Agency'} /> */}
                    <div className="flex flex-col justify-center items-center h-32 text-2xl text-[#4b1037">
                        <AccountCircleIcon fontSize="large" />
                        <h1>Add User</h1>
                    </div>
                    <div className="p-4 flex flex-wrap">
                        {addUserInputs.map((d: any) => {
                            if (d.text && !d.value) {
                                return <p className={d.style}>{d.label}</p>;
                            } 
                            else if(d.type=='mobile'){
                                return <div className="mt-4 "id="phoneNo">
                                <PhoneNoInput
                                    phoneNo={d.value}
                                    setPhoneNo={d.setValue}
                                    // onKeyEnter={true}
                                    // onClick={() => onSubmit()}

                                />
                            </div>
                            }
                            else {
                                if (d.label) {
                                    return (
                                        <div className={d.style}>
                                            <CustomSelect
                                                value={d.value}
                                                onChange={(e: any) =>
                                                    d.setValue(e.target.value)
                                                }
                                                label={d.label}
                                                options={d.options}
                                            />
                                        </div>
                                    );
                                }
                                return (
                                    <div className={d.style}>
                                        <MyInput
                                            type={d.type == "password" ?  "password" :false}
                                            name={d.name}
                                            value={d.value}
                                            onChange={d.setValue}
                                            validationRequired = {d.validationRequired}
                                            showPassword={showPassword}
                                            setShowPassword={setShowPassword}                
                                            // validationRequired={true}
                                            setValidationError={setValidationError}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="flex justify-center self-center w-full ">
                        <Button
                            variant="contained"
                            color="success"
                            className="text-green-900 hover:text-white"
                            onClick={() => onSubmit()}
                        >
                            Submit
                        </Button>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                        {errorSnackbar ?
                        errorSnackbar
                        :
                        "User Added successfully!"
                        }
                        </Alert>
                    </Snackbar>
                    {/* <div
                        className={
                            errorSnackbar
                                ? 'absolute top-100 bg-red-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                                : 'absolute top-100 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                        }
                        hidden={!snackbar}
                    >
                        {errorSnackbar ? errorSnackbar : 'Succes'}
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default AddUser;
