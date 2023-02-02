import { Button, MenuItem, Select, TextField,InputAdornment } from '@mui/material'

import biddingAuctionImage from '../../assets/images/Bidding-auction-image.svg'
import { AuctionHotelItem } from './components/AuctionHotelItem'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export function BiddingAuction() {

    const Icon = () =>{
        return <ArrowDropDownOutlinedIcon sx={{ color: '#E30B22' }}/>
    }

    const IconCalendar = () =>{
        return <CalendarTodayIcon sx={{ color: '#E30B22' }}/>
    }

    return (
        <>
        <div className="bidding-auction-container">
            <header className="bidding-auction-header">
                <div className="bidding-auction-header-action">
                    <div className="auction-filter">
                        <span>Status</span>
                        <Select 
                            className='select-action'
                            variant='standard'
                            disableUnderline
                            IconComponent={Icon}
                        >
                            <MenuItem>Todos</MenuItem>
                        </Select>
                    </div>
                    <div className="auction-filter">
                        <span>Empresas</span>
                        <Select 
                            className='select-action'
                            variant='standard'
                            disableUnderline
                            IconComponent={Icon}
                        >
                            <MenuItem>Todos</MenuItem>
                        </Select>
                    </div>
                    <div className="auction-filter">
                        <span>Hotel</span>
                        <Select  
                           className='select-action'
                           variant='standard'
                           disableUnderline
                           IconComponent={Icon}
                        >
                            <MenuItem>Todos</MenuItem>
                        </Select>
                    </div>
                    <div className="auction-filter">
                        <span>Data</span>
                        <TextField 
                            datatype='dd/mm/aaaa'
                            type='date'
                            variant='standard'
                            className='input-action'
                            InputProps={{
                                disableUnderline:true,
                                endAdornment:(
                                    <InputAdornment position="end"> <CalendarTodayIcon sx={{ color: '#E30B22',marginRight:'.2rem' }}/></InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
                <div className="bidding-auction-header-desktop-image">
                    <img src={biddingAuctionImage} alt="Pessoa batendo o martelo leilão" />
                </div>
            </header>
            <main className="bidding-auction-list">
                <ul className='list-of-actions'>
                    <li><AuctionHotelItem hasBgBlue/></li>
                    <li><AuctionHotelItem /></li>
                    <li><AuctionHotelItem hasBgBlue/></li>
                    <li><AuctionHotelItem /></li>
                    <li><AuctionHotelItem hasBgBlue/></li>
                    <li><AuctionHotelItem /></li>
                    <li><AuctionHotelItem hasBgBlue/></li>
                    <li><AuctionHotelItem /></li>
                    <li><AuctionHotelItem hasBgBlue/></li>
                    <li><AuctionHotelItem /></li>
                    <li><AuctionHotelItem hasBgBlue/></li>
                </ul>
            </main>
        </div>
        <div className="actions-button">
            <Button>Voltar</Button>
            <Button>Avançar</Button>
        </div>
        </>
    )
}