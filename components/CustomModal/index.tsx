import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function InformationModal(props: any) {
    const [open, setOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    // const handleOpen = (c:any) =>
    const handleClose = () => setOpen(false);

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
                    <p className="md:ml-1 text-sm md:text-base">View Details</p>
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
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {selectedButton == 1 ? 'Phone NO' : 'Email'}
                        </Typography>
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <div className= "flex">

                            <p>{'text'} : </p>
                            <p>{'Value'}</p>
                            </div>

                            <div className= "flex">

                            <p>{'text'} : </p>
                            <p>{'Value'}</p>
                            </div>

                            <div className= "flex">

                            <p>{'text'} : </p>
                            <p>{'Value'}</p>
                            </div>

                            <div className= "flex">

                            <p>{'text'} : </p>
                            <p>{'Value'}</p>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
