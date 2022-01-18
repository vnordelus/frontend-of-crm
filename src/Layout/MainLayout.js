
import Header from './Header'
import Footer from  './Footer'

import React from 'react'

export const MainLayout = ({children}) => {
    return (
        <div className="main-layout">
            <header className="header">
              <Header/>
            </header>
            <main className="main-area">
               {children}
            </main>
            <footer className="footer">
              <Footer/> 
            </footer> 
        </div>
    );
}
export default MainLayout