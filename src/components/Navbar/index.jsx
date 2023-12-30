import { navbarOptions } from "../../config/config";
import NavbarItem from "./NavbarItem";
import SwitcherDarkMode from "./SwitcherDarkMode.jsx";
import React from "react";
import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore.js";

const ADMIN_ROLE = import.meta.env.PUBLIC_ADMIN_ROLE;

const index = () => {
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <nav class="bg-[#26c4bc] rela border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-8"
                        alt="Flowbite Logo"
                    />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Isa Promotion
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-dropdown"
                >
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 items-center justify-center">
                        {navbarOptions.map((item, index) => {
                            const isAdmin =
                                item.admin &&
                                !(user?.rol?.nombre == ADMIN_ROLE);

                            return (
                                <NavbarItem
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    path={item.path}
                                    dropDown={item.dropDown}
                                    dropDownOptions={item.dropDownOptions}
                                    admin={item.admin}
                                    className={isAdmin ? "hidden" : ""}
                                />
                            );
                        })}
                        <li>
                            <SwitcherDarkMode />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default index;