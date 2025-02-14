import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../utils/AxiosIntance";

const validationSchema = Yup.object({
    referrerName: Yup.string().required('Required'),
    referrerEmail: Yup.string().email("Invalid email").required("Required"),
    refereeName: Yup.string().required('Required'),
    refereeEmail: Yup.string().email("Invalid email").required("Required"),
    courseInterested: Yup.string().required('Required'),
});


function ReferralForm({ isOpen, handleClose }) {
    const [isFormTouched, setFormTouched] = React.useState(false);
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const {data} = await axiosInstance.post("/api/referral", values);
            console.log(data);
            resetForm();
            handleClose(); // Close modal on successful submission
        } catch (err) {
            console.error(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            referrerName: "",
            referrerEmail: "",
            referralCode: "",
            refereeName: "",
            refereeEmail: "",
            courseInterested: "",
            message: "",
            howDidYouHear: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, formikHelpers) => {
            handleSubmit(values, formikHelpers);
        },
    });

    const handleChange = (e) => {
        setFormTouched(true);
        formik.handleChange(e);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.modal-content') && !isFormTouched) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" onMouseDown={handleOutsideClick}>
            <div
                className="relative bg-white rounded-lg px-8 py-2 w-full max-w-md max-h-[95vh] overflow-y-auto [&::-webkit-scrollbar]:hidden modal-content"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4 text-blue-600">Refer a Friend</h2>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <h3 className="text-base font-semibold mb-1">Your Details</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="referrerName"
                            name="referrerName"
                            type="text"
                            onChange={handleChange}
                            value={formik.values.referrerName}
                        />
                        {formik.touched.referrerName && formik.errors.referrerName ? (
                            <div className="text-red-600 text-sm">{formik.errors.referrerName}</div>
                        ) : null}
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="referrerEmail"
                            name="referrerEmail"
                            type="email"
                            onChange={handleChange}
                            value={formik.values.referrerEmail}
                        />
                        {
                            formik.touched.referrerEmail && formik.errors.referrerEmail ? (
                                <div className="text-red-600 text-sm">{formik.errors.referrerEmail}</ div>
                            ) : null
                        }
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Referral Code</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="referralCode"
                            name="referralCode"
                            type="text"
                            onChange={handleChange}
                            value={formik.values.referralCode}
                        />
                    </div>

                    <h3 className="text-base font-semibold mb-2">Friend's Details</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="refereeName"
                            name="refereeName"
                            type="text"
                            onChange={handleChange}
                            value={formik.values.refereeName}
                        />
                        {formik.touched.refereeName && formik.errors.refereeName ? (
                            <div className="text-red-600 text-sm">{formik.errors.refereeName}</div>
                        ) : null}
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="refereeEmail"
                            name="refereeEmail"
                            type="text"
                            onChange={handleChange}
                            value={formik.values.refereeEmail}
                        />
                        {
                            formik.touched.refereeEmail && formik.errors.refereeEmail ? (
                                <div className="text-red-600 text-sm">{formik.errors.refereeEmail}</ div>
                            ) : null
                        }
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Course Interested In</label>
                        <input
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="courseInterested"
                            name="courseInterested"
                            type="text"
                            onChange={handleChange}
                            value={formik.values.courseInterested}
                        />
                        {formik.touched.courseInterested && formik.errors.courseInterested ? (
                            <div className="text-red-600 text-sm">{formik.errors.courseInterested}</div>
                        ) : null}
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Message/Notes</label>
                        <textarea
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="message"
                            name="message"
                            rows={2}
                            onChange={handleChange}
                            value={formik.values.message}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
                        <select
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            id="howDidYouHear"
                            name="howDidYouHear"
                            onChange={handleChange}
                            value={formik.values.howDidYouHear}
                        >
                            <option value="Other">Other</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friend">Friend</option>
                            <option value="Search Engine">Search Engine</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ReferralForm;
