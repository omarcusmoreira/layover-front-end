import { Card, CardContent, Grid, Typography } from "@mui/material";
import {
  MyLayoversCards,
  MyLayoversCard,
  LayoversLabel,
  LayoversTicket,
  LayoversTicketSubitem,
} from "./styles";


type Tlayover = {
  layover_id: string;
  status: string;
  food_voucher: string;
  transport_voucher: string;
  checkin_status: string;
};

interface LayoversProps {
  layovers: Tlayover[];
}

export const Layovers = ({ layovers }: LayoversProps) => {
  return (
    <MyLayoversCards>
      {layovers.map((layover) => (

        <MyLayoversCard>
          <div>
            <LayoversLabel>Layover</LayoversLabel>
            <LayoversTicket>
              {layover.layover_id}
            </LayoversTicket>
          </div>
          <LayoversTicketSubitem><span>Status:</span>{layover.status}</LayoversTicketSubitem>
          <LayoversTicketSubitem>
          <span>Voucher Alimentação:</span>{layover.food_voucher}
          </LayoversTicketSubitem>
          <LayoversTicketSubitem>
          <span>Voucher Transporte:</span>{layover.transport_voucher}
          </LayoversTicketSubitem>
          <LayoversTicketSubitem><span>Checkin:</span>{layover.checkin_status}</LayoversTicketSubitem>
        </MyLayoversCard>
      ))}
    </MyLayoversCards>
  );
};
