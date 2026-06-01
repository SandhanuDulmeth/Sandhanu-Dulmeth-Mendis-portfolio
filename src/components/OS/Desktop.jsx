import React from 'react';
import { useOS } from '../../context/OSContext';
import Taskbar from './Taskbar';
import Window from './Window';

import AboutMe from '../Apps/AboutMe';
import Resume from '../Apps/Resume';
import Projects from '../Apps/Projects';
import Contact from '../Apps/Contact';
import InternetExplorer from '../Apps/InternetExplorer';
import Chess from '../Apps/Chess';

const Desktop = () => {
    const { windows, openWindow } = useOS();

    const desktopIcons = [
        { id: 'about', title: 'About Me', icon: '👤', component: <AboutMe /> },
        { id: 'resume', title: 'My Resume', icon: '📝', component: <Resume /> },
        { id: 'projects', title: 'My Projects', icon: '🎨', component: <Projects /> },
        { id: 'contact', title: 'Contact Me', icon: '📧', component: <Contact /> },
        { id: 'internet', title: 'Internet Explorer', icon: '🌐', component: <InternetExplorer /> },
        { id: 'chess', title: 'Chess.exe', icon: '♟️', component: <Chess /> },
        { id: 'recycle', title: 'Recycle Bin', icon: '🗑️', component: <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888', fontFamily: 'Tahoma, sans-serif' }}><div style={{ fontSize: 48, marginBottom: 10 }}>🗑️</div><div style={{ fontSize: 13 }}>Recycle Bin is empty</div></div> },
    ];

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Bliss-like wallpaper
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Desktop Icons */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                height: 'calc(100% - 30px)',
                padding: 10,
                gap: 20,
                alignContent: 'flex-start'
            }}>
                {desktopIcons.map((icon) => (
                    <div
                        key={icon.id}
                        onDoubleClick={() => openWindow(icon.id, icon.title, icon.component, icon.icon)}
                        style={{
                            width: 80,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            color: '#FFF',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                            gap: 5
                        }}
                        className="desktop-icon"
                    >
                        <div style={{ fontSize: 40 }}>{icon.icon}</div>
                        <div style={{ textAlign: 'center', fontSize: 13 }}>{icon.title}</div>
                    </div>
                ))}
            </div>

            {/* Windows Layer */}
            {windows.map((win) => (
                <Window key={win.id} {...win}>
                    {win.component}
                </Window>
            ))}

            <Taskbar />

            <style>{`
        .desktop-icon:hover {
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }
      `}</style>
        </div>
    );
};

export default Desktop;
