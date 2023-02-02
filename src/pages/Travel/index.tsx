import React from 'react';
import { useState } from 'react'
import './styles.css';
import { TextField} from '@mui/material';
import ButtonsInterface from '../../components/Buttons_Interface';
import Maps from '../../assets/images/Maps.svg';
import Car from '../../assets/images/Car.svg';



export function Travel() {

    
    return (
            <>
                <div className='homeContainer'>

                    <form className='forms'>

                        <div className='images'>
                            <img className='maps' src={Maps} />
                            <img className='car' src={Car}/>
                        </div>

                    </form>

                
                </div>
        <ButtonsInterface/>
            </>
    )
}