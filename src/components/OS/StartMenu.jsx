import React from 'react';

import { useOS } from '../../context/OSContext';
import AboutMe from '../Apps/AboutMe';
import Resume from '../Apps/Resume';
import Projects from '../Apps/Projects';
import Contact from '../Apps/Contact';
import InternetExplorer from '../Apps/InternetExplorer';
import Terminal from '../Apps/Terminal';

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
            width: 400,
            height: 500,
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
                height: 64,
                background: 'linear-gradient(to bottom, #156EEF, #3692F6)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
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
                }}>👨‍💻</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: 15, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Sandhanu Dulmeth Mendis
                    </span>
                    <span style={{ fontSize: 10, opacity: 0.9 }}>
                        Software Engineering • DevOps • Backend
                    </span>
                </div>
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Left Column (White) */}
                <div style={{ flex: 1.1, padding: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <MenuItem icon="🌐" label="Internet" subLabel="Internet Explorer" bold onClick={() => handleOpen('internet', 'Internet Explorer', <InternetExplorer />, '🌐')} />
                    <MenuItem icon="📟" label="Command Prompt" subLabel="cmd.exe (DevOps)" bold onClick={() => handleOpen('cmd', 'Command Prompt', <Terminal />, '📟')} />
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D1D1D1, transparent)', margin: '3px 0' }}></div>
                    <MenuItem icon="📝" label="My Resume" subLabel="Education, Skills, Experience" onClick={() => handleOpen('resume', 'My Resume', <Resume />, '📝')} />
                    <MenuItem icon="🎨" label="My Projects" subLabel="NexusEnroll & 20+ Repos" onClick={() => handleOpen('projects', 'My Projects', <Projects />, '🎨')} />
                    <MenuItem icon="👤" label="About Me" subLabel="System Properties & Bio" onClick={() => handleOpen('about', 'About Me', <AboutMe />, '👤')} />
                    <MenuItem icon="📧" label="Contact Me" subLabel="Outlook Express Compose" onClick={() => handleOpen('contact', 'Contact Me', <Contact />, '📧')} />

                    <div style={{ marginTop: 'auto', textAlign: 'center', padding: '6px 8px' }}>
                        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D1D1D1, transparent)', marginBottom: 6 }}></div>
                        <div
                            onClick={() => handleOpen('cmd', 'Command Prompt', <Terminal />, '📟')}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontWeight: 'bold', fontSize: 11, cursor: 'pointer' }}
                        >
                            <span>DevOps Terminal</span>
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
                    gap: 3
                }}>
                    <MenuItem icon="📂" label="GitHub Repos" bold small onClick={() => { window.open('https://github.com/SandhanuDulmeth?tab=repositories', '_blank'); onClose(); }} />
                    <MenuItem icon="🏗️" label="NexusEnroll" bold small subLabel="Microservices CI/CD" onClick={() => { window.open('https://github.com/SandhanuDulmeth/nexus-enroll2.0', '_blank'); onClose(); }} />
                    <MenuItem icon="🐳" label="Docker Hub" bold small subLabel="nexusenroll-api-gateway" onClick={() => { window.open('https://hub.docker.com/r/sandhanu/nexusenroll-api-gateway', '_blank'); onClose(); }} />
                    <MenuItem icon="💼" label="LinkedIn" small onClick={() => { window.open('https://linkedin.com/in/sandhanu-mendis-25ab18324', '_blank'); onClose(); }} />
                    <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #AABCCF, transparent)', margin: '3px 0' }}></div>
                    <MenuItem icon="🎓" label="UCSC CS Dept" small onClick={() => { window.open('https://ucsc.cmb.ac.lk/', '_blank'); onClose(); }} />
                    <MenuItem icon="❓" label="Help & Info" small onClick={() => { alert('Sandhanu Dulmeth Mendis — Windows XP Interactive Portfolio\n\n• Double-click desktop icons to launch apps\n• Open Command Prompt to test docker pull & mvn test\n• Check "My Projects" for 20+ full-stack & microservice repos\n• Check "My Resume" for complete CV breakdown\n\nBuilt with React 19 & Vite 🚀'); onClose(); }} />
                    <MenuItem icon="🔍" label="Search Profile" small onClick={() => { window.open('https://github.com/SandhanuDulmeth', '_blank'); onClose(); }} />
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
                <div
                    onClick={() => { window.location.reload(); }}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FFF', fontSize: 11, cursor: 'pointer' }}
                >
                    <span style={{ background: '#E58A2D', borderRadius: 3, padding: '2px 4px', border: '1px solid #FFF' }}>🔑</span>
                    <span>Log Off</span>
                </div>
                <div
                    onClick={() => {
                        if (window.confirm('Restart Windows XP Portfolio?')) {
                            window.location.reload();
                        }
                    }}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FFF', fontSize: 11, cursor: 'pointer' }}
                >
                    <span style={{ background: '#D64B29', borderRadius: 3, padding: '2px 4px', border: '1px solid #FFF' }}>⏻</span>
                    <span>Restart Computer</span>
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
        padding: '3px 6px',
        cursor: 'pointer',
        fontSize: small ? 11 : 12,
        color: '#333',
        borderRadius: 2
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
        <div style={{ fontSize: small ? 16 : 22 }}>{icon}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: bold ? 'bold' : 'normal' }}>{label}</span>
            {subLabel && <span style={{ fontSize: 9.5, opacity: 0.8 }}>{subLabel}</span>}
        </div>
    </div>
);

export default StartMenu;
