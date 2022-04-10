import { useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Slideshow from '../../../components/SlideShow/slideShow';

const PropertyDetails = () => {
    useEffect(() => {
        // console.log(router, 'ROUTER');
        // onUserSearch().then((r: any) => {
        //     // console.log(r);
        //     if (!r.error) {
        //         console.log(r, 'R');
        //         // setData(r.data.responseData.data.items);
        //     }
        // });
    }, []);
    return (
        <div className=" w-screen h-screen">
            <div className="pt-16 h-full  px-2 md:px-12 py-4 flex justify-center  ">
                {
                    <div className=" ">
                        <Navbar
                            selectedLink={'Property'}
                            clientUser={true}
                            // setUserSigned={setUserSigned}
                        />
                    </div>
                }
                <div className="p-2   bg-white w-full flex flex-col items-center h-full  rounded shadow">
                    <div className="flex flex-col w-full md:w-3/6 justify-center">
                        <div className="justify-between flex items-center h-8  w-full">
                            <p className="text-sm font-bold md:w-1/2 w-full">
                                Emirates N Tower - 1 BHK FLAT
                            </p>
                            <div className="rounded shadow p-2 ml-2    ">
                                <p className="text-xs w-12 md:w-22">For Rent</p>
                            </div>
                        </div>
                        <div className="justify-between  flex mt-2 ">
                            <div className=" md:flex text-xs font-light w-1/2">
                                <p>Category :</p>
                                <p className="text-sm font-semibold">
                                    Commercial
                                </p>
                            </div>

                            <div className=" md:flex  text-xs font-light">
                                <p>Sub Category : </p>
                                <p className="text-sm font-semibold">
                                    Appartment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex  md:justify-center">
                        <div className="mt-2 w-full md:w-4/6 ">
                            <Slideshow
                                images={[
                                    {
                                        mediaData:
                                            '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',
                                        mediaName: 'emiratetower_1.jpg',
                                        mediaType: 'image',
                                    },

                                    {
                                        mediaData:
                                            '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',
                                        mediaName: 'emiratetower_2.jpg',
                                        mediaType: 'image',
                                    },
                                    {
                                        mediaData:
                                            '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',
                                        mediaName: 'emiratetower_3.jpg',
                                        mediaType: 'image',
                                    },
                                ]}
                                isFull={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PropertyDetails;
