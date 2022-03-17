import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import MyInput from '../../../components/Input';
import Button from '@mui/material/Button';

const steps = ['Details', 'Amenities', 'Uploads'];

let recreationFamily = [
    {
        label: 'Barbeque Area',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Day Care Center',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Kids Play Area',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Lawn Or Garden',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Cafeteria / Canteen',
        checked: '',
        setCheck: '',
    },
];

let healthFitness = [
    {
        label: 'First Aid Medical Center',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Gym Or Health Club',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Jacuzzi',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Sauna',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Steam Room',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Swimming Pool',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Facilities For Disabled',
        checked: '',
        setCheck: '',
    },
];
let laundryKitchen = [
    {
        label: 'Laundry Room',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Laundry Facility',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Shared Kitchen',
        checked: '',
        setCheck: '',
    },
];
let businessSecurity = [
    {
        label: 'Business Center',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Conference Room',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Security Staff',
        checked: '',
        setCheck: '',
    },
    {
        label: 'CCTV Security',
        checked: '',
        setCheck: '',
    },
];

let building = [
    {
        label: 'Completion Year',
        value: '',
        setValue: '',
    },
    {
        label: 'Elevators in Building',
        value: '',
        setValue: '',
    },
    {
        label: 'Balcony or Terrace',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Lobby In Building',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Prayer Room',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Reception or Waiting Room',
        checked: '',
        setCheck: '',
    },
];

let technology = [
    {
        label: 'Broadband Internet',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Satelite / Cable TV',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Intercom',
        checked: '',
        setCheck: '',
    },
];

let features = [
    {
        label: 'Double Glazed Windows',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Centrally Air-Conditioned',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Central Heating',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Electricity Back Up',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Furnished',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Storage Areas',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Study Room',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Parking Spaces',
        value: '',
        setValue: '',
    },
];

const cleaningMaintenance = [
    {
        label: 'Waste Disposal',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Maintenance Staff',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Cleaning Services',
        checked: '',
        setCheck: '',
    },
];
let ammenities = [
    {
        label: 'Recreation And Family',
        data: recreationFamily,
    },
    {
        label: 'Health and Fitness',
        data: healthFitness,
    },
    {
        label: 'Laundry and Kitchen',
        data: laundryKitchen,
    },

    {
        label: 'Building',
        data: building,
    },

    {
        label: 'Laundry and Kitchen',
        data: laundryKitchen,
    },
    {
        label: 'Business and Security',
        data: businessSecurity,
    },
    {
        label: 'Technology',
        data: technology,
    },
    {
        label: 'Features',
        data: features,
    },
    {
        label: 'Cleaning and Maintenance',
        data: cleaningMaintenance,
    },
];
const Ammenities = () => {
    return (
        <div>
            <Navbar selectedLink={'Add Property'} />
            <div className="pt-16 p-4">
                <MyStepper steps={steps} activeStep={1} />
                <p className="mt-4 text-sm ">
                    Please Select Amenities For this Property :
                </p>
                {ammenities.map((amenity: any) => (
                    <>
                        <p className="mt-2 underline">{amenity.label}</p>
                        <div className="flex flex-wrap">
                            {amenity.data.map((d: any) => {
                                const [val, setVal] = useState('');
                                if (d.value == '') {
                                    return (
                                        <div className="mx-4 w-36 text-xs ">
                                            <MyInput
                                                style={' text-xs'}
                                                name={d.label}
                                                value={val}
                                                onChange={setVal}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label={d.label}
                                            />
                                        </FormGroup>
                                    );
                                }
                            })}
                        </div>
                    </>
                ))}
                <div className="mt-4 flex justify-center">
                    <div className="bg-green-600 hover:bg-green-500 rounded ">
                        <Button color="success">
                            <a
                                href="/corporate/addproperty/upload"
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
export default Ammenities;
