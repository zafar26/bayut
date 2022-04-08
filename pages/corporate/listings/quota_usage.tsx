import Navbar from '../../../components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import {
    DataGrid,
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import dummyData from '../../../components/data/index.json';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';

function CustomToolbar() {
    return (
        <GridToolbarContainer className="flex justify-between">
            Search
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 120,
    },
    { field: 'guid', headerName: 'Location', width: 200 },
    { field: 'isActive', headerName: ' For Sale', width: 100 },
    { field: 'balance', headerName: 'For Rent', width: 120 },
    { field: 'firstName', headerName: 'Hot', width: 130 },
    { field: 'lastName', headerName: 'Basic', width: 120 },
    { field: 'age', headerName: 'Total', width: 90 },
    // { field: 'eyeColor', headerName: 'Eye Color', width: 120 },
    // { field: 'company', headerName: 'Company', width: 120 },
    // { field: 'email', headerName: 'Email', width: 200 },
    // { field: 'phone', headerName: 'Phone No', width: 200 },
    // { field: 'mobile', headerName: 'Mobile No', width: 200 },
    // { field: 'address', headerName: 'Address', width: 300 },
    // { field: 'registered', headerName: 'Registered On', width: 300 },
    // { field: 'latitude', headerName: 'Latitude', width: 120 },
    // { field: 'longitude', headerName: 'Longitude', width: 120 },
];

const QuotaUsage = () => {
    const [value, setValue] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            {isMobile ? <Navbar selectedLink={'Listings'} /> : <MenuAppBar />}
            <div className="flex h-full">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Listings'}
                        />
                    </div>
                )}
                <div className="w-full h-full">
                    {/* <Navbar selectedLink={'Listings'} /> */}
                    <div className="h-full p-2 flex flex-col ">
                        <p className="flex justify-center text-sm font-bold">
                            Quota Usage
                        </p>
                        <div className="w-48  bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                            <p className="text-xs font-light">Date :</p>
                            <p className="text-xs font-bold">
                                Jan 25, 2022 to Feb 25, 2022
                            </p>
                        </div>
                        <div className=" mt-4 md:mt-4 w-full h-5/6  bg-lightGreenCard rounded shadow">
                            <div className="h-full">
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        backgroundColor: 'green',
                                        borderRadius: '10px 10px 0px 0px',
                                    }}
                                >
                                    <Tabs
                                        value={value}
                                        onChange={(event: any, newValue: any) =>
                                            setValue(newValue)
                                        }
                                    >
                                        <Tab
                                            label="Listing By Location"
                                            className={
                                                value == 0
                                                    ? ' rounded bg-white '
                                                    : 'text-white rounded '
                                            }
                                        />
                                        <Tab
                                            label="Listing By Day"
                                            className={
                                                value == 1
                                                    ? 'rounded bg-white '
                                                    : 'text-white rounded '
                                            }
                                        />
                                    </Tabs>
                                </Box>
                                {(value == 0 || value == 1) && (
                                    <div className="pt-2 h-5/6">
                                        <DataGrid
                                            columns={columns}
                                            rows={dummyData}
                                            pageSize={15}
                                            // checkboxSelection
                                            components={{
                                                Toolbar: CustomToolbar,
                                            }}
                                            // showToolbar
                                            density={
                                                isMobile
                                                    ? 'compact'
                                                    : 'standard'
                                            }
                                            // disableSelectionOnClick
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
};

export default QuotaUsage;
