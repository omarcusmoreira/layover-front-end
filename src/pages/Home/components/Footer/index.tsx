import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  HomeFooterContainer,
  SocialMedia,
} from "./styles";


export function Footer() {
  return (
    <>
      <HomeFooterContainer>

        <SocialMedia>
        <Typography variant="h6">
          Visite nossas redes sociais
        </Typography>
          <IconButton
            className="facebook"
            onClick={() => {}}
          >
            <Facebook />
          </IconButton>

          <IconButton
            className="instagram"
            onClick={() => {}}
          >
            <Instagram />
          </IconButton>

          <IconButton
            className="twitter"
            onClick={() => {}}
          >
            <Twitter />
          </IconButton>
        </SocialMedia>
        <Typography variant="subtitle2">
          2022 Desenvolvido por Trendhouse Tech. Todos os direitos reservados a
          Layover.
        </Typography>
      </HomeFooterContainer>
    </>
  );
}
