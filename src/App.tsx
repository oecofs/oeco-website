import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<HistoryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
