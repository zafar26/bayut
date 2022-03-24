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
const miscellaneous = [
    {
        label: 'View',
        value: '',
        setValue: '',
    },
    {
        label: 'Floor',
        value: '',
        setValue: '',
    },
    {
        label: 'Other Main Features',
        value: '',
        setValue: '',
    },
    {
        label: 'Free Hold',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Pet Policy ID',
        value: '',
        setValue: '',
    },
    {
        label: 'Others Room',
        value: '',
        setValue: '',
    },
    {
        label: 'Atm Facility',
        checked: '',
        setCheck: '',
    },
    {
        label: 'Other Facility',
        value: '',
        setValue: '',
    },
    {
        label: 'Land Area',
        value: '',
        setValue: '',
    },
    {
        label: 'Maids Room',
        checked: '',
        setChecked: '',
    },
    {
        label: 'Number Of Bathrooms',
        value: '',
        setValue: '',
    },
    {
        label: 'Number Of BedRooms',
        value: '',
        setValue: '',
    },

    {
        label: 'Near By Schools',
        value: '',
        setValue: '',
    },
    {
        label: 'Near By Hospital',
        value: '',
        setValue: '',
    },
    {
        label: 'Number By ShoppingMall',
        value: '',
        setValue: '',
    },
    {
        label: 'Distance From Airport',
        value: '',
        setValue: '',
    },
    {
        label: 'Near By Public Transport',
        value: '',
        setValue: '',
    },
    {
        label: 'Other Near By Places',
        value: '',
        setValue: '',
    },
    {
        label: 'Hours Carcierge',
        value: '',
        setValue: '',
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
    {
        label: 'Miscellaneous',
        data: miscellaneous,
    },
];
const Ammenities = () => {
    console.log(ammenities, 'AMMENITIES');
    // ammenities.map((d) => {
    //     d.data.map((e) => {
    //         let val: any =
    //             e.label[0].toLowerCase() +
    //             e.label.slice(1, e.label.length).replaceAll(' ', '');
    //         let setval = 'set' + val;
    //         const [val, setval] = useState('');
    //         console.log(val, 'EACh');
    //     });
    // });

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
                                if (d.value == '') {
                                    return (
                                        <div className="mx-4 w-36 text-xs ">
                                            <MyInput
                                                style={' text-xs'}
                                                name={d.label}
                                                value={d.value}
                                                onChange={(e: any) =>
                                                    (d.setValue = e)
                                                }
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label={d.label}
                                                checked={d.checked}
                                                onChange={(e: any) =>
                                                    (d.setChecked =
                                                        e.target.value)
                                                }
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
