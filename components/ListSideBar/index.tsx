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
import { myPublicLoader,Public_URL } from '../../helpers/helper';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import UploadAndDisplayImage from '../Upload';
import {onLogoUpload} from '../../helpers/apis/auth'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:500,
    bgcolor: '#ecdbdc',
    border: '1px solid #4b1037',
    boxShadow: 24,
    p: 4,
};
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
    const [userRoleID, setUserRoleID]: any = useState(0);
    const [selectedList, setSelectedList]: any = useState([]);
    const handleClose = () => setOpenUpload(false);
    const [openUpload, setOpenUpload] = useState(false);
    const [logo, setLogo] = useState('');
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [imagebase64, setImageBase64] = useState(null);

    async function getSelectedLinkList(){
        let selectedLinkList: any = corporateLinks;
        if (clientUser) {
            selectedLinkList = clientLinks;
        }
        // console.log(selectedLinkList.slice(1,3),'SLECTD ')

        let corporateUser = await db.table('corporate').toArray();
        setLogo(corporateUser[0].logo)
        console.log(corporateUser[0].logo,"user list SIdeBar")    
        // if()
        if(corporateUser[0] && corporateUser[0].userRoleID == 4 && !clientUser){
            // corporateLinks.splice(2,2)
            selectedLinkList.splice(2,2)
        
        }
        console.log(selectedLinkList,"SELECTEDLINK")

        setSelectedList(selectedLinkList)
    
    }
    useEffect(()=>{
        getSelectedLinkList()
        db.table('corporate')
            .toArray()
            .then((agent: any) => {
                if (agent.length >= 1 && agent[0].token && !clientUser) {
                    setUserRoleID(agent[0].userRoleID)
                    // setName(agent[0].name);
                }
            })
        // let selectedLinkList: any = corporateLinks;
        // if (clientUser) {
        //     selectedLinkList = clientLinks;
        // }
        // setSelectedList(selectedLinkList)
        },[db])
        function onSubmit(){
            console.log('Submit')
            let body = {
                imageData: imagebase64,
                fileName: selectedImage.name,
                mediaType: 'image',
                mediaInfoType:'logo'
            }
            onLogoUpload(body).then((r:any)=>{
                    console.log(r);
                    // setOpen(false)
                    if(r.data.statusCode ==200){
                        setLogo(selectedImage.name)
                    }

            }).catch((e:any)=>console.log(e,'ERROR'))
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
                <Divider className="mb-1"/>
                <div className= "w-full h-16">
                {logo !=""?  
                 <Image
                 src={logo}
                 alt="logo "
                 width={ 280}
                 height={ 100}
                 className="rounded h-full w-full"
                 // layout="responsive"
                 objectFit={'fill'}
                 loader={({ src, width, quality }:any) => {
                     return `${Public_URL}/images/${src}?w=${width}&q=${quality || 75}`
                   }}
 
                 onClick={() => {}}
             />
                :
                <Button
                    onClick={() => {
                        // setSelectedButton(2);
                        setOpenUpload(true);
                    }}
                    className="p-1 ml-1  md:py-1 md:px-2 bg-amber-700 hover:text-lime-600  text-white flex rounded shadow flex items-center"
                >
                    
                    <p className="md:ml-1 text-sm md:text-base">Upload</p>
                </Button>}
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openUpload}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openUpload}>
                    <Box sx={style}>
                        <div className="w-full flex flex-col items-center">
                                <UploadAndDisplayImage
                                                selectedImage={selectedImage}
                                                setSelectedImage={
                                                    setSelectedImage
                                                }
                                                imagebase64={imagebase64}
                                                setImageBase64={setImageBase64}
                                            />
                                            <Button
                                                onClick={onSubmit}
                                                className="p-1 ml-1  md:py-1 md:px-2 bg-amber-700 hover:text-lime-600  text-white flex rounded shadow flex items-center"
                                            >
                                                
                                                <p className="md:ml-1 text-sm md:text-base">Upload</p>
                                            </Button>
                        </div>

                    </Box>
                </Fade>
            </Modal>
                </div>
                <div className="mt-6 text-xl font-bold text-center">
                {userRoleID == 4 ?<p>Agent User </p>:<p>Admin User</p>}
                </div>
                {selectedList.map((link: any, index: any) => {
                    return selectedLink == link.label ? (
                        <ListItem
                            button
                            key={index}
                            sx={{ padding: 0, color: '#4b1037' }}
                            className="w-full h-16 text-[#4b1037] p-0 py-0 flex items-center  shadow md:text-xs "
                        >
                            <div className="w-1 h-full   bg-[#4b1037] rounded-xl">
                                i
                            </div>
                            <div className="w-full flex px-2 items-center  ">
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
                            className="text-[#bca4b4] h-16 flex items-center md:text-xs "
                            onClick={() => setSelectedItem(index)}
                        >
                            <div className="mr-2">{link.icon()}</div>
                            <Link href={`${link.path}`} >{link.label}</Link>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

export default MyList;
