import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { portfolioImages } from '../data/mockData';
import { clientsAPI, requestsAPI, appointmentsAPI } from '../services/api';

const AppContext = createContext(null);

// Initial state starts empty for dynamic data, but keeps static portfolio
const initialState = {
  clients: [],
  appointments: [],
  requests: [],
  reviews: [],
  earnings: { daily: 0, weekly: 0, monthly: 0, upcoming: 0 },
  portfolio: portfolioImages,
  bookings: [], // Local submitted bookings
  isAuthenticated: !!localStorage.getItem('inksink-token'),
  isLoading: false,
  error: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.removeItem('inksink-token');
      return { ...state, isAuthenticated: false, clients: [], appointments: [], requests: [] };
    
    // Live Data Loads
    case 'SET_LIVE_DATA':
      return {
        ...state,
        clients: action.payload.clients || [],
        requests: action.payload.requests || [],
        appointments: action.payload.appointments || [],
        isLoading: false,
        error: null
      };

    // Booking requests (Frontend optimistic updates)
    case 'ADD_BOOKING':
      return {
        ...state,
        requests: [action.payload, ...state.requests],
      };
    case 'UPDATE_REQUEST_STATUS':
      return {
        ...state,
        requests: state.requests.map((r) =>
          r.id === action.payload.id
            ? { ...r, status: action.payload.status, notes: action.payload.notes || r.notes }
            : r
        ),
      };

    // Appointments (Frontend optimistic updates)
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    case 'UPDATE_APPOINTMENT':
      return {
        ...state,
        appointments: state.appointments.map((a) =>
          a.id === action.payload.id ? { ...a, ...action.payload } : a
        ),
      };

    // Clients
    case 'UPDATE_CLIENT':
      return {
        ...state,
        clients: state.clients.map((c) =>
          c.id === action.payload.id ? { ...c, ...action.payload } : c
        ),
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadLiveData = useCallback(async () => {
    if (!state.isAuthenticated) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Fetch everything for the dashboard in parallel
      const [clientsRes, requestsRes, appointmentsRes] = await Promise.all([
        clientsAPI.getAll(),
        requestsAPI.getPending(),
        appointmentsAPI.getToday() // Fetching today's for now
      ]);

      dispatch({
        type: 'SET_LIVE_DATA',
        payload: {
          clients: clientsRes,
          requests: requestsRes,
          appointments: appointmentsRes
        }
      });
    } catch (err) {
      console.error('Failed to fetch live data:', err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
      // If unauthorized, logout
      if (err.message.includes('401')) {
        dispatch({ type: 'LOGOUT' });
      }
    }
  }, [state.isAuthenticated]);

  useEffect(() => {
    loadLiveData();
  }, [loadLiveData]);

  return (
    <AppContext.Provider value={{ state, dispatch, loadLiveData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

export default AppContext;
