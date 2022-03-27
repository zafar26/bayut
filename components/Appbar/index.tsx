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
import { db } from '../../db';
import axios from 'axios';

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

export default function MenuAppBar({ toggleDrawer, client }: any) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(false);
    const [email, setEmail] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    useEffect(() => {
        db.table('user')
            .toArray()
            .then((user: any) => {
                console.log(user, 'USER DATA');
                if (user.length >= 1 && user[0].token) {
                    setAuth(true);
                    setName(user[0].name);
                }
            });
    }, [db]);
    const handleClose = () => {
        setAnchorEl(null);
    };
    async function onSubmit() {
        try {
            if (email == '' && password == '') {
                alert('Please Enter Email and Password');
                return;
            }
            // console.log('CLicked', process.env.ServerURL);
            const { data } = await axios.post(
                'http://zaki786-001-site1.ftempurl.com/Users/signin',
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

    return (
        // <motion.div
        //     initial={{ y: -250 }}
        //     animate={{ y: 0 }}
        //     transition={{
        //         type: 'spring',
        //         stiffness: 260,
        //         damping: 20,
        //     }}
        //     className={classes.root}
        // >
        <AppBar
            position="fixed"
            color="transparent"
            style={{
                background: client
                    ? ''
                    : 'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)',
                // borderRadius: '0px 0px 10px 10px',
            }}
        >
            <Toolbar className="w-full flex justify-between">
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon
                        // color="inherit"
                        style={{ color: '#ffffff' }}
                        onClick={toggleDrawer('left', true)}
                    />
                </IconButton>
                <Typography
                    variant="h6"
                    className={classes.title}
                    style={{ color: '#FFFFFF' }}
                >
                    Vlook
                </Typography>

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
                                className="text-white  flex items-center  "
                            >
                                {name && (
                                    <p className="text-xs p-0 mr-1  ">{name}</p>
                                )}
                                <AccountCircle fontSize="large" />
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
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Log out
                                </MenuItem>
                            </Menu>
                        ) : (
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
                                className="p-0"
                            >
                                <div className=" p-4 w-full h-full bg-[#464E2E] ">
                                    {/* <MenuItem onClick={handleClose}>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Log out
                                    </MenuItem> */}
                                    <div className="md:w-72 ">
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
                                                console.log('Submited');
                                                onSubmit();
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                    <p className="pt-4 text-white text-center ">
                                        Are You New To vlook properties
                                    </p>
                                    <div className="mt-4 border-white border text-white p-2 text-center hover:bg-gray-800">
                                        <a>Become a Free Member</a>
                                    </div>
                                </div>
                            </Menu>
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
