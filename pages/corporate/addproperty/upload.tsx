import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState,forwardRef } from 'react';
import Button from '@mui/material/Button';
import UploadAndDisplayImage from '../../../components/Upload';
import { onAddPropertyUpload } from '../../../helpers/apis/addProperty';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NextRouter, useRouter } from 'next/router';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props:any, ref:any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const steps = ['Details', 'Amenities', 'Uploads'];

const UploadPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState(0);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [imagebase64, setImageBase64] = useState(null);

    const [selectedImage1, setSelectedImage1] = useState<any>(null);
    const [imagebase641, setImageBase641] = useState(null);

    const [selectedImage2, setSelectedImage2] = useState<any>(null);
    const [imagebase642, setImageBase642] = useState(null);

    const [selectedImage3, setSelectedImage3] = useState<any>(null);
    const [imagebase643, setImageBase643] = useState(null);

    const [selectedImage4, setSelectedImage4] = useState<any>(null);
    const [imagebase644, setImageBase644] = useState(null);

    const [selectedImage5, setSelectedImage5] = useState<any>(null);
    const [imagebase645, setImageBase645] = useState(null);

    const [selectedVideo, setSelectedVideo] = useState<any>(null);
    const [videoBase64, setVideoBase64] = useState(null);

    const [propertyID, setPropertyID] = useState<Number>(0);
    const [open, setOpen] = useState<any>(false);
    const [errorSnackbar, setErrorSnackbar] = useState<any>(false);
    const router: NextRouter = useRouter();
    const handleClose = (event:any, reason:any) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const [count, setCount] = useState<any>(0)
    const [snackbar, setSnackbar] = useState<Boolean>(false);
    useEffect(() => {
        const { propertyid }: any = router.query;
        setPropertyID(propertyid);
        if(count > 2){
            router.push('/corporate/listings')
        }
    }, []);
    // console.log(selectedImage, 'IMAGEBASE64');
    function onSubmit() {
    
        if(selectedImage){
            let body = {
                imageData: imagebase64,
                fileName: selectedImage.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }

        if( selectedImage1){
            let body = {
                imageData: imagebase641,
                fileName: selectedImage1.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }
        if(selectedImage2){
            let body = {
                imageData: imagebase642,
                fileName: selectedImage2.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }

        if( selectedImage3){
            let body = {
                imageData: imagebase643,
                fileName: selectedImage3.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }

        if( selectedImage4){
            let body = {
                imageData: imagebase644,
                fileName: selectedImage4.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }

        if( selectedImage5){
            let body = {
                imageData: imagebase645,
                fileName: selectedImage5.name,
                mediaType: 'image',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    

                    setSelectedImage(null)
                    setSelectedImage1(null)
                    setSelectedImage2(null)
                    setSelectedImage3(null)
                    setSelectedImage4(null)
                    setSelectedImage5(null)
                    
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                    // router.push('/corporate/listings')
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }
        console.log(selectedVideo,'SELCTED VIDEO')
        if(selectedVideo){
            let body = {
                imageData: videoBase64,
                fileName: selectedVideo.name,
                mediaType: 'video',
                mediaPath: '',
                propertyID: propertyID,
            };
            // console.log(body, 'BODY');
            onAddPropertyUpload(body).then((r: any) => {
                setOpen(true)
                if (r.statusCode == 200) {
                    let times = count + 1 
                    setCount(times)
                    console.log(r, 'RESULT');
                    setSnackbar(true);
                } else {
                    setSnackbar(true);
                    setErrorSnackbar(r.message);
                }
                // console.log(r, 'RESULT')
            });
        }

        
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
                                        <div className="md:flex flex-wrap">
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
                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage1}
                                                setSelectedImage={
                                                    setSelectedImage1
                                                }
                                                imagebase64={imagebase641}
                                                setImageBase64={setImageBase641}
                                            />
                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage2}
                                                setSelectedImage={
                                                    setSelectedImage2
                                                }
                                                imagebase64={imagebase642}
                                                setImageBase64={setImageBase642}
                                            />

                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage3}
                                                setSelectedImage={
                                                    setSelectedImage3
                                                }
                                                imagebase64={imagebase643}
                                                setImageBase64={setImageBase643}
                                            />
                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage4}
                                                setSelectedImage={
                                                    setSelectedImage4
                                                }
                                                imagebase64={imagebase644}
                                                setImageBase64={setImageBase644}
                                            />
                                            <UploadAndDisplayImage
                                                selectedImage={selectedImage5}
                                                setSelectedImage={
                                                    setSelectedImage5
                                                }
                                                imagebase64={imagebase645}
                                                setImageBase64={setImageBase645}
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
                                    <div className="mt-4 ">
                                            <UploadAndDisplayImage
                                                type="video"
                                                selectedImage={selectedVideo}
                                                setSelectedImage={
                                                    setSelectedVideo
                                                }
                                                imagebase64={videoBase64}
                                                setImageBase64={setVideoBase64}
                                            />
                                            <div>
                                                <p className="text-sm font-thin">
                                                    Allowed Follwed Extension .mp4 /
                                                    .3gp
                                                </p>
                                                <p className="text-sm font-thin">
                                                    Max Allowed Video Size is 5 MB
                                                </p>
                                            </div>
                                    </div>
                                )}
                                {value == 2 && (
                                    <div className="mt-4 ">Will be available soon</div>
                                )}
                            </div>
                        </div>
                       { value == 0 || value ==1 &&<div className="mt-8 flex justify-between">
                                <Button
                                            color="success"
                                            onClick={() => router.push('/corporate/listings')}
                                        >
                                            {/* <a
                                        href="/corporate/addproperty/upload"
                                        className="text-white"
                                    > */}
                                            <p className="text-xs ">Go To Property Listing</p>
                                            {/* </a> */}
                                </Button>
                             <div className="bg-green-600 hover:bg-green-500 rounded  ">
                                <Button
                                    color="success"
                                    onClick={() => onSubmit()}
                                >
                                    {/* <a
                                href="/corporate/addproperty/upload"
                                className="text-white"
                            > */}
                                    <p className="text-white"> Submit</p>
                                    {/* </a> */}
                                </Button>
                            </div>

                               
                        </div>}
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={errorSnackbar?"error" :"success"} sx={{ width: '100%' }}>
                        {errorSnackbar?
                        "Failed to Add Property Image"
                        :
                        "Property Media Added successfully!"
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
        </div>
    );
};
export default UploadPage;
