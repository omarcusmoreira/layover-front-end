import React from 'react';

import { 
    Backdrop,
    CircularProgress,
    Typography
} from '@mui/material';

import './style.css';

export default function ({ open }) {
    return (
        <Backdrop
            className='loading-backdrop'
            open={open}
        >
            <div className='display-flex direction-column align-items-center'>
                <CircularProgress color="primary" size="6em"/>
                <Typography variant="h6" className='mt10'>
                    Carregando
                </Typography>
            </div>
        </Backdrop>
    )
}