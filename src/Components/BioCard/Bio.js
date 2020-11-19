import React from 'react';

import styles from './Bio.module.css';

const Bio = (props) => {
    return (
        <div className={styles.Bio}>
            <h1>{props.name}</h1>
            <span><strong>Idade:</strong> {props.age}</span>
            <span><strong>Rank Ninja:</strong> {props.rank}</span>
            <span><strong>Aniversário:</strong> {props.birthday}</span>
            <span><strong>Kekkeigenkai:</strong> {props.kekkei}</span>
            <span><strong>Descrição:</strong> {props.description}</span>

        </div>
    )
}

export default Bio;