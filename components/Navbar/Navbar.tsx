import React, { useEffect, useRef, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuAppBar from '../Appbar/index';
import styles from './navbar.module.css';
import MyList from '../ListSideBar';

export default function Navbar({ selectedLink, clientUser, login }: any) {
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
                />
            </Drawer>
        </React.Fragment>
    );
}
