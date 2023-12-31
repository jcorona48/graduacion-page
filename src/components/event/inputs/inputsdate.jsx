import React from "react";

const inputsdate = () => {
    return (
        <>
            <div>
                <label
                    for="birthdate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Fecha de inicio del evento{" "}
                    <span class="text-red-500">*</span>
                </label>
                <input
                    type="datetime-local"
                    id="birthdate"
                    name="fechaInicio"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div>
                <label
                    for="birthdate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Fecha de cierre del evento{" "}
                    <span class="text-red-500">*</span>
                </label>
                <input
                    type="datetime-local"
                    id="birthdate"
                    name="fechaFinal"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
      "
                    required
                />
            </div>
        </>
    );
};

export default inputsdate;