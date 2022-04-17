import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import MyInput from '../../../components/Input';
import Button from '@mui/material/Button';
import update from 'immutability-helper';
import { onAddPropertyAmmenity } from '../../../helpers/apis/addProperty';
import { NextRouter, useRouter } from 'next/router';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = ['Details', 'Amenities', 'Uploads'];

const Ammenities = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const router: NextRouter = useRouter();
    const [propertyID, setPropertyID] = useState<any>('');
    const [recreationFamily, setRecreationFamily] = useState<any>({
        barbequeArea: false,
        dayCareCenter: false,
        kidsplayArea: false,
        lawnOrGarden: false,
        cafeteriaOrCateen: false,
    });
    const [healthFitness, setHealthandFitness] = useState<any>({
        firstAidMedicalCenter: false,
        gymOrHealthClub: false,
        jacuzzi: false,
        sauna: false,
        steamRoom: false,
        swimmingpool: false,
        facilitiesForDisabled: false,
    });
    const [laundryKitchen, setLaundryKitchen] = useState<any>({
        laundryRoom: false,
        laundryFacilty: false,
        sharedKitchen: false,
    });
    const [building, setBuilding] = useState<any>({
        completionYear: 2022,
        balconyOrTerrace: false,
        lobbyInBuilding: false,
        elevatorsInBuilding: 0,
        prayerRoom: false,
        receptionOrWaitingRoom: false,
    });
    const [businessSecurity, setBusinessSecurity] = useState<any>({
        bussinessCenter: false,
        conferenceRoom: false,
        securityStaff: false,
        cctvSecurity: false,
    });
    const [technology, setTechnology] = useState<any>({
        broadBandInternet: false,
        satelliteOrCableTv: false,
        interCom: false,
    });
    const [features, setFeatures] = useState<any>({
        doubleGlazedWindows: false,
        centrallyAirConditioned: false,
        centralHeating: false,
        electricityBackUp: false,
        furnished: false,
        parkingSpaces: '',
        storageAreas: false,
        studyRoom: false,
    });
    const [cleaningMaintenance, setCleaningMaintenance] = useState<any>({
        wasteDisposal: false,
        maintainenceStaff: false,
        cleaningServices: false,
    });
    const [miscellaneous, setMiscellaneous] = useState<any>({
        view: '',
        floor: 0,
        otherMainFeatures: '',
        freeHold: false,
        petpolicyID: 0,
        othersRoom: '',
        atmFacility: false,
        otherFacility: '',
        landArea: '',
        maidsRoom: false,
        numberOfBathRooms: 0,
        numberOfBedRooms: 0,
        nearBySchools: '',
        nearByHospital: '',
        nearByShoppingMall: '',
        distanceFromAirport: '',
        nearBypublicTransort: '',
        otherNearByplaces: '',
        hoursCarcierge: false,
    });

    let recreationFamilyData = [
        {
            label: 'Barbeque Area',
            checked: recreationFamily.barbequeArea,
            name: 'barbequeArea',
            type: 'checkbox',
        },
        {
            label: 'Day Care Center',
            checked: recreationFamily.dayCareCenter,
            type: 'checkbox',
            name: 'dayCareCenter',
        },
        {
            label: 'Kids Play Area',
            checked: recreationFamily.kidsplayArea,
            type: 'checkbox',
            name: 'kidsplayArea',
        },
        {
            label: 'Lawn Or Garden',
            checked: recreationFamily.lawnOrGarden,
            type: 'checkbox',
            name: 'lawnOrGarden',
        },
        {
            label: 'Cafeteria / Canteen',
            checked: recreationFamily.cafeteriaOrCateen,
            type: 'checkbox',
            name: 'cafeteriaOrCateen',
        },
    ];

    let healthFitnessData = [
        {
            label: 'First Aid Medical Center',
            checked: healthFitness.firstAidMedicalCenter,
            type: 'checkbox',
            name: 'firstAidMedicalCenter',
        },
        {
            label: 'Gym Or Health Club',
            checked: healthFitness.gymOrHealthClub,
            type: 'checkbox',
            name: 'gymOrHealthClub',
        },
        {
            label: 'Jacuzzi',
            checked: healthFitness.jacuzzi,
            type: 'checkbox',
            name: 'jacuzzi',
        },
        {
            label: 'Sauna',
            checked: healthFitness.sauna,
            type: 'checkbox',
            name: 'sauna',
        },
        {
            label: 'Steam Room',
            checked: healthFitness.steamRoom,
            type: 'checkbox',
            name: 'steamRoom',
        },
        {
            label: 'Swimming Pool',
            checked: healthFitness.swimmingpool,
            type: 'checkbox',
            name: 'swimmingpool',
        },
        {
            label: 'Facilities For Disabled',
            checked: healthFitness.facilitiesForDisabled,
            type: 'checkbox',
            name: 'facilitiesForDisabled',
        },
    ];
    let laundryKitchenData = [
        {
            label: 'Laundry Room',
            checked: laundryKitchen.laundryRoom,
            type: 'checkbox',
            name: 'laundryRoom',
        },
        {
            label: 'Laundry Facility',
            checked: laundryKitchen.laundryFacilty,
            type: 'checkbox',
            name: 'laundryFacilty',
        },
        {
            label: 'Shared Kitchen',
            checked: laundryKitchen.sharedKitchen,
            type: 'checkbox',
            name: 'sharedKitchen',
        },
    ];
    let businessSecurityData = [
        {
            label: 'Business Center',
            checked: businessSecurity.bussinessCenter,
            type: 'checkbox',
            name: 'bussinessCenter',
        },
        {
            label: 'Conference Room',
            checked: businessSecurity.conferenceRoom,
            type: 'checkbox',
            name: 'conferenceRoom',
        },
        {
            label: 'Security Staff',
            checked: businessSecurity.securityStaff,
            type: 'checkbox',
            name: 'securityStaff',
        },
        {
            label: 'CCTV Security',
            checked: businessSecurity.cctvSecurity,
            type: 'checkbox',
            name: 'cctvSecurity',
        },
    ];

    let buildingData = [
        {
            label: 'Completion Year',
            value: building.completionYear,
            name: 'completionYear',
            type: 'input',
        },
        {
            label: 'Elevators in Building',
            value: building.elevatorsInBuilding,
            name: 'elevatorsInBuilding',
            type: 'input',
        },
        {
            label: 'Balcony or Terrace',
            checked: building.balconyOrTerrace,
            type: 'checkbox',
            name: 'balconyOrTerrace',
        },
        {
            label: 'Lobby In Building',
            checked: building.lobbyInBuilding,
            type: 'checkbox',
            name: 'lobbyInBuilding',
        },
        {
            label: 'Prayer Room',
            checked: building.prayerRoom,
            type: 'checkbox',
            name: 'prayerRoom',
        },
        {
            label: 'Reception or Waiting Room',
            checked: building.receptionOrWaitingRoom,
            type: 'checkbox',
            name: 'receptionOrWaitingRoom',
        },
    ];

    let technologyData = [
        {
            label: 'Broadband Internet',
            checked: technology.broadBandInternet,
            type: 'checkbox',
            name: 'broadBandInternet',
        },
        {
            label: 'Satelite / Cable TV',
            checked: technology.satelliteOrCableTv,
            type: 'checkbox',
            name: 'satelliteOrCableTv',
        },
        {
            label: 'Intercom',
            checked: technology.interCom,
            type: 'checkbox',
            name: 'interCom',
        },
    ];

    let featuresData = [
        {
            label: 'Double Glazed Windows',
            checked: features.doubleGlazedWindows,
            type: 'checkbox',
            name: 'doubleGlazedWindows',
        },
        {
            label: 'Centrally Air-Conditioned',
            checked: features.centrallyAirConditioned,
            type: 'checkbox',
            name: 'centrallyAirConditioned',
        },
        {
            label: 'Central Heating',
            checked: features.centralHeating,
            type: 'checkbox',
            name: 'centralHeating',
        },
        {
            label: 'Electricity Back Up',
            checked: features.electricityBackUp,
            type: 'checkbox',
            name: 'electricityBackUp',
        },
        {
            label: 'Furnished',
            checked: features.furnished,
            type: 'checkbox',
            name: 'furnished',
        },
        {
            label: 'Storage Areas',
            checked: features.storageAreas,
            type: 'checkbox',
            name: 'storageAreas',
        },
        {
            label: 'Study Room',
            checked: features.studyRoom,
            type: 'checkbox',
            name: 'studyRoom',
        },
        {
            label: 'Parking Spaces',
            value: features.parkingSpaces,
            name: 'parkingSpaces',
            type: 'input',
        },
    ];

    const cleaningMaintenanceData = [
        {
            label: 'Waste Disposal',
            checked: cleaningMaintenance.wasteDisposal,
            type: 'checkbox',
            name: 'wasteDisposal',
        },
        {
            label: 'Maintenance Staff',
            checked: cleaningMaintenance.maintainenceStaff,
            type: 'checkbox',
            name: 'maintainenceStaff',
        },
        {
            label: 'Cleaning Services',
            checked: cleaningMaintenance.cleaningServices,
            type: 'checkbox',
            name: 'cleaningServices',
        },
    ];
    const miscellaneousData = [
        {
            label: 'View',
            value: miscellaneous.view,
            name: 'view',
            type: 'input',
        },
        {
            label: 'Floor',
            value: miscellaneous.floor,
            name: 'floor',
            type: 'input',
        },
        {
            label: 'Other Main Features',
            value: miscellaneous.otherMainFeatures,
            name: 'otherMainFeatures',
            type: 'input',
        },
        {
            label: 'Free Hold',
            checked: miscellaneous.freeHold,
            type: 'checkbox',
            name: 'freeHold',
        },
        {
            label: 'Pet Policy ID',
            value: miscellaneous.petpolicyID,
            name: 'petpolicyID',
            type: 'input',
        },
        {
            label: 'Others Room',
            value: miscellaneous.othersRoom,
            name: 'othersRoom',
            type: 'input',
        },
        {
            label: 'Atm Facility',
            checked: miscellaneous.atmFacility,
            type: 'checkbox',
            name: 'atmFacility',
        },
        {
            label: 'Other Facility',
            value: miscellaneous.otherFacility,
            name: 'otherFacility',
            type: 'input',
        },
        {
            label: 'Land Area',
            value: miscellaneous.landArea,
            name: 'landArea',
            type: 'input',
        },
        {
            label: 'Maids Room',
            checked: miscellaneous.maidsRoom,
            name: 'maidsRoom',
            type: 'checkbox',
        },
        {
            label: 'Number Of Bathrooms',
            value: miscellaneous.numberOfBathRooms,
            name: 'numberOfBathRooms',
            type: 'input',
        },
        {
            label: 'Number Of BedRooms',
            value: miscellaneous.numberOfBedRooms,
            name: 'numberOfBedRooms',
            type: 'input',
        },

        {
            label: 'Near By Schools',
            value: miscellaneous.nearBySchools,
            name: 'nearBySchools',
            type: 'input',
        },
        {
            label: 'Near By Hospital',
            value: miscellaneous.nearByHospital,
            name: 'nearByHospital',
            type: 'input',
        },
        {
            label: 'Number By ShoppingMall',
            value: miscellaneous.nearByShoppingMall,
            name: 'nearByShoppingMall',
            type: 'input',
        },
        {
            label: 'Distance From Airport',
            value: miscellaneous.distanceFromAirport,
            name: 'distanceFromAirport',
            type: 'input',
        },
        {
            label: 'Near By Public Transport',
            value: miscellaneous.nearBypublicTransort,
            name: 'nearBypublicTransort',
            type: 'input',
        },
        {
            label: 'Other Near By Places',
            value: miscellaneous.otherNearByplaces,
            name: 'otherNearByplaces',
            type: 'input',
        },
        {
            label: 'Hours Carcierge',
            checked: miscellaneous.hoursCarcierge,
            name: 'hoursCarcierge',
            type: 'checkbox',
        },
    ];
    function updateAmmenity(amenity: any, setAmmenity: any, d: any, e: any) {
        let val;
        if (d.type == 'checkbox') {
            val = { $set: e.target.checked };
        }
        if (d.type == 'input') {
            val = { $set: e };
        }
        let newdata = update(amenity, {
            [d.name]: val,
        });
        setAmmenity(newdata);
    }
    let ammenities = [
        {
            label: 'Recreation And Family',
            data: recreationFamilyData,
            setChange: (e: any, d: any) =>
                updateAmmenity(recreationFamily, setRecreationFamily, d, e),
        },
        {
            label: 'Health and Fitness',
            data: healthFitnessData,
            setChange: (e: any, d: any) =>
                updateAmmenity(healthFitness, setHealthandFitness, d, e),
        },
        {
            label: 'Laundry and Kitchen',
            data: laundryKitchenData,
            setChange: (e: any, d: any) =>
                updateAmmenity(laundryKitchen, setLaundryKitchen, d, e),
        },

        {
            label: 'Building',
            data: buildingData,
            setChange: (e: any, d: any) =>
                updateAmmenity(building, setBuilding, d, e),
        },

        {
            label: 'Business and Security',
            data: businessSecurityData,
            setChange: (e: any, d: any) =>
                updateAmmenity(businessSecurity, setBusinessSecurity, d, e),
        },
        {
            label: 'Technology',
            data: technologyData,
            setChange: (e: any, d: any) =>
                updateAmmenity(technology, setTechnology, d, e),
        },
        {
            label: 'Features',
            data: featuresData,
            setChange: (e: any, d: any) =>
                updateAmmenity(features, setFeatures, d, e),
        },
        {
            label: 'Cleaning and Maintenance',
            data: cleaningMaintenanceData,
            setChange: (e: any, d: any) =>
                updateAmmenity(
                    cleaningMaintenance,
                    setCleaningMaintenance,
                    d,
                    e
                ),
        },
        {
            label: 'Miscellaneous.',
            data: miscellaneousData,
            setChange: (e: any, d: any) =>
                updateAmmenity(miscellaneous, setMiscellaneous, d, e),
        },
    ];
    useEffect(() => {
        const { propertyid }: any = router.query;
        setPropertyID(propertyid);
    }, []);
    // console.log(ammenities, 'AMMENITIES');
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
            propertyID: propertyID,
        };
        onAddPropertyAmmenity(body)
            .then((r: any) => {
                if (r.error) {
                    setSnackbar(true);
                    if (r.message) {
                        setErrorSnackbar(r.message);
                    }
                    return;
                }
                if (r.data.statusCode == 200) {
                    setSnackbar(true);
                    setTimeout(
                        () =>
                            router.push(
                                `/corporate/addproperty/upload?propertyid=${propertyID}`
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
        // console.log(body, 'Body');
    }
    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            <div className="flex">
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
                <div className="md:w-5/6 w-full">
                    {/* <Navbar selectedLink={'Add Property'} /> */}
                    <div className="pt-16 p-4">
                        <MyStepper steps={steps} activeStep={1} />
                        <p className="mt-4 text-sm ">
                            Please Select Amenities For this Property :
                        </p>
                        {ammenities.map((amenity: any) => (
                            <>
                                <p className="mt-2 underline">
                                    {amenity.label}
                                </p>
                                <div className="flex flex-wrap">
                                    {amenity.data.map((d: any) => {
                                        if (d.type == 'input') {
                                            return (
                                                <div className="mx-4 w-48 text-xs ">
                                                    <MyInput
                                                        style={' text-xs'}
                                                        name={d.label}
                                                        value={d.value}
                                                        onChange={(e: any) =>
                                                            amenity.setChange(
                                                                e,
                                                                d
                                                            )
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
                                                            amenity.setChange(
                                                                e,
                                                                d
                                                            );
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
                                <Button
                                    color="success"
                                    onClick={() => onSubmit()}
                                >
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
                        Error:
                        {errorSnackbar ? errorSnackbar : 'Succes'}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Ammenities;
