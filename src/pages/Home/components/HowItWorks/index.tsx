import { LocationOn, LuggageOutlined, MapOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  HowItWorksContainer,
  HowItWorksHeader,
  HowItWorksItens,
  HowItWorksItem,
  Icon,
} from "./styles";

import Icon_idea from "../../../../assets/icons/Icon_idea.svg"
import Icon_suitcase from "../../../../assets/icons/Icon_suitcase.svg"
import Icon_map from "../../../../assets/icons/Icon_map.svg"

export function HowItWorks() {
  return (
    <>
      <HowItWorksContainer>
        <HowItWorksHeader>
          <Typography variant="h2"  fontSize="64px" fontWeight="700" lineHeight="64px" marginTop="16px" color="#021442">
            Como funciona?
          </Typography>
          <Typography variant="h6" maxWidth="600px" fontSize="24px" fontWeight="400" lineHeight="27px" textAlign="center">
            Lorem ipsum dolor sit amet. Et internos esse id ipsam dolor qui
            nihil porro eum enim sint ut repellendus illum. Qui voluptatem quam
            et quisquam quae ex adipisci obcaecati et cumque
          </Typography>
          <Button
            variant="contained"
            endIcon={<LocationOn />}
            sx={{alignSelf:"center", marginTop:"54px",color:"#fff", fontSize:"20px", textTransform:"capitalize", padding:"0 52px", borderRadius:"28px", backgroundColor:"#021442", height:"55px", minWidth:"633px"}}
          >
            Adicionar localização
          </Button>
        </HowItWorksHeader>
        <HowItWorksItens >
          <HowItWorksItem>
            <Typography variant="h1" position="absolute" right="0" top="0" fontSize="186px"  fontWeight="700" lineHeight="172px" color="#ddd">
              1
            </Typography>
            <Icon src={Icon_idea} alt=''/>
            <Typography variant="h6" fontSize="16px" fontWeight="700" lineHeight="19px" color="#67708D">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2" fontSize="16px" fontWeight="400" lineHeight="18px" color="#67708D" marginTop="12px">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </HowItWorksItem>
          <HowItWorksItem>
          <Typography variant="h1" position="absolute" right="0" top="0" fontSize="186px" fontWeight="700" lineHeight="172px" color="#ddd">
              2
            </Typography>
            <Icon src={Icon_suitcase} alt=''/>

            <Typography variant="h6" fontSize="16px" fontWeight="700" lineHeight="19px" color="#67708D">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2" fontSize="16px" fontWeight="400" lineHeight="18px" color="#67708D" marginTop="12px">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </HowItWorksItem>
          <HowItWorksItem>
          <Typography variant="h1" position="absolute" right="0" top="0" fontSize="186px" fontWeight="700" lineHeight="172px" color="#ddd">
              3
            </Typography>
            <Icon src={Icon_map} alt=''/>
            <Typography variant="h6" fontSize="16px" fontWeight="700" lineHeight="19px" color="#67708D">Lorem ipsum dolor</Typography>
            <Typography variant="subtitle2" fontSize="16px" fontWeight="400" lineHeight="18px" color="#67708D" marginTop="12px">
              Lorem ipsum dolor sit amet. Est consequatur enim sed officiis
              voluptatem eum voluptates harum ut numquam dolor quo voluptatibus
              atque ea sunt rerum sit similique necessitatibus!
            </Typography>
          </HowItWorksItem>
        </HowItWorksItens >
      </HowItWorksContainer>
    </>
  );
}
