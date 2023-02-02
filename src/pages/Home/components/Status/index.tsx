import Typography from "@mui/material/Typography";
import CellImage from "../../../../assets/images/cell.svg"
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

import {
  StatusContainer,
  ReplyWrap,
  CellInfo,
  FlightStatusDelay,
  FlightStatusCanceled,
} from "./styles";


export function Status() {
  return (
    <>
      <StatusContainer>
        <Typography variant="h2" width="100%" fontSize="64px" fontWeight="700" lineHeight="64px" textAlign="center" color="#021442">
            Status
        </Typography>
        <ReplyWrap>
            <FlightStatusDelay> 
                <Typography variant="h3" fontSize="36px" fontWeight="700" lineHeight="44px">
                    Voo atrasado
                </Typography>
                <Typography variant="subtitle2" fontSize="24px" fontWeight="400" lineHeight="27px" marginTop="28px">
                    Lorem ipsum dolor sit amet
                </Typography>

                <Button
                  variant="contained"
                  endIcon={<ArrowCircleRightOutlined />}
                  sx={{color:"#fff", fontSize:"16px", textTransform:"capitalize", padding:"0 32px", borderRadius:"25px", backgroundColor:"#021442", height:"52px", width:"209px"}}
                >
                  Lorem ipsum
                </Button>
                <Link variant="h6"  fontSize="20px" lineHeight="23px" fontWeight="300"  color="#E30B22" href="#">
                Lorem ipsum
                    </Link>
            </FlightStatusDelay>
            <FlightStatusCanceled> 
                <Typography variant="h3" fontSize="36px" fontWeight="700" lineHeight="44px"  paddingTop="64px">
                    Voo cancelado
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowCircleRightOutlined />}
                  sx={{color:"#fff", fontSize:"16px", textTransform:"capitalize", padding:"0 32px", borderRadius:"25px", backgroundColor:"#021442", height:"52px", width:"209px"}}
                >
                  Lorem ipsum
                </Button>
                <Link variant="h6"  fontSize="20px" lineHeight="23px" fontWeight="300"  color="#E30B22" href="#">
                Lorem ipsum
                    </Link>
            </FlightStatusCanceled>
            <CellInfo>
              <img src={CellImage} alt='' width="240px"/>
            </CellInfo>
        </ReplyWrap>
      </StatusContainer>
    </>
  );
}
