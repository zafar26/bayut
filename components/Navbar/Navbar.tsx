import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import MenuAppBar from '../Appbar/index';
import styles from './navbar.module.css';
import HomeIcon from '@material-ui/icons/Home';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BusinessIcon from '@material-ui/icons/Business';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import BookIcon from '@material-ui/icons/Book';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useViewportScroll } from 'framer-motion';

const useStyles = makeStyles({
    fullList: {
        width: 'auto',
        backgroundColor: 'red',
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [state, setState]: any = React.useState({ left: false });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const links = {
        Home: {
            path: '/',
            icon: () => <HomeIcon style={{ color: '#0d47a1' }} />,
        },
        Approvals: {
            path: '/approvals',
            icon: () => <DoneAllRoundedIcon style={{ color: '#0d47a1' }} />,
        },
        ['Financial Position']: {
            path: '/financial',
            icon: () => <BusinessIcon style={{ color: '#0d47a1' }} />,
        },
        ['Recivable Payable']: {
            path: '/recivable',
            icon: () => (
                <AccountBalanceWalletIcon style={{ color: '#0d47a1' }} />
            ),
        },
        ['Trail Balance']: {
            path: '/trailBalance',
            icon: () => <ListAltIcon style={{ color: '#0d47a1' }} />,
        },
        ['Balance Sheet']: {
            path: '/balanceSheet',
            icon: () => <InsertChartIcon style={{ color: '#0d47a1' }} />,
        },
        ['P/L Normal']: {
            path: '/plNormal',
            icon: () => <TrendingUpIcon style={{ color: '#0d47a1' }} />,
        },
        Profitability: {
            path: '/profitability',
            icon: () => <BookIcon style={{ color: '#0d47a1' }} />,
        },
        Cashbook: {
            path: '/cashbook',
            icon: () => <SettingsIcon style={{ color: '#0d47a1' }} />,
        },
        Settings: {
            path: '/settings',
        },
    };
    const list = (anchor: any) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{ paddingTop: 0 }}>
                <div
                    style={{
                        height: '67px',
                        backgroundColor: '#fff',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <ArrowBackIcon style={{ color: '#0d47a1' }} />
                    <h6 style={{ color: '#0d47a1', fontSize: '1.25rem' }}>
                        FinBook Lite
                    </h6>
                </div>
                <Divider />
                {Object.entries(links).map((text: any, index) => (
                    <ListItem button key={text[0]} style={{ color: 'gray' }}>
                        {text[1].icon && text[1].icon()}
                        {console.log(text, 'TEXTS')}
                        <Link href={`${text[1].path}`}>{text[0]}</Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    let left = 'left';

    return (
        <React.Fragment key={left}>
            <MenuAppBar
                className={styles.container}
                toggleDrawer={toggleDrawer}
            />
            <Drawer
                className={styles.drawer}
                anchor={left}
                open={state[left]}
                onClose={toggleDrawer(left, false)}
            >
                {list(left)}
            </Drawer>
        </React.Fragment>
    );
}
