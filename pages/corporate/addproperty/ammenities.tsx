import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import MyInput from '../../../components/Input';
import Button from '@mui/material/Button';
import update from 'immutability-helper';
import { onAddPropertyAmmenity } from '../../../helpers/apis/addProperty';
import { NextRouter, useRouter } from 'next/router';

const steps = ['Details', 'Amenities', 'Uploads'];

const Ammenities = () => {
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<Boolean>(false);
    const router: NextRouter = useRouter();
    const [recreationFamily, setRecreationFamily] = useState<any>({
        barbequeArea: true,
        dayCareCenter: true,
        kidsplayArea: true,
        lawnOrGarden: true,
        cafeteriaOrCateen: true,
    });
    const [healthFitness, setHealthandFitness] = useState<any>({
        firstAidMedicalCenter: true,
        gymOrHealthClub: true,
        jacuzzi: true,
        sauna: true,
        steamRoom: true,
        swimmingpool: true,
        facilitiesForDisabled: true,
    });
    const [laundryKitchen, setLaundryKitchen] = useState<any>({
        laundryRoom: true,
        laundryFacilty: true,
        sharedKitchen: true,
    });
    const [building, setBuilding] = useState<any>({
        completionYear: 2012,
        balconyOrTerrace: true,
        lobbyInBuilding: true,
        elevatorsInBuilding: 12,
        prayerRoom: true,
        receptionOrWaitingRoom: true,
    });
    const [businessSecurity, setBusinessSecurity] = useState<any>({
        bussinessCenter: true,
        conferenceRoom: true,
        securityStaff: true,
        cctvSecurity: true,
    });
    const [technology, setTechnology] = useState<any>({
        broadBandInternet: true,
        satelliteOrCableTv: true,
        interCom: true,
    });
    const [features, setFeatures] = useState<any>({
        doubleGlazedWindows: true,
        centrallyAirConditioned: true,
        centralHeating: true,
        electricityBackUp: true,
        furnished: true,
        parkingSpaces: 'availabe',
        storageAreas: true,
        studyRoom: true,
    });
    const [cleaningMaintenance, setCleaningMaintenance] = useState<any>({
        wasteDisposal: true,
        maintainenceStaff: true,
        cleaningServices: true,
    });
    const [miscellaneous, setMiscellaneous] = useState<any>({
        view: 'balcony view',
        floor: 15,
        otherMainFeatures: 'smart building',
        freeHold: true,
        petpolicyID: 1,
        othersRoom: 'guest room',
        atmFacility: true,
        otherFacility: 'best service',
        landArea: 'availabe',
        maidsRoom: true,
        numberOfBathRooms: 4,
        numberOfBedRooms: 4,
        nearBySchools: 'availabe',
        nearByHospital: 'availabe',
        nearByShoppingMall: 'availabe',
        distanceFromAirport: 'availabe',
        nearBypublicTransort: 'availabe',
        otherNearByplaces: 'availabe',
        hoursCarcierge: true,
    });

    let recreationFamilyData = [
        {
            label: 'Barbeque Area',
            checked: recreationFamily.barbequeArea,
            name: 'barbequeArea',
        },
        {
            label: 'Day Care Center',
            checked: recreationFamily.dayCareCenter,
            name: 'dayCareCenter',
        },
        {
            label: 'Kids Play Area',
            checked: recreationFamily.kidsplayArea,
            name: 'kidsplayArea',
        },
        {
            label: 'Lawn Or Garden',
            checked: recreationFamily.lawnOrGarden,
            name: 'lawnOrGarden',
        },
        {
            label: 'Cafeteria / Canteen',
            checked: recreationFamily.cafeteriaOrCateen,
            name: 'cafeteriaOrCateen',
        },
    ];

    let healthFitnessData = [
        {
            label: 'First Aid Medical Center',
            checked: healthFitness.firstAidMedicalCenter,

            name: 'firstAidMedicalCenter',
        },
        {
            label: 'Gym Or Health Club',
            checked: healthFitness.gymOrHealthClub,

            name: 'gymOrHealthClub',
        },
        {
            label: 'Jacuzzi',
            checked: healthFitness.jacuzzi,

            name: 'jacuzzi',
        },
        {
            label: 'Sauna',
            checked: healthFitness.sauna,

            name: 'sauna',
        },
        {
            label: 'Steam Room',
            checked: healthFitness.steamRoom,

            name: 'steamRoom',
        },
        {
            label: 'Swimming Pool',
            checked: healthFitness.swimmingpool,

            name: 'swimmingpool',
        },
        {
            label: 'Facilities For Disabled',
            checked: healthFitness.facilitiesForDisabled,

            name: 'facilitiesForDisabled',
        },
    ];
    let laundryKitchenData = [
        {
            label: 'Laundry Room',
            checked: laundryKitchen.laundryRoom,

            name: 'laundryRoom',
        },
        {
            label: 'Laundry Facility',
            checked: laundryKitchen.laundryFacilty,

            name: 'laundryFacilty',
        },
        {
            label: 'Shared Kitchen',
            checked: laundryKitchen.sharedKitchen,

            name: 'sharedKitchen',
        },
    ];
    let businessSecurityData = [
        {
            label: 'Business Center',
            checked: businessSecurity.bussinessCenter,

            name: 'bussinessCenter',
        },
        {
            label: 'Conference Room',
            checked: businessSecurity.conferenceRoom,

            name: 'conferenceRoom',
        },
        {
            label: 'Security Staff',
            checked: businessSecurity.securityStaff,

            name: 'securityStaff',
        },
        {
            label: 'CCTV Security',
            checked: businessSecurity.cctvSecurity,

            name: 'cctvSecurity',
        },
    ];

    let buildingData = [
        {
            label: 'Completion Year',
            value: building.completionYear,
            name: 'completionYear',
        },
        {
            label: 'Elevators in Building',
            value: building.elevatorsInBuilding,
            name: 'elevatorsInBuilding',
        },
        {
            label: 'Balcony or Terrace',
            checked: building.balconyOrTerrace,

            name: 'balconyOrTerrace',
        },
        {
            label: 'Lobby In Building',
            checked: building.lobbyInBuilding,

            name: 'lobbyInBuilding',
        },
        {
            label: 'Prayer Room',
            checked: building.prayerRoom,

            name: 'prayerRoom',
        },
        {
            label: 'Reception or Waiting Room',
            checked: building.receptionOrWaitingRoom,

            name: 'receptionOrWaitingRoom',
        },
    ];

    let technologyData = [
        {
            label: 'Broadband Internet',
            checked: technology.broadBandInternet,

            name: 'broadBandInternet',
        },
        {
            label: 'Satelite / Cable TV',
            checked: technology.satelliteOrCableTv,

            name: 'satelliteOrCableTv',
        },
        {
            label: 'Intercom',
            checked: technology.interCom,

            name: 'interCom',
        },
    ];

    let featuresData = [
        {
            label: 'Double Glazed Windows',
            checked: features.doubleGlazedWindows,

            name: 'doubleGlazedWindows',
        },
        {
            label: 'Centrally Air-Conditioned',
            checked: features.centrallyAirConditioned,

            name: 'centrallyAirConditioned',
        },
        {
            label: 'Central Heating',
            checked: features.centralHeating,

            name: 'centralHeating',
        },
        {
            label: 'Electricity Back Up',
            checked: features.electricityBackUp,

            name: 'electricityBackUp',
        },
        {
            label: 'Furnished',
            checked: features.furnished,

            name: 'furnished',
        },
        {
            label: 'Storage Areas',
            checked: features.storageAreas,

            name: 'storageAreas',
        },
        {
            label: 'Study Room',
            checked: features.studyRoom,

            name: 'studyRoom',
        },
        {
            label: 'Parking Spaces',
            value: features.parkingSpaces,
            name: 'parkingSpaces',
        },
    ];

    const cleaningMaintenanceData = [
        {
            label: 'Waste Disposal',
            checked: cleaningMaintenance.wasteDisposal,

            name: 'wasteDisposal',
        },
        {
            label: 'Maintenance Staff',
            checked: cleaningMaintenance.maintainenceStaff,

            name: 'maintainenceStaff',
        },
        {
            label: 'Cleaning Services',
            checked: cleaningMaintenance.cleaningServices,

            name: 'cleaningServices',
        },
    ];
    const miscellaneousData = [
        {
            label: 'View',
            value: miscellaneous.view,
            name: 'view',
        },
        {
            label: 'Floor',
            value: miscellaneous.floor,
            name: 'floor',
        },
        {
            label: 'Other Main Features',
            value: miscellaneous.otherMainFeatures,
            name: 'otherMainFeatures',
        },
        {
            label: 'Free Hold',
            checked: miscellaneous.freeHold,

            name: 'freeHold',
        },
        {
            label: 'Pet Policy ID',
            value: miscellaneous.petpolicyID,
            name: 'petpolicyID',
        },
        {
            label: 'Others Room',
            value: miscellaneous.othersRoom,
            name: 'othersRoom',
        },
        {
            label: 'Atm Facility',
            checked: miscellaneous.atmFacility,

            name: 'atmFacility',
        },
        {
            label: 'Other Facility',
            value: miscellaneous.otherFacility,
            name: 'otherFacility',
        },
        {
            label: 'Land Area',
            value: miscellaneous.landArea,
            name: 'landArea',
        },
        {
            label: 'Maids Room',
            checked: miscellaneous.maidsRoom,
            name: 'maidsRoom',
        },
        {
            label: 'Number Of Bathrooms',
            value: miscellaneous.numberOfBathRooms,
            name: 'numberOfBathRooms',
        },
        {
            label: 'Number Of BedRooms',
            value: miscellaneous.numberOfBedRooms,
            name: 'numberOfBedRooms',
        },

        {
            label: 'Near By Schools',
            value: miscellaneous.nearBySchools,
            name: 'nearBySchools',
        },
        {
            label: 'Near By Hospital',
            value: miscellaneous.nearByHospital,
            name: 'nearByHospital',
        },
        {
            label: 'Number By ShoppingMall',
            value: miscellaneous.nearByShoppingMall,
            name: 'nearByShoppingMall',
        },
        {
            label: 'Distance From Airport',
            value: miscellaneous.distanceFromAirport,
            name: 'distanceFromAirport',
        },
        {
            label: 'Near By Public Transport',
            value: miscellaneous.nearBypublicTransort,
            name: 'nearBypublicTransort',
        },
        {
            label: 'Other Near By Places',
            value: miscellaneous.otherNearByplaces,
            name: 'otherNearByplaces',
        },
        {
            label: 'Hours Carcierge',
            value: miscellaneous.hoursCarcierge,
            name: 'hoursCarcierge',
        },
    ];
    let ammenities = [
        {
            label: 'Recreation And Family',
            data: recreationFamilyData,
            setChange: (e: any, d: any) => {
                // console.log(e.target.checked, d, 'E');
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(recreationFamily, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setRecreationFamily(dat);
            },
        },
        {
            label: 'Health and Fitness',
            data: healthFitnessData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(healthFitness, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setHealthandFitness(dat);
            },
        },
        {
            label: 'Laundry and Kitchen',
            data: laundryKitchenData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(laundryKitchen, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setLaundryKitchen(dat);
            },
        },

        {
            label: 'Building',
            data: buildingData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(building, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setBuilding(dat);
            },
        },

        {
            label: 'Business and Security',
            data: businessSecurityData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(businessSecurity, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setBusinessSecurity(dat);
            },
        },
        {
            label: 'Technology',
            data: technologyData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(technology, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setTechnology(dat);
            },
        },
        {
            label: 'Features',
            data: featuresData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(features, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setFeatures(dat);
            },
        },
        {
            label: 'Cleaning and Maintenance',
            data: cleaningMaintenanceData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(cleaningMaintenance, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setCleaningMaintenance(dat);
            },
        },
        {
            label: 'Miscellaneous.',
            data: miscellaneousData,
            setChange: (e: any, d: any) => {
                let dat;
                if (e.target.type == 'checkbox') {
                    dat = update(miscellaneous, {
                        [d.name]: { $set: e.target.checked },
                    });
                }

                setMiscellaneous(dat);
            },
        },
    ];
    console.log(ammenities, 'AMMENITIES');
    function onSubmit() {
        let body = {
            ...recreationFamily,
            ...healthFitness,
            ...laundryKitchen,
            ...building,
            ...businessSecurity,
            ...technology,
            ...features,
            ...cleaningMaintenance,
            ...miscellaneous,
        };
        onAddPropertyAmmenity(body)
            .then((r: any) => {
                if (r.error) {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                    return;
                }
                if (r.data.statusCode == 200) {
                    setSnackbar(true);
                    setTimeout(
                        () => router.push('/corporate/addproperty/upload'),
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
        console.log(body, 'Body');
    }
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
                                if (d.value) {
                                    return (
                                        <div className="mx-4 w-48 text-xs ">
                                            <MyInput
                                                style={' text-xs'}
                                                name={d.label}
                                                value={d.value}
                                                onChange={(e: any) =>
                                                    amenity.setChange(e, d)
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
                                                onChange={(e: any) => {
                                                    amenity.setChange(e, d);
                                                }}
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
                        <Button color="success" onClick={() => onSubmit()}>
                            {/* <a
                                href="/corporate/addproperty/upload"
                                className="text-white"
                            > */}
                            Next
                            {/* </a> */}
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
export default Ammenities;
