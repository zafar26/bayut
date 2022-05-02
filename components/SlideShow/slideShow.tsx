import { AnimatePresence, motion } from 'framer-motion';
import { myLoader } from '../../helpers/helper';
import Image from 'next/image';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

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
        images[0] ? (images[0].mediaData ? images[0].mediaData : '') : ''
    );
    return (
        <div className="relative  w-full h-full">
            <div
                className="bg-gray-50 absolute inset-y-2/4 left-1 z-50 p-2 flex items-center rounded-full cursor-pointer"
                onClick={() => {
                    if (images[imageIndex - 1]) {
                        setImageIndex(imageIndex - 1);
                        setImage(images[imageIndex - 1].mediaData);
                    }
                }}
            >
                {'<'}
            </div>
            <Image
                src={'data:image/gif;base64, ' + image}
                alt="No Image "
                width={!isMobile ? (isFull ? 980 : 380) : 380}
                height={isMobile ? 480 : isFull ? 500 : 250}
                className="rounded h-full w-full"
                // layout="responsive"
                objectFit={'fill'}
            />
            <div
                className="bg-gray-50 absolute inset-y-2/4 right-1 z-50 p-2 flex items-center rounded-full cursor-pointer"
                onClick={() => {
                    if (images[imageIndex + 1]) {
                        setImageIndex(imageIndex + 1);
                        setImage(images[imageIndex + 1].mediaData);
                    }
                }}
            >
                {'>'}
            </div>
        </div>
    );
};

export default Slideshow;
