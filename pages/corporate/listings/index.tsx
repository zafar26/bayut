import Navbar from '../../../components/Navbar/Navbar';
import LinearProgress from '@mui/material/LinearProgress';
import ToggleSwitch from '../../../components/Toggle';
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
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import useMediaQuery from '@mui/material/useMediaQuery';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Listings = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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
            // componentsProps(params: any) {
            //     return <div style={{ background: 'yellow' }}>{params}</div>;
            // },
            // renderCell: (headerparams: any) => {
            //     // console.log(headerparams)
            //     return (
            //         <p>
            //             <IconButton>
            //                 <PersonIcon />
            //             </IconButton>
            //         </p>
            //     );
            // },
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
            // componentsProps(params: any) {
            //     return <div style={{ background: 'yellow' }}>{params}</div>;
            // },
            renderCell: (data: any) => {
                // console.log(data.id, 'DATA RENDER CELL');
                return (
                    <div>
                        {/* <IconButton>
                            <PersonIcon />
                        </IconButton> */}
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <div
                            // className={classes.account}
                            // style={{ color: '#FFFFFF' }}
                            >
                                <MoreVertIcon
                                    onClick={() => console.log('clicked')}
                                />
                                {/* <AccountCircle fontSize="large" /> */}
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
                            // transformOrigin={{
                            //     vertical: 'bottom',
                            //     horizontal: 'left',
                            // }}
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
                                    // color="error"
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
        <div className="pt-14 md:pt-16 w-full h-full">
            <Navbar selectedLink={'Listings'} />
            <div className="p-2   h-full ">
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
                <div className="p-2 mt-4 md:mt-4 w-full h-5/6  bg-lightGreenCard rounded shadow">
                    <div className="flex justify-between items-center px-2  bg-lightGreenCard rounded shadow">
                        Filters
                        <div className="px-1 py-2 w-4/5 md:w-3/5 flex overflow-x-auto">
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
                    <div className="pt-1 md:pt-1 flex  justify-center">
                        <Button
                            variant="contained"
                            color="success"
                            className={
                                isMobile
                                    ? 'bg-green-700 text-xs'
                                    : 'bg-green-700 '
                            }
                        >
                            Search
                        </Button>
                    </div>
                    <div className="pt-2 h-5/6">
                        <DataGrid
                            columns={columns}
                            rows={dummyData}
                            pageSize={15}
                            checkboxSelection
                            components={{
                                Toolbar: CustomToolbar,
                            }}
                            // showToolbar
                            density={isMobile ? 'compact' : 'standard'}
                            disableSelectionOnClick
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
