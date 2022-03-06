import { makeStyles } from '@mui/styles';
import { corporateLinks } from '../dynamicdata/links';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const useStyles = makeStyles({
    list: {},
    fullList: {
        width: 'auto',
        backgroundColor: 'red',
    },
});

const MyList = ({
    anchor,
    setState,
    state,
    toggleDrawer,
    selectedLink,
}: any) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem]: any = useState(0);

    return (
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
                        height: '56px',
                        background:
                            'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)',

                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <ArrowBackIcon style={{ color: '#ffffff' }} />
                    <h6 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                        Bayut
                    </h6>
                </div>
                <Divider />
                {corporateLinks.map((link: any, index: any) => {
                    return selectedLink == link.label ? (
                        <ListItem
                            button
                            key={link.label}
                            className="w-full text-baseColor flex items-center p-0 shadow "
                        >
                            <div className="w-full flex px-2 py-3 border-x-2 border-baseColor">
                                <div className="mr-2">{link.icon()}</div>
                                <Link href={`${link.path}`}>{link.label}</Link>
                            </div>
                        </ListItem>
                    ) : (
                        <ListItem
                            button
                            key={link.label}
                            className="text-gray-500 flex items-center"
                            onClick={() => setSelectedItem(index)}
                        >
                            <div className="mr-2">{link.icon()}</div>
                            <Link href={`${link.path}`}>{link.label}</Link>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

export default MyList;
