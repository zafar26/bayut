import { useState } from 'react';
import MyChart from '../../../components/chart';
import Navbar from '../../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuAppBar from '../../../components/Appbar';
import MyList from '../../../components/ListSideBar';

const AgentDashboard = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    const [selectedButton, setSelectedButton] = useState<Number>(0);
    const [selectedLink, setSelectedLink] = useState<String>('Overview');
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
    let perfomance: any = [
        ['23/12/2022', 21, 300],
        ['28/12/2022', 31, 400],
        ['20/01/2022', 41, 500],
        ['23/02/2022', 51, 600],
        // ['India', 55, 20, 30, 40],
        // ['SriLanka', 10],
        // ['China', 35],
    ];
    // console.log(isTablet, 'ISTABLET');
    // console.log(isMobile, 'ISMobile');
    return (
        <div className="pt-16  h-screen w-screen ">
            {isMobile ? (
                <Navbar selectedLink={'Overview'} />
            ) : (
                <MenuAppBar
                // className={styles.container}
                // toggleDrawer={toggleDrawer}
                // client={clientUser}
                // login={login}
                // setUserSigned={setUserSigned}
                />
            )}
            <div className="flex w-full justify-between h-full ">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Overview'}
                        />
                    </div>
                )}
                <div className="h-full p-2 flex flex-col md:w-5/6 w-full">
                    <div className="w-48  bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                        <p className="text-xs font-light">Date :</p>
                        <p className="text-xs font-bold">
                            Jan 25, 2022 to Feb 25, 2022
                        </p>
                    </div>
                    <div className="self-center w-full  mt-6 p-2 md:w-full  h-full md:h-full rounded bg-lightGreenCard shadow">
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
                        <div className="mt-4 w-full  flex justify-center">
                            {selectedButton === 0 && (
                                <MyChart
                                    data={perfomance}
                                    title="Perfomance"
                                    width={
                                        isMobile ? 300 : isTablet ? 600 : 900
                                    }
                                    height={
                                        isMobile ? 300 : isTablet ? 350 : 400
                                    }
                                />
                            )}
                            {selectedButton === 1 && (
                                <MyChart
                                    data={perfomance}
                                    title="Perfomance"
                                    width={
                                        isMobile ? 300 : isTablet ? 600 : 900
                                    }
                                    height={
                                        isMobile ? 300 : isTablet ? 350 : 400
                                    }
                                />
                            )}
                            {selectedButton === 2 && (
                                <MyChart
                                    data={perfomance}
                                    title="Perfomance"
                                    width={
                                        isMobile ? 300 : isTablet ? 600 : 900
                                    }
                                    height={
                                        isMobile ? 300 : isTablet ? 350 : 400
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;
