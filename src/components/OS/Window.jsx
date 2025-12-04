import React, { useState, useEffect, useRef } from 'react';
import { useOS } from '../../context/OSContext';

const Window = ({ id, title, icon, children, initialPosition, isMinimized, isMaximized, zIndex }) => {
    const { closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useOS();
    const [position, setPosition] = useState(initialPosition || { x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const windowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging && !isMaximized) {
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset, isMaximized]);

    const handleMouseDown = (e) => {
        if (e.button !== 0) return; // Only left click
        focusWindow(id);
        if (!isMaximized) {
            setIsDragging(true);
            setDragOffset({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    if (isMinimized) return null;

    const style = isMaximized ? {
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 30px)', // Subtract taskbar height
        borderRadius: 0
    } : {
        top: position.y,
        left: position.x,
        width: 600,
        height: 400,
        borderRadius: '5px 5px 0 0'
    };

    return (
        <div
            ref={windowRef}
            onMouseDown={() => focusWindow(id)}
            style={{
                position: 'absolute',
                backgroundColor: '#ECE9D8',
                border: '1px solid #0058EE',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: zIndex,
                overflow: 'hidden',
                ...style
            }}
        >
            {/* Title Bar */}
            <div
                onMouseDown={handleMouseDown}
                onDoubleClick={() => maximizeWindow(id)}
                style={{
                    height: 30,
                    background: 'linear-gradient(to bottom, #0058EE 0%, #3593FF 4%, #288EFB 18%, #245DD7 100%)', // XP Blue Title Bar
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 5px',
                    cursor: 'default',
                    userSelect: 'none',
                    color: '#FFF',
                    fontFamily: 'Trebuchet MS, sans-serif',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                    borderRadius: isMaximized ? 0 : '4px 4px 0 0'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span>{icon || '📄'}</span>
                    <span>{title}</span>
                </div>

                {/* Window Controls */}
                <div style={{ display: 'flex', gap: 2 }}>
                    <WindowButton type="minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} />
                    <WindowButton type="maximize" onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }} />
                    <WindowButton type="close" onClick={(e) => { e.stopPropagation(); closeWindow(id); }} />
                </div>
            </div>

            {/* Menu Bar (Optional, visual only for now) */}
            <div style={{
                background: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                padding: '2px 5px',
                fontSize: 11,
                display: 'flex',
                gap: 10
            }}>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Favorites</span>
                <span>Tools</span>
                <span>Help</span>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, padding: 10, overflow: 'auto', backgroundColor: '#FFF', position: 'relative' }}>
                {children}
            </div>
        </div>
    );
};

const WindowButton = ({ type, onClick }) => {
    const getSymbol = () => {
        switch (type) {
            case 'minimize': return '_';
            case 'maximize': return '□';
            case 'close': return 'X';
            default: return '';
        }
    };

    const getColor = () => {
        if (type === 'close') return '#D64B29'; // Red
        return '#245DD7'; // Blue
    };

    return (
        <div
            onClick={onClick}
            style={{
                width: 21,
                height: 21,
                background: getColor(),
                border: '1px solid #FFF',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                fontSize: 12,
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.3)'
            }}
        >
            {getSymbol()}
        </div>
    );
};

export default Window;
