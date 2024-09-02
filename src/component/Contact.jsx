import { TfiLocationPin } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { MdOutlineVerified } from "react-icons/md";


export default function Contact() {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const [showModal, setShowModal] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ecofxcu', 'template_n678pap', form.current, {
                publicKey: 'JszGI3p52HiDnGVKn',
            })
            .then(
                () => {
                    setShowModal(true)
                    name.current.value = ""
                    message.current.value = ""
                    email.current.value = ""
                },
                (error) => {
                    setShowModal(false)
                    console.log('FAILED...', error.text);
                    name.current.value = ""
                    message.current.value = ""
                    email.current.value = ""
                },
            );

    };
    return (
        <div className="relative flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <span className="">
                                    <TfiLocationPin size={25} />
                                </span>

                                <div className="ml-4 text-md tracking-wide font-semibold ">
                                    Ayush Residency , Dr. Babasaheb Ambedkar Chowk , Kondhwa Budruk , Pune-411048
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <LuPhoneCall size={22} />
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    9373345328
                                </div>
                            </div>

                            <div className="flex items-center mt-3 text-gray-600">
                                <MdOutlineMarkEmailUnread size={25} />

                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    npratikjagtap2704@gmail.com
                                </div>
                            </div>
                        </div>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-20">
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                    <MdOutlineVerified size={200} />
                                                    Email sent successfully
                                                </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline rounded-full focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                        <form className="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    name="from_name"
                                    type="name"
                                    id="name"
                                    placeholder="Full Name"
                                    ref={name}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    name="from_email"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    ref={email}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Email
                                </label>
                                <textarea
                                    name="message"
                                    ref={message}
                                    type="text"
                                    id="message"
                                    placeholder="text"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button

                                type="submit"
                                value="send"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
}
