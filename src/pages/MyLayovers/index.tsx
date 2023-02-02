import React, { useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { Layovers } from "./components/Layovers";
import { FlightSearch } from "./components/FlightSearch";

import {
  MyLayoversPage,
  MyLayoversPageContentBackGround,
  MyLayoversPageContent,
  MyLayoversPageTitle,
  MyLayoversCards,
  ActionsButtonsWrap,
} from "./styles";



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

const SearchFlight = () => {
  return <h1>Localizar Voo Component</h1>;
};

export const MyLayovers = () => {
  const [activeTab, setActiveTab] = useState("MeusLayovers");

  return (
    < MyLayoversPage>
      <MyLayoversPageTitle>Meus Layovers</MyLayoversPageTitle>

      <MyLayoversPageContentBackGround>

        <MyLayoversPageContent>
          <Tabs
            value={activeTab}
            onChange={(e: any, newValue: any) => setActiveTab(newValue)}
            sx={{ marginTop: "-2rem" }}
          >

            <Tab value="MeusLayovers" label="Meus Layovers"
              sx={{
                height: "4rem",
                width: "292px",
                marginRight: "2rem",
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                fontWeight: "600",
                borderRadius: "1rem",
                backgroundColor: "#e8e3e3",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

                '&:hover': {
                  color: "#000",
                  backgroundColor: '#ccc'
                },
              }}
            />

            <Tab value="LocalizarVoo" label="Localizar Voo"
              sx={{
                height: "4rem",
                width: "292px",
                fontSize: "24px",
                lineHeight: "29px",
                textTransform: "capitalize",
                fontWeight: "600",
                borderRadius: "1rem",
                backgroundColor: "#e8e3e3",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                '&:hover': {
                  color: "#000",
                  backgroundColor: '#ccc'
                }
              }}
            />

          </Tabs>
          <MyLayoversCards>
            {activeTab === "MeusLayovers" ? (
              <Layovers layovers={layoverMocks} />
            ) : (
              <FlightSearch />
            )}
          </MyLayoversCards>
        </MyLayoversPageContent>

      </MyLayoversPageContentBackGround>
      <ActionsButtonsWrap>
        <Button
          onClick={() => { navigate('#') }}
          sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': { color: '#000', backgroundColor: '#fff' } }}>

          Voltar</Button>
        <Button
          onClick={() => { navigate('#') }}
          sx={{ color: "#fff", fontSize: "19px", width: "200px", fontWeight: "300", textTransform: "capitalize", padding: "0 52px", borderRadius: "19px", backgroundColor: "#021442", height: "38px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", '&:hover': { color: '#000', backgroundColor: '#fff' } }}>
          Avançar</Button>
      </ActionsButtonsWrap>

    </MyLayoversPage>
  );
};
