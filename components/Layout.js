import React from 'react';
function Layout({children}) {
    return (
        <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
            <main className="pt-35">
                {children}
            </main>
        </div>
    );
}

export default Layout;