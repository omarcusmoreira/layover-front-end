import { ArrowCircleRightOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  SearchFlyContainer,
} from "./styles";

export function SearchFlight() {
  return (
    <>
      <SearchFlyContainer>
        <Typography variant="h3" fontSize="50px" fontWeight="700" lineHeight="48px" color="#021442">
          Lorem ipsum dolor sit amet. Id temporibus
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowCircleRightOutlined />}
          sx={{color:"#fff", fontSize:"16px", textTransform:"capitalize", padding:"0 32px", borderRadius:"25px", backgroundColor:"#021442", height:"52px", minWidth:"241px"}}
        >
          Localizador de Voo
        </Button>
      </SearchFlyContainer>
    </>
  );
}
