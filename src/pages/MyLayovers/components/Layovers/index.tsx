import { Card, CardContent, Grid, Typography } from "@mui/material";

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
    <Grid container spacing={3}>
      {layovers.map((layover) => (
        <Grid item xs={4}>
          <Card style={{ height: "100%", maxWidth: "360px" }}>
            <CardContent>
              <Typography variant="h5">
                Layover: {layover.layover_id}
              </Typography>
              <Typography>Status: {layover.status}</Typography>
              <Typography>
                Voucher Alimentação: {layover.food_voucher}
              </Typography>
              <Typography>
                Voucher Transporte: {layover.transport_voucher}
              </Typography>
              <Typography>Checkin: {layover.checkin_status}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
