import React from 'react';
import { UserGroupIcon, ServerIcon, CalendarIcon, ChartSquareBarIcon,
CogIcon } from '@heroicons/react/outline';

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-2xl
            h-16 bg-blue-600 text-white font-bold">CLTV 2.0</h1>
        </div>
    );
}

export default SideBar;