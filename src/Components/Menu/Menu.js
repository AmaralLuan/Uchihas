import React from 'react';
import styles from './Menu.module.css';

import mangekyouSasuke from './icons/mangekyou-sasuke.png';
import mangekyouItachi from './icons/mangekyouItachi.png';
import mangekyouMadara from './icons/mangekyouMadara.png';
import sharinganSarada from './icons/Sharingan.png';


const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul>
                <li>
                    <a href="/sasuke">
                        <img src={mangekyouSasuke} alt='icon'></img>
                        <span>Sasuke</span>
                    </a>
                </li>
                <li>
                    <a href="/itachi">
                    <img src={mangekyouItachi} alt='icon'></img>
                        <span>Itachi</span>
                    </a>
                </li>
                <li>
                    <a href="/madara">
                    <img src={mangekyouMadara} alt='icon'></img>
                        Madara
                    </a>
                </li>
                <li>
                    <a href="/sarada">
                    <img src={sharinganSarada} alt='icon'></img>
                        Sarada
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;