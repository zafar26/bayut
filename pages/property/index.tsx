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
import { myLoader,Public_URL } from '../../helpers/helper';
import Slideshow from '../../components/SlideShow/slideShow';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import JsonOptions from '../options.json';
import {
    onPropertyLookups,
} from '../../helpers/apis/addProperty';

const Properties = () => {
    const router = useRouter();
    const [purpose, setPurpose] = useState<String>('');
    const [subCategory, setSubCategory] = useState<String>('');

    const isMobile = useMediaQuery('(max-width:600px)');
    const [categories, setCategories] = useState<String>('');
    const [location, setLocation] = useState<String>('');
    const [propertyType, setPropertyType] = useState<String>('');
    const [price, setPrice] = useState<String>('');
    const [beds, setBeds] = useState<String>('');
    const [area, setArea] = useState<String>('');
    const [modal, setModal] = useState<Boolean>(false);
    const [auth, setAuth] = useState(false);
    const [error, setError] = useState(false);
    const [userSigned, setUserSigned] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [propertyLookups, setPropertyLookups] = useState<any>();
    const [loading, setLoading] = useState<Boolean>(false);
    function onSubmit(){
        setData([])
        setLoading(true)
        let body: any = {};
        // console.log(
        //     category,
        //     window.location.search[0],
        //     window.location.search.split('&'),
        //     'QUERY'
        // );
        // let searchParams = window.location.search.split('&');

        // console.log(searchParams[0].split('='), 'SEARCHPARAMS');

        // if (!category && !subcategory && !purpose) {
        //     // body.category = 1;
        //     // body.subcategory = 2;
        //     // body.purpose = 3;
        // } else {
            if (categories) {
                body.category = categories;
            }
            if (subCategory) {
                body.subcategory = subCategory;
            }
            if (purpose) {
                body.purpose = purpose;
            }
        // }
        console.log(body, 'QUERY');
        
        onUserSearch(body)
            .then((r: any) => {
                // console.log(r);
                setLoading(false)
                if (!r.error) {
                    console.log(r, 'R');
                    setData(r.responseData.data.items);
                }
            })
            .catch((e: any) => {
                console.log(e, 'ERR'), setError(true);
            });

    }
    useEffect(() => {
        const { category, subcategory, purpose } = router.query;
        setLoading(true)
        let body: any = {};
        onPropertyLookups()
        // .then((response: any) => console.log(response, 'RESPONSE'))
        .then((r: any) => {
            console.log(r, 'RESULTT');
            setPropertyLookups(r.data.responseData.data);
        });
        console.log(
            category,
            window.location.search[0],
            window.location.search.split('&'),
            'QUERY'
        );
        let searchParams = window.location.search.split('&');

        console.log(searchParams[0].split('='), 'SEARCHPARAMS');

        if (!category && !subcategory && !purpose) {
            // body.category = 1;
            // body.subcategory = 2;
            // body.purpose = 3;
        } else {
            if (category) {
                body.category = category;
            }
            if (subcategory) {
                body.subcategory = subcategory;
            }
            if (purpose) {
                body.purpose = purpose;
            }
        }
        console.log(body, 'QUERY');
        onUserSearch(body)
            .then((r: any) => {
                // console.log(r);
                setLoading(false)
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
    console.log(propertyLookups,'propertyLookups')
    let searchField = [
        {
            label: 'Categories',
            value: categories,
            setValue: setCategories,
            options: JsonOptions.categories,
        },
        {
            label: 'Sub Category',
            value: subCategory,
            setValue: setSubCategory,
            options: JsonOptions.subCategories,
        },
        {
            label: 'Purpose',
            value: purpose,
            setValue: setPurpose,
            options: JsonOptions.propertyType,
        },

        // {
        //     label: 'City',
        //     value: city,
        //     setValue: setCity,
        //     options: cityOptions,
        // },
        // {
        //     label: 'Area',
        //     value: area,
        //     setValue: setArea,
        //     type: "text",
        //     // options: cityOptions,
        // },
    ];
   
    let loginOptions = [
        {
            value: 'individual',
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
            value: location,
            setValue: setLocation,
        },
        {
            label: 'Property Type',
            selected: propertyType,
            setSelected: setPropertyType,
            options: loginOptions,
        },
        {
            label: 'Price',
            value: price,
            setValue: setPrice,
        },
        {
            label: 'Beds',
            value: beds,
            setValue: setBeds,
        },
        {
            label: 'Area (Sq.Ft)',
            value: area,
            setValue: setArea,
        },
    ];
    // console.log(data, 'DATA');
    return (
        <div>
            <div className="bg-[#ecdbdc]  ">
                {
                    <div className="w-full ">
                        <Navbar
                            selectedLink={'Property'}
                            clientUser={true}
                            setUserSigned={setUserSigned}
                        />
                    </div>
                }

                <div className="pt-16  md:pt-16 w-screen h-screen overflow-hidden">
                    <div className="md:flex h-full md:justify-around md:items-center  	">
                        <div className=" p-2 w-full md:w-1/6 md:mt-28 md:h-full ">
                            <div className=" w-full md:h-5/6   ">
                                <p className="md:text-base text-xs px-2  md:text-left text-amber-800">
                                    Search Properties:
                                </p>
                                {/* <div className="w-full flex md:flex-col overflow-x-auto items-center scroll-smooth ">
                                    {filters.map((d: any) => {
                                        if (d.value == '') {
                                            return (
                                                <div className="w-72 text-xs mx-1  ">
                                                    <MyInput
                                                        // style={
                                                        //     // 'w-36 md:w-full text-xs'
                                                        // }
                                                        name={d.label}
                                                        value={d.value}
                                                        onChange={d.setValue}
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
                                                        // onChange={d.setSelected}
                                                        onChange={(e: any) => {
                                                            console.log(
                                                                e.target.value,
                                                                d.options
                                                            );
                                                            d.setSelected(
                                                                d.options.filter(
                                                                    (f: any) =>
                                                                        f.value ==
                                                                        e.target
                                                                            .value
                                                                )[0].label
                                                            );
                                                        
                                                        }}
                                                        label={d.label}
                                                        options={d.options}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                    <button className="bg-green-600 w-72  p-2 rounded shadow text-white mx-1 md:mt-4 hover:bg-green-700 hover:text-green-100">
                                        Search
                                    </button>
                                </div> */}
                                <div className="mt-4 flex md:flex-col justify-center md:overflow-x-hidden overflow-x-scroll scroll-smooth overflow-y-hidden ">
                        {searchField.map((d: any, i: number) => (
                                d.type == "text" ?
                                <div className="m-1 md:w-48 border" key={i}>
                                <MyInput
                                    style= {'bg-whiteTransparent'}
                                    name={d.label}
                                    value={d.value}
                                    onChange={d.setValue}
                            />
                            </div>   
                                :
                            <div className="m-1 md:w-48 border" key={i}>
                                <CustomSelect
                                    transparent={true}
                                    withoutMargin={true}
                                    value={d.value}
                                    onChange={(e: any) =>
                                        d.setValue(e.target.value)
                                    }
                                    label={d.value ? '' : d.label}
                                    options={d.options}
                                />
                            </div>
                        ))}
                        <button
                            className="md:w-48 w-full py-2 md:m-1 bg-bluetransparent text-white  rounded shadow hover:bg-gray-300 hover:text-primary"
                            onClick={() => onSubmit()}
                        >
                            Search
                        </button>
                    </div>
                    </div>
                        </div>

                        <div className=" p-2 w-full md:w-4/6  h-full  flex flex-col justify-center items-center">
                            <p className="text-xl p-4 md:mt-4  font-bold text-amber-900">
                            Property Listings
                            </p>
                            <div className=" p-2 w-full h-full flex flex-wrap w-full overflow-y-scroll scroll-smooth overflow-x-hidden">
                                {error ? (
                                    <p>Error </p>
                                ) : (
                                    loading ? (
                                        <Box sx={{ width:'100%', height:'100%',display: 'flex',justifyContent:'center',alignItems:'center' }}>
                                            <CircularProgress />
                                        </Box>
                                    )
                                    :
                                    data.length == 0 && !loading && <p>No Data Found</p>
                                )}
                                {data.map((d: any, i: number) => (
                        <div
                            className="p-2 md:py-0 w-5/6 m-4  justify-center items-start md:w-11/12 shadow rounded flex   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl "
                            key={i}
                        >
                            <div className=" h-auto  w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-105 hover:scale-y-105 md:hover:scale-y-110 duration-300 ">
                                <Slideshow images={d.mediaInfo} />
                            </div>

                            <div
                                className=" w-full h-full p-4 flex  justify-between cursor-pointer"
                                onClick={(e:any) =>
                                    router.push(
                                        `/property/details/${d.propertyID}`
                                    )
                                    // console.log(e,'ERR')
                                }
                            >
                                <div className="text-sm md:text-xl flex flex-col justify-around h-auto ">
                                    <p className="font-bold">AED {parseInt(d.price).toLocaleString()}</p>

                                    <p>{d.propertyName}</p>
                                    <p className="text-xs md:text-xs font-thin">
                                        {d.address}
                                    </p>


                                        <p className="text-xs md:text-base font-semibold">
                                            {d.propertyType}
                                        </p>


                                        <div className="flex">
                                        <p className="text-xs md:text-base ">
                                        {d.categoryName + ' '} -{'>'} {' ' + d.subCategoryName}
                                    </p>
                                    </div>
                                </div>

                                <div className="w-1/4 flex flex-col items-end justify-between h-auto ">
                                    {/* {auth && (
                                        <TransitionsModal
                                            phoneNo={d.phoneNumber}
                                            email={d.email}
                                        />
                                    )} */}
                                    <p className="text-gray-500">{d.companyName}</p>

                                    {/* {console.log(d.imageName,d,'DIMAGE')} */}
                                     <Image
                                            src={d.imageName != ""? d.imageName:"202201220609_imran.jpg"}
                                            alt="logo "
                                            width={ 240}
                                            height={ 240}
                                            className="rounded-full h-full w-full"
                                            // layout="responsive"
                                            objectFit={'fill'}
                                            loader={({ src, width, quality }:any) => {
                                                return `${Public_URL}/images/${src}?w=${width}&q=${quality || 75}`
                                            }}
                            
                                            onClick={() => {}}
                                        />
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
