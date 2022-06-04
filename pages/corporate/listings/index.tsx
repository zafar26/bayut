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
import { useEffect, useState,useCallback } from 'react';
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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { onDelete } from '../../../helpers/apis/delete';
import { onApprove } from '../../../helpers/apis/approve';
import Box from '@mui/material/Box';

// const useStyles() = makeStyles((theme) => ({
//     root: {
//         z-index: 500,
//     }
// }))
const Listings = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState('');
    const [subCategories, setSubCategories] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    const [filterButtonEl, setFilterButtonEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        // console.log(anchorEl, 'EVENt');
        setAnchorEl(null);
    };
    function CustomToolbar({setFilterButtonEl}) {
        return (
            <GridToolbarContainer className="flex justify-between">
                 <GridToolbarFilterButton ref={setFilterButtonEl} />
                <div className="flex ">

                listings
             
                {/* <MyInput  placeholder="Hello" value={searchValue} onChange={(e)=> {console.log(e.target.value);setSearchValue(e.target.value)}}/> */}
                </div>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    const columns = [
        // {
        //     field: 'ref',
        //     headerName: 'ref',
        //     width: isMobile ? 100 : 100,
        // },
        {
            field: 'listedBy',
            headerName: 'Listed By',
            headerClassName: 'super-app-theme--header',
            width: isMobile ? 120 : 120,
        },
        {
            field: 'type',
            headerName: 'Type',
            headerClassName: 'super-app-theme--header',
            width: isMobile ? 100 : 100,
            editable: true,
        },
        {
            field: 'purpose',
            headerName: ' Purpose',
            headerClassName: 'super-app-theme--header',
            width: isMobile ? 100 : 100,
        },
        {
            field: 'location',
            headerName: 'Location',
            headerClassName: 'super-app-theme--header',
            width: isMobile ? 130 : 280,
        },
        { field: 'price', headerName: 'Price', width: isMobile ? 120 : 120 , headerClassName: 'super-app-theme--header',},
        { field: 'beds', headerName: 'Beds', width: isMobile ? 70 : 80 ,  headerClassName: 'super-app-theme--header',},
       
        { field: 'status', headerName: 'Status', width: isMobile ? 80 : 100,  headerClassName: 'super-app-theme--header', },

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
            headerClassName: 'super-app-theme--header',
            // width: isMobile ? 100 : 100,
            minWidth:isMobile ? 100 : 100,
            flex: 1,
            // componentsProps(params: any) {
            //     return <div style={{ background: 'yellow' }}>{params}</div>;
            // },
            renderCell: (data: any) => {
                // console.log(data.id, 'DATA RENDER CELL');
                // return (
                //     <div>
                //         {/* <IconButton>
                //             <PersonIcon />
                //         </IconButton> */}
                //         <IconButton
                //             aria-label="account of current user"
                //             aria-controls="menu-appbar"
                //             aria-haspopup="true"
                //             onClick={handleMenu}
                //             color="inherit"
                //         >
                //             <div
                //             // className={classes.account}
                //             // style={{ color: '#FFFFFF' }}
                //             >
                //                 <MoreVertIcon
                //                     onClick={() => alert('clicked')}
                //                 />
                //                 {/* <AccountCircle fontSize="large" /> */}
                //             </div>
                //         </IconButton>
                //         <Menu
                //             id="menu-appbar"
                //             anchorEl={anchorEl}
                //             anchorOrigin={{
                //                 vertical: 'bottom',
                //                 horizontal: 'left',
                //             }}
                //             keepMounted
                //             // transformOrigin={{
                //             //     vertical: 'bottom',
                //             //     horizontal: 'left',
                //             // }}
                //             open={open}
                //             onClose={handleClose}
                //         >
                //             <MenuItem
                //                 onClick={handleClose}
                //                 className="flex items-center justify-center text-sm"
                //             >
                //                 <EditIcon
                //                     className="mr-2 text-green-600"
                //                     fontSize={isMobile ? 'small' : 'medium'}
                //                     // color="error"
                //                 />
                //                 Edit Listing
                //             </MenuItem>
                //             <MenuItem
                //                 onClick={handleClose}
                //                 className="flex items-center justify-center text-sm"
                //             >
                //                 <DeleteIcon
                //                     className="mr-2 text-red-600"
                //                     fontSize={isMobile ? 'small' : 'medium'}
                //                 />
                //                 Delete Listing
                //             </MenuItem>
                //         </Menu>
                //     </div>
                // );
                return (
                    <div className="flex">
                        <CheckCircleOutlineIcon
                            className="mr-2 "
                            fontSize={'large'}
                            color={data.isActive ? 'disabled' : 'success'}
                            onClick={() => onActionClicked(data, 'Check')}
                        />

                        <DeleteIcon
                            className="mr-2 "
                            fontSize={'large'}
                            color="error"
                            onClick={() => onActionClicked(data, 'Delete')}
                        />
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
            console.log(r, 'RESULT');
            setData(r.data.responseData.data.tableData);
        });
    }, []);
    function onActionClicked(data: any, type: string) {
        let body: any = {
            propertyid: data.propertyId,
            type: 'property',
        };
        if (type == 'Delete') {
            onDelete(body)
                .then((r: any) => {
                    if (r.data.responseData.data) {
                        console.log('TRUEEEEEEEEEEEEEE');
                    }
                })
                .catch((e: any) => console.log(e, 'ERror'));
        }
        if (type == 'Check') {
            onApprove(body)
                .then((r: any) => {
                    if (r.data.responseData.data) {
                        console.log('TRUEEEEEEEEEEEEEE');
                    }
                })
                .catch((e: any) => console.log(e, 'ERror'));
        }
    }
    function getSearchValue(){
        if(searchValue!= ""){
            let totalRows:any = data
            let rowsData:any = []
            for (let i =0; i<totalRows.length;i++){
                // console.log(totalRows[i],'TOTALROW')
                let valLength:any = Object.values(totalRows[i])
                for (let j=0; j<valLength.length;j++){
                    let singleVal:string = valLength[j] + " "
                    console.log(singleVal.toLocaleLowerCase(),searchValue,'SEARCH VALUEE')
                    if(singleVal.toLocaleLowerCase().startsWith(searchValue)){
                        console.log('\n\n\n\ INSERTING')
                        rowsData.push(totalRows[i])
                        break
                    }
                }
                console.log('COntinuing')
            }
            console.log(rowsData,'ROWSDATA')
            setfilteredData(rowsData)
        }
    }
    const [filterValue, setFilterValue] = useState<any>();
    const onFilterChange = useCallback((filterModel) => {
        setFilterValue(filterModel.items[0].value);
      }, []);
    // const classes = useStyles();
    return (
        <div className="pt-14 md:pt-16 w-screen h-screen ">
            {isMobile ? (
                <Navbar selectedLink={'Property Listings'} />
            ) : (
                <MenuAppBar />
            )}
            <div className="md:flex w-full justify-between h-full ">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'Property Listings'}
                        />
                    </div>
                )}
                <div className="p-2 md:w-5/6  h-full ">
                    <div className="flex justify-between">
                        {/* <div className="w-32 md:w-2/5 p-2  bg-lightGreenCard rounded shadow lg:h-24 lg:p-8">
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
                        </div> */}
                    </div>
                    <div className="p-2 mt-4 md:mt-4 w-full h-full  rounded shadow">
                        <div className="w-full ">
                            <p className="text-center text-2xl ">Manage Listings</p>
                            {/* <div className="flex justify-between items-center px-2   rounded shadow">
                                Filters
                                <div className="px-1 py-2 w-4/5 md:w-full flex overflow-x-auto items-center justify-between">
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
                            </div> */}
                            {/* <div className="pt-1 md:pt-1 flex  justify-center">
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
                            </div> */}
                        </div>
                        <div>
                            <MyInput
                                name="search"
                                value={searchValue}
                                onChange={setSearchValue}
                                onBlur={(e)=> {
                                    if(e.target.value != ""){
                                        getSearchValue()
                                    }else{
                                        setData(data)
                                    }
                                
                                }
                                
                                }/>
                        </div>
                        <div className="pt-2 h-full text-xl">
                        <Box
                            sx={{
                                height: '100%',
                                // width: ,
                                '& .super-app-theme--header': {
                                backgroundColor: '#4B5D67',
                                color:'#F9F9F9'
                                },
                            }}
                            >
                            <DataGrid
                                editMode="row"
                                columns={columns}
                                rows={filteredData.length > 0 ? filteredData : data }
                                pageSize={15}
                                // checkboxSelection
                                sx={{
                                    // boxShadow: 2,
                                    // border: 2,
                                    // borderColor: 'primary.light',
                                    // '& .MuiDataGrid-cell:hover': {
                                    //   color: 'primary.main',
                                    // },
                                  }}
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                                getRowId={(row: any) => row.ref}
                                // showToolbar
                                // componentsProps={{
                                //     panel: {
                                //       anchorEl: filterButtonEl,
                                //     },
                                //     toolbar: {
                                //       setFilterButtonEl,
                                //     },
                                //   }}
                                filterMode="server"
                                onFilterModelChange={onFilterChange}

                                density={isMobile ? 'compact' : 'comfortable'}
                                
                                className="h-5/6 text-xl"
                                // disableSelectionOnClick
                                // experimentalFeatures={{ newEditingApi: true }}
                            />
                            </Box>
                            {/* <table className="table-fixed w-full">
                            <thead className="border ">
                                <tr >
                                <th className="p-4 ">Listed By</th>
                                <th>Type</th>
                                <th>Purpose</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Beds</th>
                                <th>Status</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d=>
                                <tr className="border">
                                    {Object.entries(d).map(e=>
                                <td className="border  py-4 px-1  ">{e[1]}</td>)}
                                {/* <td>songName</td>
                                <td>songName</td>
                                <td>songName</td>
                                <td>songName</td>
                                <td>songName</td>
                                <td>songName</td> */}
                                {/* <td>
                                    <div className="flex">
                                        <CheckCircleOutlineIcon
                                            className="mr-2 "
                                            fontSize={'large'}
                                            color={data.isActive ? 'disabled' : 'success'}
                                            onClick={() => onActionClicked(data, 'Check')}
                                        />

                                        <DeleteIcon
                                            className="mr-2 "
                                            fontSize={'large'}
                                            color="error"
                                            onClick={() => onActionClicked(data, 'Delete')}
                                        />
                                    </div>
                                </td>
                            </tr>)}
                            </tbody>
                            </table>  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
