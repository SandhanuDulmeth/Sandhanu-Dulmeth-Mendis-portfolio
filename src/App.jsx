import React from 'react';
import { OSProvider, useOS } from './context/OSContext';
import BootScreen from './components/OS/BootScreen';
import LoginScreen from './components/OS/LoginScreen';
import Desktop from './components/OS/Desktop';
import './styles/xp-theme.css';

const OSManager = () => {
  const { osState } = useOS();

  switch (osState) {
    case 'boot':
      return <BootScreen />;
    case 'login':
      return <LoginScreen />;
    case 'desktop':
      return <Desktop />;
    default:
      return <BootScreen />;
  }
};

function App() {
  return (
    <OSProvider>
      <OSManager />
    </OSProvider>
  );
}

export default App;
