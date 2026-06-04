const API_URL = 'http://localhost:5000/api';

// Helper to get auth headers
function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('inksink-token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

// Global generic fetcher
async function fetchAPI(endpoint, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { ...getHeaders(), ...options.headers },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `API error: ${res.status}`);
  }

  return res.json();
}

// ----------------------------------------
// API endpoints
// ----------------------------------------

export const authAPI = {
  login: (password) => fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ password })
  }),
};

export const clientsAPI = {
  getAll: () => fetchAPI('/clients'),
  getById: (id) => fetchAPI(`/clients/${id}`),
  update: (id, data) => fetchAPI(`/clients/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
};

export const requestsAPI = {
  submitPublic: (data) => fetchAPI('/requests', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  getPending: () => fetchAPI('/requests'),
  updateStatus: (id, status) => fetchAPI(`/requests/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  }),
};

export const appointmentsAPI = {
  getToday: () => fetchAPI('/appointments/today'),
  getMonth: (year, month) => fetchAPI(`/appointments/month/${year}/${month}`),
  create: (data) => fetchAPI('/appointments', {
    method: 'POST',
    body: JSON.stringify(data)
  })
};

export const paymentsAPI = {
  initiateSTK: (data) => fetchAPI('/payments/stkpush', {
    method: 'POST',
    body: JSON.stringify(data)
  })
};
