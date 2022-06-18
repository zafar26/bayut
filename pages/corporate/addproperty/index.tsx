import Button from '@mui/material/Button';
import { useEffect, useState,forwardRef } from 'react';
import MyInput from '../../../components/Input';
import Navbar from '../../../components/Navbar/Navbar';
import CustomSelect from '../../../components/Select';
import MyStepper from '../../../components/Stepper';
import {
    onAddProperty,
    onPropertyLookups,
} from '../../../helpers/apis/addProperty';
import JsonOptions from '../../options.json';
import { NextRouter, useRouter } from 'next/router';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { db } from '../../../db';
// import uniqid from 'uniqid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { GridCellParams } from '@mui/x-data-grid';

const Alert = forwardRef(function Alert(props:any, ref:any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = ['Details', 'Amenities', 'Uploads'];

const AddProperty = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [loginAs, setLoginAs] = useState<String>('');
    const [propertyLookups, setPropertyLookups] = useState<any>();
    const [purpose, setPurpose] = useState<any>('');
    const [category, setCategory] = useState<any>('');
    const [subCategory, setSubCategory] = useState<any>('');
    const [location, setLocation] = useState<String>('');
    const [address, setAddress] = useState<String>('');
    const [referenceNo, setReferenceNo] = useState<String>('');
    const [tittle, setTittle] = useState<String>('');
    const [tittleAr, setTittleAr] = useState<String>('');
    const [description, setDescription] = useState<String>('');
    const [descriptionAr, setDescriptionAr] = useState<String>('');
    const [area, setArea] = useState<String>('');
    const [price, setPrice] = useState<String>('');
    const [permitNo, setPermitNo] = useState<String>('');
    const [completionStatus, setCompletionStatus] = useState<String>('');
    const [priceTime, setPriceTime] = useState<String>('');
    const [ownershipStatus, setOwnershipStatus] = useState<String>('');
    const [listingOwners, setListingOwners] = useState<String>();
    const [listingOwnerData, setListingOwnerData] = useState<{
        userID?: string;
        contactPerson?: string;
        email?: string;
        phone?: string;
        mobile?: string;
    }>({});
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [open, setOpen] = useState<any>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const router: NextRouter = useRouter();
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    
    let addPropertyOptions = [
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Type and Purpose',
        },
        {
            value: category,
            setValue: setCategory,
            label: 'Category *',
            options: propertyLookups?.categories,
        },
        {
            value: subCategory,
            setValue: setSubCategory,
            label: 'Sub Category *',
            options: propertyLookups?.subCategories.filter(
                (d: any) => d.key == category
            ),
        },
        {
            value: purpose,
            setValue: setPurpose,
            label: 'Purpose *',
            options: propertyLookups?.propertyType,
        },
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Location and Address',
        },

        {
            value: location,
            setValue: setLocation,
            name: 'Location *',
        },
        {
            value: address,
            setValue: setAddress,
            name: 'Address *',
        },
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Property Details',
        },
        // {
        //     value: referenceNo,
        //     setValue: setReferenceNo,
        //     name: 'Reference No',
        // },
        // {
        //     button: true,
        //     label: 'Auto Generate',
        //     style: 'mx-2 bg-green-600 text-white rounded text-xs rounded flex items-center ',
        //     // onSubmit: () => setReferenceNo(uniqid()),
        // },
        {
            value: tittle,
            setValue: setTittle,
            name: 'Tittle *',
        },
        // {
        //     value: tittleAr,
        //     setValue: setTittleAr,
        //     name: 'Tittle Ar',
        // },
        {
            value: description,
            setValue: setDescription,
            name: 'Description *',
            multilines: true,
        },
        // {
        //     value: descriptionAr,
        //     setValue: setDescriptionAr,
        //     name: 'Description Ar',
        //     multilines: true,
        // },
        {
            value: area,
            setValue: setArea,
            name: 'Area (sq.Feet) *',
        },
        {
            value: price,
            setValue: setPrice,
            name: 'Price *',
        },
        {
            value: priceTime,
            setValue:setPriceTime,
            label: 'Select Tenure *',
            dependsOn:purpose == "For Rent",
            options: [{
                value:1,
                text:"Monthly",
            },
            {
                value:2,
                text:"Quarterly",
            },
            {
                value:3,
                text:"Half yearly",
            },
            {
                value:4,
                text:"Yearly",
            },
        ],
        },
        {
            value: permitNo,
            setValue: setPermitNo,
            name: 'Permit Number',
        },
        // {
        //     value: completionStatus,
        //     setValue: setCompletionStatus,
        //     label: 'Completion Status',
        //     options: [],
        // },
        // {
        //     value: ownershipStatus,
        //     setValue: setOwnershipStatus,
        //     label: 'OwnerShip Status',
        //     options: [],
        // },
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Property Details',
        },
        {
            value: listingOwners,
            setValue:setListingOwners,
            label: 'Listing Owner *',
            options: propertyLookups?.users,
        },
        // {
        //     style: 'mt-4 ml-2 font-thin text-xs w-full',
        //     text: true,
        //     label: 'The Following Owner Information Linked To Your Listing :',
        // },
        // {
        //     value: listingOwnerData?.contactPerson,
        //     name: 'Contact Person',
        // },
        // {
        //     value: listingOwnerData?.email,
        //     name: 'Email',
        // },
        // {
        //     value: listingOwnerData?.phone,
        //     name: 'Phone',
        // },
        // {
        //     value: listingOwnerData?.mobile,
        //     name: 'Mobile',
        // },
    ];
    console.log(listingOwners,'LISTING VLAUE')
    function onSubmit() {
        if(category == ""){setOpen(true);setErrorSnackbar("Please Enter Category");return }
        if(subCategory== ""){setOpen(true);setErrorSnackbar("Please Enter subCategory");return }
        if(purpose == ""){setOpen(true);setErrorSnackbar("Please Enter purpose");return }
        if(location== ""){setOpen(true);setErrorSnackbar("Please Enter location");return }
        if(address == ""){setOpen(true);setErrorSnackbar("Please Enter address");return }
        if(tittle == ""){setOpen(true);setErrorSnackbar("Please Enter tittle");return }
        if(description == ""){setOpen(true);setErrorSnackbar("Please Enter description");return }
        if(listingOwners== ""){setOpen(true);setErrorSnackbar("Please Enter listing USer");return }
        if(price == ""){setOpen(true);setErrorSnackbar("Please Enter price");return }
        // if(!address){setOpen(true);setErrorSnackbar("Please Enter address");return }
        // if(!address){setOpen(true);setErrorSnackbar("Please Enter address");return }
        if(purpose == "For Rent" && priceTime == "") { setOpen(true);setErrorSnackbar("Please Enter Tenure");return}
        setErrorSnackbar("")
        let addPropertyBody = {
            categoryID: parseInt(category),
            subCategoryID: parseInt(subCategory),
            propertyTypeID: parseInt(purpose),
            location: location,
            address: address,
            referenceNo: referenceNo,
            title: tittle,
            titleA: tittleAr,
            description: description,
            descriptionA: descriptionAr,
            area: area,
            permitNumber: permitNo,
            completionStatusID: 1,
            ownerShipStatusID: priceTime,
            listingUserID: listingOwners,
            status: 0,
            price: price
            // tenure:priceTime
        };
        console.log(addPropertyBody, 'ADDD PROPERTY');
        // router
        onAddProperty(addPropertyBody)
            .then((r: any) => {
                setOpen(true)
                if (r.error) {
                    setSnackbar(true);
                    setErrorSnackbar('Failed To Add Property');
                    return;
                }
                if (r.data.statusCode == 200) {
                    console.log(r.data, 'RESULT');
                    setSnackbar(true);
                    setTimeout(
                        () =>
                            router.push(
                                `/corporate/addproperty/ammenities?propertyid=${r.data.responseData.data}`
                            ),
                        5000
                    );
                } else {
                    if (r.data.errorData.message) {
                        setErrorSnackbar(r.data.errorData.message);
                        setSnackbar(true);
                    }
                }
            })
            .catch((e) => console.log(e, 'ERR'));
    }
    useEffect(() => {
        async function getListingUser() {
            let corporateUser = await db.table('corporate').toArray();
            console.log(corporateUser, 'CORPORATEUSER');
            return corporateUser[0];
        }
        onPropertyLookups()
            // .then((response: any) => console.log(response, 'RESPONSE'))
            .then((r: any) => {
                getListingUser().then((user: any) => {
                    console.log(user,r.data.responseData.data, 'LISYTINGUSER');
                    setListingOwnerData(user);
                    let userLookups:any = r.data.responseData.data
                    // console.log(userLookups.users,'USERLLOKUPS')
                    console.log(userLookups.users.filter((d:any)=>d.text == user.name)[0].value,'LOOKUPS')
                    setListingOwners(userLookups.users.filter((d:any)=>d.text == user.name)[0].value);
                });
                console.log(r, 'RESULTT');
                setPropertyLookups(r.data.responseData.data);
            });
    }, [setPropertyLookups]);

    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            <div className="flex">
                {/* {console.log(snackbar, 'SnackBAr')} */}
                {isMobile ? (
                    <Navbar selectedLink={'Add Property'} />
                ) : (
                    <MenuAppBar />
                )}

                {/* <Navbar selectedLink={'Add Property'} /> */}
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Add Property'}
                        />
                    </div>
                )}
                <div className="pt-16 md:w-5/6 w-full">
                    <MyStepper steps={steps} activeStep={0} />
                    <div className="flex flex-wrap">
                        {addPropertyOptions.map((d: any) => {
                            if (d.button) {
                                return (
                                    <div className={d.style}>
                                        <Button color="inherit" size="small">
                                            {d.label}
                                        </Button>
                                    </div>
                                );
                            }
                            if (d.label) {
                                if (d.text == true) {
                                    return <p className={d.style}>{d.label}</p>;
                                } else {
                                    return (
                                        <div className={'mx-2 w-72'}>
                                            <CustomSelect
                                                value={d.value || ""}
                                                onChange={(e: any) =>{
                                                    console.log(e.target.value,'EVENT')
                                                    d.setValue(e.target.value)
                                                }
                                                }
                                                label={d.label}
                                                options={d.options}
                                            />
                                        </div>
                                    );
                                }
                            }

                            if (d.name) {
                                if (d.setValue) {
                                    if (d.multilines) {
                                        return (
                                            <div className="md:w-3/6">
                                                <div
                                                    className={
                                                        'mx-2 w-72 md:w-5/6'
                                                    }
                                                >
                                                    <MyInput
                                                        textdesc={true}
                                                        noOfLines={4}
                                                        name={d.name}
                                                        value={d.value}
                                                        onChange={d.setValue}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div className={'mx-2 w-72'}>
                                            <MyInput
                                                name={d.name}
                                                value={d.value}
                                                onChange={d.setValue}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={'mx-2 w-72'}>
                                            <MyInput
                                                disabled={true}
                                                name={d.name}
                                                value={d.value}
                                                onChange={d.setValue}
                                            />
                                        </div>
                                    );
                                }
                            }
                        })}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="bg-green-600 hover:bg-green-500 rounded ">
                            <Button color="success" onClick={() => onSubmit()}>
                                <p className="text-white">Next</p>
                            </Button>
                        </div>
                    </div>
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                        {errorSnackbar != "" 
                        ?
                            errorSnackbar
                            
                        :
                        "Property Added successfully!"
                        }
                        </Alert>
                    </Snackbar>
{/*                     
                <div
                    className={
                        errorSnackbar
                            ? 'absolute bottom-100 bg-red-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                            : 'absolute bottom-100 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                    }
                    hidden={!snackbar}
                >
                    {errorSnackbar ? errorSnackbar : 'Succes'}
                </div> */}
            </div>
        </div>
    );
};
export default AddProperty;
