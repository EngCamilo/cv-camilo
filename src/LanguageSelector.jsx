import React from 'react';
import { ChevronDown, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="relative inline-flex items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50 shadow-sm transition duration-300 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-500 dark:hover:bg-slate-800">
            <span className="pointer-events-none pl-3 text-slate-500 dark:text-slate-400">
                <Languages className="h-4 w-4" />
            </span>
            <select
            value={i18n.language}
            onChange={changeLanguage}
            className="appearance-none bg-transparent py-2 pl-2 pr-8 text-sm font-semibold text-slate-700 cursor-pointer focus:outline-none dark:text-slate-100"
            >
            <option value="es">ES</option>
            <option value="en">EN</option>
            </select>
            <span className="pointer-events-none absolute right-3 text-slate-400 dark:text-slate-500">
                <ChevronDown className="h-4 w-4" />
            </span>
        </div>
    );
}
