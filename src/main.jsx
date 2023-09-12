import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './providers/AuthProvider.jsx';
import UserInfoProvider from './providers/UserInfoProvider.jsx';
import UserCarsProvider from './providers/UserCarsProvider.jsx';

const queryClient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <UserInfoProvider>
          <UserCarsProvider>
            <App />
          </UserCarsProvider>
      </UserInfoProvider>
      </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
    </React.StrictMode>
)
