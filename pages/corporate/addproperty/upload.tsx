import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import UploadAndDisplayImage from '../../../components/Upload';
import { onAddPropertyUpload } from '../../../helpers/apis/addProperty';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NextRouter, useRouter } from 'next/router';

const steps = ['Details', 'Amenities', 'Uploads'];

const UploadPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState(0);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [imagebase64, setImageBase64] = useState(null);
    const router: NextRouter = useRouter();
    const [propertyID, setPropertyID] = useState<any>('');

    const [snackbar, setSnackbar] = useState<Boolean>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    useEffect(() => {
        const { propertyid }: any = router.query;
        setPropertyID(propertyid);
    }, []);
    // console.log(selectedImage, 'IMAGEBASE64');
    function onSubmit() {
        let body = {
            imageData: imagebase64,
            fileName: selectedImage.name,
            mediaType: 'image',
            mediaPath: '',
            propertyID: propertyID,
        };
        // console.log(body, 'BODY');
        onAddPropertyUpload(body).then((r: any) => {
            if (r.statusCode == 200) {
                console.log(r, 'RESULT');
                setSnackbar(true);
            } else {
                setSnackbar(true);
                setErrorSnackbar(r.message);
            }
            // console.log(r, 'RESULT')
        });
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
                    <Navbar selectedLink={'Add Property'} />
                    <div className="pt-16">
                        <MyStepper steps={steps} activeStep={2} />
                        <div className="mt-8 ">
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backgroundColor: 'lightGreen',
                                    borderRadius: '10px 10px 0px 0px',
                                    color: 'white',
                                }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={(event: any, newValue: any) =>
                                        setValue(newValue)
                                    }
                                >
                                    <Tab label="Images" />
                                    <Tab label="Videos" />
                                    <Tab label="Floor Plans" />
                                </Tabs>
                            </Box>
                            <div>
                                {value == 0 && (
                                    <div className="mt-4 bg-green-100 flex p-8 flex-col items-center">
                                        <div className="">
                                            {/* To Upload Iamge, Drag Files Here Or Click
                                    Browse */}
                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage}
                                                setSelectedImage={
                                                    setSelectedImage
                                                }
                                                imagebase64={imagebase64}
                                                setImageBase64={setImageBase64}
                                            />
                                            {/* {console.log(
                                        selectedImage,
                                        imagebase64,
                                        'SsetSelectedImage'
                                    )} */}
                                        </div>
                                        <p className="text-sm font-thin">
                                            Allowed Follwed Extension .jpg /
                                            .png
                                        </p>
                                        <p className="text-sm font-thin">
                                            Max Allowed Image Size is 3 MB
                                        </p>
                                    </div>
                                )}
                                {value == 1 && (
                                    <div className="mt-4 bg-green-100">1</div>
                                )}
                                {value == 2 && (
                                    <div className="mt-4 bg-green-100">2</div>
                                )}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <div className="bg-green-600 hover:bg-green-500 rounded ">
                                <Button
                                    color="success"
                                    onClick={() => onSubmit()}
                                >
                                    {/* <a
                                href="/corporate/addproperty/upload"
                                className="text-white"
                            > */}
                                    Submit
                                    {/* </a> */}
                                </Button>
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
                </div>
            </div>
        </div>
    );
};
export default UploadPage;
