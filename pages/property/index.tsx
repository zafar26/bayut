import Navbar from '../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { clientLinks } from '../../components/dynamicdata/links';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Properties = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div>
            <div className="w-screen h-screen bg-amber-900">
                {isMobile && (
                    <div className="w-full px-2">
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
                        <div className=" p-2 w-full md:w-1/4  md:h-5/6 ">
                            <div className="p-4 w-full md:h-full bg-glassEffect shadow rounded">
                                Filters
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
                                                <button className="p-1  md:py-1 md:px-2 bg-lime-600	text-white flex rounded shadow flex items-center">
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
