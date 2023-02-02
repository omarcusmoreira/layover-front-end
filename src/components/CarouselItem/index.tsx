import WomanWithMaskAndLayoverFooter from '../../assets/images/WomanWithMaskAndLayoverFooter.svg'
import fiveStarImg from '../../assets/images/five-stars.svg'
import quotationMarkImg from '../../assets/images/inital-client-avaliation.svg'
import { Typography } from '@mui/material'

import {
    CarouselItemContainer,
    Slide,
    Testimonials,
    SlideImage,
    TestimonialsQuote,
    RankingStars,
  } from "./styles";

interface CarouselItemProps{
    text: string,
    name: string,
    title: string,
    companyName: string
}

export function CarouselItem({ text, name, title, companyName }: CarouselItemProps) {
    return (
        <CarouselItemContainer>
            <Slide>
                <SlideImage src={WomanWithMaskAndLayoverFooter} alt='' />
            </Slide>
            <Testimonials>
                <TestimonialsQuote src={quotationMarkImg} alt=''  />
                <Typography variant='h5' fontSize="20px" fontWeight="800" lineHeight="30px" marginBottom= "20px">
                    {title}
                </Typography>
                <Typography variant='h6' fontSize="16px" fontWeight="400" lineHeight="20px" color="#67708D">
                    {text}
                </Typography>
                < RankingStars src={fiveStarImg} alt='' />
                <Typography variant='body1' fontSize="16px" fontWeight="800" lineHeight="30px">
                    {name}
                </Typography>
                <Typography variant='subtitle2' fontSize="14px" lineHeight="24px" color="#67708D">
                    {companyName}
                </Typography>
            </Testimonials>
        </CarouselItemContainer>
    )
}