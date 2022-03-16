import Button from '@mui/material/Button';
import { useState } from 'react';
import MyInput from '../../../components/Input';
import Navbar from '../../../components/Navbar/Navbar';
import CustomSelect from '../../../components/Select';
import MyStepper from '../../../components/Stepper';
import { steps } from './utils';

const AddProperty = () => {
    const [loginAs, setLoginAs] = useState<String>('');
    const [email, setEmail] = useState<String>('');

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

    return (
        <div>
            <Navbar selectedLink={'Add Property'} />
            <div className="pt-16">
                <MyStepper steps={steps} activeStep={0} />
                <p className="ml-2 ">Type and Purpose</p>
                <div className="flex flex-wrap">
                    <div className="mx-4 w-72 ">
                        <CustomSelect
                            value={loginAs}
                            onChange={(e: any) => setLoginAs(e.target.value)}
                            label={'Category'}
                            options={loginOptions}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <CustomSelect
                            value={loginAs}
                            onChange={(e: any) => setLoginAs(e.target.value)}
                            label={'Sub Category'}
                            options={loginOptions}
                        />
                    </div>
                    <div className="mx-4 w-72 ">
                        <CustomSelect
                            value={loginAs}
                            onChange={(e: any) => setLoginAs(e.target.value)}
                            label={'Purpose'}
                            options={loginOptions}
                        />
                    </div>
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
                                options={loginOptions}
                            />
                        </div>
                        <div className="mx-4 w-72 ">
                            <CustomSelect
                                value={loginAs}
                                onChange={(e: any) =>
                                    setLoginAs(e.target.value)
                                }
                                label={'Ownership Status'}
                                options={loginOptions}
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
                        options={loginOptions}
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
                    <Button
                        className="bg-green-600 hover:bg-green-500 text-white"
                        color="success"
                    >
                        <a href="/corporate/addproperty/ammenities">Next</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default AddProperty;
