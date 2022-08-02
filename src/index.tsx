import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const tansaarniaTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: "lightblue",
  colors: {
    "lightblue": [
      '#ffffff',
      '#007EAB',
      '#0087B0',
      '#0091B6',
      '#049aba',
      '#1CA6C0',
      '#35B1C6',
      '#4DBBCC',
      '#65C6D3',
      '#7DCFD9',
    ],
    
    "lightgreen": [
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
      '#389116',
    ]
  },
  defaultRadius: 10,
};

root.render(
  // <React.StrictMode>
    <MantineProvider theme={tansaarniaTheme}>
        <NotificationsProvider>
          <ModalsProvider>
              <App />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
  // </React.StrictMode>
);

