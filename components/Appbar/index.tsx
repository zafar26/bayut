import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import MyInput from '../Input';
import { db, resetDatabase } from '../../db';
import axios from 'axios';
import { clientLinks } from '../dynamicdata/links';
import Link from 'next/link';
import { ListItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Vlook from '../../public/vlook.png';
import { myPublicLoader } from '../../helpers/helper';

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100vw',
        padding: 0,
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        color: 'white',
    },
    title: {
        flexGrow: 1,
        color: '#21209c',
    },
    account: {
        flexGrow: 1,
        float: 'right',
        color: '#21209c',
    },
}));

export default function MenuAppBar({
    toggleDrawer,
    client,
    setUserSigned,
    selectedLink,
    indexPage,
}: any) {
    const classes = useStyles();
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem]: any = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');

    const open = Boolean(anchorEl);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    useEffect(() => {
        db.table('corporate')
            .toArray()
            .then((agent: any) => {
                if (agent.length >= 1 && agent[0].token && !client) {
                    setAuth(true);
                    setName(agent[0].name);
                } else {
                    db.table('user')
                        .toArray()
                        .then((user: any) => {
                            console.log(user, 'USER DATA INDEXED DB');
                            if (user.length >= 1 && user[0].token) {
                                setAuth(true);
                                setName(user[0].name);
                                setUserSigned(true);
                            }
                        });
                }
            });
    }, [db]);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onLogOut = (client: any) => {
        resetDatabase();
        if (client) {
            router.push('/');
        } else {
            router.push('/corporate/login');
        }
    };
    async function onSubmit() {
        try {
            if (email == '' && password == '') {
                alert('Please Enter Email and Password');
                return;
            }
            // console.log('CLicked', process.env.ServerURL);
            const { data } = await axios.post(
                'http://syed333-001-site1.ftempurl.com/Users/signin',
                {
                    username: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (data.statusCode == 200) {
                // alert(data, 'Data');
                console.log('DATA', data.responseData.data);
                const id = await db.user.add(data.responseData.data);
                setAuth(true);
                setUserSigned(true);
                return;
            }
            return;
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    }
    if (client && !isMobile) {
        return (
            <div
                // style={{
                //     background: indexPage ? "#4b1037":'#4b1037',
                //     // color:"#4b1037"
                // }}
                className={`w-full absolute left-0 bg-[#4b1037] top-0 flex justify-between items-center px-2 py-4 `}
            >
                <div className="w-1/6">
                    <Image
                        src={indexPage ? 'whitelogo.svg' : 'whitelogo.svg'}
                        loader={myPublicLoader}
                        layout={'fixed'}
                        width={120}
                        height={50}
                    />

                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="3168.5393258426966" 
                    height="1280.8988764044943" viewBox="0 0 3168.5393258426966 1280.8988764044943">
                        
                        <g transform="scale(8.426966292134832) translate(10, 10)">
                            <defs id="SvgjsDefs1033"></defs><g id="SvgjsG1034" featureKey="symbolFeature-0" transform="matrix(1.3678206296595798,0,0,1.3678206296595798,-18.61467123079959,-1.9928044152789077)" fill="#4a0d37"><g xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M80.11,49.695c0.003,5.951,1.481,10.771,3.303,10.771   c1.823,0,3.302-4.824,3.305-10.768c-0.003-5.951-1.479-10.773-3.303-10.773C81.591,38.926,80.107,43.748,80.11,49.695z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.138,14.154c-15.075,6.26-25.529,19.93-25.529,35.779   c-0.004,15.852,10.454,29.52,25.536,35.777C30.504,78.232,24.764,65,24.764,49.934S30.508,21.637,39.138,14.154z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.349,10.23c-7.066,0-12.803,17.854-12.803,39.857   c0,22.016,5.736,39.859,12.808,39.861c3.491-0.002,6.66-4.367,8.969-11.438c1.954,4.756,4.414,7.598,7.084,7.598   c6.367,0.002,11.532-16.066,11.527-35.883c0.005-19.816-5.156-35.887-11.521-35.879c-2.651,0-5.093,2.797-7.041,7.484   C56.057,14.668,52.871,10.234,49.349,10.23z M75.225,50.227c0.005,11.121-2.764,20.143-6.174,20.143   c-3.412,0-6.176-9.023-6.176-20.139c0-11.127,2.764-20.146,6.176-20.15C72.465,30.084,75.229,39.102,75.225,50.227z M57.792,23.318   c-2.395,6.576-3.907,16.191-3.907,26.908c-0.001,10.623,1.484,20.166,3.841,26.736c-1.15,1.559-2.418,2.424-3.748,2.424   c-5.202-0.004-9.414-13.117-9.414-29.299c0-16.174,4.212-29.293,9.407-29.293C55.333,20.797,56.626,21.701,57.792,23.318z"></path></g></g><g id="SvgjsG1035" featureKey="textGroupContainer" transform="matrix(1,0,0,1,355,0)" fill="#4a0d37"><rect xmlns="http://www.w3.org/2000/svg" y="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="0" x="-235" width="3" height="132"></rect></g><g id="SvgjsG1036" featureKey="vMvB0T-0" transform="matrix(2.8200790350214175,0,0,2.8200790350214175,133.7698838007252,15.966722736048116)" fill="#4a0d37"><path d="M6.58 17.3 l3.46 0 q0 0.8 -0.1 1.37 t-0.64 0.98 t-1.42 0.41 l-4.52 0 q-0.86 0 -1.36 -0.5 t-0.5 -1.36 l0 -11.86 l0.14 -0.14 l1.18 0 q1.88 0 1.88 2.04 l0 9.14 q0.88 -0.08 1.88 -0.08 z M14.64 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M13.02 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M27.98 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M26.36 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M49.120000000000005 19.22 q-0.68 0.96 -2.12 0.96 q-0.82 0 -1.23 -0.42 t-0.71 -1.42 l-0.76 -2.34 q-0.3 -0.94 -0.72 -1.34 t-1.14 -0.4 q-0.24 0 -0.88 0.04 l0 5.7 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.6 0.12 l0 5.28 l0.52 -0.02 q0.36 0 0.52 -0.13 t0.38 -0.55 l1.9 -3.58 q0.3 -0.62 0.64 -0.87 t1.06 -0.25 q0.8 0 1.86 0.1 l0.18 0.22 l-2.44 4.6 q-0.46 0.92 -1.12 1.46 q0.94 0.2 1.41 0.76 t0.79 1.5 l0.82 2.48 q0.16 0.46 0.24 0.68 t0.4 0.74 q0.14 0.2 0.4 0.46 z M55.220000000000006 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z M72.28 6.199999999999999 l0.14 0.14 l0 13.6 q-0.8 0.18 -1.89 0.18 t-1.93 -0.12 l-3.14 -7.16 q-0.56 -1.22 -1.14 -2.82 l-0.06 0.02 q0.24 2.92 0.24 5.98 l0 3.98 q-0.62 0.12 -1.5 0.12 t-1.48 -0.12 l0 -13.6 q0.76 -0.18 1.83 -0.18 t1.91 0.12 l3.1 7.14 q0.84 1.98 1.24 3.04 l0.08 -0.04 q-0.24 -2.78 -0.24 -5.9 l0 -2.44 q0 -1.04 0.42 -1.49 t1.36 -0.45 l1.06 0 z"></path></g><g id="SvgjsG1037" featureKey="sloganFeature-0" transform="matrix(1.1462306066317833,0,0,1.1462306066317833,136.2577290898583,76.07676717966925)" fill="#4a0d37"><path d="M6.3 15.719999999999999 l-1.58 0 l0 4.28 q-0.64 0.12 -1.6 0.12 q-0.98 0 -1.6 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.89 -0.06 t1.75 -0.02 q1.1 0 2.01 0.3 t1.55 0.9 t0.99 1.49 t0.35 2.05 t-0.36 2.05 t-1 1.49 t-1.55 0.91 t-1.99 0.31 z M4.72 8.66 l0 4.66 q0.56 -0.02 0.89 -0.03 t0.43 -0.01 q0.54 0 0.9 -0.19 t0.58 -0.5 t0.32 -0.73 t0.1 -0.88 q0 -0.44 -0.1 -0.86 t-0.31 -0.74 t-0.55 -0.51 t-0.8 -0.19 l-0.82 0 t-0.64 -0.02 z M26.432000000000002 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M19.812 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M34.964 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M33.344 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M53.455999999999996 15.719999999999999 l-1.58 0 l0 4.28 q-0.64 0.12 -1.6 0.12 q-0.98 0 -1.6 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.89 -0.06 t1.75 -0.02 q1.1 0 2.01 0.3 t1.55 0.9 t0.99 1.49 t0.35 2.05 t-0.36 2.05 t-1 1.49 t-1.55 0.91 t-1.99 0.31 z M51.876 8.66 l0 4.66 q0.56 -0.02 0.89 -0.03 t0.43 -0.01 q0.54 0 0.9 -0.19 t0.58 -0.5 t0.32 -0.73 t0.1 -0.88 q0 -0.44 -0.1 -0.86 t-0.31 -0.74 t-0.55 -0.51 t-0.8 -0.19 l-0.82 0 t-0.64 -0.02 z M66.928 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z M88.38 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M81.76 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M99.19200000000001 8.98 l0.02 1.48 l0 9.54 q-0.68 0.12 -1.62 0.12 t-1.58 -0.12 l0 -11.02 l-1.28 0.02 l-2.06 0 q-0.12 -0.58 -0.12 -1.33 t0.12 -1.33 l9.9 0 q0.16 0.52 0.16 1.26 t-0.4 1.07 t-1.28 0.33 l-0.58 0 l-1.26 -0.02 l-0.02 0 z M107.584 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z M120.356 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z M130.788 18.82 q0.06 -0.66 0.41 -1.32 t0.83 -1.08 q2.14 1.3 4.06 1.3 q0.84 0 1.23 -0.38 t0.39 -0.94 q0 -0.94 -1.26 -1.48 l-2.36 -1 q-1.38 -0.62 -2.12 -1.49 t-0.74 -2.21 q0 -0.92 0.37 -1.68 t1.04 -1.32 t1.59 -0.87 t2.04 -0.31 q2.24 0 4.52 1.14 q-0.1 1.54 -1.08 2.4 q-2.04 -0.98 -3.6 -0.98 q-0.8 0 -1.2 0.36 t-0.4 0.82 q0 0.78 1.18 1.26 l2.4 1.02 q1.52 0.64 2.27 1.64 t0.75 2.32 q0 0.94 -0.34 1.72 t-1.01 1.35 t-1.67 0.89 t-2.34 0.32 q-2.6 0 -4.96 -1.48 z"></path></g>
                        </g>
                    </svg> */}
                
                    {/* <h1 className="text-xl">Lookin</h1>
                    <p className="text-xs">Properties</p> */}
                </div>
                <div className="flex w-3/6 justify-between">
                    {clientLinks.map((link: any, index: any) => {
                        return selectedLink === link.label ? (
                            <ListItem
                                button
                                key={index}
                                sx={{
                                    padding: 0,
                                }}
                                className={`ml-2 w-full flex items-center ${
                                    indexPage
                                        ? 'bg-white'
                                        : 'bg-white'
                                } opacity-100 p-0 py-1   shadow  rounded hover:bg-gray-200 `}
                                onClick={() => router.push(link.path)}
                            >
                                <div
                                    className="w-full bg-white justify-center flex items-center px-2 	"
                                    onClick={() => router.push(link.path)}
                                >
                                    <div className="mr-2">{link.icon()}</div>
                                    <Link href={`${link.path}`}>
                                        <a>{link.label}</a>
                                    </Link>
                                </div>
                            </ListItem>
                        ) : (
                            <ListItem
                                button
                                key={link.label}
                                className={`ml-2 w-full ${
                                    indexPage
                                        ? 'text-white'
                                        : 'text-white'
                                } opacity-100 flex items-center justify-center hover:bg-gray-200 rounded hover:text-green-600`}
                                onClick={() => setSelectedItem(index)}
                            >
                                <div className="mr-2">{link.icon()}</div>
                                <Link href={auth ? `${link.authPath}`: `${link.path}`}>
                                    <a>{auth ? link.authLabel : link.label}</a>
                                </Link>
                            </ListItem>
                        );
                    })}
                </div>

                {/* <button
                    className={`ml-2 w-40 px-4 py-2 bg-white rounded flex justify-center items-center bg-primary text-white hover:bg-white hover:text-primary`}
                    onClick={handleMenu}
                >
                    <AccountCircleIcon />
                    <p className="text-sm pl-2">LOGIN</p>
                </button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    onClose={handleClose}
                    className="p-0 bg-[#000000]"
                    style={{
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    }}
                >
                    <div className=" p-4 w-full h-full bg-[#000000] ">
                        {/* <MenuItem onClick={handleClose}>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Log out
                                    </MenuItem> */}
                        {/* <div className="md:w-72 ">
                            <MyInput
                                name="Email"
                                value={email}
                                onChange={setEmail}
                            />
                            <MyInput
                                name="Password"
                                type="password"
                                value={password}
                                onChange={setPassword}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        </div>
                        <div className="mt-4 w-full bg-green-700 rounded">
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                onClick={() => {
                                    // console.log('Submited');
                                    onSubmit();
                                }}
                            >
                                Login
                            </Button>
                        </div>
                        <p className="pt-4 text-white text-center ">
                            Are You New To vlook properties
                        </p>
                        <div className="w-full flex justify-center">
                            {/* <Link href="/corporate/signup?signup=2 "> */}
                            {/* <Link href="/corporate/signup?signupas=2">
                                <a className="mt-4 w-full border-white border text-white p-2 text-center hover:bg-gray-800">
                                    Become a Free Member
                                </a>
                            </Link>
                            {/* </Link> */}
                        {/* </div>
                    </div>
                </Menu> */}
            </div>
        );
        // return <div className="bg-transparent "></div>;
    }
    return (
        
        <AppBar
            position="fixed"
            color="transparent"
            style={{
                background: client
                    ? indexPage
                        ? ''
                        : '#4b1037'
                    : '#4b1037',
                    color:'#ecdbdc'
                // borderRadius: '0px 0px 10px 10px',
            }}
        >
            <Toolbar className="w-full flex justify-between">
                {toggleDrawer && (
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon
                            // color="inherit"
                            style={{ color: '#ecdbdc' }}
                            onClick={toggleDrawer('left', true)}
                        />
                    </IconButton>
                )}
                 <Image
                        src={indexPage ? 'logo.svg' : 'whitelogo.svg'}
                        loader={myPublicLoader}
                        layout={'fixed'}
                        width={120}
                        height={50}
                    />

                {/* <Typography
                    variant="h6"
                    className={classes.title}
                    style={{ color: '#FFFFFF' }}
                >
                    Lookin
                    <p className="text-xs">properties</p>
                </Typography> */}
                {/* {clientLinks.map((link: any, index: any) => {
                        return selectedLink == link.label ? (
                            <ListItem
                                button
                                key={index}
                                sx={{
                                    padding: 0,
                                }}
                                className={`ml-2 w-full flex items-center ${
                                    indexPage
                                        ? 'text-white'
                                        : 'bg-lime-100 text-[#005A8D]'
                                } opacity-80 p-0 py-1   shadow  rounded hover:bg-gray-200 `}
                                onClick={() => router.push(link.path)}
                            >
                                <div
                                    className="w-full flex items-center px-2 	"
                                    onClick={() => router.push(link.path)}
                                >
                                    <div className="mr-2">{link.icon()}</div>
                                    <Link href={`${link.path}`}>
                                        <a>{link.label}</a>
                                    </Link>
                                </div>
                            </ListItem>
                        ) : (
                            <ListItem
                                button
                                key={link.label}
                                className={`ml-2 w-full ${
                                    indexPage
                                        ? 'text-gray-400'
                                        : 'text-amber-50'
                                }  opacity-100 flex items-center  hover:bg-gray-200 rounded hover:text-green-600`}
                                onClick={() => setSelectedItem(index)}
                            >
                                <div className="mr-2">{link.icon()}</div>
                                <Link href={`${link.path}`}>
                                    <a>{link.label}</a>
                                </Link>
                            </ListItem>
                        );
                    })} */}
                {
                    <div>
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
                                className="text-[#ecdbdc]  flex items-center  "
                            >
                                {client && name && (
                                    <p className="text-xs p-0 mr-1  ">{name}</p>
                                )}
                                <AccountCircle fontSize="large"  />
                            </div>
                        </IconButton>
                        {auth ? (
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={() => onLogOut(client)}>
                                    Log out
                                </MenuItem>
                            </Menu>
                        ) : (
                            // <Menu
                            //     id="menu-appbar"
                            //     anchorEl={anchorEl}
                            //     anchorOrigin={{
                            //         vertical: 'top',
                            //         horizontal: 'right',
                            //     }}
                            //     keepMounted
                            //     transformOrigin={{
                            //         vertical: 'top',
                            //         horizontal: 'right',
                            //     }}
                            //     open={open}
                            //     onClose={handleClose}
                            //     className="p-0 "
                            //     style={{
                            //         paddingTop: '0px',
                            //         paddingBottom: '0px',
                            //     }}
                            // >
                            //     <div className=" p-4 w-full h-full bg-[#000000] ">
                            //         {/* <MenuItem onClick={handleClose}>
                            //             Settings
                            //         </MenuItem>
                            //         <MenuItem onClick={handleClose}>
                            //             Log out
                            //         </MenuItem> */}
                            //         <div className="md:w-72 ">
                            //             <MyInput
                            //                 name="Email"
                            //                 value={email}
                            //                 onChange={setEmail}
                            //             />
                            //             <MyInput
                            //                 name="Password"
                            //                 type="password"
                            //                 value={password}
                            //                 onChange={setPassword}
                            //                 showPassword={showPassword}
                            //                 setShowPassword={setShowPassword}
                            //             />
                            //         </div>
                            //         <div className="mt-4 w-full bg-green-700 rounded">
                            //             <Button
                            //                 fullWidth
                            //                 variant="contained"
                            //                 color="success"
                            //                 onClick={() => {
                            //                     // console.log('Submited');
                            //                     onSubmit();
                            //                 }}
                            //             >
                            //                 Login
                            //             </Button>
                            //         </div>
                            //         <p className="pt-4 text-white text-center ">
                            //             Are You New To vlook properties
                            //         </p>
                            //         <div className="w-full flex justify-center">
                            //             {/* <Link href="/corporate/signup?signup=2 "> */}
                            //             <Link href="/corporate/signup?signupas=2">
                            //                 <a className="mt-4 w-full border-white border text-white p-2 text-center hover:bg-gray-800">
                            //                     Become a Free Member
                            //                 </a>
                            //             </Link>
                            //             {/* </Link> */}
                            //         </div>
                            //     </div>
                            // </Menu>
                            ""
                        )}
                    </div>
                }
            </Toolbar>
        </AppBar>
        // </motion.div>
    );
}
MenuAppBar.getInitialProps = async (props: any) => {
    return {
        toggleDrawer: props.toggleDrawer,
    };
};
