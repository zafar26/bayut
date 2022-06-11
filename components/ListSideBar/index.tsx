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
import Image from 'next/image';
import { myPublicLoader } from '../../helpers/helper';

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
    async function getSelectedLinkList(){
        let selectedLinkList: any = corporateLinks;
        if (clientUser) {
            selectedLinkList = clientLinks;
        }
        // console.log(selectedLinkList.slice(1,3),'SLECTD ')

        let corporateUser = await db.table('corporate').toArray();
        // console.log(JSON.parse(corporateUser),"user list SIdeBar")    
        // if()
        if(corporateUser[0].userRoleID == 4 && !clientUser){
            // corporateLinks.splice(2,2)
            selectedLinkList.splice(2,2)
        
        }
        console.log(selectedLinkList,"SELECTEDLINK")

        setSelectedList(selectedLinkList)
    
    }
    useEffect(()=>{
        getSelectedLinkList()
        // let selectedLinkList: any = corporateLinks;
        // if (clientUser) {
        //     selectedLinkList = clientLinks;
        // }
        // setSelectedList(selectedLinkList)
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
                                    ? 'rgb(75,16,55)'
                                    : 'rgb(75,16,55)'
                                : 'rgb(75,16,55)',

                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowBackIcon style={{ color: '#ffffff' }} />
                        {/* <h6 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                            Lookin
                            <p className="text-xs">Properties</p>
                        </h6> */}
                         <Image
                        src={indexPage ? 'logo.svg' : 'whitelogo.svg'}
                        loader={myPublicLoader}
                        layout={'fixed'}
                        width={120}
                        height={50}
                    />
                    </div>
                )}
                <Divider className="mb-6"/>
                {selectedList.map((link: any, index: any) => {
                    return selectedLink == link.label ? (
                        <ListItem
                            button
                            key={index}
                            sx={{ padding: 0, color: '#4b1037' }}
                            className="w-full h-16 text-[#4b1037] p-0 py-0 flex items-center  shadow md:text-xl  "
                        >
                            <div className="w-1 h-full   bg-[#4b1037] rounded-xl">
                                i
                            </div>
                            <div className="w-full flex px-2   ">
                                <div className="mr-2">{link.icon()}</div>
                                <Link href={`${link.path}`}>{link.label}</Link>
                            </div>
                            <div className="w-1 h-full bg-[#4b1037] rounded-xl">
                                i
                            </div>
                        </ListItem>
                    ) : (
                        <ListItem
                            button
                            key={link.label}
                            sx={{ color: 'GrayText' }}
                            className="text-[#bca4b4] h-16 flex items-center md:text-xl "
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
