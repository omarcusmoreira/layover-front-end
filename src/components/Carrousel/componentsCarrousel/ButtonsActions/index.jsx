import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

import './style.css'

export function ButtonsActions({isLeft}) {
    return (
        <div className="buttons-actions">
            <IconButton>
                {isLeft?<ArrowForwardIcon color='#fff'/>:<ArrowBackIcon color='#fff'/>}
            </IconButton>
        </div>
    )
}