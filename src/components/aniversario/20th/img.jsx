import React, { useEffect, useState } from "react";
import Overlay from "@/components/aniversario/modal/modal";
import { th20Config } from "@/config/configaniversario/20thaniversario/20thconfig";

const App = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const openOverlay = (imageSrc) => {
        setSelectedImage(imageSrc);
        document.body.classList.add("overflow-y-auto");
    };

    const closeOverlay = () => {
        setSelectedImage("");
        document.body.classList.remove("overflow-y-auto");
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeOverlay();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <div className=" h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex text-center items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                                20th Aniversario
                            </h2>
                        </div>
                        <div className="mt-3 sm:mt-5 sm:ml-8">
                            <a
                                href={th20Config.regresar}
                                className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-zinc-100 focus-visible:ring active:bg-gray-300 md:px-8 md:py-3 md:text-base"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-5 h-6 mr-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    ></path>
                                </svg>
                                Volver aniversarios
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <div
                            className="group relative rounded-2xl flex h-96 bg-gray-100 shadow-lg md:h-80"
                            onClick={() => openOverlay(th20Config.images[0])}
                        >
                            <img
                                src={th20Config.images[0]}
                                className="absolute rounded-2xl inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[1])}
                            class="group relative flex h-48  rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={th20Config.images[1]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[2])}
                            class="group relative flex h-48 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={th20Config.images[2]}
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[3])}
                            class="group relative flex h-96 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={th20Config.images[3]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[4])}
                            class="group relative flex h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[700px] md:w-[945px]"
                        >
                            <img
                                src={th20Config.images[4]}
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(th20Config.images[5])}
                            class="group relative flex h-48 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={th20Config.images[5]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[6])}
                            class="group relative flex h-48 rounded-2xl  bg-gray-100 shadow-lg md:h-80  "
                        >
                            <img
                                src={th20Config.images[6]}
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(th20Config.images[7])}
                            class="group relative flex h-48 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80 "
                        >
                            <img
                                src={th20Config.images[7]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />
                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(th20Config.images[8])}
                            class="group relative flex h-96 rounded-2xl  bg-gray-100 shadow-lg md:h-80  "
                        >
                            <img
                                src={th20Config.images[8]}
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
                {selectedImage && (
                    <Overlay imageSrc={selectedImage} onClose={closeOverlay} />
                )}
            </div>
        </>
    );
};

export default App;
