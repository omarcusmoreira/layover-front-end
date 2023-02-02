import Typography from "@mui/material/Typography";
import ManRestingOnChair from '../../../../assets/images/ManRestingOnChair.svg'
import ManWorkingOnComputer from '../../../../assets/images/ManWorkingOnComputer.svg'
import WomanMeditating from '../../../../assets/images/WomanMeditating.svg'
import {
  WhatWeAreContainer,
  WhatWeAreHeader,
  WhatWeAreItens,
  WhatWeAreItem,
  WhatWeAreItemImage,
} from "./styles";

export function WhatWeAre() {
  return (
    <>
      <WhatWeAreContainer>
        <WhatWeAreHeader>
          <Typography variant="h2" fontSize="64px" fontWeight="700" lineHeight="64px" textAlign="center" color="#021442">
            O que somos
          </Typography>
          <Typography variant="h6" maxWidth="674px" fontSize="24px" fontWeight="400" lineHeight="26px"  color="#000000" textAlign="center" marginTop="40px" alignSelf="center">
            Lorem ipsum dolor sit amet. Et internos esse id ipsam dolor qui
            nihil porro eum enim sint ut repellendus illum. Qui voluptatem quam
            et quisquam quae ex adipisci 
          </Typography>
        </WhatWeAreHeader>
        <WhatWeAreItens>
          <WhatWeAreItem>
            <WhatWeAreItemImage src={ManRestingOnChair} alt="" />
            <Typography variant="h4" fontSize="32px" fontWeight="700" lineHeight="39px" color="#000000" marginBottom="20px">Lorem ipsum</Typography>

            <Typography variant="subtitle1" fontSize="20px" fontWeight="400" lineHeight="23px" color="#000000">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </WhatWeAreItem>

          <WhatWeAreItem >
            <WhatWeAreItemImage src={ManWorkingOnComputer} alt="" />
            <Typography variant="h4" fontSize="32px" fontWeight="700" lineHeight="39px" color="#000000" marginBottom="20px">Lorem ipsum</Typography>
            <Typography variant="subtitle1" fontSize="20px" fontWeight="400" lineHeight="23px" color="#000000">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </WhatWeAreItem>

          <WhatWeAreItem >
            <WhatWeAreItemImage src={WomanMeditating} alt="" />
            <Typography variant="h4" fontSize="32px" fontWeight="700" lineHeight="39px" color="#000000" marginBottom="20px">Lorem ipsum</Typography>
            <Typography variant="subtitle1" fontSize="20px" fontWeight="400" lineHeight="23px" color="#000000">
              Lorem ipsum dolor sit amet. Ut alias nemo eum facilis odit quo
              maxime ipsum dolore quia non quia quaerat sit blanditiis officiis.
            </Typography>
          </WhatWeAreItem>
        </WhatWeAreItens>
      </WhatWeAreContainer>
    </>
  );
}
