import Button from '@mui/material/Button';
import { useState } from 'react';
import MyInput from '../../../components/Input';
import Navbar from '../../../components/Navbar/Navbar';
import CustomSelect from '../../../components/Select';
import MyStepper from '../../../components/Stepper';
import JsonOptions from '../../options.json';

const steps = ['Details', 'Amenities', 'Uploads'];

const AddProperty = () => {
    const [loginAs, setLoginAs] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [purpose, setPurpose] = useState<String>('');
    const [category, setCategory] = useState<String>('');
    const [subCategory, setSubCategory] = useState<String>('');

    let typeandPurpose = [
        {
            value: category,
            setValue: setCategory,
            label: 'Category',
            options: JsonOptions.categories,
        },
        {
            value: subCategory,
            setValue: setSubCategory,
            label: 'Sub Category',
            options: JsonOptions.subCategories.filter(
                (d: any) => d.key == category
            ),
        },
        {
            value: purpose,
            setValue: setPurpose,
            label: 'Purpose',
            options: JsonOptions.propertyType,
        },
    ];
    return (
        <div>
            <Navbar selectedLink={'Add Property'} />
            <div className="pt-16">
                <MyStepper steps={steps} activeStep={0} />
                <p className="ml-2 ">Type and Purpose</p>
                <div className="flex flex-wrap">
                    {typeandPurpose.map((d) => (
                        <div className="mx-4 w-72 ">
                            <CustomSelect
                                value={d.value}
                                onChange={(e: any) =>
                                    d.setValue(e.target.value)
                                }
                                label={d.label}
                                options={d.options}
                            />
                        </div>
                    ))}
                </div>
                <p className="mt-4 ml-2 ">Location and Address</p>
                <div className="flex flex-wrap">
                    <div className="mx-4 w-72 ">
                        <MyInput
                            name="Location"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <MyInput
                            name="Address"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                </div>
                <p className="mt-4 ml-2">Property Details</p>
                <div className="flex flex-wrap">
                    <div className="mx-4 w-72 ">
                        <MyInput
                            name="Reference Number"
                            value={email}
                            onChange={setEmail}
                        />
                        <Button color="success">Auto Generate</Button>
                    </div>
                    <div className="mx-4 w-72 ">
                        <MyInput
                            name="Tittle"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <MyInput
                            name="Tittle (Ar)"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mx-4 w-72 ">
                            <MyInput
                                textdesc={true}
                                noOfLines={4}
                                name="Description"
                                value={email}
                                onChange={setEmail}
                            />
                        </div>

                        <div className="mx-4 w-72 ">
                            <MyInput
                                textdesc={true}
                                noOfLines={4}
                                name="Description (Ar)"
                                value={email}
                                onChange={setEmail}
                            />
                        </div>

                        <div className="mx-4 w-72 ">
                            <MyInput
                                name="Area (Square Feet)"
                                value={email}
                                onChange={setEmail}
                            />
                        </div>

                        <div className="mx-4 w-72 ">
                            <MyInput
                                name="Permit Number"
                                value={email}
                                onChange={setEmail}
                            />
                        </div>

                        <div className="mx-4 w-72 ">
                            <CustomSelect
                                value={loginAs}
                                onChange={(e: any) =>
                                    setLoginAs(e.target.value)
                                }
                                label={'Completion Status'}
                                options={JsonOptions.loginOptions}
                            />
                        </div>
                        <div className="mx-4 w-72 ">
                            <CustomSelect
                                value={loginAs}
                                onChange={(e: any) =>
                                    setLoginAs(e.target.value)
                                }
                                label={'Ownership Status'}
                                options={JsonOptions.loginOptions}
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-4 w-72 ">
                    <p className="mt-4">Contact Details</p>
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Listing Owner'}
                        options={JsonOptions.loginOptions}
                    />
                </div>
                <div className="m-4 flex items-end">
                    <p className="font-thin text-xs">
                        The Following Owner Information Linked To Your Listing :
                    </p>
                </div>
                <div className="flex flex-wrap">
                    <div className="mx-4 w-72 ">
                        <MyInput
                            disabled={true}
                            name="Contact Person"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>

                    <div className="mx-4 w-72 ">
                        <MyInput
                            disabled={true}
                            name="Email"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <MyInput
                            disabled={true}
                            name="Phone"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <MyInput
                            disabled={true}
                            name="Mobile"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <div className="bg-green-600 hover:bg-green-500 rounded ">
                        <Button color="success">
                            <a
                                href="/corporate/addproperty/ammenities"
                                className="text-white"
                            >
                                Next
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddProperty;
