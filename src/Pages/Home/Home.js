import React from 'react';

import styles from './Home.module.css';
import sharingan from  './Sharingan.png';


const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.heroBox}>
                <h2>Conheça um pouco mais sobre os </h2>
                <h1>Uchihas</h1>
                <img src={sharingan} alt="sharingan" />
               
            </div>

        </div>
    )
}

export default Home;