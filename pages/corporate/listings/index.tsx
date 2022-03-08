import Navbar from '../../../components/Navbar/Navbar';
import LinearProgress from '@mui/material/LinearProgress';
import ToggleSwitch from '../../../components/Toggle';

const Listings = () => {
    let filters = [
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: true,
        },
        {
            width: '100px',
            onLabel: 'Active',
            offLabel: 'Inactive',
            isToggleOn: true,
        },
        {
            width: '80px',
            onLabel: 'Sale',
            offLabel: 'Rent',
            isToggleOn: true,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: true,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: false,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: false,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: false,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: false,
        },
        {
            width: '70px',
            onLabel: 'On',
            offLabel: 'Off',
            isToggleOn: false,
        },
    ];
    return (
        <div className="w-full h-full">
            <Navbar selectedLink={'Listings'} />
            <div className="p-2 pt-16  h-full ">
                <div className="flex justify-between">
                    <div className="w-32 md:w-2/5 p-2 bg-lightGreenCard rounded shadow">
                        <p className="pb-2 font-light text-sm">Quota Summary</p>
                        <LinearProgress variant="determinate" value={78} />
                    </div>
                    <div className="w-32 md:w-2/5 p-2 bg-lightGreenCard rounded shadow">
                        <p className="pb-2 font-light text-sm">Quota Summary</p>
                        <LinearProgress variant="determinate" value={78} />
                    </div>
                </div>
                <div className="p-2 mt-4 w-full h-full  bg-lightGreenCard rounded shadow">
                    <div className="flex justify-between p-2 bg-lightGreenCard rounded shadow">
                        Filters
                        <div className="p-1 w-4/5 shadow rounded flex overflow-x-auto">
                            {filters.map((d) => (
                                <ToggleSwitch
                                    width={d.width}
                                    onLabel={d.onLabel}
                                    offLabel={d.offLabel}
                                    isToggleOn={d.isToggleOn}
                                    // handleChange={}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
