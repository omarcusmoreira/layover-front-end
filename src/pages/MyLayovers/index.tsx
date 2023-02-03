import React, { useState } from "react";
import { Tabs, Tab, Grid, Card, CardContent, Typography } from "@mui/material";
import { Layovers } from "./components/Layovers";
import { FlightSearch } from "./components/FlightSearch";
import { SearchFlight } from '../SearchFlight'


const layoverMocks = [
  {
    layover_id: "1001232444090-90",
    status: "finalizado",
    food_voucher: "usado",
    transport_voucher: "usado",
    checkin_status: "completado",
  },
  {
    layover_id: "1001232444090-90",
    status: "finalizado",
    food_voucher: "usado",
    transport_voucher: "usado",
    checkin_status: "completado",
  },
  {
    layover_id: "1001232444090-90",
    status: "finalizado",
    food_voucher: "usado",
    transport_voucher: "usado",
    checkin_status: "completado",
  },
  {
    layover_id: "1001232444090-90",
    status: "finalizado",
    food_voucher: "usado",
    transport_voucher: "usado",
    checkin_status: "completado",
  },
];

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
      <div style={{ marginTop: "20px", backgroundColor: "rgba(76,89,121,.7)" }}>
        {activeTab === "MeusLayovers" ? (
          <Layovers layovers={layoverMocks}/>
        ) : (
          <SearchFlight />
        )}
      </div>
    </div>
  );
};
