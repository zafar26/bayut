import { useRouter } from 'next/router';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import CustomSelect from '../components/Select';
import JsonOptions from './options.json';
import { onUserSearch } from '../helpers/apis/userSearch';
import Link from 'next/link';
import { BedSharp } from '@mui/icons-material';
import house from '../public/images/wallpapers/corporate.png';
import { myLoader } from '../helpers/helper';
import { db } from '../db';
import Slideshow from '../components/SlideShow/slideShow';
import TransitionsModal from '../components/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [selectedType, setSelectedType] = useState(0);
    // const [loginAs, setLoginAs] = useState<String>('');
    const [userSigned, setUserSigned] = useState(false);

    const [categories, setCategories] = useState<Number>(1);
    const [city, setCity] = useState<String>('');
    const [area, setArea] = useState<String>('');
    const [purpose, setPurpose] = useState<String>('');
    const [subCategory, setSubCategory] = useState<String>('');
    const [auth, setAuth] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false);
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        // console.log(router, 'ROUTER');
        setLoading(true)
        onUserSearch().then((r: any) => {
            console.log(r, 'RSULT PRoPERT SEARCH');
            if (!r.error) {
                console.log(r, 'R');
                let data = [
                    ...r.responseData.data.items,
                    // ...r.responseData.data.items,
                ];
                console.log(data, 'DATAFROMARRAY');
                setLoading(false)
                setData(data);
            }
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

    let rentalSaleButton = [
        {
            label: 'Rental',
        },
        {
            label: 'Sales',
        },
        {
            label: 'Invest',
        },
    ];

    let cityOptions = [
        {
            value: '2',
            label: 'Hyderabad',
        },
        {
            value: '3',
            label: 'Bangalore',
        },
    ];
    let roomOptions = [
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
    ];
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

        {
            label: 'City',
            value: city,
            setValue: setCity,
            options: cityOptions,
        },
        {
            label: 'Area',
            value: area,
            setValue: setArea,
            options: cityOptions,
        },
    ];
    function onSubmit() {
        // ?category=${categories}?city=${city}?area=${area}?room=${room}
        router.push(
            `/property?category=${categories}${
                subCategory ? `&subcategory=${subCategory}` : ''
            } ${purpose ? `&purpose=${purpose}` : ''} `
        );
        //
    }
    return (
        <div className="box-border overflow-hidden	">
            <div className="w-screen h-screen overflow-hidden  box-content">
                <Image
                    loader={myLoader}
                    src={'home.png'}
                    alt="Background Picture "
                    layout="fill"
                    objectFit="fill"
                />
                <Navbar
                    selectedLink={'Home'}
                    clientUser={true}
                    indexPage={true}
                    setUserSigned={setUserSigned}
                />
                <div className="relative top-8 md:top-16 p-2 h-full flex flex-col justify-center">
                    <div className="text-white md:text-4xl text-xl flex flex-col  ">
                        <p className="flex justify-center font-bold">
                            Find Your Dream Home
                        </p>
                        <p className="mt-4 md:w-3/5 self-center text-white text-sm md:text-lg font-thin text-center">
                            We are recognized for exceeding client expectations
                            and delivering great results through dedication,
                            ease of process, and extraordinary services to our
                            worldwide clients.
                        </p>
                    </div>

                    <div className="mt-4 flex justify-center">
                        {rentalSaleButton.map((d: any, i: number) => (
                            <button
                                key={i}
                                className={
                                    selectedType == i
                                        ? 'm-px p-2 bg-bluetransparent text-white rounded shadow '
                                        : 'm-px p-2 bg-whiteTransparent rounded text-white hover:bg-gray-600 '
                                }
                                onClick={() => setSelectedType(i)}
                            >
                                {d.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 md:flex justify-center">
                        {searchField.map((d: any, i: number) => (
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
            <div className="w-full h-full box-border text-yellow-900	">
                <div className="flex justify-center flex-wrap w-full md:mt-24 mt-12 scroll-smooth">
                    <p className="w-full flex justify-center font-bold text-xl md:text-4xl md:my-8 my-4 ">
                        Properties
                    </p>
                    {loading && (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    )}
                    {data.length == 0 && !loading && <p>No Data Found</p>}
                    {data.map((d: any, i: number) => (
                        <div
                            className="p-2 md:py-4 w-5/6 m-4  justify-center items-center md:w-3/12 shadow rounded flex flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl "
                            key={i}
                        >
                            <div className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-105 hover:scale-y-105 md:hover:scale-y-110 duration-300 ">
                                <Slideshow images={d.mediaInfo} />
                            </div>

                            <div
                                className=" w-full  p-1 flex flex-col justify-between cursor-pointer"
                                onClick={() =>
                                    router.push(
                                        `/property/details/${d.propertyID}`
                                    )
                                }
                            >
                                <div className="text-sm md:text-xl ">

                                    <p>{d.propertyName}</p>
                                    <p className="text-xs md:text-xs font-thin">
                                        {d.address}
                                    </p>
                                    <div className="flex justify-between items-center ">


                                        <p className="text-xs md:text-base font-semibold">
                                            {d.propertyType}
                                        </p>
                                        <p className="font-bold">{d.price}</p>

                                    </div>
                                    <p className="text-xs md:text-base ">
                                        {d.categoryName + ' '} -{'>'}
                                        {' ' + d.subCategoryName}
                                    </p>
                                </div>
                                {/* <div className="w-full ">
                                    {auth && (
                                        <TransitionsModal
                                            phoneNo={d.phoneNumber}
                                            email={d.email}
                                        />
                                    )}
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
