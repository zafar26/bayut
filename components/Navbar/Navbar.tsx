import React, { useEffect, useRef, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuAppBar from '../Appbar/index';
import styles from './navbar.module.css';
import MyList from '../ListSideBar';
import { db } from '../../db';

export default function Navbar({
    selectedLink,
    clientUser,
    login,
    setUserSigned,
    indexPage,
}: any) {
    const [state, setState]: any = useState({ left: false });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    let left: string = 'left';

    return (
        <React.Fragment key={left}>
            <MenuAppBar
                className={styles.container}
                toggleDrawer={toggleDrawer}
                client={clientUser}
                login={login}
                setUserSigned={setUserSigned}
                selectedLink={selectedLink}
                indexPage={indexPage}
            />
            <Drawer
                className={styles.drawer}
                anchor={'left'}
                open={state[left]}
                onClose={toggleDrawer(left, false)}
            >
                <MyList
                    anchor={left}
                    setState={setState}
                    state={state}
                    toggleDrawer={toggleDrawer}
                    selectedLink={selectedLink}
                    clientUser={clientUser}
                    indexPage={indexPage}
                />
            </Drawer>
        </React.Fragment>
    );
}
