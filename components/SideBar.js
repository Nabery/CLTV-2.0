import React from 'react';
import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon,
CogIcon } from '@heroicons/react/outline';

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-2xl
            h-16 bg-blue-600 text-white font-bold">CLTV 2.0</h1>

            <ul className="flex flex-col text-lg h-full">
                <li className="flex justify-center items-center flex-col
                py-7 border-l-4 border-blue-200 text-blue-700
                font-bold">
                    <ServerIcon className="w-7 h-7 text-blue-500"/>
                    ENG - SOR
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <CalendarIcon className="w-7 h-7"/>
                    Programação
                </li>
                <li className="flex justify-center items-center flex-col
                py-7 text-gray-500">
                    <ChartSquareBarIcon className="w-7 h-7"/>
                    RDA
                </li>
            </ul>
        </div>
    );
}

export default SideBar;