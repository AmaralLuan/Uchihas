import Bio from '../../Components/BioCard/Bio';
import styles from './Sarada.module.css';

import SaradaImg from './sarada.png';

const Sarada = () => {
    return (
        <div className={styles.Sarada}>
            <div className={styles.heroBox}>
                <img src={SaradaImg} className={styles.heroImg}></img>

                <Bio
                    name="Sarada Uchiha"
                    age="12"
                    rank="Genin"
                    birthday="14 de maio"
                    kekkei="Sharingan"
                    description="É uma kunoichi do clã Uchiha de Konohagakure e um membro do Time Konohamaru. Crescendo sem o pai por perto, Sarada passou sua vida sendo curiosa sobre que tipo de pessoa ele era, e até, se ele realmente se importava com ela e sua mãe - e por um tempo, questionando sua própria identidade, até que ela finalmente foi capaz de encontrá-lo e afirmar que ela tinha uma família amorosa. Durante esta viagem, ela se familiarizou com Naruto Uzumaki - o que a fez herdar seu sonho de se tornar Hokage."
                />
            </div>

        </div>
    )
}

export default Sarada;