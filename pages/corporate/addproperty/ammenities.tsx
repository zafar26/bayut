import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState,forwardRef } from 'react';
import MyInput from '../../../components/Input';
import Button from '@mui/material/Button';
import update from 'immutability-helper';
import { onAddPropertyAmmenity } from '../../../helpers/apis/addProperty';
import { NextRouter, useRouter } from 'next/router';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props:any, ref:any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const steps = [
    'Details',
    'Amenities',
    'Uploads'
];

const Ammenities = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const router: NextRouter = useRouter();
    const [open, setOpen] = useState<any>(false);
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    
    const [propertyID, setPropertyID] = useState<Number>(0);
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
            label: 'Barbeque area',
            checked: recreationFamily.barbequeArea,
            name: 'barbequeArea',
            type: 'checkbox',
        },
        {
            label: 'Day care center',
            checked: recreationFamily.dayCareCenter,
            type: 'checkbox',
            name: 'dayCareCenter',
        },
        {
            label: 'Kids play area',
            checked: recreationFamily.kidsplayArea,
            type: 'checkbox',
            name: 'kidsplayArea',
        },
        {
            label: 'Lawn/Garden',
            checked: recreationFamily.lawnOrGarden,
            type: 'checkbox',
            name: 'lawnOrGarden',
        },
        {
            label: 'Cafeteria/Canteen',
            checked: recreationFamily.cafeteriaOrCateen,
            type: 'checkbox',
            name: 'cafeteriaOrCateen',
        },
    ];

    let healthFitnessData = [
        {
            label: 'First Aid medical center',
            checked: healthFitness.firstAidMedicalCenter,
            type: 'checkbox',
            name: 'firstAidMedicalCenter',
        },
        {
            label: 'Gym/Health club',
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
            label: 'Steam room',
            checked: healthFitness.steamRoom,
            type: 'checkbox',
            name: 'steamRoom',
        },
        {
            label: 'Swimming pool',
            checked: healthFitness.swimmingpool,
            type: 'checkbox',
            name: 'swimmingpool',
        },
        {
            label: 'Facilities for disabled',
            checked: healthFitness.facilitiesForDisabled,
            type: 'checkbox',
            name: 'facilitiesForDisabled',
        },
    ];
    let laundryKitchenData = [
        {
            label: 'Laundry room',
            checked: laundryKitchen.laundryRoom,
            type: 'checkbox',
            name: 'laundryRoom',
        },
        {
            label: 'Laundry facility',
            checked: laundryKitchen.laundryFacilty,
            type: 'checkbox',
            name: 'laundryFacilty',
        },
        {
            label: 'Shared kitchen',
            checked: laundryKitchen.sharedKitchen,
            type: 'checkbox',
            name: 'sharedKitchen',
        },
    ];
    let businessSecurityData = [
        {
            label: 'Business center',
            checked: businessSecurity.bussinessCenter,
            type: 'checkbox',
            name: 'bussinessCenter',
        },
        {
            label: 'Conference room',
            checked: businessSecurity.conferenceRoom,
            type: 'checkbox',
            name: 'conferenceRoom',
        },
        {
            label: 'Security staff',
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
            label: 'Completion year',
            value: building.completionYear,
            name: 'completionYear',
            type: 'input',
        },
        {
            label: 'Elevators in building',
            value: building.elevatorsInBuilding,
            name: 'elevatorsInBuilding',
            type: 'input',
        },
        {
            label: 'Balcony/Terrace',
            checked: building.balconyOrTerrace,
            type: 'checkbox',
            name: 'balconyOrTerrace',
        },
        {
            label: 'Lobby in building',
            checked: building.lobbyInBuilding,
            type: 'checkbox',
            name: 'lobbyInBuilding',
        },
        {
            label: 'Prayer room',
            checked: building.prayerRoom,
            type: 'checkbox',
            name: 'prayerRoom',
        },
        {
            label: 'Reception/Waiting room',
            checked: building.receptionOrWaitingRoom,
            type: 'checkbox',
            name: 'receptionOrWaitingRoom',
        },
    ];

    let technologyData = [
        {
            label: 'Broadband internet',
            checked: technology.broadBandInternet,
            type: 'checkbox',
            name: 'broadBandInternet',
        },
        {
            label: 'Satelite/Cable TV',
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
            label: 'Double glazed windows',
            checked: features.doubleGlazedWindows,
            type: 'checkbox',
            name: 'doubleGlazedWindows',
        },
        {
            label: 'Centrally air-conditioned',
            checked: features.centrallyAirConditioned,
            type: 'checkbox',
            name: 'centrallyAirConditioned',
        },
        {
            label: 'Central heating',
            checked: features.centralHeating,
            type: 'checkbox',
            name: 'centralHeating',
        },
        {
            label: 'Electricity backup',
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
            label: 'Storage areas',
            checked: features.storageAreas,
            type: 'checkbox',
            name: 'storageAreas',
        },
        {
            label: 'Study room',
            checked: features.studyRoom,
            type: 'checkbox',
            name: 'studyRoom',
        },
        // {
        //     label: 'Parking Spaces',
        //     value: features.parkingSpaces,
        //     name: 'parkingSpaces',
        //     type: 'input',
        // },
    ];

    const cleaningMaintenanceData = [
        {
            label: 'Waste disposal',
            checked: cleaningMaintenance.wasteDisposal,
            type: 'checkbox',
            name: 'wasteDisposal',
        },
        {
            label: 'Maintenance staff',
            checked: cleaningMaintenance.maintainenceStaff,
            type: 'checkbox',
            name: 'maintainenceStaff',
        },
        {
            label: 'Cleaning services',
            checked: cleaningMaintenance.cleaningServices,
            type: 'checkbox',
            name: 'cleaningServices',
        },
    ];
    const miscellaneousData = [
        // {
        //     label: 'View',
        //     value: miscellaneous.view,
        //     name: 'view',
        //     type: 'input',
        // },
        {
            label: 'No. of Floors',
            value: miscellaneous.floor,
            name: 'floor',
            type: 'input',
        },
        {
            label: 'Other main features',
            value: miscellaneous.otherMainFeatures,
            name: 'otherMainFeatures',
            type: 'input',
        },
        {
            label: 'Free hold',
            checked: miscellaneous.freeHold,
            type: 'checkbox',
            name: 'freeHold',
        },
        // {
        //     label: 'Pet Policy ID',
        //     value: miscellaneous.petpolicyID,
        //     name: 'petpolicyID',
        //     type: 'input',
        // },
        // {
        //     label: 'Others Room',
        //     value: miscellaneous.othersRoom,
        //     name: 'othersRoom',
        //     type: 'input',
        // },
        {
            label: 'ATM Facility',
            checked: miscellaneous.atmFacility,
            type: 'checkbox',
            name: 'atmFacility',
        },
        {
            label: 'Other facilities',
            value: miscellaneous.otherFacility,
            name: 'otherFacility',
            type: 'input',
        },
        {
            label: 'Land area',
            value: miscellaneous.landArea,
            name: 'landArea',
            type: 'input',
        },
        {
            label: 'Maids room',
            checked: miscellaneous.maidsRoom,
            name: 'maidsRoom',
            type: 'checkbox',
        },
        {
            label: 'Number of bathrooms',
            value: miscellaneous.numberOfBathRooms,
            name: 'numberOfBathRooms',
            type: 'input',
        },
        {
            label: 'Number of bedRooms',
            value: miscellaneous.numberOfBedRooms,
            name: 'numberOfBedRooms',
            type: 'input',
        },

        {
            label: 'Near by schools',
            value: miscellaneous.nearBySchools,
            name: 'nearBySchools',
            type: 'input',
        },
        {
            label: 'Near by hospital',
            value: miscellaneous.nearByHospital,
            name: 'nearByHospital',
            type: 'input',
        },
        {
            label: 'Near by shopping mall',
            value: miscellaneous.nearByShoppingMall,
            name: 'nearByShoppingMall',
            type: 'input',
        },
        {
            label: 'Distance from airport',
            value: miscellaneous.distanceFromAirport,
            name: 'distanceFromAirport',
            type: 'input',
        },
        {
            label: 'Near by public transport',
            value: miscellaneous.nearBypublicTransort,
            name: 'nearBypublicTransort',
            type: 'input',
        },
        {
            label: 'Other near by places',
            value: miscellaneous.otherNearByplaces,
            name: 'otherNearByplaces',
            type: 'input',
        },
        {
            label: 'Hours carcierge',
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
        console.log(propertyid, 'PROPERRTY ID');
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
                setOpen(true)

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
                                    <p className="text-white"> Next </p>
                                    {/* </a> */}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                        {errorSnackbar?
                        "Failed to Add Property Ammenity"
                        :
                        "Property Amenities section update is successful"
                        }
                        </Alert>
                    </Snackbar>
                    {/* <div
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
        </div>
    );
};
export default Ammenities;
