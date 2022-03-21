import { makeStyles } from '@mui/styles';
import { clientLinks, corporateLinks } from '../dynamicdata/links';
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
    clientUser,
}: any) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem]: any = useState(0);
    let selectedLinkList: any = corporateLinks;
    if (clientUser) {
        selectedLinkList = clientLinks;
    }
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
                        background: clientUser
                            ? '#630606'
                            : 'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)',

                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <ArrowBackIcon style={{ color: '#ffffff' }} />
                    <h6 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                        Vlook
                    </h6>
                </div>
                <Divider />
                {selectedLinkList.map((link: any, index: any) => {
                    return selectedLink == link.label ? (
                        <ListItem
                            button
                            key={index}
                            sx={{ padding: 0, color: '#0d47a1' }}
                            className="w-full h-12 text-baseColor p-0 py-1 flex items-center  shadow  "
                        >
                            <div className="w-1 h-full   bg-baseColor rounded-xl">
                                i
                            </div>
                            <div className="w-full flex px-2   ">
                                <div className="mr-2">{link.icon()}</div>
                                <Link href={`${link.path}`}>{link.label}</Link>
                            </div>
                            <div className="w-1 h-full bg-baseColor rounded-xl">
                                i
                            </div>
                        </ListItem>
                    ) : (
                        <ListItem
                            button
                            key={link.label}
                            sx={{ color: 'GrayText' }}
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
