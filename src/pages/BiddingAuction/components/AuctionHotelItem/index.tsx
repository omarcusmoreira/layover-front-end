import { Button } from "@mui/material";

import './style.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export function AuctionHotelItem({name,price,linkDetails,hasBgBlue}: any) {

    
    
    return (
        <div 
            className="auction-hotel-item-container"
            style={{
                backgroundColor: hasBgBlue && '#67708d99',
            }}
        >
            <div className="auction-hotel-item-prices">
                <h2>LOREM IMPSUM</h2>
                <div className="auction-hotel-infos-price">
                    <h4>Lorem ipsum</h4>
                    <p>R$XX,XX</p>
                </div>
            </div>
            <div className="auction-hotel-item-see-more">
                <Button 
                    endIcon={
                    <AddCircleOutlineOutlinedIcon
                        sx={{ color: '#E30B22' }}
                    />}
                ><span>Ver detalhes</span></Button>
            </div>
        </div>
    )
}