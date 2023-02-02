import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const Layovers = () => {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <Grid item xs={4}>
          <Card style={{ height: "100%", maxWidth:"360px"}}>
            <CardContent>
              <Typography variant="h5">Layover: 0100123452023551</Typography>
              <Typography>Status: Pronto</Typography>
              <Typography>Voucher Alimentação: free</Typography>
              <Typography>Voucher Transporte: free</Typography>
              <Typography>Checkin: True</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const LocalizarVoo = () => {
  return <h1>Localizar Voo Component</h1>;
};

export const MyLayovers = () => {
  const [activeTab, setActiveTab] = useState("MeusLayovers");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "125px" }}
    >
      <h1>Meus Layovers</h1>
      <Tabs
        value={activeTab}
        onChange={(e: any, newValue: any) => setActiveTab(newValue)}
        centered
      >
        <Tab value="MeusLayovers" label="Meus Layovers" />
        <Tab value="LocalizarVoo" label="Localizar Voo" />
      </Tabs>
      <div style={{ marginTop: "20px", backgroundColor:'rgba(76,89,121,.7)'}}>
        {activeTab === "MeusLayovers" ? <Layovers /> : <LocalizarVoo />}
      </div>
    </div>
  );
};
