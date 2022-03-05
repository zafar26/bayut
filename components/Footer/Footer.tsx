import { useState } from 'react';
import styles from './footer.module.css';
import {
    BsPencilSquare,
    BsPieChartFill,
    BsCalendar,
    BsGraphUp,
    BsExclamationSquareFill,
} from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            delay: 1.5,
        },
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

export default function Footer() {
    const [selected, setSelected] = useState('');
    return (
        <motion.div
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            id={styles.innerfooter}
            style={{ display: 'flex', justifyContent: 'space-around' }}
        >
            <Link href="/">
                <a>
                    <button
                        className={styles['footer-item']}
                        onClick={(e) => setSelected('home')}
                    >
                        <BsPencilSquare
                            size={22}
                            color={selected == 'home' ? 'black' : '#FFFFFF'}
                        />
                    </button>
                </a>
            </Link>
            <Link href="/chart">
                <a>
                    <button
                        className={styles['footer-item']}
                        onClick={(e) => setSelected('chart')}
                    >
                        <BsPieChartFill
                            size={22}
                            color={selected == 'chart' ? 'black' : '#FFFFFF'}
                        />
                    </button>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <button
                        className={styles['footer-item']}
                        onClick={(e) => setSelected('calender')}
                    >
                        <BsCalendar
                            size={22}
                            color={selected == 'calender' ? 'black' : '#FFFFFF'}
                        />
                    </button>
                </a>
            </Link>
            <Link href="/chart">
                <a>
                    <button
                        className={styles['footer-item']}
                        onClick={(e) => setSelected('statistic')}
                    >
                        <BsGraphUp
                            size={22}
                            color={
                                selected == 'statistic' ? 'black' : '#FFFFFF'
                            }
                        />
                    </button>
                </a>
            </Link>
        </motion.div>
    );
}
