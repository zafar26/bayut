import { AnimatePresence, motion } from 'framer-motion';
import { myLoader } from '../../helpers/helper';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Public_URL} from '../../helpers/helper'
// import useMediaQuery from '@mui/material/useMediaQuery';
// import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #ecdbdc',
    boxShadow: 24,
    p: 4,
};

const Slideshow = ({ images, isFull }: any) => {
    // <AnimatePresence>
    // <motion.img
    //     className="w-48 h-48"
    //     loader={myLoader}
    //     key={src}
    //     src={src}
    //     initial={{ opacity: 0, y: 200 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    // />
    //     1. category
    // 2.subcategory
    // 3. purpose
    // 4. name
    // 5. area
    useEffect(()=>{
        let filteredVideos:any = images.filter((d:any)=>d.mediaType == 'video');

        if(filteredVideos.length > 0){
            setVideos(filteredVideos)
            setDisplayVideo(filteredVideos[0].mediaName)
        }
    },[])
    const isMobile = useMediaQuery('(max-width:600px)');
    // console.log(images, 'IMAGES');
    const [imageIndex, setImageIndex] = useState(0);
    const [videoIndex, setVideoIndex] = useState(0);
    const [videos, setVideos] = useState<any>([]);
    const [displayVideo, setDisplayVideo] = useState('');
    const [image, setImage] = useState(
        images[0] ? (images[0].mediaName ? images[0].mediaName : '') : ''
    );
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
        if(isMobile){
            style.width = 200
        }
    // console.log(`${Public_URL}/images/${image}`,'PUBLICURL')
    return (
        <div className="relative  w-full h-full">
            <div
                className="bg-gray-50 absolute inset-y-2/4 left-1 z-50 p-2 flex items-center rounded-full cursor-pointer"
                onClick={() => {
                    if (images[imageIndex - 1]) {
                        setImageIndex(imageIndex - 1);
                        setImage(images[imageIndex - 1].mediaName);
                    }
                }}
            >
                {'<'}
            </div>
            {image !="" ?
            // console.log(image,'IMAGE FROM REST ' )
            <Image
                src={image}
                alt="No Image "
                width={!isMobile ? (isFull ? 980 : 380) : 380}
                height={isMobile ? 480 : isFull ? 500 : 250}
                className="rounded h-full w-full"
                // layout="responsive"
                objectFit={'fill'}
                loader={({ src, width, quality }:any) => {
                    return `${Public_URL}/images/${src}?w=${width}&q=${quality || 75}`
                  }}

                onClick={() => {}}
            />
        :""}
            <div
                className="bg-gray-50 absolute inset-y-2/4 right-1 z-50 p-2 flex items-center rounded-full cursor-pointer"
                onClick={() => {
                    if (images[imageIndex + 1]) {
                        setImageIndex(imageIndex + 1);
                        setImage(images[imageIndex + 1].mediaName);
                    }
                }}
            >
                {'>'}
            </div>
            <div className="absolute bottom-2 left-2 z-50 cursor-pointer" onClick={()=>{console.log('VIDEO BUTTON')}}>
            {isFull &&
                <Button
                    onClick={() => {
                        // setSelectedButton(2);
                        setOpen(true);
                    }}
                    className="p-1 ml-1  md:py-1 md:px-2  bg-gray-100 text-[#4b1037] flex rounded shadow flex items-center"
                >
                    <p className="md:ml-1 text-sm md:text-base">Video</p>
                </Button>}
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="w-full flex flex-col items-center">
                        <div
                            className="bg-gray-50 absolute top-48 left-1 z-50 p-4 flex items-center rounded-full cursor-pointer"
                            onClick={() => {
                                console.log(videos,videoIndex,'VIDEOINDEX')
                                if (videos[videoIndex - 1]) {
                                    setVideoIndex(videoIndex - 1);
                                    setDisplayVideo(videos[videoIndex - 1].mediaName);
                                }
                            }}
                        >
                            {'<'}
                        </div>
                            <div className="mt-4 flex items-center">
                                <video className="w-full " width="800" height="600" autoPlay controls src={`${Public_URL}/videos/${displayVideo}`}>
                                    The “video” tag is not supported by your browser.
                                </video>
                            </div>
                            <div
                                className="bg-gray-50 absolute top-48 right-1 z-50 p-4 flex items-center rounded-full cursor-pointer"
                                onClick={() => {
                                console.log(videos,videoIndex,'VIDEOINDEX')

                                    if (videos[videoIndex + 1]) {
                                        setVideoIndex(videoIndex + 1);
                                        setDisplayVideo(videos[videoIndex + 1].mediaName);
                                    }
                                }}
                            >
                                {'>'}
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
            </div>
        </div>
    );
};

export default Slideshow;
