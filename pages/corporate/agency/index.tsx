import Navbar from '../../../components/Navbar/Navbar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LinearProgress from '@mui/material/LinearProgress';
import TuneIcon from '@mui/icons-material/Tune';
import CustomSelect from '../../../components/Select';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    DataGrid,
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import dummyData from '../../../components/data/index.json';
import CreateIcon from '@mui/icons-material/Create';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';

const Agency = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [loginAs, setLoginAs] = useState<String>('');

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        // console.log(anchorEl, 'EVENt');
        setAnchorEl(null);
    };
    function CustomToolbar() {
        return (
            <GridToolbarContainer className="flex justify-between">
                <p className="self-start text-xs">Manage Users :</p>
                <div className="p-0 w-24 shadow rounded flex items-center ">
                    <CustomSelect
                        withoutMargin={true}
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Users'}
                        options={loginOptions}
                    />
                </div>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ref',
            width: 120,
        },
        // { field: 'guid', headerName: 'GU_ID', width: 200 },
        // { field: 'isActive', headerName: ' Active', width: 100 },
        // { field: 'age', headerName: 'Age', width: 90 },
        // { field: 'eyeColor', headerName: 'Eye Color', width: 120 },
        // { field: 'company', headerName: 'Company', width: 120 },
        { field: 'phone', headerName: 'type', width: 200 },
        { field: 'email', headerName: 'purpose', width: 200 },
        { field: 'address', headerName: 'location', width: 300 },
        { field: 'mobile', headerName: 'price', width: 200 },

        { field: 'balance', headerName: 'beds', width: 120 },
        { field: 'firstName', headerName: 'listedBy', width: 130 },
        { field: 'lastName', headerName: 'status', width: 120 },
        // { field: 'registered', headerName: 'Registered On', width: 300 },
        // { field: 'latitude', headerName: 'Latitude', width: 120 },
        // { field: 'longitude', headerName: 'Longitude', width: 120 },
        {
            field: 'action',
            headerName: 'Actions',
            width: 120,
            renderCell: (data: any) => {
                return (
                    <div className="w-full flex justify-around">
                        <CreateIcon color="primary" />
                        <DeleteIcon color="warning" />
                    </div>
                );
            },
        },
    ];

    let loginOptions = [
        {
            value: 'agent',
            label: 'Agent',
        },
        {
            value: 'owner',
            label: 'Owner',
        },
        {
            value: 'tenant',
            label: 'Tenant',
        },
    ];

    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            {isMobile ? <Navbar selectedLink={'Agency'} /> : <MenuAppBar />}
            <div className=" flex w-full h-full">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Agency'}
                        />
                    </div>
                )}
                <div className="md:w-5/6 w-full">
                    <div className="p-2 ">
                        <div className=" flex  justify-between">
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
                                <p className="pb-2 font-light text-sm">
                                    Quota Summary
                                </p>
                                <LinearProgress
                                    variant="determinate"
                                    value={78}
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" self-center w-full p-2 md:w-full h-4/5 md:h-full ">
                        <div className=" h-full rounded bg-lightGreenCard shadow">
                            <DataGrid
                                columns={columns}
                                rows={dummyData}
                                pageSize={20}
                                // checkboxSelection
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                                density={isMobile ? 'compact' : 'standard'}
                                disableSelectionOnClick
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
