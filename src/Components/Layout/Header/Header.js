import React from 'react';
import styles from './Header.module.css';
import logo from './uchiha-clan.png';

const Header = () => {
    return (
        <header className={styles.Header}>
            
            <h1>
                <img src={logo} alt='Logo' />
                Uchiha's Bio
            </h1>
        </header>
    )
};


export default Header;