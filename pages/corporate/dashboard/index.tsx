import { useState } from 'react';
import MyChart from '../../../components/chart';
import Navbar from '../../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';

const AgentDashboard = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    const [selectedButton, setSelectedButton] = useState<Number>(0);
    let perfomanceButton = [
        {
            label: 'Impression',
            value: '35,778',
        },
        {
            label: 'Clicks',
            value: '3,577',
        },
        {
            label: 'Leads',
            value: '5,778',
        },
    ];
    let country: any = [
        ['India', 55],
        ['SriLanka', 10],
        ['China', 35],
    ];
    // console.log(isTablet, 'ISTABLET');
    // console.log(isMobile, 'ISMobile');
    return (
        <div className="pt-16  h-screen ">
            <Navbar selectedLink={'Overview'} />
            <div className="h-full p-2 flex flex-col ">
                <div className="w-48  bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                    <p className="text-xs font-light">Date :</p>
                    <p className="text-xs font-bold">
                        Jan 25, 2022 to Feb 25, 2022
                    </p>
                </div>
                <div className="self-center w-full mt-6 p-2 md:w-full  h-4/5 md:h-full rounded bg-[#E8F6EF] shadow">
                    <p className="mb-2 text-sm font-thin ">
                        Your Listing Perfomance :
                    </p>
                    <div className="w-full flex justify-between">
                        {perfomanceButton.map((d, index) => {
                            return selectedButton == index ? (
                                <div className="shadow p-2 w-24 sm:w-32 md:w-48 rounded ">
                                    <p>{d.label}</p>
                                    <p>{d.value}</p>
                                </div>
                            ) : (
                                <div
                                    className="ml-1 bg-white shadow p-2 w-24 sm:w-32 md:w-48 lg: w-54 rounded"
                                    onClick={() => setSelectedButton(index)}
                                >
                                    <p>{d.label}</p>
                                    <p>{d.value}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 w-full h-24 flex justify-center">
                        {selectedButton === 0 && (
                            <MyChart
                                data={country}
                                title="Country Wise "
                                width={isMobile ? 300 : isTablet ? 600 : 900}
                                height={250}
                            />
                        )}
                        {selectedButton === 1 && (
                            <MyChart
                                data={country}
                                title="Country Wise "
                                width={isMobile ? 300 : isTablet ? 600 : 900}
                                height={250}
                            />
                        )}
                        {selectedButton === 2 && (
                            <MyChart
                                data={country}
                                title="Country Wise "
                                width={isMobile ? 300 : isTablet ? 600 : 900}
                                height={250}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;
