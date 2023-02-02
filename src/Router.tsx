import { Route, Routes } from "react-router-dom";
import { FlightProblems } from "./components/FlightProblems";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Auction } from "./pages/Auction";
import { AuctionResult } from "./pages/AuctionResult";
import { BiddingAuction } from "./pages/BiddingAuction";
import CheckinHotel from "./pages/CheckinHotel";
import { Feedback } from "./pages/Feedback";
import GraphicsPanel from "./pages/GraphicsPanel";
import { Home } from "./pages/Home";
import { HotelsAccommodations } from "./pages/HotelAccomodations";
import { Login } from "./pages/Login";
import { MyLayovers } from "./pages/MyLayovers";
import { MyPassword } from "./pages/MyPassword";
import { Privacy } from "./pages/Privacy";
import { RegisterHotel } from "./pages/RegisterHotel";
import { RegisterUser } from "./pages/RegisterUser";
import { Travel } from "./pages/Travel";
import { WarningLayover } from "./pages/WarningLayover";
import { MyFlight } from "./pages/MyFlight"
import { PrivateRoute } from "./PrivateRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/hotel" element={<RegisterHotel />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/auction-result" element={<AuctionResult />} />
          <Route path="/bidding-auction" element={<BiddingAuction />} />
          <Route path="/checkin-hotel" element={<CheckinHotel />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/graphics-panel" element={<GraphicsPanel />} />
          <Route path="/mypassword" element={<MyPassword />} />
          <Route path="/extra-infos" element={<FlightProblems />} />
          <Route path="/warning-layover" element={<WarningLayover />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/my-flights" element={<MyFlight />} />
          <Route path="/my-layovers" element={<MyLayovers />} />
          <Route
            path="/register-hotel/accommodations"
            element={<HotelsAccommodations />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
