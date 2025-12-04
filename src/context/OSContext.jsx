import React, { createContext, useState, useContext, useEffect } from 'react';

const OSContext = createContext();

export const OSProvider = ({ children }) => {
  const [osState, setOsState] = useState('boot'); // boot, login, desktop
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);

  // Boot sequence simulation
  useEffect(() => {
    if (osState === 'boot') {
      const timer = setTimeout(() => {
        setOsState('login');
      }, 4000); // 4 seconds boot time
      return () => clearTimeout(timer);
    }
  }, [osState]);

  const login = () => {
    setOsState('desktop');
    // Play startup sound if we were to add audio
  };

  const openWindow = (id, title, component, icon) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        // If minimized, restore it
        if (existing.isMinimized) {
          return prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 } : w);
        }
        // Just focus
        setActiveWindowId(id);
        return prev.map(w => w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w);
      }
      
      // Open new
      setActiveWindowId(id);
      setZIndexCounter(z => z + 1);
      return [...prev, {
        id,
        title,
        component,
        icon,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: zIndexCounter + 1,
        position: { x: 100 + (prev.length * 30), y: 50 + (prev.length * 30) } // Cascade
      }];
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const maximizeWindow = (id) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    setActiveWindowId(id);
  };

  const focusWindow = (id) => {
    if (activeWindowId === id) return;
    setActiveWindowId(id);
    setZIndexCounter(z => z + 1);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w));
  };

  return (
    <OSContext.Provider value={{
      osState,
      login,
      windows,
      activeWindowId,
      openWindow,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      focusWindow
    }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);
