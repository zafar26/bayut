import { AnimatePresence, motion } from 'framer-motion';
import { myLoader } from '../../helpers/helper';
import Image from 'next/image';
import { useState } from 'react';

const Slideshow = ({ images }: any) => {
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
    const [imageIndex, setImageIndex] = useState(0);
    const [image, setImage] = useState(images[imageIndex].mediaData);
    return (
        <div className="relative h-full flex justify-between">
            <div
                className="bg-gray-200 absolute inset-y-2/4 z-50 p-2 flex items-center rounded-full "
                onClick={() => {
                    if (images[imageIndex - 1]) {
                        setImageIndex(imageIndex - 1);
                        setImage(images[imageIndex].mediaData);
                    }
                }}
            >
                {'<'}
            </div>
            <Image
                src={'data:image/gif;base64, ' + image}
                alt="House1 Picture "
                width={260}
                height={220}
                className="rounded h-full"
                // layout="responsive"
                objectFit={'fill'}
            />
            <div
                className="bg-gray-200 absolute inset-y-2/4 right-0 z-50 p-2 flex items-center rounded-full"
                onClick={() => {
                    if (images[imageIndex + 1]) {
                        setImageIndex(imageIndex + 1);
                        setImage(images[imageIndex].mediaData);
                    }
                }}
            >
                {' '}
                {'>'}{' '}
            </div>
        </div>
    );
};
// </AnimatePresence>

export default Slideshow;
