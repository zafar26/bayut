import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import MenuAppBar from '../Appbar/index';
import styles from './navbar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import BookIcon from '@mui/icons-material/Book';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useViewportScroll } from 'framer-motion';

const useStyles = makeStyles({
    list: {},
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
    let left: string = 'left';

    return (
        <React.Fragment key={left}>
            <MenuAppBar
                className={styles.container}
                toggleDrawer={toggleDrawer}
            />
            <Drawer
                className={styles.drawer}
                anchor={'left'}
                open={state[left]}
                onClose={toggleDrawer(left, false)}
            >
                {list(left)}
            </Drawer>
        </React.Fragment>
    );
}
