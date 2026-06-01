import React, { useState } from 'react';

const InternetExplorer = () => {
    const [url, setUrl] = useState('https://github.com/SandhanuDulmeth');

    const pinnedRepos = [
        {
            name: 'gemini-rag-chatbot',
            desc: 'AI chatbot with Retrieval-Augmented Generation for context-aware responses',
            lang: 'Python',
            langColor: '#3572A5',
            url: 'https://github.com/SandhanuDulmeth/gemini-rag-chatbot',
        },
        {
            name: 'Inventory_System_Frontend-React-Vite',
            desc: 'Inventory management frontend with modern UI',
            lang: 'TypeScript',
            langColor: '#3178C6',
            url: 'https://github.com/SandhanuDulmeth/Inventory_System_Frontend-React-Vite',
        },
        {
            name: 'Inventory_System_BackEnd-SpringBoot',
            desc: 'RESTful API backend for inventory management',
            lang: 'Java',
            langColor: '#B07219',
            url: 'https://github.com/SandhanuDulmeth/Inventory_System_BackEnd-SpringBoot',
        },
        {
            name: 'angular-chat-app-websocket-frontEnd',
            desc: 'Real-time chat app frontend',
            lang: 'TypeScript',
            langColor: '#3178C6',
            url: 'https://github.com/SandhanuDulmeth/angular-chat-app-websocket-frontEnd',
        },
        {
            name: 'Sandhanu-Dulmeth-Mendis-portfolio',
            desc: 'Windows XP–themed developer portfolio',
            lang: 'JavaScript',
            langColor: '#F1E05A',
            url: 'https://github.com/SandhanuDulmeth/Sandhanu-Dulmeth-Mendis-portfolio',
        },
        {
            name: 'Carrom_game',
            desc: 'Real-time multiplayer carrom board game with ICF rules, custom physics engine, virtual striker store, and secure admin panel',
            lang: 'JavaScript',
            langColor: '#F1E05A',
            url: 'https://github.com/SandhanuDulmeth/Carrom_game',
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'Tahoma, sans-serif' }}>
            {/* Toolbar */}
            <div style={{
                padding: '4px 8px',
                borderBottom: '1px solid #ACA899',
                backgroundColor: '#ECE9D8',
                display: 'flex',
                gap: 6,
                alignItems: 'center',
                fontSize: 11,
            }}>
                <NavBtn>⬅️</NavBtn>
                <NavBtn>➡️</NavBtn>
                <NavBtn>⏹️</NavBtn>
                <NavBtn>🔄</NavBtn>
                <NavBtn>🏠</NavBtn>
                <div style={{ width: 1, height: 18, backgroundColor: '#ACA899', margin: '0 4px' }} />
                <NavBtn>⭐</NavBtn>
                <NavBtn>📜</NavBtn>
            </div>

            {/* Address Bar */}
            <div style={{
                padding: '3px 8px',
                borderBottom: '1px solid #999',
                backgroundColor: '#ECE9D8',
                display: 'flex',
                gap: 6,
                alignItems: 'center',
            }}>
                <span style={{ fontSize: 11, color: '#666' }}>Address</span>
                <div style={{
                    flex: 1,
                    backgroundColor: '#FFF',
                    border: '1px solid #7F9DB9',
                    padding: '2px 6px',
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}>
                    <span style={{ fontSize: 12 }}>🌐</span>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{
                            border: 'none',
                            outline: 'none',
                            flex: 1,
                            fontSize: 12,
                            fontFamily: 'Tahoma, sans-serif',
                        }}
                    />
                </div>
                <button style={{
                    padding: '2px 12px',
                    fontSize: 11,
                    fontFamily: 'Tahoma, sans-serif',
                    backgroundColor: '#ECE9D8',
                    border: '1px solid #ACA899',
                    borderRadius: 2,
                    cursor: 'pointer',
                }}>Go</button>
            </div>

            {/* Content — GitHub Profile Mock */}
            <div style={{ flex: 1, backgroundColor: '#0D1117', overflow: 'auto', color: '#C9D1D9' }}>
                <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
                    {/* Profile Header */}
                    <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: '#21262D',
                            border: '2px solid #30363D',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 40,
                            flexShrink: 0,
                        }}>
                            👨‍💻
                        </div>
                        <div>
                            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#F0F6FC' }}>
                                Sandhanu Dulmeth Mendis
                            </div>
                            <div style={{ fontSize: 16, color: '#8B949E', marginBottom: 8 }}>
                                SandhanuDulmeth
                            </div>
                            <div style={{ fontSize: 13, lineHeight: 1.5, color: '#C9D1D9', maxWidth: 500 }}>
                                Full-Stack Developer • Java & Spring Boot • React & TypeScript<br />
                                MERN Stack • Angular • Supabase • AI/RAG<br />
                                CS Undergrad @ University of Colombo — Open to Opportunities
                            </div>
                            <div style={{ display: 'flex', gap: 12, marginTop: 10, fontSize: 12, color: '#8B949E' }}>
                                <span>👥 followers</span>
                                <span>📍 Sri Lanka</span>
                                <span>🎓 UCSC</span>
                            </div>
                        </div>
                    </div>

                    {/* Pinned Repos */}
                    <div style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F0F6FC',
                        marginBottom: 12,
                        borderBottom: '1px solid #21262D',
                        paddingBottom: 8,
                    }}>
                        📌 Pinned Repositories
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 12,
                    }}>
                        {pinnedRepos.map((repo, i) => (
                            <div
                                key={i}
                                onClick={() => window.open(repo.url, '_blank')}
                                style={{
                                    backgroundColor: '#161B22',
                                    border: '1px solid #30363D',
                                    borderRadius: 6,
                                    padding: 14,
                                    cursor: 'pointer',
                                    transition: 'border-color 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#58A6FF'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363D'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                    <span style={{ color: '#8B949E', fontSize: 12 }}>📘</span>
                                    <span style={{ color: '#58A6FF', fontWeight: 'bold', fontSize: 13 }}>
                                        {repo.name}
                                    </span>
                                </div>
                                <div style={{ fontSize: 11, color: '#8B949E', lineHeight: 1.4, marginBottom: 10, minHeight: 30 }}>
                                    {repo.desc}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        backgroundColor: repo.langColor,
                                        display: 'inline-block',
                                    }} />
                                    <span style={{ fontSize: 11, color: '#8B949E' }}>{repo.lang}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contribution Activity */}
                    <div style={{
                        marginTop: 24,
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F0F6FC',
                        borderBottom: '1px solid #21262D',
                        paddingBottom: 8,
                        marginBottom: 12,
                    }}>
                        📊 Contribution Activity
                    </div>
                    <div style={{
                        backgroundColor: '#161B22',
                        border: '1px solid #30363D',
                        borderRadius: 6,
                        padding: 16,
                    }}>
                        {/* Contribution grid mock */}
                        <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            {Array.from({ length: 52 * 7 }, (_, i) => {
                                const intensity = Math.random();
                                let color = '#161B22';
                                if (intensity > 0.8) color = '#39D353';
                                else if (intensity > 0.6) color = '#26A641';
                                else if (intensity > 0.4) color = '#006D32';
                                else if (intensity > 0.25) color = '#0E4429';
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: color,
                                            borderRadius: 2,
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div style={{ fontSize: 10, color: '#8B949E', marginTop: 8 }}>
                            Learn how we count contributions
                        </div>
                    </div>
                </div>
            </div>

            {/* Status bar */}
            <div style={{
                padding: '2px 8px',
                backgroundColor: '#ECE9D8',
                borderTop: '1px solid #ACA899',
                fontSize: 10,
                color: '#666',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
            }}>
                <span>✅ Done</span>
                <span style={{ marginLeft: 'auto' }}>🌐 Internet</span>
            </div>
        </div>
    );
};

const NavBtn = ({ children }) => (
    <div
        style={{
            padding: '2px 4px',
            cursor: 'pointer',
            fontSize: 14,
            borderRadius: 2,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D6D2C2'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        {children}
    </div>
);

export default InternetExplorer;
