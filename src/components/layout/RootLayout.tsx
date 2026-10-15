import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#2D3A34] selection:bg-[#E6F2EA] selection:text-[#0F6B4A]">
      <ScrollToTop />
      <Navbar />
      <main
        key={location.pathname}
        className="flex-1 animate-fadeIn transition-opacity duration-200"
      >
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
