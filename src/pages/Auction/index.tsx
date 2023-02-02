import Bid from "../../assets/images/bid.svg";
import FinishOut from "../../assets/images/finishedOff.svg";

import "./styles.css";

export function Auction() {
  return (
    <div className="auction-container">
      <div className="auction-inner-container">
        <div className="auction-container-introduction">
          <h1 className="title">Leilão</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="img-finish">
            <img src={FinishOut} alt="" />
          </div>
        </div>

        <div className="auction-bids-bg">
          <div className="auction-bids">
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Latam 737</h2>
                <p>200 pessoas</p>
                <p>Guarulhos - SP</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>

            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Gol 231</h2>
                <p>100 pessoas</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Latam 737</h2>
                <p>200 pessoas</p>
                <p>Guarulhos - SP</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>

            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Gol 231</h2>
                <p>100 pessoas</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>

            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>

            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
            <div className="auction-bid">
              <div className="auction-bid-container">
                <h2 className="auction-flightTitle">Voo Tam 452</h2>
                <p>300 pessoas</p>
                <p>Salvador - BA</p>
              </div>
              <div className="auction-bid-price">
                <strong>Valor total</strong>
                <p>R$ XXX,XX</p>
              </div>
            </div>
          </div>

          <div className="img-bid">
            <img src={Bid} alt="" />
          </div>
        </div>
      </div>
      <div className="buttons_interface">
        <button type="button" className="button_back">
          Voltar
        </button>
        <button type="button" className="button_advance">
          Avançar
        </button>
      </div>
    </div>
  );
}
