import { AnimatePresence, motion } from 'framer-motion';
import { myLoader } from '../../helpers/helper';
import Image from 'next/image';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Public_URL} from '../../helpers/helper'

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

    const isMobile = useMediaQuery('(max-width:600px)');
    // console.log(images, 'IMAGES');
    const [imageIndex, setImageIndex] = useState(0);
    const [image, setImage] = useState(
        images[0] ? (images[0].mediaName ? images[0].mediaName : '') : ''
    );
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
        </div>
    );
};

export default Slideshow;
