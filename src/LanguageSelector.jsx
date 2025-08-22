import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="relative inline-block text-left">
            <select
            value={i18n.language}
            onChange={changeLanguage}
            className="bg-white text-sm border border-gray-300 rounded-full px-4 py-1 shadow-sm cursor-pointer text-gray-800 hover:border-gray-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
            <option value="es">🌎 ES</option>
            <option value="en">🇺🇸 EN</option>
            </select>
        </div>
    );
}