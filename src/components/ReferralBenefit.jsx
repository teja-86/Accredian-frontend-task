import React from "react";
import BenefitJson from "../mock/referalBenefit.json";
import AllProgram from "../mock/allPrograms.json";
import Scholar from "../asset/Scholar.png";
import { MdCurrencyRupee } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Button from "./ui/button";
import ReferralForm from "./ReferralForm";

function ReferralBenefit() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="w-full 2xl:max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-10">What Are The <span className="text-[#1A73E8]">Referral Benefits?</span></h2>
            <div className="w-full flex justify-center">
                <label className="inline-flex items-center justify-end cursor-pointer gap-3">
                    <span className="ms-3 text-sm font-medium text-gray-900">Enrolled</span>
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 outline-1 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                     after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <div className="lg:flex lg:justify-center gap-8">
                <div className="relative overflow-x-auto shadow-lg 2xl:rounded-lg my-4 ">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs text-white border-b bg-blue-500 border-b-[#AFCEF7]">
                            <tr>
                                <th scope="col" className="px-6 py-3 capitalize">
                                    <span className="flex items-center justify-between gap-4">
                                        All Programs
                                        <FaAngleRight />
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllProgram.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row" className="px-6 py-4 font-medium border-b-2">
                                            <span className="flex items-center justify-between gap-4 cursor-pointer">
                                                {
                                                    data.programName
                                                }
                                                <FaAngleRight />
                                            </span>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="relative overflow-x-auto shadow-lg 2xl:rounded-lg my-4">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs text-[#1350A0] border-b bg-[#AFCEF7] border-b-[#AFCEF7]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Programs
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Referrer Bonus
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Referee Bonus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                BenefitJson.map((program) => (
                                    <tr key={program.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-[#1350A0]">
                                            <span className="flex items-center gap-4">
                                                <img src={Scholar} alt="scholar" />
                                                {program.Programs}
                                            </span>
                                        </th>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1">
                                                <MdCurrencyRupee />
                                                {program.ReferrerBonus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1">
                                                <MdCurrencyRupee />
                                                {program.RefereeBonus}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="w-full flex justify-center">
                <div className="inline-flex items-center justify-end cursor-pointer gap-3 my-4 border px-6 py-2 text-gray-500 rounded-lg">
                    <span>Show more</span>
                    <FaAngleDown />
                </div>
            </div>

            <div className="text-center">
                <Button onClick={handleOpenModal}>
                    Refer Now
                </Button>
            </div>
            <ReferralForm isOpen={isModalOpen} handleClose={handleCloseModal} />
        </div>
    );
}

export default ReferralBenefit;
