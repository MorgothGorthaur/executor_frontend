import React from 'react';
import styles from './Header.module.css';

const Header = ({ onButtonClick }) => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><button className={styles.navButton} onClick={() => onButtonClick('scenarios')}>Scenarios</button></li>
                    <li><button className={styles.navButton} onClick={() => onButtonClick('reports')}>Reports</button></li>
                    <li><button className={styles.navButton} onClick={() => onButtonClick('documentation')}>Documentation</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
