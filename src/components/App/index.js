import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fadeToTop from '../../motions/fadeToTop';
import styles from './style.module.scss';
import ScrollProgress from '../ScrollProgress';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.App}>
            <ScrollProgress />

            <header className="App-header">
                <h1>React framer motion</h1>
            </header>

            <main>
                <motion.div
                    className={styles.Box}
                    initial="hidden"
                    animate="visible"
                    variants={fadeToTop}
                    custom={1}
                    whileTap="tap"
                    whileHover="hover"
                >
                    I am an animated Box
                </motion.div>

                <div className={styles.Box + ' mt-2'}>I am a Box</div>

                <button className="mt-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Hide' : 'Show'} Box
                </button>

                <motion.div
                    className={styles.Box}
                    initial={false}
                    animate={isOpen ? 'visible' : 'hidden'}
                    variants={fadeToTop}
                >
                    Show / Hide
                </motion.div>
            </main>
        </div>
    );
}

export default App;
