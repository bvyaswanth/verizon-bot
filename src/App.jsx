

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import TopBar from './components/topbar';
import MainHeader from './components/mainheader';
import Bot from './components/bot';
import LandingPage from './components/landingpage';
import BotAiResponse from './components/botairesponse';
import RecommendedDevices from './components/RecommendedDevices';
import PrimaryOfferScreen from './components/primaryofferscreen';
import DeviceDetails from "./components/devicedetails";
import DeviceOptions from "./components/deviceoptions";
import DetailsSelection from "./components/detailsselection";
import CartPreview from "./components/cartpreview";
import Cart from "./components/cart";

const VerizonPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <MainHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/bot"
            element={<Bot isPaused={isPaused} setIsPaused={setIsPaused} />}
          />
          <Route
            path="/botai"
            element={
              <BotAiResponse
                isPaused={isPaused}
                setIsPaused={setIsPaused}
              />
            }
          >
            <Route
              index
              element={<PrimaryOfferScreen />}
            />
            <Route
              path="recommended-devices"
              element={
                <RecommendedDevices
                  isPaused={isPaused}
                  setIsPaused={setIsPaused}
                />
              }
            />
            <Route
              path="device-options"
              element={<Outlet />}
            >
              <Route
                index
                element={<DeviceOptions />}
              />
              <Route
                path="device-details"
                element={<DeviceDetails />}
              />
              <Route
                path="details-selection"
                element={<DetailsSelection />}
              />
            </Route>
            <Route
              path="cart-details"
              element={<Outlet />}
            >
              <Route
                index
                element={<CartPreview />}
              />
              <Route
                path="cart"
                element={<Cart />}
              />
              </Route>
          </Route>
        </Routes>

        {/* Footer would go here if needed */}
      </div>
    </Router>
  );
};

export default VerizonPage;
