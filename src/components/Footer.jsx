import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
    const program = ["Data Science & AI",
        "Product Management",
        "Business Analytics",
        "Digital Transformation",
        "Business Management",
        "Project Management",
        "Strategy & Leadership",
        "Senior Management",
        "Fintech"]

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-8 lg:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Programs Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Programs</h2>
                    <ul>
                        {
                            program.map((program) => (
                                <ul key={program} className="mb-2 flex items-center">
                                    <span>{program}</span>
                                    <span className="ml-2">+</span>
                                </ul>
                            ))
                        }
                    </ul>
                </div>
                {/* Contact Us Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <ul>
                        <li className="mb-2">
                            Email us (For Data Science Queries):{" "}
                            <a href="/" className="text-blue-400">
                                email@email.com
                            </a>
                        </li>
                        <li className="mb-2">
                            Email us (For Product Management Queries):{" "}
                            <a href="/" className="text-blue-400">
                                email@email.com
                            </a>
                        </li>
                        <li className="mb-2">
                            Data Science Admission Helpline: +91 999 999 9999 (9 AM - 7 PM)
                        </li>
                        <li className="mb-2">
                            Product Management Admission Helpline: +91 999 999 9999
                        </li>
                        <li className="mb-2">Enrolled Student Helpline: +91 999 999 9999</li>
                        <li className="mb-2">
                            Office Address: India
                        </li>
                    </ul>
                </div>

                {/* Accredian Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Accredian</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                About
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Career
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Blog
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Admission Policy
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Referral Policy
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Terms Of Service
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-blue-400">
                                Master FAQs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center">
                {/* Follow Us Section */}
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="/" className="text-blue-400 hover:text-white">
                            <FaFacebook />
                        </a>
                        <a href="/" className="text-blue-400 hover:text-white">
                            <FaLinkedin />
                        </a>
                        <a href="/" className="text-blue-400 hover:text-white">
                            <FaTwitter />
                        </a>
                        <a href="/" className="text-blue-400 hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="/" className="text-blue-400 hover:text-white">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center sm:text-left">
                    <p>&copy; 2024 ALL Rights Reserved</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
