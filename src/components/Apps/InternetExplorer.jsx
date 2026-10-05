import React, { useState } from 'react';

const InternetExplorer = () => {
    const [url, setUrl] = useState('https://github.com/SandhanuDulmeth');

    const pinnedRepos = [
        {
            name: 'nexus-enroll2.0',
            desc: 'Containerised microservices university enrollment platform with automated GitHub Actions CI/CD and Docker Hub publishing.',
            lang: 'Java',
            langColor: '#B07219',
            url: 'https://github.com/SandhanuDulmeth/nexus-enroll2.0',
            badge: 'CI/CD passing',
        },
        {
            name: 'Inventory_System_Frontend-React-Vite',
            desc: 'Real-world auto parts inventory management system frontend with modern UI and analytics dashboard.',
            lang: 'TypeScript',
            langColor: '#3178C6',
            url: 'https://github.com/SandhanuDulmeth/Inventory_System_Frontend-React-Vite',
        },
        {
            name: 'Inventory_System_BackEnd-SpringBoot',
            desc: 'RESTful API backend for auto parts inventory management with relational database persistence.',
            lang: 'Java',
            langColor: '#B07219',
            url: 'https://github.com/SandhanuDulmeth/Inventory_System_BackEnd-SpringBoot',
        },
        {
            name: 'gemini-rag-chatbot',
            desc: 'Retrieval-Augmented Generation (RAG) chatbot using Google Gemini for context-aware intelligent querying.',
            lang: 'Python',
            langColor: '#3572A5',
            url: 'https://github.com/SandhanuDulmeth/gemini-rag-chatbot',
        },
        {
            name: 'docker-todolist',
            desc: 'Containerised application demonstrating Docker fundamentals and multi-stage container workflows.',
            lang: 'Docker',
            langColor: '#2496ED',
            url: 'https://github.com/SandhanuDulmeth/docker-todolist',
        },
        {
            name: 'Sandhanu-Dulmeth-Mendis-portfolio',
            desc: 'Windows XP–themed retro developer portfolio built with React and Vite.',
            lang: 'JavaScript',
            langColor: '#F1E05A',
            url: 'https://github.com/SandhanuDulmeth/Sandhanu-Dulmeth-Mendis-portfolio',
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
                <NavBtn>⬅️ Back</NavBtn>
                <NavBtn>➡️ Forward</NavBtn>
                <NavBtn>⏹️ Stop</NavBtn>
                <NavBtn>🔄 Refresh</NavBtn>
                <NavBtn onClick={() => setUrl('https://github.com/SandhanuDulmeth')}>🏠 Home</NavBtn>
                <div style={{ width: 1, height: 18, backgroundColor: '#ACA899', margin: '0 4px' }} />
                <NavBtn onClick={() => window.open('https://github.com/SandhanuDulmeth', '_blank')}>⭐ Open in New Tab</NavBtn>
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
                <button
                    onClick={() => window.open(url, '_blank')}
                    style={{
                        padding: '2px 12px',
                        fontSize: 11,
                        fontFamily: 'Tahoma, sans-serif',
                        backgroundColor: '#ECE9D8',
                        border: '1px solid #ACA899',
                        borderRadius: 2,
                        cursor: 'pointer',
                    }}
                >
                    Go
                </button>
            </div>

            {/* Content — GitHub Profile Mock */}
            <div style={{ flex: 1, backgroundColor: '#0D1117', overflow: 'auto', color: '#C9D1D9' }}>
                <div style={{ maxWidth: 880, margin: '0 auto', padding: '20px 16px' }}>
                    
                    {/* Profile Header */}
                    <div style={{ display: 'flex', gap: 20, marginBottom: 20, alignItems: 'flex-start' }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: '#21262D',
                            border: '2px solid #30363D',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 38,
                            flexShrink: 0,
                        }}>
                            👨‍💻
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#F0F6FC' }}>
                                Sandhanu Dulmeth Mendis
                            </div>
                            <div style={{ fontSize: 15, color: '#8B949E', marginBottom: 8 }}>
                                @SandhanuDulmeth
                            </div>

                            {/* Typing SVG Banner */}
                            <div style={{ marginBottom: 12, overflow: 'hidden' }}>
                                <img
                                    src="https://readme-typing-svg.demolab.com?font=Inter&size=16&pause=1200&color=66F7F1&center=false&vCenter=true&width=650&lines=Software+Engineering+%E2%80%A2+DevOps+%E2%80%A2+Backend+Development;Java+%26+Spring+Boot+%E2%80%A2+Microservices+%E2%80%A2+REST+APIs;Docker+%E2%80%A2+CI%2FCD+%E2%80%A2+GitHub+Actions+%E2%80%A2+Cloud;React+%26+TypeScript+%E2%80%A2+Angular+%E2%80%A2+Node.js;CS+Undergraduate+%40+University+of+Colombo+School+of+Computing"
                                    alt="Typing SVG intro"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>

                            {/* Badge Links */}
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                                <a href="https://linkedin.com/in/sandhanu-mendis-25ab18324" target="_blank" rel="noreferrer">
                                    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=flat-square" />
                                </a>
                                <a href="mailto:sandhanudulmeth@gmail.com">
                                    <img alt="Email" src="https://img.shields.io/badge/Email-EB4335?logo=gmail&logoColor=white&style=flat-square" />
                                </a>
                                <a href="https://github.com/SandhanuDulmeth" target="_blank" rel="noreferrer">
                                    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-111827?logo=github&logoColor=white&style=flat-square" />
                                </a>
                                <a href="https://sandhanudulmeth.github.io/Sandhanu-Dulmeth-Mendis-portfolio/" target="_blank" rel="noreferrer">
                                    <img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-4A90D9?logo=githubpages&logoColor=white&style=flat-square" />
                                </a>
                                <img src="https://komarev.com/ghpvc/?username=SandhanuDulmeth&style=flat-square&color=blueviolet" alt="Profile views" />
                            </div>

                            <div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#8B949E' }}>
                                <span>📍 Sri Lanka</span>
                                <span>🎓 UCSC CS Undergrad</span>
                                <span>💼 Open for Internships</span>
                            </div>
                        </div>
                    </div>

                    {/* Pinned Repositories */}
                    <div style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F0F6FC',
                        marginBottom: 12,
                        borderBottom: '1px solid #21262D',
                        paddingBottom: 6,
                    }}>
                        📌 Pinned Repositories
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                        gap: 12,
                        marginBottom: 24,
                    }}>
                        {pinnedRepos.map((repo, i) => (
                            <div
                                key={i}
                                onClick={() => window.open(repo.url, '_blank')}
                                style={{
                                    backgroundColor: '#161B22',
                                    border: '1px solid #30363D',
                                    borderRadius: 6,
                                    padding: 12,
                                    cursor: 'pointer',
                                    transition: 'border-color 0.2s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#58A6FF'}
                                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#30363D'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <span style={{ color: '#8B949E', fontSize: 12 }}>📘</span>
                                        <span style={{ color: '#58A6FF', fontWeight: 'bold', fontSize: 13 }}>
                                            {repo.name}
                                        </span>
                                    </div>
                                    {repo.badge && (
                                        <span style={{
                                            fontSize: 9,
                                            backgroundColor: '#1F6FEB',
                                            color: '#FFF',
                                            padding: '1px 6px',
                                            borderRadius: 10,
                                        }}>
                                            {repo.badge}
                                        </span>
                                    )}
                                </div>
                                <div style={{ fontSize: 11, color: '#8B949E', lineHeight: 1.4, marginBottom: 10, minHeight: 32 }}>
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

                    {/* GitHub Statistics Section */}
                    <div style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F0F6FC',
                        marginBottom: 12,
                        borderBottom: '1px solid #21262D',
                        paddingBottom: 6,
                    }}>
                        📊 GitHub Statistics
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                        marginBottom: 24,
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                            <img
                                alt="GitHub Stats"
                                src="https://github-readme-stats.vercel.app/api?username=SandhanuDulmeth&show_icons=true&hide_title=true&theme=tokyonight&hide_border=true"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: 6 }}
                            />
                            <img
                                alt="GitHub Streak"
                                src="https://streak-stats.demolab.com?user=SandhanuDulmeth&theme=tokyonight&hide_border=true"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: 6 }}
                            />
                        </div>
                        <div>
                            <img
                                alt="Top Languages"
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SandhanuDulmeth&layout=compact&theme=tokyonight&hide_border=true&langs_count=8"
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: 6 }}
                            />
                        </div>
                    </div>

                    {/* Contribution Snake */}
                    <div style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F0F6FC',
                        marginBottom: 12,
                        borderBottom: '1px solid #21262D',
                        paddingBottom: 6,
                    }}>
                        🐍 Contribution Snake Activity
                    </div>
                    <div style={{
                        backgroundColor: '#161B22',
                        border: '1px solid #30363D',
                        borderRadius: 6,
                        padding: 16,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <img
                            alt="GitHub contribution snake"
                            src="https://raw.githubusercontent.com/SandhanuDulmeth/SandhanuDulmeth/output/github-snake-dark.svg"
                            style={{ maxWidth: '100%', height: 'auto' }}
                            onError={(e) => {
                                // fallback if snake repo hasn't generated SVG yet
                                e.currentTarget.style.display = 'none';
                            }}
                        />
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
                <span style={{ marginLeft: 'auto' }}>🌐 Internet Explorer 6.0 — Connected to GitHub</span>
            </div>
        </div>
    );
};

const NavBtn = ({ children, onClick }) => (
    <div
        onClick={onClick}
        style={{
            padding: '2px 6px',
            cursor: 'pointer',
            fontSize: 11,
            borderRadius: 2,
            userSelect: 'none',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D6D2C2'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        {children}
    </div>
);

export default InternetExplorer;
