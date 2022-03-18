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
                <p className="text-xs">Manage Users :</p>
                <div className="p-0 w-40 shadow rounded flex items-center bg-white">
                    {/* <TuneIcon /> */}
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
            headerName: 'ID',
            width: 120,
        },
        { field: 'guid', headerName: 'GU_ID', width: 200 },
        { field: 'isActive', headerName: ' Active', width: 100 },
        { field: 'balance', headerName: 'Balance', width: 120 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 120 },
        { field: 'age', headerName: 'Age', width: 90 },
        { field: 'eyeColor', headerName: 'Eye Color', width: 120 },
        { field: 'company', headerName: 'Company', width: 120 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone No', width: 200 },
        { field: 'mobile', headerName: 'Mobile No', width: 200 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'registered', headerName: 'Registered On', width: 300 },
        { field: 'latitude', headerName: 'Latitude', width: 120 },
        { field: 'longitude', headerName: 'Longitude', width: 120 },
        {
            field: 'action',
            headerName: 'Actions',
            width: 120,
            renderCell: (data: any) => {
                return (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <div>
                                <MoreVertIcon
                                    onClick={() => console.log('clicked')}
                                />
                            </div>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem
                                onClick={handleClose}
                                className="flex items-center justify-center text-sm"
                            >
                                <EditIcon
                                    className="mr-2 text-green-600"
                                    fontSize={isMobile ? 'small' : 'medium'}
                                />
                                Edit Listing
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                className="flex items-center justify-center text-sm"
                            >
                                <DeleteIcon
                                    className="mr-2 text-red-600"
                                    fontSize={isMobile ? 'small' : 'medium'}
                                />
                                Delete Listing
                            </MenuItem>
                        </Menu>
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
        <div className="pt-14 md:pt-16 w-full h-full">
            <Navbar selectedLink={'Agency'} />
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
                        <p className="pb-2 font-light text-sm">Quota Summary</p>
                        <LinearProgress variant="determinate" value={78} />
                    </div>
                </div>
            </div>

            <div className="mx-2 self-center w-full p-4 md:w-full h-4/5 md:h-full rounded bg-lightGreenCard shadow">
                <div className="flex"></div>

                <div className="pt-2 h-5/6">
                    <DataGrid
                        columns={columns}
                        rows={dummyData}
                        pageSize={15}
                        checkboxSelection
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                        density={isMobile ? 'compact' : 'standard'}
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
};

export default Agency;
