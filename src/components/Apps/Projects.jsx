import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        name: 'Auto Parts Inventory System',
        type: 'Production App',
        tech: 'React · TypeScript · Tailwind · Supabase · Vercel',
        desc: 'Production inventory system built for a real auto parts client — dual-role access, PDF exports, COGS analytics, reorder suggestions',
        icon: '🔥',
        url: null, // private
        pinned: true,
    },
    {
        id: 2,
        name: 'Carrom Multiplayer Game',
        type: 'Full-Stack Game',
        tech: 'Node.js · Socket.io · Firebase · Cloudinary · Canvas',
        desc: 'Real-time multiplayer carrom board game with ICF rules, physics engine, customization store, and admin dashboard',
        icon: '🎱',
        url: 'https://github.com/SandhanuDulmeth/Carrom_game',
        pinned: true,
    },
    {
        id: 3,
        name: 'gemini-rag-chatbot',
        type: 'AI / ML',
        tech: 'Python · Google Gemini · RAG',
        desc: 'AI chatbot with Retrieval-Augmented Generation for context-aware responses',
        icon: '🤖',
        url: 'https://github.com/SandhanuDulmeth/gemini-rag-chatbot',
        pinned: true,
    },
    {
        id: 4,
        name: 'Inventory System Frontend',
        type: 'Frontend',
        tech: 'React · Vite · TypeScript',
        desc: 'Inventory management frontend with modern UI',
        icon: '📦',
        url: 'https://github.com/SandhanuDulmeth/Inventory_System_Frontend-React-Vite',
        pinned: true,
    },
    {
        id: 5,
        name: 'Inventory System Backend',
        type: 'Backend',
        tech: 'Java · Spring Boot',
        desc: 'RESTful API backend for inventory management',
        icon: '⚙️',
        url: 'https://github.com/SandhanuDulmeth/Inventory_System_BackEnd-SpringBoot',
        pinned: true,
    },
    {
        id: 6,
        name: 'Angular Chat App (Frontend)',
        type: 'Frontend',
        tech: 'Angular · TypeScript · WebSocket',
        desc: 'Real-time chat app frontend',
        icon: '💬',
        url: 'https://github.com/SandhanuDulmeth/angular-chat-app-websocket-frontEnd',
    },
    {
        id: 7,
        name: 'Angular Chat App (Backend)',
        type: 'Backend',
        tech: 'Java · Spring Boot · WebSocket',
        desc: 'Real-time chat app backend with WebSocket',
        icon: '💬',
        url: 'https://github.com/SandhanuDulmeth/angular-chat-app-websocket-backEnd',
    },
    {
        id: 8,
        name: 'MERN TechNotes Backend',
        type: 'Backend',
        tech: 'Node.js · Express · MongoDB',
        desc: 'MERN stack notes management API',
        icon: '📝',
        url: 'https://github.com/SandhanuDulmeth/MERN-techNotes-BackEnd',
    },
    {
        id: 9,
        name: 'Supabase Todo',
        type: 'Full-Stack',
        tech: 'React · Supabase',
        desc: 'To-do app with real-time Supabase backend',
        icon: '✅',
        url: 'https://github.com/SandhanuDulmeth/supabase-todo',
    },
    {
        id: 10,
        name: 'Crop Yield Prediction',
        type: 'AI / ML',
        tech: 'Python · Jupyter · ML',
        desc: 'Crop yield prediction using data science & machine learning',
        icon: '🌾',
        url: 'https://github.com/SandhanuDulmeth/Crop_Yield-Project',
    },
    {
        id: 11,
        name: 'Hospital Management System',
        type: 'Desktop App',
        tech: 'Java · JavaFX',
        desc: 'Hospital management desktop app with layered architecture',
        icon: '🏥',
        url: 'https://github.com/SandhanuDulmeth/Hospital-Management-System-JAVAFX',
    },
    {
        id: 12,
        name: 'Employee Management Backend',
        type: 'Backend',
        tech: 'Java · Spring Boot',
        desc: 'RESTful employee management API',
        icon: '👥',
        url: 'https://github.com/SandhanuDulmeth/Spring-Boot-Employee-Management-System-Back-End',
    },
    {
        id: 13,
        name: 'MOS Burgers Backend',
        type: 'Backend',
        tech: 'Java · Spring Boot',
        desc: 'Restaurant ordering system backend',
        icon: '🍔',
        url: 'https://github.com/SandhanuDulmeth/MOS-Burgers-Back-End-SpringBoot',
    },
    {
        id: 14,
        name: 'MOS Burgers Frontend',
        type: 'Frontend',
        tech: 'Angular · TypeScript',
        desc: 'Restaurant ordering system frontend',
        icon: '🍔',
        url: 'https://github.com/SandhanuDulmeth/Mos-Burger-Front-End-Angular',
    },
    {
        id: 15,
        name: 'Docker Todolist',
        type: 'DevOps',
        tech: 'Docker',
        desc: 'Containerised to-do list demonstrating Docker fundamentals',
        icon: '🐳',
        url: 'https://github.com/SandhanuDulmeth/docker-todolist',
    },
    {
        id: 16,
        name: 'Maze Runner Game',
        type: 'Game',
        tech: 'JavaScript',
        desc: 'Browser-based maze runner game',
        icon: '🎮',
        url: 'https://github.com/SandhanuDulmeth/maze-runner-GAME',
    },
    {
        id: 17,
        name: 'DSA in Python',
        type: 'Algorithms',
        tech: 'Python',
        desc: 'Data structures & algorithms implementations',
        icon: '📊',
        url: 'https://github.com/SandhanuDulmeth/Importance-of-DSA-in-programming-python',
    },
    {
        id: 18,
        name: 'IWT Note Site',
        type: 'Web',
        tech: 'HTML · CSS · JS',
        desc: 'Internet & Web Technologies study resource site',
        icon: '📖',
        url: 'https://github.com/SandhanuDulmeth/IWT-NOTE-SITE',
    },
    {
        id: 19,
        name: 'Windows XP Portfolio',
        type: 'Web',
        tech: 'React · Vite · CSS',
        desc: 'This portfolio! A Windows XP–themed developer portfolio',
        icon: '🖥️',
        url: 'https://github.com/SandhanuDulmeth/Sandhanu-Dulmeth-Mendis-portfolio',
    },
];

const Projects = () => {
    const [selected, setSelected] = useState(null);
    const [viewMode, setViewMode] = useState('details'); // details | icons

    const handleOpen = (project) => {
        if (project.url) {
            window.open(project.url, '_blank');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            fontFamily: 'Tahoma, sans-serif',
            backgroundColor: '#FFF',
            fontSize: 12,
        }}>
            {/* Toolbar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                gap: 8,
                fontSize: 11,
            }}>
                <span style={{ fontWeight: 'bold', color: '#003399' }}>📂 My Projects</span>
                <span style={{ color: '#888' }}>|</span>
                <span
                    onClick={() => setViewMode('details')}
                    style={{
                        cursor: 'pointer',
                        fontWeight: viewMode === 'details' ? 'bold' : 'normal',
                        textDecoration: viewMode === 'details' ? 'underline' : 'none',
                        color: '#003399',
                    }}
                >
                    📋 Details
                </span>
                <span
                    onClick={() => setViewMode('icons')}
                    style={{
                        cursor: 'pointer',
                        fontWeight: viewMode === 'icons' ? 'bold' : 'normal',
                        textDecoration: viewMode === 'icons' ? 'underline' : 'none',
                        color: '#003399',
                    }}
                >
                    📁 Icons
                </span>
                <span style={{ marginLeft: 'auto', color: '#666' }}>
                    {projects.length} objects
                </span>
            </div>

            {/* Address Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '3px 8px',
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                gap: 6,
                fontSize: 11,
            }}>
                <span style={{ color: '#666' }}>Address</span>
                <div style={{
                    flex: 1,
                    padding: '2px 6px',
                    backgroundColor: '#FFF',
                    border: '1px solid #7F9DB9',
                    fontSize: 11,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}>
                    <span>📁</span>
                    <span>C:\Users\Sandhanu\My Projects</span>
                </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflow: 'auto' }}>
                {viewMode === 'details' ? (
                    <DetailsView
                        projects={projects}
                        selected={selected}
                        setSelected={setSelected}
                        onOpen={handleOpen}
                    />
                ) : (
                    <IconsView
                        projects={projects}
                        selected={selected}
                        setSelected={setSelected}
                        onOpen={handleOpen}
                    />
                )}
            </div>

            {/* Status Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '3px 8px',
                backgroundColor: '#ECE9D8',
                borderTop: '1px solid #ACA899',
                fontSize: 10,
                color: '#666',
                gap: 16,
            }}>
                <span>{selected !== null ? `Selected: ${projects.find(p => p.id === selected)?.name}` : `${projects.length} items`}</span>
                {selected !== null && (
                    <span style={{ color: '#333' }}>
                        {projects.find(p => p.id === selected)?.desc}
                    </span>
                )}
            </div>
        </div>
    );
};

const DetailsView = ({ projects, selected, setSelected, onOpen }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
        <thead>
            <tr style={{ backgroundColor: '#ECE9D8', borderBottom: '1px solid #ACA899' }}>
                <th style={thStyle}>Name</th>
                <th style={{ ...thStyle, width: 80 }}>Type</th>
                <th style={{ ...thStyle, width: 200 }}>Tech</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((p) => (
                <tr
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    onDoubleClick={() => onOpen(p)}
                    style={{
                        backgroundColor: selected === p.id ? '#316AC5' : 'transparent',
                        color: selected === p.id ? '#FFF' : '#000',
                        cursor: 'pointer',
                    }}
                >
                    <td style={tdStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontSize: 14 }}>{p.icon}</span>
                            <span style={{ fontWeight: p.pinned ? 'bold' : 'normal' }}>
                                {p.name}
                                {p.pinned && <span style={{
                                    fontSize: 9,
                                    marginLeft: 6,
                                    padding: '1px 4px',
                                    backgroundColor: selected === p.id ? 'rgba(255,255,255,0.3)' : '#FFF3CD',
                                    border: `1px solid ${selected === p.id ? 'rgba(255,255,255,0.4)' : '#E0D77D'}`,
                                    borderRadius: 2,
                                    color: selected === p.id ? '#FFF' : '#856404',
                                }}>⭐ FEATURED</span>}
                            </span>
                        </div>
                    </td>
                    <td style={tdStyle}>
                        <span style={{ fontSize: 10 }}>{p.type}</span>
                    </td>
                    <td style={tdStyle}>
                        <span style={{ fontSize: 10, opacity: 0.85 }}>{p.tech}</span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const IconsView = ({ projects, selected, setSelected, onOpen }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 12 }}>
        {projects.map((p) => (
            <div
                key={p.id}
                onClick={() => setSelected(p.id)}
                onDoubleClick={() => onOpen(p)}
                style={{
                    width: 90,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 6,
                    cursor: 'pointer',
                    borderRadius: 3,
                    backgroundColor: selected === p.id ? '#316AC5' : 'transparent',
                    color: selected === p.id ? '#FFF' : '#000',
                }}
            >
                <div style={{ fontSize: 36, marginBottom: 4 }}>{p.icon}</div>
                <div style={{
                    textAlign: 'center',
                    fontSize: 10,
                    lineHeight: 1.3,
                    fontWeight: p.pinned ? 'bold' : 'normal',
                    wordBreak: 'break-word',
                }}>
                    {p.name}
                </div>
                <div style={{
                    textAlign: 'center',
                    fontSize: 9,
                    opacity: 0.6,
                    marginTop: 2,
                }}>
                    {p.type}
                </div>
            </div>
        ))}
    </div>
);

const thStyle = {
    textAlign: 'left',
    padding: '4px 8px',
    fontWeight: 'bold',
    fontSize: 11,
    borderRight: '1px solid #ACA899',
    whiteSpace: 'nowrap',
};

const tdStyle = {
    padding: '3px 8px',
    borderBottom: '1px solid #F0F0F0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

export default Projects;
