import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Slideshow from '../../../components/SlideShow/slideShow';
import { useRouter } from 'next/router';
import { onUserSearch } from '../../../helpers/apis/userSearch';
import useMediaQuery from '@mui/material/useMediaQuery';
import { db } from '../../../db';
import MyInput from '../../../components/Input';
import CustomSelect from '../../../components/Select';
import PhoneNoInput from '../../../components/PhoneInput';
import TransitionsModal from '../../../components/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { sendMail } from '../../../helpers/apis/sendEmail';

let excludingAmmenities = [
    'propertyAmenityID',
    'propertyID',
    'userID',
    'petpolicyID',
];

const PropertyDetails = () => {
    const router = useRouter();
    const [ammenityData, setAmmenityData] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const [auth, setAuth] = useState<Boolean>(false);
    const [ammenityFieldData, setAmmenityFieldData] = useState<any>([]);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [userSigned, setUserSigned] = useState(true);
    const [loading, setLoading] = useState(false);
    const [phoneNo, setPhoneNo] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [message, setMessage] = useState<String>(
        'I would like to inquire about your property Vlook. Please contact me at your earliest convenience.'
    );

    useEffect(() => {
        const { slug, isReady } = router.query;
        // console.log(router, 'ROUTER');
        setLoading(true);
        db.table('user')
            .toArray()
            .then((data: any) => {
                // console.log(data, 'data DATA');
                if (data.length >= 1 && data[0].token) {
                    setAuth(true);
                }
            });
        onUserSearch().then((r: any) => {
            console.log(r, 'RESULT FROM API');
            if (!r.error) {
                if (r.statusCode == 200) {
                    let filteredOne: any[] = r.responseData.data.items.filter(
                        (d: any) => {
                            if (!slug) {
                                if (
                                    d.propertyID ==
                                    window.location.pathname.split('/').pop()
                                ) {
                                    return d;
                                }
                            }
                            if (d.propertyID == slug) {
                                return d;
                            }
                        }
                    );
                    console.log(
                        filteredOne,
                        r.responseData.data.items,
                        router.isReady,
                        'R'
                    );

                    setData(filteredOne[0]);

                    let stringNumberData: { [x: string]: string | number }[] =
                        [];
                    let ammenityDataArray: string[] = [];
                    let keylength: any;
                    let valuelength: any;
                    if (filteredOne[0].propertyAmenities)
                        Object.entries(filteredOne[0].propertyAmenities).map(
                            (d: any, index: number) => {
                                // console.log(d[0], 'key');
                                let k = d[0].replace(/([A-Z])/g, ' $1');

                                if (
                                    !excludingAmmenities.includes(d[0]) &&
                                    d[1]
                                ) {
                                    if (
                                        typeof d[1] == 'string' ||
                                        typeof d[1] == 'number'
                                    ) {
                                        let renamedKey =
                                            k[0].toUpperCase() + k.slice(1);
                                        if (keylength > renamedKey.length) {
                                            console.log(
                                                keylength,
                                                renamedKey.length,
                                                d,
                                                'LENGTH'
                                            );
                                            keylength = renamedKey.length;

                                            stringNumberData.splice(
                                                index - 1,
                                                index,
                                                {
                                                    [renamedKey]: d[1],
                                                }
                                            );
                                        } else {
                                            keylength = renamedKey.length;
                                            let value = d[1];
                                            if (typeof value == 'string') {
                                                valuelength = value.length;
                                            }
                                            if (value)
                                                stringNumberData.push({
                                                    [renamedKey]: value,
                                                });
                                        }
                                    } else {
                                        ammenityDataArray.push(
                                            k[0].toUpperCase() + k.slice(1)
                                        );
                                    }
                                }
                            }
                        );
                    console.log(stringNumberData, 'SAMENITYDATA');
                    setAmmenityData(ammenityDataArray);
                    setLoading(false);
                    setAmmenityFieldData(stringNumberData);
                }
            }
        });
    }, []);
    // console.log(data, 'DATA');

    function onSendMail() {
        let body: any = {
            name,
            email,
            phoneNo,
            message,
            agentEmail: data.email,
        };
        sendMail(body)
            .then((r: any) => {
                if (r.data.responseData.data) {
                    console.log('TRUEEEE');
                }
            })
            .catch((e: any) => console.log(e, 'Error'));
    }

    if (!data) {
        return <div>NO DATA FOUND</div>;
    } else if (loading) {
        return (
            <Box
                sx={{ display: 'flex' }}
                className="w-full h-full flex justify-center items-center"
            >
                <CircularProgress />
            </Box>
        );
    } else {
        return (
            <div className=" w-screen h-screen ">
                <div className="pt-16   px-2 md:px-12 py-4 md:flex justify-center bg-[#F7F6F2] text-yellow-900 ">
                    {
                        <div className={isMobile ? '' : 'h-12'}>
                            <Navbar
                                selectedLink={'Property'}
                                clientUser={true}
                                setUserSigned={setUserSigned}
                            />
                        </div>
                    }
                    <div className="p-2 pt-4 md:mt-8  bg-white w-full flex flex-col items-center   rounded shadow shadow-amber-800/50">
                        <div className="flex flex-col w-full justify-center p-4 ">
                            <div className="justify-between flex items-center h-8  w-full">
                                <p className="text-sm md:text-2xl font-bold md:w-1/2 w-full">
                                    {data.propertyName}
                                </p>
                                <div className="rounded shadow p-2 ml-2    ">
                                    <p className="text-xs md:text-xl text-center w-12 md:w-32">
                                        {data.propertyType}
                                    </p>
                                </div>
                            </div>
                            <div className="justify-between  flex mt-4 ">
                                <div className=" md:flex items-center text-sm md:text-xl font-light w-1/2">
                                    <p>Category :</p>
                                    <p className="text-sm md:text-xl md:ml-2 font-semibold">
                                        {data.categoryName}
                                    </p>
                                </div>

                                <div className=" md:flex items-center text-sm md:text-xl font-light">
                                    <p>Sub Category : </p>
                                    <p className="text-sm md:text-xl md:ml-2 font-semibold">
                                        {data.subCategoryName}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full md:justify-center">
                            <div className="mt-4 w-full h-full  ">
                                {data.mediaInfo && (
                                    <Slideshow
                                        images={data.mediaInfo}
                                        isFull={true}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex w-full mt-4 p-4  justify-center items-center">
                            <div className="md:flex items-center  w-1/2">
                                <p>Price : </p>
                                <p className="font-bold text-xl md:ml-2">
                                    {data.price}
                                </p>
                            </div>
                            <div className="md:flex items-center  w-3/4 ">
                                <p>Address : </p>
                                <p className=" text-lg md:ml-2 font-bold">
                                    {data.address}
                                </p>
                            </div>
                        </div>
                        <div className="mt-8  p-4 flex w-full   justify-center items-center">
                            <div className="  w-full flex justify-center flex-col items-center">
                                <p className="font-bold">Ammenities</p>
                                <div className="flex mt-4  flex-wrap ">
                                    {ammenityFieldData.map(
                                        (d: any, index: number) => {
                                            let values: any = Object.values(d);
                                            if (values[0].length > 20) {
                                                return (
                                                    <div className="px-4 w-full  md:flex justify-between">
                                                        <li className="w-48 ">
                                                            {Object.keys(d)[0]}
                                                            {' : '}
                                                        </li>
                                                        <p className="w-full ml-6 font-bold">
                                                            {Object.values(d)}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div className="px-4 w-72  flex justify-between">
                                                    <li className="">
                                                        {Object.keys(d)[0]}
                                                    </li>
                                                    <p className="font-bold">
                                                        {Object.values(d)}
                                                    </p>
                                                    {/* {console.log(Object.values(d))} */}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <p className="font-bold mt-8 ">
                                    Other Ammenities
                                </p>
                                <div className=" p-4  flex flex-wrap">
                                    {ammenityData.map((d: string) => (
                                        <li className="w-52 ">{d}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 w-full md:w-4/12 flex flex-col items-center p-4 ">
                        <div className="flex text-lg">
                            <p>Agent :</p>
                            <p>Company </p>
                        </div>
                        <div className="font-thin text-sm ">
                            Contact Agent for more information
                        </div>

                        <div className="flex flex-col items-center w-full  ">
                            <MyInput
                                style={'shadow-amber-800/50'}
                                name="Name"
                                value={name}
                                onChange={setName}
                            />
                            <MyInput
                                style={'shadow-amber-800/50'}
                                name="Email"
                                value={email}
                                onChange={setEmail}
                            />

                            <div className="mt-4 w-full">
                                <PhoneNoInput
                                    phoneNo={phoneNo}
                                    setPhoneNo={setPhoneNo}
                                />
                            </div>
                            <div className="w-full mt-4">
                                <MyInput
                                    name="Message"
                                    textdesc={true}
                                    noOfLines={3}
                                    value={message}
                                    onChange={setMessage}
                                />
                            </div>
                            <div className="w-full ">
                                <div className="w-full mt-4">
                                    <div className="flex justify-center w-full">
                                        {/* <button className="mt-4 bg-green-800 text-white rounded shadow w-24 px-2 py-2 flex items-center justify-center ">
                                            Call
                                        </button> */}
                                        <button
                                            className=" bg-green-800 text-white rounded shadow w-24 px-2 py-2 flex items-center justify-center "
                                            onClick={() => onSendMail()}
                                        >
                                            Send Email
                                        </button>
                                    </div>

                                    {userSigned && (
                                        <div className="mt-4 md:mt-8 w-full flex justify-center ">
                                            <TransitionsModal
                                                phoneNo={data.phoneNumber}
                                                email={data.email}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default PropertyDetails;
