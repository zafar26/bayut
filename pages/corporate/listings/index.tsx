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
import { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import useMediaQuery from '@mui/material/useMediaQuery';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import MyInput from '../../../components/Input';
import JsonOptions from '../../options.json';
import CustomSelect from '../../../components/Select';
import { getPropertyListing } from '../../../helpers/apis/managePropertyListing';
import MyList from '../../../components/ListSideBar';
import MenuAppBar from '../../../components/Appbar';
import house from '../../../public/images/properties/house1.jpeg';

const Listings = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState('');
    const [subCategories, setSubCategories] = useState('');
    const [data, setData] = useState([]);
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
            field: 'ref',
            headerName: 'ref',
            width: isMobile ? 100 : 100,
        },
        {
            field: 'type',
            headerName: 'type',
            width: isMobile ? 100 : 120,
            editable: true,
        },
        {
            field: 'purpose',
            headerName: ' purpose',
            width: isMobile ? 100 : 100,
        },
        {
            field: 'location',
            headerName: 'location',
            width: isMobile ? 130 : 280,
        },
        { field: 'price', headerName: 'price', width: isMobile ? 120 : 120 },
        { field: 'beds', headerName: 'beds', width: isMobile ? 70 : 80 },
        {
            field: 'listedBy',
            headerName: 'listedBy',
            width: isMobile ? 120 : 120,
        },
        { field: 'status', headerName: 'status', width: isMobile ? 80 : 100 },

        // { field: 'company', headerName: 'Company', width: 120 },
        // { field: 'email', headerName: 'Email', width: 200 },
        // { field: 'phone', headerName: 'Phone No', width: 200 },
        // { field: 'mobile', headerName: 'Mobile No', width: 200 },
        // { field: 'address', headerName: 'Address', width: 300 },
        // { field: 'registered', headerName: 'Registered On', width: 300 },
        // { field: 'latitude', headerName: 'Latitude', width: 120 },
        // { field: 'longitude', headerName: 'Longitude', width: 120 },
        {
            field: 'action',
            headerName: 'Actions',
            width: isMobile ? 100 : 100,
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
                                    onClick={() => Alert('clicked')}
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
            width: '100px',
            onLabel: 'Active',
            offLabel: 'Inactive',
            isToggleOn: true,
        },
        {
            width: '100px',
            onLabel: 'Draft',
            offLabel: 'Draft',
            isToggleOn: true,
        },
        {
            width: '100px',
            onLabel: 'Sale',
            offLabel: 'Rent',
            isToggleOn: true,
        },
        {
            width: '70px',
            label: 'Location',
            value: '',
            setValue: '',
            input: true,
        },
        {
            width: '70px',
            label: 'Purpose',
            value: '',
            setValue: '',
            input: true,
        },
        {
            width: '70px',
            label: 'Category',
            value: categories,
            setValue: setCategories,
            options: JsonOptions.categories,
            select: true,
        },
        {
            width: '70px',
            label: 'Sub Category',
            value: subCategories,
            setValue: setSubCategories,
            options: JsonOptions.subCategories.filter(
                (d: any) => d.key == categories
            ),
            select: true,
        },
        {
            width: '70px',
            label: 'Beds',
            value: '',
            setValue: '',
            input: true,
        },
    ];
    useEffect(() => {
        getPropertyListing().then((r: any) => {
            setData(r.data.responseData.data.tableData);
            // console.log(r, 'RESULT');
        });
    }, []);

    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            {isMobile ? <Navbar selectedLink={'Listings'} /> : <MenuAppBar />}
            <div className="md:flex w-full justify-between h-full ">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Listings'}
                        />
                    </div>
                )}
                <div className="p-2 w-full  h-full ">
                    <div className="flex justify-between">
                        <div className="w-32 md:w-2/5 p-2  bg-lightGreenCard rounded shadow lg:h-24 lg:p-8">
                            <p className="pb-2 font-light text-sm md:text-base ">
                                Quota Summary
                            </p>
                            <LinearProgress variant="determinate" value={78} />
                        </div>
                        <div className="w-32 md:w-2/5 p-2 bg-lightGreenCard rounded shadow lg:h-24 lg:p-8">
                            <a href="/corporate/listings/quota_usage">
                                <p className="pb-2 font-light text-sm md:text-base ">
                                    Quota Summary
                                </p>
                                <LinearProgress
                                    variant="determinate"
                                    value={78}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="p-2 mt-4 md:mt-4 w-full h-full  bg-lightGreenCard rounded shadow">
                        <div className="w-full h-2/6">
                            <p className="text-center">Manage Listings</p>
                            <div className="flex justify-between items-center px-2  bg-lightGreenCard rounded shadow">
                                Filters
                                <div className="px-1 py-2 w-4/5 md:w-full flex overflow-x-auto items-center">
                                    {filters.map((d) => {
                                        if (d.isToggleOn) {
                                            return (
                                                <ToggleSwitch
                                                    width={d.width}
                                                    onLabel={d.onLabel}
                                                    offLabel={d.offLabel}
                                                    isToggleOn={d.isToggleOn}
                                                    // handleChange={}
                                                />
                                            );
                                        }
                                        if (d.input) {
                                            return (
                                                <div className="mx-1 w-full">
                                                    <MyInput
                                                        style={'w-[10rem]'}
                                                        filterInput={true}
                                                        name={d.label}
                                                        value={d.value}
                                                        onChange={d.setValue}
                                                    />
                                                </div>
                                            );
                                        }
                                        if (d.select) {
                                            return (
                                                <div className="w-full">
                                                    <CustomSelect
                                                        transparent={true}
                                                        withoutMargin={true}
                                                        style={'w-[10rem]'}
                                                        value={d.value}
                                                        onChange={(e: any) =>
                                                            d.setValue(
                                                                e.target.value
                                                            )
                                                        }
                                                        label={d.label}
                                                        options={d.options}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
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
                        </div>
                        <div className="pt-2 h-4/6 ">
                            <DataGrid
                                editMode="row"
                                columns={columns}
                                rows={data}
                                pageSize={15}
                                // checkboxSelection
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                                getRowId={(row: any) => row.ref}
                                // showToolbar
                                density={isMobile ? 'compact' : 'standard'}
                                className="h-full"
                                // disableSelectionOnClick
                                // experimentalFeatures={{ newEditingApi: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
