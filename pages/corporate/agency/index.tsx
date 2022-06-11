import Navbar from '../../../components/Navbar/Navbar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LinearProgress from '@mui/material/LinearProgress';
import TuneIcon from '@mui/icons-material/Tune';
import CustomSelect from '../../../components/Select';
import { useEffect, useState } from 'react';
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
import { onManageUser } from '../../../helpers/apis/addUser';
import { NextRouter, useRouter } from 'next/router';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { onDelete } from '../../../helpers/apis/delete';
import { onApprove } from '../../../helpers/apis/approve';
import Box from '@mui/material/Box';

const Agency = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [loginAs, setLoginAs] = useState<String>('');
    const [usersData, setusersData] = useState<any>([]);
    const router: NextRouter = useRouter();

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
                <p className="self-start text-xs md:text-base">Users :</p>
                {/* <div className="p-0 w-24 shadow rounded flex items-center "> */}
                    {/* <CustomSelect
                        withoutMargin={true}
                        value={loginAs}
                        onChange={(e: any) => setLoginAs(e.target.value)}
                        label={'Users'}
                        options={loginOptions}
                    />
                </div> */}
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }
    useEffect(() => {
        onManageUser()
            .then((r: any) => {
                console.log(r, 'RESULT');
                if (!r.error) {
                    setusersData(r.data.responseData.data);
                }
            })
            .catch((e: any) => console.log(e, 'ERR'));
    }, []);
    const columns = [
        // {
        //     field: 'userId',
        //     headerClassName: 'super-app-theme--header',
        //     headerName: 'User ID',
        //     width: 80,
        // },
        // { field: 'guid', headerName: 'GU_ID', width: 200 },
        // { field: 'isActive', headerName: ' Active', width: 100 },
        // { field: 'age', headerName: 'Age', width: 90 },
        // { field: 'eyeColor', headerName: 'Eye Color', width: 120 },
        // { field: 'company', headerName: 'Company', width: 120 },
        { field: 'name', 
        headerClassName: 'super-app-theme--header',
            flex: 1,
            headerName: 'Name', width: 160 },
        { field: 'username', 
        headerClassName: 'super-app-theme--header',
            flex: 1,
            headerName: 'UserName', width: 200 },
        { field: 'mobileNo', 
        headerClassName: 'super-app-theme--header',
            flex: 1,
            headerName: 'Mobile No', width: 140 },
        { field: 'status', headerName: 'Status', width: 120,
        headerClassName: 'super-app-theme--header',
        renderCell: (data: any) => {
            console.log(data, 'DATA');
            return (
                <div className="w-full flex justify-around">
                    <CheckCircleOutlineIcon
                        className="mr-2 "
                        fontSize={'large'}
                        color={
                            data.row.status == 0 ? 'success' : 'disabled'
                        }
                        onClick={() => onActionClicked(data.row, 'Check')}
                    />

                  
                </div>
            );
        } },

        // { field: 'balance', headerName: 'beds', width: 120 },
        // { field: 'firstName', headerName: 'listedBy', width: 130 },
        // { field: 'lastName', headerName: 'status', width: 120 },
        // { field: 'registered', headerName: 'Registered On', width: 300 },
        // { field: 'latitude', headerName: 'Latitude', width: 120 },
        // { field: 'longitude', headerName: 'Longitude', width: 120 },
        {
            field: 'action',
            
            headerClassName: 'super-app-theme--header',
            headerName: 'Actions',
            // width: 120,
            flex: 1,

            renderCell: (data: any) => {
                console.log(data, 'DATA');
                return (
                    <div className="w-full flex justify-start">
                        {/* <CheckCircleOutlineIcon
                            className="mr-2 "
                            fontSize={'large'}
                            color={
                                data.row.status == 0 ? 'success' : 'disabled'
                            }
                            onClick={() => onActionClicked(data.row, 'Check')}
                        /> */}

                        <DeleteIcon
                            className="mr-2 "
                            fontSize={'large'}
                            color="error"
                            onClick={() => onActionClicked(data.row, 'Delete')}
                        />
                    </div>
                );
            },
        },
    ];
    function onActionClicked(data: any, type: string) {
        let body: any = {
            userid: data.userId,
            type: 'user',
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
            {isMobile ? (
                <Navbar selectedLink={'User Listings'} />
            ) : (
                <MenuAppBar />
            )}
            <div className=" flex w-full h-full">
                {!isMobile && (
                    <div className="w-1/6 h-full">
                        <MyList
                            toggleDrawer={(e: any, d: any) => console.log(e, d)}
                            selectedLink={'User Listings'}
                        />
                    </div>
                )}
                <div className="md:w-5/6 w-full">
                    <div className="p-2 ">
                        <div className=" flex  justify-between">
                            {/* <div className="w-44  bg-[#E8F6EF]  shadow p-2 rounded text-primary">
                                <p className="text-xs font-light">Date :</p>
                                <p className=" text-xs font-light">
                                    Jan 25, 2022 - Feb 25, 2022
                                </p>
                            </div> */}
                            {/* <div>
                                <button
                                    className="ml-2  flex items-center bg-[#E8F6EF]  shadow p-2 rounded text-primary"
                                    onClick={(e: any) =>
                                        router.push('/corporate/agency/adduser')
                                    }
                                >
                                    <PersonAddAltIcon
                                        fontSize={isMobile ? 'small' : 'medium'}
                                    />
                                    <a>
                                        <p className=" ml-2 text-xs font-light">
                                            Add New User
                                        </p>
                                    </a>
                                </button>
                            </div> */}
                        </div>
                        {/* <div className="mt-2 ">
                            <div className="w-32 md:w-2/5 p-2 bg-lightGreenCard rounded shadow">
                                <p className="pb-2 font-light text-sm">
                                    Quota Summary
                                </p>
                                <LinearProgress
                                    variant="determinate"
                                    value={78}
                                />
                            </div>
                        </div> */}
                        <p className="flex justify-center text-2xl">Manage Users</p>
                    </div>

                    <div className=" self-center w-full p-2 md:w-full h-4/5 md:h-full ">
                        <div className="w-full h-full rounded  ">
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',
                                '& .super-app-theme--header': {
                                    backgroundColor: '#ecdbdc',
                                    color:'#4b1037'
                                },
                            }}
                            >
                            <DataGrid
                                columns={columns}
                                rows={usersData}
                                pageSize={20}
                                getRowId={(row: any) => row.userId}
                                // checkboxSelection
                                components={{
                                    Toolbar: CustomToolbar,
                                }}
                                density={isMobile ? 'compact' : 'comfortable'}
                                disableSelectionOnClick
                                className="text-xl"
                            />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;
