import React from 'react';

import { useOS } from '../../context/OSContext';
import AboutMe from '../Apps/AboutMe';
import Resume from '../Apps/Resume';
import Projects from '../Apps/Projects';
import Contact from '../Apps/Contact';
import InternetExplorer from '../Apps/InternetExplorer';

const StartMenu = ({ onClose }) => {
    const { openWindow } = useOS();

    const handleOpen = (id, title, component, icon) => {
        openWindow(id, title, component, icon);
        onClose();
    };
    return (
        <div style={{
            position: 'absolute',
            bottom: 30,
            left: 0,
            width: 380,
            height: 480,
            backgroundColor: '#FFF',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            boxShadow: '2px -2px 10px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10000,
            overflow: 'hidden',
            fontFamily: 'Tahoma, sans-serif'
        }}>
            {/* Header */}
            <div style={{
                height: 60,
                background: 'linear-gradient(to bottom, #156EEF, #3692F6)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                color: '#FFF',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottom: '2px solid #E55800' // Orange line
            }}>
                <div style={{
                    width: 44,
                    height: 44,
                    background: '#FFF',
                    borderRadius: 3,
                    border: '2px solid #DCEAF8',
                    marginRight: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24
                }}>🦆</div>
                <span style={{ fontWeight: 'bold', fontSize: 16, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Sandhanu Mendis</span>
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Left Column (White) */}
                <div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <MenuItem icon="🌐" label="Internet" subLabel="Internet Explorer" bold onClick={() => handleOpen('ie', 'Internet Explorer', <InternetExplorer />, '🌐')} />
                    <MenuItem icon="📧" label="E-mail" subLabel="Outlook Express" bold onClick={() => alert('Outlook Express is not installed.')} />
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D1D1D1, transparent)', margin: '4px 0' }}></div>
                    <MenuItem icon="📝" label="My Resume" onClick={() => handleOpen('resume', 'My Resume', <Resume />, '📝')} />
                    <MenuItem icon="🎨" label="My Projects" onClick={() => handleOpen('projects', 'My Projects', <Projects />, '🎨')} />
                    <MenuItem icon="👤" label="About Me" onClick={() => handleOpen('about', 'About Me', <AboutMe />, '👤')} />
                    <MenuItem icon="📞" label="Contact Me" onClick={() => handleOpen('contact', 'Contact Me', <Contact />, '📧')} />

                    <div style={{ marginTop: 'auto', textAlign: 'center', padding: 10 }}>
                        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D1D1D1, transparent)', marginBottom: 10 }}></div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontWeight: 'bold', fontSize: 11 }}>
                            <span>All Programs</span>
                            <span style={{ color: '#008000' }}>▶</span>
                        </div>
                    </div>
                </div>

                {/* Right Column (Blue) */}
                <div style={{
                    flex: 1,
                    background: '#D3E5FA',
                    borderLeft: '1px solid #95BDEE',
                    padding: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}>
                    <MenuItem icon="📂" label="My Documents" bold small />
                    <MenuItem icon="🖼️" label="My Pictures" bold small />
                    <MenuItem icon="🎵" label="My Music" bold small />
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #AABCCF, transparent)', margin: '4px 0' }}></div>
                    <MenuItem icon="⚙️" label="Control Panel" small />
                    <MenuItem icon="🖨️" label="Printers and Faxes" small />
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #AABCCF, transparent)', margin: '4px 0' }}></div>
                    <MenuItem icon="❓" label="Help and Support" small />
                    <MenuItem icon="🔍" label="Search" small />
                    <MenuItem icon="🏃" label="Run..." small />
                </div>
            </div>

            {/* Footer */}
            <div style={{
                height: 40,
                background: 'linear-gradient(to bottom, #3E80F2, #1C55C3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '0 10px',
                gap: 10,
                borderTop: '1px solid #3692F6'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FFF', fontSize: 11, cursor: 'pointer' }}>
                    <span style={{ background: '#E58A2D', borderRadius: 3, padding: 2, border: '1px solid #FFF' }}>🔑</span>
                    <span>Log Off</span>
                </div>
                <div
                    onClick={() => window.location.reload()}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FFF', fontSize: 11, cursor: 'pointer' }}
                >
                    <span style={{ background: '#D64B29', borderRadius: 3, padding: 2, border: '1px solid #FFF' }}>⏻</span>
                    <span>Turn Off Computer</span>
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, label, subLabel, bold, small, onClick }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 6px',
        cursor: 'pointer',
        fontSize: small ? 11 : 12,
        color: '#333'
    }}
        onClick={onClick}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = '#316AC5';
            e.currentTarget.style.color = '#FFF';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#333';
        }}
    >
        <div style={{ fontSize: small ? 16 : 24 }}>{icon}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: bold ? 'bold' : 'normal' }}>{label}</span>
            {subLabel && <span style={{ fontSize: 10, opacity: 0.7 }}>{subLabel}</span>}
        </div>
    </div>
);

export default StartMenu;
