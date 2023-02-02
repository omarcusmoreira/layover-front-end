import React from 'react';
import { useState } from 'react'
import './styles.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonsInterface from '../../components/Buttons_Interface';
import Frame from '../../assets/images/frame.svg';


export default function CheckinHotel() {

    
    return (
            <>
                <div className='homeContainer'>

                    <form className='forms'>

                        <div className='form'>
                            <h1>Legal! Você Chegou!</h1>
                            <p>Conseguiu Fazer o Check In com sucesso?</p>

                            <div className='button'>
                                <Button id='yes' type='submit' className='submite'>Sim</Button>
                                <Button id='no' type='submit' className='submite'>Não</Button>
                            </div>
                            <br/> 
                            
                            <a>Lorem ipsum dolor sit amet</a>
                        </div>

                        <div className='image'>
                            <img src={Frame} />
                        </div>

                    </form>

                
                </div>
        <ButtonsInterface/>
            </>
    )
}