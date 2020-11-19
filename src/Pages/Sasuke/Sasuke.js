import React from 'react';
import Bio from '../../Components/BioCard/Bio';
import styles from './Sasuke.module.css';

import SasukeImg from './sasuke.png';

const Sasuke = () => {
    return (
        <div className={styles.Sasuke}>
            <div className={styles.heroBox}>
                <img src={SasukeImg} className={styles.heroImg}></img>

                <Bio
                    name="Sasuke Uchiha"
                    age="16"
                    rank="N/A"
                    birthday="23 de Julho"
                    kekkei="Sharingan / Rinnegan"
                    description="É um dos últimos membros sobreviventes do clã Uchiha , além de ser a reencarnação atual de Indra. Ele se tornou um shinobi para que pudesse algum dia ficar forte o suficiente para se vingar contra o seu irmão mais velho, Itachi. Inicialmente, um membro do Time Kakashi de Konoha, Sasuke desertou da aldeia para obter poder com Orochimaru, tornando-se um criminoso internacional no processo. Mais tarde, ele se torna uma peça fundamental para acabar com a Quarta Guerra Mundial Ninja, até ser finalmente redimido por seu rival, e também melhor amigo, Naruto Uzumaki. Sasuke decide voltar para Konoha, dedicando a sua vida para ajudar a proteger a vila e seus habitantes."
                />
            </div>

        </div>
    )
}

export default Sasuke;