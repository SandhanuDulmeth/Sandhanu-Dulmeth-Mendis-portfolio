import React, { useState, useEffect } from 'react';
import { useOS } from '../../context/OSContext';
import StartMenu from './StartMenu';

const Taskbar = () => {
    const { windows, activeWindowId, focusWindow, minimizeWindow } = useOS();
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <>
            {startMenuOpen && <StartMenu onClose={() => setStartMenuOpen(false)} />}

            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 30,
                background: 'linear-gradient(to bottom, #245DD7 0%, #1F50B5 10%, #1F50B5 100%)',
                borderTop: '1px solid #3593FF',
                display: 'flex',
                alignItems: 'center',
                zIndex: 9999,
                userSelect: 'none'
            }}>
                {/* Start Button */}
                <div
                    onClick={() => setStartMenuOpen(!startMenuOpen)}
                    style={{
                        height: '100%',
                        width: 100,
                        background: 'linear-gradient(to bottom, #3E9C43 0%, #3E9C43 10%, #4CB852 100%)', // Green gradient
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                        cursor: 'pointer',
                        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.4)',
                        color: '#FFF',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: 14,
                        textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                        marginRight: 10
                    }}
                >
                    <div style={{
                        width: 18,
                        height: 18,
                        background: '#FFF',
                        borderRadius: '50%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 1,
                        padding: 2
                    }}>
                        <div style={{ background: '#F25A29' }}></div>
                        <div style={{ background: '#7FBA00' }}></div>
                        <div style={{ background: '#00A4EF' }}></div>
                        <div style={{ background: '#FFB900' }}></div>
                    </div>
                    start
                </div>

                {/* Quick Launch (Placeholder) */}
                <div style={{ width: 10, borderLeft: '1px solid rgba(0,0,0,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)', height: '80%', margin: '0 5px' }}></div>

                {/* Window Tabs */}
                <div style={{ flex: 1, display: 'flex', gap: 2, padding: '0 5px', overflow: 'hidden' }}>
                    {windows.map((win) => (
                        <div
                            key={win.id}
                            onClick={() => {
                                if (activeWindowId === win.id && !win.isMinimized) {
                                    minimizeWindow(win.id);
                                } else {
                                    focusWindow(win.id);
                                }
                            }}
                            style={{
                                width: 150,
                                height: 24,
                                background: activeWindowId === win.id && !win.isMinimized
                                    ? '#1E52B7' // Active dark blue
                                    : '#3C81F3', // Inactive lighter blue
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 5px',
                                gap: 5,
                                color: '#FFF',
                                fontSize: 11,
                                cursor: 'pointer',
                                border: '1px solid rgba(0,0,0,0.2)',
                                boxShadow: activeWindowId === win.id && !win.isMinimized
                                    ? 'inset 1px 1px 2px rgba(0,0,0,0.5)' // Depressed look
                                    : 'inset 1px 1px 0px rgba(255,255,255,0.3)' // Raised look
                            }}
                            onMouseEnter={(e) => {
                                if (activeWindowId !== win.id) e.currentTarget.style.background = '#5394F7';
                            }}
                            onMouseLeave={(e) => {
                                if (activeWindowId !== win.id) e.currentTarget.style.background = '#3C81F3';
                            }}
                        >
                            <span>{win.icon || '📄'}</span>
                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{win.title}</span>
                        </div>
                    ))}
                </div>

                {/* System Tray */}
                <div style={{
                    height: '100%',
                    background: '#0B96D6', // Tray blue
                    borderLeft: '1px solid rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    gap: 10,
                    color: '#FFF',
                    fontSize: 11,
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.2)'
                }}>
                    {/* Icons */}
                    <div style={{ display: 'flex', gap: 5 }}>
                        <span>🛡️</span>
                        <span>🔊</span>
                    </div>
                    {/* Clock */}
                    <div>{formatTime(time)}</div>
                </div>
            </div>
        </>
    );
};

export default Taskbar;
