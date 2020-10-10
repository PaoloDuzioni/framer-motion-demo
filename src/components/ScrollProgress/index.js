import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import styles from './style.module.scss';

const ScrollProgress = () => {
    const { scrollYProgress } = useViewportScroll();
    console.log(scrollYProgress);
    return (
        <div className={styles.Progress}>
            <svg viewBox="0 0 60 60">
                <motion.path
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>
        </div>
    );
};

export default ScrollProgress;
