import { useState } from 'react';
import MyInput from '../../../components/Input';
import Navbar from '../../../components/Navbar/Navbar';
import CustomSelect from '../../../components/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

const AddUser = () => {
    const [email, setEmail] = useState<String>('');
    const [loginAs, setLoginAs] = useState<String>('');
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
        <div className="pt-14 md:pt-16 w-full h-full">
            <Navbar selectedLink={'Agency'} />
            <div className="flex flex-col justify-center items-center h-32 text-2xl text-primary">
                <AccountCircleIcon fontSize="large" />
                <h1>Add User</h1>
            </div>
            <div className="p-4 flex flex-wrap">
                <div className="mx-4 w-72">
                    <MyInput name="Name" value={email} onChange={setEmail} />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Name (Ar)"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Password"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Confirm Password"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput name="Mobile" value={email} onChange={setEmail} />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Landline"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Whatsapp"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
            </div>
            <p className="mt-4 mb-2 ml-4">Agent Profile Details</p>
            <div className="p-4 w-full flex flex-wrap">
                <div className="mx-4 w-48 ">
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Gender'}
                        options={loginOptions}
                    />
                </div>
                <div className="mx-4 w-48 ">
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Country'}
                        options={loginOptions}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Experience (Years)"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-48 ">
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Specialities'}
                        options={loginOptions}
                    />
                </div>
                <div className="mx-4 w-48 ">
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Service Areas'}
                        options={loginOptions}
                    />
                </div>
                <div className="mx-4 w-48 ">
                    <CustomSelect
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Languages'}
                        options={loginOptions}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Facebook"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Instagram"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="mx-4 w-72">
                    <MyInput name="Twitter" value={email} onChange={setEmail} />
                </div>
                <div className="mx-4 w-72">
                    <MyInput name="Youtube" value={email} onChange={setEmail} />
                </div>
                <p className="mt-4 mb-2 w-full">Assign Listing Quota :</p>
                <div className="mx-4 w-72">
                    <MyInput
                        name="Assign Listing Quota"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
            </div>
            <div className="flex justify-center self-center w-full ">
                <Button
                    variant="contained"
                    color="success"
                    className="text-green-900 hover:text-white"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
export default AddUser;
