import React from 'react';
import Content from '../../Components/Layout/Content/Content';
import Header from '../../Components/Layout/Header/Header';
import Menu from '../../Components/Menu/Menu';
import './System.module.css';





const System = () => {
    return (

        <div>
            <Header />
            <Menu />

            <main>
                <Content />
            </main>


        </div>

    )
}

export default System;