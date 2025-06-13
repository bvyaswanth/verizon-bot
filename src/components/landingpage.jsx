// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BotModal from "./botmodal";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Bot from './bot';
import BotAiResponse from './botairesponse';
import PrimaryOfferScreen from './primaryofferscreen';
import DeviceDetails from "./devicedetails";
import DeviceOptions from "./deviceoptions";
import DetailsSelection from "./detailsselection";
import CartPreview from "./cartpreview";
import Cart from "./cart";
import { useLocation } from 'react-router-dom'

const NavButtons = ({ text, setShowModal }) => {
    // const navigate = useNavigate();

    const navigateToBot = () => {
        //setShowModal(true)
    };

    return (
        <button style={{
            backgroundColor: "#F3EDE0",
            height: 100,
            width: 200
        }} onClick={navigateToBot}>
            {text}
        </button>
    )
}

const LandingPage = () => {

    const [isPaused, setIsPaused] = useState(false);
    const location = useLocation();
    const landingRoute = Boolean(["", "/"].includes(location.pathname))
    const modalAppearTime = 2.5;
    const [showModal, setShowModal] = useState(!landingRoute);

    useEffect(()=>{
        if(landingRoute){
            setTimeout(()=>{
                setShowModal(true)
            }, modalAppearTime*1000)
        }
    }, [])

    return (
        <div>
            <div style={{ backgroundColor: "#F5FF1E" }} className="text-center content-center h-10">
                Iphone 16 pro max on us. with new line on unlimited ultimate.
            </div>
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                    <div className="flex flex-row items-center gap-2">
                        <NavButtons setShowModal={setShowModal} text="Switch to Verizon"/>
                        <NavButtons setShowModal={setShowModal} text="Phones" />
                        <NavButtons setShowModal={setShowModal} text="Mobile Plans" />
                        <NavButtons setShowModal={setShowModal} text="Bring a Device" />
                        <NavButtons setShowModal={setShowModal} text="Home Internet" />
                        <NavButtons setShowModal={setShowModal} text="Deals" />
                    </div>
                    <div className="flex flex-row justify-around gap-5">
                        <div style={{ paddingTop: 10 }}>
                            <img src="./src/assets/landing-page-image-1.png" alt="Landing Page 1" height={360} />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <img src="./src/assets/landing-page-image-2.png" alt="Landing Page 2" height={360} />
                        </div>
                    </div>
                </div>
            </main>
            <BotModal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Routes>
                    <Route
                        path="/"
                        element={<Bot isPaused={isPaused} setIsPaused={setIsPaused} />}
                    />
                    <Route
                        path="/offers"
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
                            {/* <Route
                                path="details-selection"
                                element={<DetailsSelection />}
                            /> */}
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
            </BotModal>
        </div>
    )
}

export default LandingPage
