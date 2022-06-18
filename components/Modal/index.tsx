import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import useMediaQuery from '@mui/material/useMediaQuery';
// import EmailIcon from '@mui/icons-material/Email';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ecdbdc',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props: any) {
    const [open, setOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');
    // const handleOpen = (c:any) =>
    const handleClose = () => setOpen(false);
        if(isMobile){
            style.width = 200
        }
    return (
        <div>
            <div className="flex justify-between md:justify-start">
                <Button
                    onClick={() => {
                        setSelectedButton(1);
                        setOpen(true);
                    }}
                    className="p-1  md:py-1 md:px-2 bg-amber-700	hover:text-lime-600  text-white flex rounded shadow flex items-center"
                >
                    <CallIcon fontSize={'small'} />
                    <p className="md:ml-1 text-sm md:text-base">Call</p>
                </Button>
                <Button
                    onClick={() => {
                        setSelectedButton(2);
                        setOpen(true);
                    }}
                    className="p-1 ml-1  md:py-1 md:px-2 bg-amber-700 hover:text-lime-600  text-white flex rounded shadow flex items-center"
                >
                    <EmailIcon fontSize={'small'} />
                    <p className="md:ml-1 text-sm md:text-base">Email</p>
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="w-full flex flex-col items-center">
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {selectedButton == 1 ? 'Phone NO' : 'Email'}
                        </Typography>
                        <div className="mt-4 flex items-center">
                        {selectedButton == 1 ?<WifiCalling3Icon fontSize="small" color="success"/>:<EmailIcon fontSize="small" color="success"/>}
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 0,ml:2,color:"blue" }}
                        >
                            <a
                            className="hover:underline"
                                href={
                                    selectedButton == 1
                                        ? `tel:${props.phoneNo}`
                                        : `mailto: ${props.email}`
                                }
                            >
                                {selectedButton == 1
                                    ? props.phoneNo
                                    : props.email}
                            </a>
                        </Typography>
                        </div>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
