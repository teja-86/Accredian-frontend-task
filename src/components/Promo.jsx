import React from "react";
import Anniversary from "../asset/Anniversary.png";
import Button from "./ui/button";
import ReferralForm from "./ReferralForm";

function Promo() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className="w-full 2xl:max-w-7xl mx-auto">
            <div className="max-w-3xl bg-[#E6F0FD] mx-auto px-6 py-3 font-medium mt-10 md:rounded-3xl">
                <ul className="flex text-center justify-between text-sm">
                    <li className="cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out">Refer</li>
                    <li className="cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out">Benefit</li>
                    <li className="cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out">FAQs</li>
                    <li className="cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out">Support</li>
                </ul>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center lg:gap-4 bg-[#EEF5FF] my-10 px-6 py-3 2xl:rounded-3xl">
                <div className="lg:max-w-[40%]">
                    <div>
                        <p className="md:text-6xl text-3xl font-bold my-4">
                            Let&apos;s Learn & Earn
                        </p>
                        <p className="md:text-4xl text-2xl my-4">
                            Get a chance to win
                            up-to <span className="text-blue-500 font-bold">Rs. 15,000</span>
                        </p>
                    </div>
                    <Button onClick={handleOpenModal}>
                        Refer now
                    </Button>
                </div>
                <img src={Anniversary} alt="promo" className="lg:max-w-[814px] lg:max-h-[650px] object-cover" />
            </div>
            <ReferralForm isOpen={isModalOpen} handleClose={handleCloseModal} />
        </div>
    );
}

export default Promo;
