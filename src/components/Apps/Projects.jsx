import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        name: 'NexusEnroll — Microservices Platform',
        category: 'devops',
        type: 'Microservices & DevOps',
        tech: 'Java · Spring Boot · Microservices · Docker · GitHub Actions · CI/CD · MySQL · Maven · JWT · Flyway · JUnit 5 · Mockito',
        desc: 'Independently deployable microservices university enrollment system with API Gateway, JWT authentication, and automated CI/CD pipeline building and publishing Docker images to Docker Hub.',
        icon: '🏗️',
        url: 'https://github.com/SandhanuDulmeth/nexus-enroll2.0',
        pinned: true,
        dockerHub: 'sandhanu/nexusenroll-api-gateway:latest',
        tests: '40/40 E2E API Tests Passed · 11/11 Maven Modules Success',
        architecture: `Frontend -> API Gateway (:8080) -> [Auth, Course, Student, Enrollment, Faculty, Academic Record, Notification, Reporting] -> MySQL`,
    },
    {
        id: 2,
        name: 'Auto Parts Inventory System',
        category: 'fullstack',
        type: 'Production Full-Stack',
        tech: 'React · TypeScript · Tailwind CSS · Supabase · PostgreSQL · Vercel',
        desc: 'Real-world inventory management system developed for an automobile parts business to replace spreadsheet workflows. Includes COGS analytics, inventory turnover analysis, reorder suggestions, and role-based access.',
        icon: '📦',
        url: 'https://github.com/SandhanuDulmeth/Inventory_System_Frontend-React-Vite',
        backendUrl: 'https://github.com/SandhanuDulmeth/Inventory_System_BackEnd-SpringBoot',
        pinned: true,
        tests: 'Production Deployed on Vercel',
    },
    {
        id: 3,
        name: 'gemini-rag-chatbot',
        category: 'ai',
        type: 'AI / RAG',
        tech: 'Python · Google Gemini · RAG',
        desc: 'Retrieval-Augmented Generation (RAG) chatbot using Google Gemini LLM for context-aware intelligent document querying and conversations.',
        icon: '🤖',
        url: 'https://github.com/SandhanuDulmeth/gemini-rag-chatbot',
        pinned: true,
    },
    {
        id: 4,
        name: 'nexus-enroll2.0',
        category: 'devops',
        type: 'DevOps & CI/CD',
        tech: 'Docker · GitHub Actions · CI/CD · Spring Boot · Maven',
        desc: 'Containerised microservices with an automated CI/CD pipeline (automated tests, Docker build, and image deployment to Docker Hub).',
        icon: '🐳',
        url: 'https://github.com/SandhanuDulmeth/nexus-enroll2.0',
        pinned: true,
    },
    {
        id: 5,
        name: 'docker-todolist',
        category: 'devops',
        type: 'DevOps',
        tech: 'Docker · Containerisation · Linux',
        desc: 'Containerised application demonstrating Docker container fundamentals, Dockerfile optimization, and multi-container environments.',
        icon: '🐳',
        url: 'https://github.com/SandhanuDulmeth/docker-todolist',
        pinned: true,
    },
    {
        id: 6,
        name: 'Crop_Yield-Project',
        category: 'ai',
        type: 'AI / Data Science',
        tech: 'Python · Jupyter · Machine Learning',
        desc: 'Machine learning project for predictive crop yield modeling using statistical algorithms and agricultural data analysis.',
        icon: '🌾',
        url: 'https://github.com/SandhanuDulmeth/Crop_Yield-Project',
    },
    {
        id: 7,
        name: 'Inventory System Backend (Spring Boot)',
        category: 'backend',
        type: 'Backend',
        tech: 'Java · Spring Boot · MySQL · REST APIs',
        desc: 'RESTful API backend for auto parts inventory management with transactional endpoints and database persistence.',
        icon: '⚙️',
        url: 'https://github.com/SandhanuDulmeth/Inventory_System_BackEnd-SpringBoot',
    },
    {
        id: 8,
        name: 'Inventory System Frontend (React/Vite)',
        category: 'frontend',
        type: 'Frontend',
        tech: 'React · TypeScript · Tailwind CSS · Vite',
        desc: 'Responsive web frontend for automobile parts inventory with interactive data tables and stock deduction workflows.',
        icon: '🖥️',
        url: 'https://github.com/SandhanuDulmeth/Inventory_System_Frontend-React-Vite',
    },
    {
        id: 9,
        name: 'MERN-techNotes-BackEnd',
        category: 'backend',
        type: 'Backend',
        tech: 'Node.js · Express.js · MongoDB',
        desc: 'RESTful notes and employee ticket assignment management API with JWT authentication and MongoDB schemas.',
        icon: '📝',
        url: 'https://github.com/SandhanuDulmeth/MERN-techNotes-BackEnd',
    },
    {
        id: 10,
        name: 'angular-chat-app-websocket-backEnd',
        category: 'backend',
        type: 'Backend',
        tech: 'Java · Spring Boot · WebSocket',
        desc: 'Real-time WebSocket backend providing low-latency multi-client message broadcasting and session management.',
        icon: '💬',
        url: 'https://github.com/SandhanuDulmeth/angular-chat-app-websocket-backEnd',
    },
    {
        id: 11,
        name: 'angular-chat-app-websocket-frontEnd',
        category: 'frontend',
        type: 'Frontend',
        tech: 'Angular · TypeScript · WebSocket',
        desc: 'Real-time chat client built in Angular with reactive streams and live channel subscription.',
        icon: '💬',
        url: 'https://github.com/SandhanuDulmeth/angular-chat-app-websocket-frontEnd',
    },
    {
        id: 12,
        name: 'Spring-Boot-Employee-Management-System-Back-End',
        category: 'backend',
        type: 'Backend',
        tech: 'Java · Spring Boot · MySQL',
        desc: 'Employee management system REST API with layered architecture, validation, and CRUD operations.',
        icon: '👥',
        url: 'https://github.com/SandhanuDulmeth/Spring-Boot-Employee-Management-System-Back-End',
    },
    {
        id: 13,
        name: 'MOS-Burgers-Back-End-SpringBoot',
        category: 'backend',
        type: 'Backend',
        tech: 'Java · Spring Boot · MySQL',
        desc: 'Restaurant ordering and order management backend with transactional checkout and item categorization.',
        icon: '🍔',
        url: 'https://github.com/SandhanuDulmeth/MOS-Burgers-Back-End-SpringBoot',
    },
    {
        id: 14,
        name: 'Mos-Burger-Front-End-Angular',
        category: 'frontend',
        type: 'Frontend',
        tech: 'Angular · TypeScript',
        desc: 'Restaurant ordering frontend interface with interactive food item menu and cart checkout.',
        icon: '🍔',
        url: 'https://github.com/SandhanuDulmeth/Mos-Burger-Front-End-Angular',
    },
    {
        id: 15,
        name: 'Carrom Multiplayer Game',
        category: 'fullstack',
        type: 'Full-Stack Game',
        tech: 'Node.js · Socket.io · Firebase · Cloudinary · Canvas',
        desc: 'Real-time multiplayer carrom board game with ICF rules, physics engine, custom striker store, and admin panel.',
        icon: '🎱',
        url: 'https://github.com/SandhanuDulmeth/Carrom_game',
    },
    {
        id: 16,
        name: 'Hospital-Management-System-JAVAFX',
        category: 'desktop',
        type: 'Desktop App',
        tech: 'Java · JavaFX · MySQL',
        desc: 'Hospital management desktop software built with layered architecture for patient tracking and appointments.',
        icon: '🏥',
        url: 'https://github.com/SandhanuDulmeth/Hospital-Management-System-JAVAFX',
    },
    {
        id: 17,
        name: 'supabase-todo',
        category: 'fullstack',
        type: 'Full-Stack',
        tech: 'React · Supabase · PostgreSQL',
        desc: 'Task management application connected to Supabase real-time database and user authentication.',
        icon: '✅',
        url: 'https://github.com/SandhanuDulmeth/supabase-todo',
    },
    {
        id: 18,
        name: 'maze-runner-GAME',
        category: 'frontend',
        type: 'Game',
        tech: 'JavaScript · Canvas · HTML5',
        desc: 'Browser-based procedural maze generation and navigation game with keyboard controls.',
        icon: '🎮',
        url: 'https://github.com/SandhanuDulmeth/maze-runner-GAME',
    },
    {
        id: 19,
        name: 'Importance-of-DSA-in-programming-python',
        category: 'ai',
        type: 'Algorithms',
        tech: 'Python · DSA',
        desc: 'Implementations of foundational data structures and algorithms with time-complexity analysis.',
        icon: '📊',
        url: 'https://github.com/SandhanuDulmeth/Importance-of-DSA-in-programming-python',
    },
    {
        id: 20,
        name: 'IWT-NOTE-SITE',
        category: 'frontend',
        type: 'Web Resource',
        tech: 'HTML · CSS · JavaScript',
        desc: 'Internet & Web Technologies study resource site with code snippets and guides.',
        icon: '📖',
        url: 'https://github.com/SandhanuDulmeth/IWT-NOTE-SITE',
    },
    {
        id: 21,
        name: 'Sandhanu-Dulmeth-Mendis-portfolio',
        category: 'frontend',
        type: 'Web App',
        tech: 'React · Vite · Vanilla CSS',
        desc: 'Interactive Windows XP operating system retro portfolio showcasing real personal projects and interactive apps.',
        icon: '🖥️',
        url: 'https://github.com/SandhanuDulmeth/Sandhanu-Dulmeth-Mendis-portfolio',
    },
];

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'pinned', label: '⭐ Featured' },
    { id: 'devops', label: '🐳 DevOps & Microservices' },
    { id: 'backend', label: '⚙️ Backend' },
    { id: 'fullstack', label: '🚀 Full-Stack' },
    { id: 'ai', label: '🤖 AI & Data' },
    { id: 'frontend', label: '🎨 Frontend' },
];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [viewMode, setViewMode] = useState('details'); // details | icons
    const [filterCategory, setFilterCategory] = useState('all');

    const filteredProjects = projects.filter((p) => {
        if (filterCategory === 'all') return true;
        if (filterCategory === 'pinned') return p.pinned;
        return p.category === filterCategory;
    });

    const selectedProject = projects.find((p) => p.id === selectedId) || filteredProjects[0];

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
            {/* Top Toolbar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                gap: 8,
                fontSize: 11,
                flexWrap: 'wrap',
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
                    {filteredProjects.length} / {projects.length} objects
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
                    <span>C:\Sandhanu\Projects\{filterCategory !== 'all' ? filterCategory : ''}</span>
                </div>
            </div>

            {/* Filter Category Tabs */}
            <div style={{
                display: 'flex',
                gap: 3,
                padding: '4px 8px',
                backgroundColor: '#F5F4EC',
                borderBottom: '1px solid #ACA899',
                overflowX: 'auto',
                fontSize: 11,
            }}>
                {categories.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => setFilterCategory(c.id)}
                        style={{
                            padding: '2px 8px',
                            border: '1px solid',
                            borderColor: filterCategory === c.id ? '#003399' : '#ACA899',
                            backgroundColor: filterCategory === c.id ? '#316AC5' : '#ECE9D8',
                            color: filterCategory === c.id ? '#FFF' : '#333',
                            borderRadius: 2,
                            cursor: 'pointer',
                            fontSize: 11,
                            whiteSpace: 'nowrap',
                            fontFamily: 'Tahoma, sans-serif'
                        }}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {/* Split View: Left List / Right Preview */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                {/* Main List Container */}
                <div style={{ flex: 1, overflow: 'auto', borderRight: '1px solid #ACA899' }}>
                    {viewMode === 'details' ? (
                        <DetailsView
                            projects={filteredProjects}
                            selected={selectedId}
                            setSelected={setSelectedId}
                            onOpen={handleOpen}
                        />
                    ) : (
                        <IconsView
                            projects={filteredProjects}
                            selected={selectedId}
                            setSelected={setSelectedId}
                            onOpen={handleOpen}
                        />
                    )}
                </div>

                {/* Right Side XP Details Preview Pane */}
                {selectedProject && (
                    <div style={{
                        width: 280,
                        backgroundColor: '#F8F9FA',
                        padding: 12,
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        fontSize: 11,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ fontSize: 28 }}>{selectedProject.icon}</div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: 13, color: '#003399' }}>
                                    {selectedProject.name}
                                </div>
                                <div style={{ fontSize: 10, color: '#666' }}>{selectedProject.type}</div>
                            </div>
                        </div>

                        {selectedProject.pinned && (
                            <div style={{
                                padding: '2px 6px',
                                backgroundColor: '#FFF3CD',
                                border: '1px solid #FFEBAA',
                                borderRadius: 3,
                                color: '#856404',
                                fontSize: 10,
                                fontWeight: 'bold',
                                display: 'inline-block',
                            }}>
                                ⭐ FEATURED PROJECT
                            </div>
                        )}

                        <div>
                            <div style={{ fontWeight: 'bold', color: '#444', marginBottom: 2 }}>Description:</div>
                            <div style={{ color: '#222', lineHeight: 1.4 }}>{selectedProject.desc}</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 'bold', color: '#444', marginBottom: 2 }}>Technologies:</div>
                            <div style={{ color: '#0F766E', lineHeight: 1.3, fontSize: 10 }}>{selectedProject.tech}</div>
                        </div>

                        {selectedProject.dockerHub && (
                            <div style={{
                                backgroundColor: '#1E293B',
                                color: '#38BDF8',
                                padding: '6px 8px',
                                borderRadius: 3,
                                fontFamily: 'Consolas, monospace',
                                fontSize: 10,
                                wordBreak: 'break-all'
                            }}>
                                🐳 <strong>Docker Hub:</strong><br />
                                <code>docker pull {selectedProject.dockerHub}</code>
                            </div>
                        )}

                        {selectedProject.tests && (
                            <div style={{
                                backgroundColor: '#F0FDF4',
                                border: '1px solid #86EFAC',
                                color: '#166534',
                                padding: '4px 6px',
                                borderRadius: 3,
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>
                                🧪 {selectedProject.tests}
                            </div>
                        )}

                        {selectedProject.architecture && (
                            <div style={{
                                backgroundColor: '#ECE9D8',
                                border: '1px solid #ACA899',
                                padding: '6px',
                                borderRadius: 3,
                                fontSize: 9,
                                fontFamily: 'Consolas, monospace',
                                whiteSpace: 'pre-wrap'
                            }}>
                                📐 <strong>Architecture:</strong><br />
                                {selectedProject.architecture}
                            </div>
                        )}

                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {selectedProject.url && (
                                <button
                                    onClick={() => handleOpen(selectedProject)}
                                    style={{
                                        padding: '5px 12px',
                                        backgroundColor: '#316AC5',
                                        color: '#FFF',
                                        border: '1px solid #003399',
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        fontSize: 11,
                                    }}
                                >
                                    🔗 Open Repository on GitHub
                                </button>
                            )}
                            {selectedProject.backendUrl && (
                                <button
                                    onClick={() => window.open(selectedProject.backendUrl, '_blank')}
                                    style={{
                                        padding: '4px 10px',
                                        backgroundColor: '#ECE9D8',
                                        color: '#003399',
                                        border: '1px solid #ACA899',
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                        fontSize: 10,
                                    }}
                                >
                                    ⚙️ Open Backend Repository
                                </button>
                            )}
                        </div>
                    </div>
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
                <span>{selectedProject ? `Selected: ${selectedProject.name}` : `${filteredProjects.length} items`}</span>
                <span style={{ marginLeft: 'auto', color: '#333' }}>Double-click to open repository</span>
            </div>
        </div>
    );
};

const DetailsView = ({ projects, selected, setSelected, onOpen }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
        <thead>
            <tr style={{ backgroundColor: '#ECE9D8', borderBottom: '1px solid #ACA899', position: 'sticky', top: 0 }}>
                <th style={thStyle}>Name</th>
                <th style={{ ...thStyle, width: 110 }}>Type</th>
                <th style={{ ...thStyle, width: 220 }}>Tech Stack</th>
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
                        <span style={{ fontSize: 10, opacity: 0.9 }}>{p.tech}</span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const IconsView = ({ projects, selected, setSelected, onOpen }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, padding: 12 }}>
        {projects.map((p) => (
            <div
                key={p.id}
                onClick={() => setSelected(p.id)}
                onDoubleClick={() => onOpen(p)}
                style={{
                    width: 95,
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
                <div style={{ fontSize: 34, marginBottom: 4 }}>{p.icon}</div>
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
                    opacity: 0.7,
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
    padding: '4px 8px',
    borderBottom: '1px solid #F0F0F0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

export default Projects;
