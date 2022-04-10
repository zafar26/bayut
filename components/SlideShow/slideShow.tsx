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
    const isMobile = useMediaQuery('(max-width:600px)');

    const [imageIndex, setImageIndex] = useState(0);
    const [image, setImage] = useState(images[imageIndex].mediaData);
    return (
        <div className="relative  w-full h-full">
            <div
                className="bg-gray-200 absolute inset-y-2/4 left-1 z-50 p-2 flex items-center rounded-full "
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
                alt="House1 Picture "
                width={!isMobile ? (isFull ? 480 : 380) : 380}
                height={isMobile ? 440 : 210}
                className="rounded h-full w-full"
                // layout="responsive"
                objectFit={'fill'}
            />
            <div
                className="bg-gray-200 absolute inset-y-2/4 right-1 z-50 p-2 flex items-center rounded-full"
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
// </AnimatePresence>

export default Slideshow;
