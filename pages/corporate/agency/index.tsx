import Navbar from '../../../components/Navbar/Navbar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import LinearProgress from '@mui/material/LinearProgress';

const Agency = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className="pt-14 md:pt-16 w-full h-full">
            <Navbar selectedLink={'Agency'} />
            <div className="p-2 ">
                <div className=" flex  ">
                    <div className="w-44  bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                        <p className="text-xs font-light">Date :</p>
                        <p className=" text-xs font-light">
                            Jan 25, 2022 - Feb 25, 2022
                        </p>
                    </div>
                    <div>
                        <div className="ml-2  flex items-center bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                            <PersonAddAltIcon
                                fontSize={isMobile ? 'small' : 'medium'}
                            />
                            <a href="/corporate/agency/adduser">
                                <p className=" ml-2 text-xs font-light">
                                    Add New User
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-2 ">
                    <div className="w-32 md:w-2/5 p-2 bg-lightGreenCard rounded shadow">
                        <p className="pb-2 font-light text-sm">Quota Summary</p>
                        <LinearProgress variant="determinate" value={78} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
