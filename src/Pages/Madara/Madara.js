import React from 'react';
import Bio from '../../Components/BioCard/Bio';
import styles from './Madara.module.css';

import MadaraImg from './madara.png';

const Madara = () => {
    return (
        <div className={styles.Madara}>
            <div className={styles.heroBox}>
                <img src={MadaraImg} className={styles.heroImg}></img>

                <Bio
                    name="Madara Uchiha"
                    age="31"
                    rank="N/A"
                    birthday="23 de Julho"
                    kekkei="Sharingan"
                    description="Uchiha Madara é um ninja lendário do Clã Uchiha ex-amigo e rival de Hashirama Senju,
                    Madara era uma criança de bom coração e brincalhona, quando junto com Hashirama tinham um sonho de unificar o mundo ninja e fundar a vila oculta da Folha.
                    Ele despertou seu Sharingan ainda criança. Numa luta contra o próprio Hashirama, ele acabou morrendo, mas foi ressucitado por Kabuto na Quarta Grande
                    Guerra Ninja. Seu objetivo era criar um novo mundo controlado por um Genjutsu eterno, o Tsukiomy Infinito."
                />
            </div>

        </div>
    )
}

export default Madara;