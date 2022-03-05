import styles from './modal.module.css';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: any) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '300px',
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props: any) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ float: 'right', position: 'relative', left: '20vw' }}>
                <button
                    type="button"
                    onClick={handleOpen}
                    style={{
                        borderRadius: '20px',
                        padding: '5px',
                        border: 'none',
                    }}
                >
                    <FilterListIcon />
                </button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {props.component()}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    handleClose();
                                    props.onSubmit();
                                }}
                            >
                                Priview
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

TransitionsModal.getInitialProps = async (props: any) => {
    return props;
};
