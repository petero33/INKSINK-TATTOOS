import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layouts
import Navbar from './components/common/Navbar';
import DashboardLayout from './components/dashboard/DashboardLayout';

// Public Pages
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

// Dashboard Pages
import DashboardPage from './pages/DashboardPage';
import PendingRequests from './components/dashboard/PendingRequests';
import DashCalendar from './components/dashboard/DashCalendar';
import ClientList from './components/dashboard/ClientList';
import EarningsOverview from './components/dashboard/EarningsOverview';

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/portfolio" element={<PublicLayout><PortfolioPage /></PublicLayout>} />
          <Route path="/process" element={<PublicLayout><ProcessPage /></PublicLayout>} />
          <Route path="/book" element={<PublicLayout><BookingPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
          
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="requests" element={<PendingRequests />} />
            <Route path="calendar" element={<DashCalendar />} />
            <Route path="clients" element={<ClientList />} />
            <Route path="earnings" element={<EarningsOverview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
