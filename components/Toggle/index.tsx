import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ToggleSwitch({
    width,
    onLabel,
    offLabel,
    isToggleOn,
    handleChange,
}: any) {
    const [isOn, setIsOn] = useState(isToggleOn);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        handleChange();
    };
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div
            className="switch"
            style={{
                width: width,
                height: isMobile ? '12px' : '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 14px ',
            }}
            data-isOn={isOn}
            onClick={toggleSwitch}
        >
            {isOn && (
                <p
                    // style={{ fontSize: '0.5rem' }}
                    className={
                        isMobile ? 'text-xs mr-2 flex items-center' : 'mr-2'
                    }
                >
                    {onLabel}
                </p>
            )}
            <motion.div className="handle" layout transition={spring} />
            {!isOn && (
                <p
                    // style={{ fontSize: '0.5rem' }}
                    // className="text-xs ml-2  flex items-center"
                    className={
                        isMobile ? 'text-xs ml-2 flex items-center' : 'ml-2'
                    }
                >
                    {offLabel}
                </p>
            )}
        </div>
    );
}

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};
