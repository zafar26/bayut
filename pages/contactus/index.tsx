import Navbar from '../../components/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';

const contactUs = ()=>{
    const isMobile = useMediaQuery('(max-width:600px)');
    return <div className=" w-screen h-screen ">
    <div className="pt-16 h-full  px-2 md:px-12 py-4 md:flex justify-center items-center bg-[#ecdbdc] text-[#4b1037] ">
        
        {
                        <div className={isMobile ? '' : 'h-12'}>
                            <Navbar
                                selectedLink={'Contact Us'}
                                clientUser={true}
                                // setUserSigned={setUserSigned}
                            />
                        </div>
                    }
        Coming Soon

        </div>
        </div>
}
export default contactUs;
