import Navbar from '../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { clientLinks } from '../../components/dynamicdata/links';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CustomSelect from '../../components/Select';
import { useState } from 'react';
import MyInput from '../../components/Input';
import TransitionsModal from '../../components/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const Properties = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [categories, setCategories] = useState<String>('');
    const [modal, setModal] = useState<Boolean>(false);
    const [open, setOpen] = useState<Boolean>(modal);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let loginOptions = [
        {
            value: '2',
            label: 'Individual',
        },
        {
            value: '3',
            label: 'Company',
        },
    ];
    let filters = [
        {
            label: 'Purpose',
            selected: categories,
            setSelected: setCategories,
            options: loginOptions,
        },
        {
            label: 'Location',
            value: categories,
            setValue: setCategories,
        },
        {
            label: 'Property Type',
            selected: categories,
            setSelected: setCategories,
            options: loginOptions,
        },
        {
            label: 'Price',
            value: categories,
            setValue: setCategories,
        },
        {
            label: 'Beds',
            value: categories,
            setValue: setCategories,
        },
        {
            label: 'Area (Sq.Ft)',
            value: categories,
            setValue: setCategories,
        },
    ];
    const transitionalModal = () => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                // className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                Priview
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        );
    };
    return (
        <div>
            <div className="w-screen h-screen bg-amber-900">
                {isMobile && (
                    <div className="w-full ">
                        <Navbar selectedLink={'Property'} clientUser={true} />
                    </div>
                )}
                <div className="pt-16 md:pt-0 w-full h-full ">
                    {!isMobile && (
                        <div className="p-2  h-14 bg-transparent shadow-xl flex justify-between items-center text-white ">
                            Vlook
                            <div className="flex">
                                {clientLinks.map((d: any) => (
                                    <div className=" flex w-48 items-end hover:bg-green-50 hover:text-green-800 p-4 rounded">
                                        {d.icon()}
                                        <div className="ml-2 ">{d.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="md:flex h-full 	">
                        <div className=" p-2 w-full md:w-1/4  md:h-full ">
                            <div className=" w-full md:h-5/6 bg-glassEffect shadow rounded ">
                                <p className="md:text-base text-xs px-2  ">
                                    Filters:
                                </p>
                                <div className="w-full flex md:flex-col overflow-x-auto items-center">
                                    {filters.map((d: any) => {
                                        if (d.value == '') {
                                            return (
                                                <div className="w-72 text-xs mx-1  ">
                                                    <MyInput
                                                        style={
                                                            'w-36 md:w-full text-xs'
                                                        }
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
                                                <div className="w-72 mx-1 ">
                                                    <CustomSelect
                                                        style={
                                                            'w-36 md:w-full p-0 m-0 relative top-1 '
                                                        }
                                                        // transparent={true}
                                                        withoutMargin={true}
                                                        value={d.selected}
                                                        onChange={(e: any) =>
                                                            d.setSelected(e)
                                                        }
                                                        label={d.label}
                                                        options={d.options}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                    <button className="bg-green-600 p-2 rounded shadow text-white mx-1 md:mt-4 ">
                                        Search
                                    </button>
                                </div>
                                {/* Button */}
                            </div>
                        </div>

                        <div className=" p-2 w-full md:w-4/6  h-5/6  flex justify-center items-center">
                            <div className="md:p-4 p-2 w-full h-full   bg-glassEffect shadow rounded w-full overflow-y-scroll">
                                {[0, 1, 2, 3, 4].map((d) => (
                                    <div className="p-1 w-full shadow rounded flex ">
                                        <Image
                                            src={`/images/properties/${
                                                isMobile
                                                    ? 'house1.jpeg'
                                                    : 'house1.jpeg'
                                            }`}
                                            alt="House1 Picture "
                                            width={260}
                                            height={100}
                                            className="rounded "
                                            // layout="responsive"
                                            objectFit={'cover'}
                                        />
                                        <div className="w-full ml-2 p-2 flex flex-col justify-between">
                                            <div className=" md:text-2xl font-bold">
                                                AED 19,000
                                                <p className="text-xs md:text-base font-normal">
                                                    Jumeirah Living Marina Gate,
                                                    Marina Gate, Dubai Marina,
                                                    Dubai
                                                </p>
                                                <p className="text-xs md:text-base font-semibold">
                                                    Apartment
                                                </p>
                                                <p className="text-xs md:text-base font-thin">
                                                    Smart Living / Ready to Move
                                                    / Furnished
                                                </p>
                                            </div>
                                            <div className="flex ">
                                                <button
                                                    className="p-1  md:py-1 md:px-2 bg-lime-600	text-white flex rounded shadow flex items-center"
                                                    onClick={() => {
                                                        setModal(true);
                                                        transitionalModal();
                                                    }}
                                                >
                                                    <CallIcon
                                                        fontSize={'small'}
                                                    />
                                                    <p className="md:ml-2 text-sm md:text-base">
                                                        Call
                                                    </p>
                                                </button>
                                                <button className="p-1 ml-4 md:py-1 md:px-2 bg-lime-600	text-white flex rounded shadow flex items-center">
                                                    <EmailIcon
                                                        fontSize={'small'}
                                                    />
                                                    <p className="md:ml-2 text-sm md:text-base">
                                                        Email
                                                    </p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Properties;
