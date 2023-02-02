import Frame from "../../assets/images/frame.svg";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import BasicRating from "../../components/RatingStar";
import ButtonsInterface from "../../components/Buttons_Interface";

export function Feedback() {
  return (
    <div className="homeContainer">
      <form className="forms">
        <img src={Frame} />

        <div className="form">
          <h1>Pesquisa de satisfação</h1>
          <p>Queremos ouvir de você!</p>

          <label>Como foi sua experiência?</label>

          <BasicRating />

          <div className="input">
            <TextField
              multiline
              id="input"
              variant="filled"
              label="Conte mais sobre sua experiência"
              type="text"
              placeholder="Conte mais sobre sua experiência"
            />
          </div>

          <div className="submite">
            <Button type="button">Confirmar</Button>
          </div>
        </div>
      </form>

      <ButtonsInterface />
    </div>
  );
}
