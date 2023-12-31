import React from "react";

const select = ({ sexo, estadoCivil }) => {
    return (
        <>
            <div>
                <label
                    htmlFor="genero"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Sexo
                </label>
                <select
                    id="sexo"
                    name="sexo"
                    defaultValue={sexo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange="handleGenderChange(this)"
                >
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="estadoCivil"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Estado civil
                </label>
                <select
                    id="estadoCivil"
                    name="estadoCivil"
                    defaultValue={estadoCivil}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange="handleGenderChange(this)"
                >
                    <option value="Soltero/a">Soltero/a</option>
                    <option value="Casado/a">Casado/a</option>
                    <option value="Union Libre">
                        Unión libre o unión de hecho.
                    </option>
                    <option value="Separado/a">Separado/a</option>
                    <option value="Divorciado/a">Divorciado/a</option>
                    <option value="Viudo/a">Viudo/a</option>
                </select>
            </div>
        </>
    );
};

export default select;
