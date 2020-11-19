import React from 'react';

import { Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';

import Itachi from '../../../Pages/Itachi/Itachi';
import Madara from '../../../Pages/Madara/Madara';
import Sarada from '../../../Pages/Sarada/Sarada';
import Sasuke from '../../../Pages/Sasuke/Sasuke';

import styles from './Content.module.css';

const Content = () => {
    return (
        <div className={styles.Content}>
            <Route exact path='/' render={() => (
                <Home />
            )} />

            <Route path='/sasuke' render={() => (
                <Sasuke />
            )} />

            <Route path='/itachi' render={() => (
                <Itachi />
            )} />
            
            <Route path='/sarada' render={() => (
                <Sarada />
            )} />

            <Route path='/madara' render={() => (
                <Madara />
            )} />
            
        </div>
          
    )
}

export default Content;