import React from 'react';
import Bio from '../../Components/BioCard/Bio';
import styles from './Itachi.module.css';

import ItachiImg from './itachi.png';

const Itachi = () => {
    return (
        <div className={styles.Itachi}>
            <div className={styles.heroBox}>
                <img src={ItachiImg} className={styles.heroImg}></img>

                <Bio
                    name="Itachi Uchiha"
                    age="16"
                    rank="N/A"
                    birthday="09 de Junho"
                    kekkei="Sharingan"
                    description="foi um prodígio do clã Uchiha de Konohagakure. Ele se tornou um criminoso internacional depois de assassinar seu clã inteiro, poupando apenas seu irmão mais novo, Sasuke. Ele se juntou a Akatsuki, onde ele entrou em frequentes conflitos com Konoha e seus ninjas, incluindo Sasuke, que procurou vingar sua família. Depois de morrer durante uma batalha com Sasuke, as motivações de Itachi foram reveladas serem mais complicadas do que pareciam ele só queria proteger seu irmão e a vila, permanecendo um shinobi leal a Konohagakure até o fim."
                />
            </div>

        </div>
    )
}

export default Itachi;