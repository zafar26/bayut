import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
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

const steps = ['Details', 'Amenities', 'Uploads'];

const AddProperty = () => {
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
    const [ownershipStatus, setOwnershipStatus] = useState<String>('');
    const [listingOwner, setListingOwner] = useState<String>('');
    const [listingOwnerData, setListingOwnerData] = useState<{
        contactPerson?: string;
        email?: string;
        phone?: string;
        mobile?: string;
    }>({});
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<Boolean>(false);
    const router: NextRouter = useRouter();

    function ChangeListingOwner(e: any) {
        setListingOwner(e);
        // Fetch For Listing USer
    }
    let addPropertyOptions = [
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Type and Purpose',
        },
        {
            value: category,
            setValue: setCategory,
            label: 'Category',
            options: propertyLookups?.categories,
        },
        {
            value: subCategory,
            setValue: setSubCategory,
            label: 'Sub Category',
            options: propertyLookups?.subCategories.filter(
                (d: any) => d.key == category
            ),
        },
        {
            value: purpose,
            setValue: setPurpose,
            label: 'Purpose',
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
            name: 'Location',
        },
        {
            value: address,
            setValue: setAddress,
            name: 'Address',
        },
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Property Details',
        },
        {
            value: referenceNo,
            setValue: setReferenceNo,
            name: 'Reference No',
        },
        {
            button: true,
            label: 'Auto Generate',
            style: 'mx-2 bg-green-600 text-white rounded text-xs rounded flex items-center ',
        },
        {
            value: tittle,
            setValue: setTittle,
            name: 'Tittle',
        },
        {
            value: tittleAr,
            setValue: setTittleAr,
            name: 'Tittle Ar',
        },
        {
            value: description,
            setValue: setDescription,
            name: 'Description',
            multilines: true,
        },
        {
            value: descriptionAr,
            setValue: setDescriptionAr,
            name: 'Description Ar',
            multilines: true,
        },
        {
            value: area,
            setValue: setArea,
            name: 'Area (sq.Feet)',
        },
        {
            value: price,
            setValue: setPrice,
            name: 'Price',
        },
        {
            value: permitNo,
            setValue: setPermitNo,
            name: 'Permit Number',
        },
        {
            value: completionStatus,
            setValue: setCompletionStatus,
            label: 'Completion Status',
            options: [],
        },
        {
            value: ownershipStatus,
            setValue: setOwnershipStatus,
            label: 'OwnerShip Status',
            options: [],
        },
        {
            style: 'mt-4 ml-2 w-full',
            text: true,
            label: 'Property Details',
        },
        {
            value: listingOwner,
            setValue: ChangeListingOwner,
            name: 'Listing Owner',
        },
        {
            style: 'mt-4 ml-2 font-thin text-xs w-full',
            text: true,
            label: 'The Following Owner Information Linked To Your Listing :',
        },
        {
            value: listingOwnerData?.contactPerson,
            name: 'Contact Person',
        },
        {
            value: listingOwnerData?.email,
            name: 'Email',
        },
        {
            value: listingOwnerData?.phone,
            name: 'Phone',
        },
        {
            value: listingOwnerData?.mobile,
            name: 'Mobile',
        },
    ];
    function onSubmit() {
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
            ownerShipStatusID: 1,
            listingUserID: 1,
            status: 0,
            price: price,
        };
        console.log(addPropertyBody, 'ADDD PROPERTY');
        // router
        onAddProperty(addPropertyBody)
            .then((r: any) => {
                if (r.error) {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                    return;
                }
                if (r.data.statusCode == 200) {
                    setSnackbar(true);
                    setTimeout(
                        () => router.push('/corporate/addproperty/ammenities'),
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
        onPropertyLookups()
            // .then((response: any) => console.log(response, 'RESPONSE'))
            .then((r: any) => {
                console.log(r.data.responseData.data);
                setPropertyLookups(r.data.responseData.data);
            });
    }, [setPropertyLookups]);

    return (
        <div>
            {console.log(snackbar, 'SnackBAr')}
            <Navbar selectedLink={'Add Property'} />
            <div className="pt-16">
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
                        }

                        if (d.name) {
                            if (d.setValue) {
                                if (d.multilines) {
                                    return (
                                        <div className="md:w-2/6">
                                            <div
                                                className={'mx-2 w-72 md:w-96'}
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
            <div
                className={
                    errorSnackbar
                        ? 'absolute bottom-100 bg-red-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                        : 'absolute bottom-100 bg-green-700 text-white p-1 px-4 text-sm w-full rounded shadow-lg'
                }
                hidden={!snackbar}
            >
                {errorSnackbar ? errorSnackbar : 'Succes'}
            </div>
        </div>
    );
};
export default AddProperty;
