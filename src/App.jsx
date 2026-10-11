import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Toast from './components/Toast';
import { ScrollProgressBar, FloatingDock } from './components/ScrollEffects';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CoursesPage from './pages/CoursesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreselectedProgram, setModalPreselectedProgram] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'courses', 'why-choose-us', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquireModal = (programTitle = '') => {
    setModalPreselectedProgram(programTitle);
    setModalOpen(true);
  };

  const handleToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
      case 'about':
        return (
          <AboutPage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
      case 'courses':
        return (
          <CoursesPage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
      case 'why-choose-us':
        return (
          <WhyChooseUsPage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            setCurrentPage={handlePageChange}
            onShowToast={handleToast}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={handlePageChange}
            onOpenEnquireModal={handleOpenEnquireModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 relative w-full max-w-full overflow-x-hidden">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Global Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onOpenEnquireModal={handleOpenEnquireModal}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        onOpenEnquireModal={handleOpenEnquireModal}
      />

      {/* Floating Quick Action Dock & Back-To-Top */}
      <FloatingDock 
        onOpenEnquire={() => handleOpenEnquireModal()}
        onNavigate={handlePageChange}
      />

      {/* Quick Enquire Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedProgram={modalPreselectedProgram}
        onSuccess={(msg) => {
          handleToast(msg);
        }}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

