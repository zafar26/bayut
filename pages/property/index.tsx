import Navbar from '../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { clientLinks } from '../../components/dynamicdata/links';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CustomSelect from '../../components/Select';
import { useEffect, useState } from 'react';
import MyInput from '../../components/Input';
import TransitionsModal from '../../components/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { db } from '../../db';
import { onUserSearch } from '../../helpers/apis/userSearch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { url } from 'inspector';
import house from '../../public/images/properties/house1.jpeg';
import { myLoader } from '../../helpers/helper';
import Slideshow from '../../components/SlideShow/slideShow';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Properties = () => {
    const router = useRouter();

    const isMobile = useMediaQuery('(max-width:600px)');
    const [categories, setCategories] = useState<String>('');
    const [modal, setModal] = useState<Boolean>(false);
    const [open, setOpen] = useState<Boolean>(modal);
    const [auth, setAuth] = useState(false);
    const [error, setError] = useState(false);
    const [userSigned, setUserSigned] = useState(false);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const query = router.query;

        // console.log(router, 'ROUTER');
        onUserSearch(query)
            .then((r: any) => {
                // console.log(r);
                if (!r.error) {
                    console.log(r, 'R');
                    setData(r.responseData.data.items);
                }
            })
            .catch((e: any) => {
                console.log(e, 'ERR'), setError(true);
            });

        db.table('user')
            .toArray()
            .then((data: any) => {
                // console.log(data, 'data DATA');
                if (data.length >= 1 && data[0].token) {
                    setAuth(true);
                }
            });
    }, [db]);

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
    // console.log(data, 'DATA');
    return (
        <div>
            <div className=" ">
                {
                    <div className="w-full ">
                        <Navbar
                            selectedLink={'Property'}
                            clientUser={true}
                            setUserSigned={setUserSigned}
                        />
                    </div>
                }

                <div className="pt-16  md:pt-20 w-screen h-screen ">
                    <div className="md:flex h-full md:justify-center md:items-center	">
                        {/* <div className=" p-2 w-full md:w-1/4  md:h-full ">
                            <div className=" w-full md:h-5/6 bg-glassEffect shadow rounded ">
                                <p className="md:text-base text-xs px-2 font-thin ">
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
                                    <button className="bg-green-600 p-2 rounded shadow text-white mx-1 md:mt-4 hover:bg-white hover:text-green-600">
                                        Search
                                    </button>
                                </div>
                                {/* Button */}
                        {/* </div>
                        </div> */}

                        <div className=" p-2 w-full md:w-4/6  h-full  flex flex-col justify-center items-center">
                            <p className="text-xl p-4 font-bold">Properties</p>
                            <div className=" p-2 w-full h-full   bg-glassEffect shadow rounded w-full overflow-y-scroll">
                                {error ? (
                                    <p>Error </p>
                                ) : (
                                    data.length == 0 && (
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress />
                                        </Box>
                                    )
                                )}
                                {data.map((d: any, i: number) => (
                                    <div
                                        className="p-1 w-full h-40 shadow rounded flex "
                                        key={i}
                                    >
                                        {/* {console.log(d, 'DATA D')} */}
                                        <div className="w-full md:w-1/2 ">
                                            <Slideshow images={d.mediaInfo} />
                                        </div>

                                        <div
                                            className="w-full ml-2 p-2 flex flex-col justify-between cursor-pointer	"
                                            onClick={() =>
                                                router.push(
                                                    `/property/details/${
                                                        d.propertyID
                                                            ? d.propertyID
                                                            : 1
                                                    }`
                                                )
                                            }
                                        >
                                            <div className="text-sm md:text-xl ">
                                                <p className="font-bold">
                                                    {d.price}
                                                </p>

                                                <p>{d.propertyName}</p>
                                                <p className="text-xs md:text-xs font-thin">
                                                    {d.address}
                                                </p>

                                                <p className="text-xs md:text-base font-semibold">
                                                    {d.propertyType}
                                                </p>
                                                <p className="text-xs md:text-base ">
                                                    {d.categoryName + ' '} -
                                                    {'>'}
                                                    {' ' + d.subCategoryName}
                                                </p>
                                            </div>
                                            <div className="w-full ">
                                                {userSigned && (
                                                    <TransitionsModal
                                                        phoneNo={d.phoneNumber}
                                                        email={d.email}
                                                    />
                                                )}
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
