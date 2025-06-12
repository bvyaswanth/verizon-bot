import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BotModal from "./botmodal";

const NavButtons = ({ text }) => {
    const navigate = useNavigate();

    const navigateToBot = () => {
        navigate("/bot");
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

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div style={{ backgroundColor: "#F5FF1E" }} className="text-center content-center h-10">
                Iphone 16 pro max on us. with new line on unlimited ultimate.
            </div>
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                    <div className="flex flex-row items-center gap-2">
                        <NavButtons text="Switch to Verizon" />
                        <NavButtons text="Phones" />
                        <NavButtons text="Mobile Plans" />
                        <NavButtons text="Bring a Device" />
                        <NavButtons text="Home Internet" />
                        <NavButtons text="Deals" />
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
                TEST
            </BotModal>
        </div>
    )
}

export default LandingPage
