import { makeStyles } from '@mui/styles';
import { clientLinks, corporateLinks } from '../dynamicdata/links';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState,useEffect } from 'react';
import { db, resetDatabase } from '../../db';

const useStyles = makeStyles({
    list: {},
    fullList: {
        width: 'auto',
        backgroundColor: 'red',
    },
});
let hideList = ['User Listings', 'Add User'] 
const MyList = ({
    anchor,
    setState,
    state,
    toggleDrawer,
    selectedLink,
    clientUser,
    indexPage,
}: any) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem]: any = useState(0);
    const [selectedList, setSelectedList]: any = useState([]);
    // async function getSelectedLinkList(){
        // let selectedLinkList: any = corporateLinks;
        // if (clientUser) {
        //     selectedLinkList = clientLinks;
        // }
    //     // console.log(selectedLinkList.slice(1,3),'SLECTD ')

    //     let corporateUser = await db.table('corporate').toArray();
    //     // console.log(JSON.parse(corporateUser),"user list SIdeBar")    
    //     // if()
    //     if(corporateUser[0].userRoleID == 3){
    //         selectedLinkList.splice(1,2)
        
    //     }
    //     console.log(selectedLinkList,"SELECTEDLINK")

    //     setSelectedList(selectedLinkList)
    
    // }
    useEffect(()=>{
        // getSelectedLinkList()
        let selectedLinkList: any = corporateLinks;
        if (clientUser) {
            selectedLinkList = clientLinks;
        }
        setSelectedList(selectedLinkList)


        },[db])
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
                {anchor && (
                    <div
                        className="text-yellow-900 "
                        style={{
                            height: '56px',
                            background: clientUser
                                ? indexPage
                                    ? 'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)'
                                    : 'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)'
                                : 'linear-gradient(220deg, #0d47a1 20%,#1e88e5 95%, #64b5f6 100%)',

                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowBackIcon style={{ color: '#ffffff' }} />
                        <h6 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                            Lookin
                            <p className="text-xs">Properties</p>
                        </h6>
                    </div>
                )}
                <Divider />
                {selectedList.map((link: any, index: any) => {
                    return selectedLink == link.label ? (
                        <ListItem
                            button
                            key={index}
                            sx={{ padding: 0, color: '#0d47a1' }}
                            className="w-full h-12 text-baseColor p-0 py-1 flex items-center  shadow md:text-xl  "
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
                            className="text-gray-500 flex items-center md:text-xl "
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
