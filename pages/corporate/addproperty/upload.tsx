import Navbar from '../../../components/Navbar/Navbar';
import MyStepper from '../../../components/Stepper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Button from '@mui/material/Button';

const steps = ['Details', 'Amenities', 'Uploads'];

const UploadPage = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
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
                                <p className="">
                                    To Upload Iamge, Drag Files Here Or Click
                                    Browse
                                </p>
                                <p className="text-sm font-thin">
                                    Allowed Follwed Extension .jpg / .png
                                </p>
                                <p className="text-sm font-thin">
                                    Max Allowed Image Size is 30 MB
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
                    <Button
                        className="bg-green-600 hover:bg-green-500 text-white"
                        color="success"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default UploadPage;
