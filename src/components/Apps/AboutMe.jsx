import React, { useState } from 'react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'skills', label: 'Skills' },
        { id: 'interests', label: 'Interests' },
    ];

    return (
        <div style={{
            padding: 0,
            fontFamily: 'Tahoma, sans-serif',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ECE9D8',
            userSelect: 'text'
        }}>
            {/* Tab Bar */}
            <div style={{
                display: 'flex',
                padding: '8px 8px 0 8px',
                gap: 2,
                backgroundColor: '#ECE9D8',
            }}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '4px 16px',
                            fontSize: 11,
                            cursor: 'pointer',
                            backgroundColor: activeTab === tab.id ? '#ECE9D8' : '#D6D2C2',
                            border: '1px solid #ACA899',
                            borderBottom: activeTab === tab.id ? '1px solid #ECE9D8' : '1px solid #ACA899',
                            borderRadius: '3px 3px 0 0',
                            position: 'relative',
                            zIndex: activeTab === tab.id ? 2 : 1,
                            marginBottom: -1,
                            fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                        }}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{
                flex: 1,
                margin: '0 8px 8px 8px',
                border: '1px solid #ACA899',
                borderRadius: '0 3px 3px 3px',
                padding: 16,
                overflow: 'auto',
                backgroundColor: '#ECE9D8',
            }}>
                {activeTab === 'general' && <GeneralTab />}
                {activeTab === 'skills' && <SkillsTab />}
                {activeTab === 'interests' && <InterestsTab />}
            </div>

            {/* Bottom buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '0 8px 8px 8px',
                gap: 6,
            }}>
                <XPButton label="OK" />
                <XPButton label="Cancel" />
                <XPButton label="Apply" />
            </div>
        </div>
    );
};

const GeneralTab = () => (
    <div>
        {/* Top row: icon + name */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
            <div style={{
                width: 80,
                height: 80,
                backgroundColor: '#333',
                border: '1px solid #999',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 42,
                flexShrink: 0
            }}>
                👨‍💻
            </div>
            <div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: '#003399', marginBottom: 2 }}>
                    Sandhanu Dulmeth Mendis
                </div>
                <div style={{ fontSize: 12, color: '#444', marginBottom: 4 }}>
                    Full-Stack Developer
                </div>
                <div style={{ fontSize: 11, color: '#666' }}>
                    2nd-year CS Undergraduate @ University of Colombo School of Computing
                </div>
            </div>
        </div>

        <Divider />

        {/* System Info Rows */}
        <div style={{ fontSize: 12, lineHeight: 1.8 }}>
            <InfoRow label="Role" value="Full-Stack Developer • Backend / Full-Stack Engineer" />
            <InfoRow label="Education" value="BSc Computer Science — UCSC (2nd Year)" />
            <InfoRow label="Diploma" value="Diploma in Software Engineering" />
            <InfoRow label="Location" value="Sri Lanka 🇱🇰" />
            <InfoRow label="Email" value="sandhanudulmeth@gmail.com" />
        </div>

        <Divider />

        <div style={{ fontSize: 12, lineHeight: 1.6, color: '#333' }}>
            <p style={{ margin: '4px 0' }}>
                Full-stack developer with <strong>production experience</strong> — built & deployed
                a real-world inventory management system for an auto parts business.
            </p>
            <p style={{ margin: '4px 0' }}>
                Combining academic rigor with practical skills to create
                clean, scalable code that solves real problems.
            </p>
        </div>

        <Divider />

        {/* Links */}
        <div style={{ fontSize: 11, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://github.com/SandhanuDulmeth" target="_blank" rel="noopener noreferrer" style={{ color: '#003399' }}>
                🔗 GitHub
            </a>
            <a href="https://linkedin.com/in/sandhanu-mendis-25ab18324" target="_blank" rel="noopener noreferrer" style={{ color: '#003399' }}>
                🔗 LinkedIn
            </a>
            <a href="mailto:sandhanudulmeth@gmail.com" style={{ color: '#003399' }}>
                📧 Email
            </a>
            <a href="https://sandhanudulmeth.github.io/Sandhanu-Dulmeth-Mendis-portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: '#003399' }}>
                🌐 Portfolio
            </a>
        </div>
    </div>
);

const SkillsTab = () => {
    const skillGroups = [
        {
            title: '🔧 Backend',
            skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python'],
        },
        {
            title: '🎨 Frontend',
            skills: ['React (Vite)', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Astro', 'HTML5', 'CSS3'],
        },
        {
            title: '🗄️ Databases',
            skills: ['Supabase (PostgreSQL)', 'MongoDB', 'MySQL'],
        },
        {
            title: '🤖 AI / ML',
            skills: ['Python', 'Google Gemini', 'RAG Architecture', 'Jupyter'],
        },
        {
            title: '🐳 DevOps & Tools',
            skills: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'Postman', 'WebSocket', 'REST APIs'],
        },
    ];

    return (
        <div>
            <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 10, color: '#003399' }}>
                Technical Skills Overview
            </div>
            {skillGroups.map((group, idx) => (
                <div key={idx} style={{ marginBottom: 14 }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        marginBottom: 6,
                        padding: '3px 8px',
                        backgroundColor: '#D6D2C2',
                        border: '1px solid #ACA899',
                        borderRadius: 2,
                    }}>
                        {group.title}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingLeft: 4 }}>
                        {group.skills.map((skill, i) => (
                            <span key={i} style={{
                                fontSize: 11,
                                padding: '2px 8px',
                                backgroundColor: '#FFF',
                                border: '1px solid #ACA899',
                                borderRadius: 2,
                                color: '#333',
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const InterestsTab = () => (
    <div style={{ fontSize: 12, lineHeight: 1.8 }}>
        <div style={{ fontWeight: 'bold', marginBottom: 10, color: '#003399' }}>
            Currently Exploring
        </div>
        <ul style={{ paddingLeft: 20, margin: '0 0 16px 0' }}>
            <li>☁️ Cloud-native development</li>
            <li>🔄 CI/CD pipelines & automation</li>
            <li>📊 Advanced algorithms & data structures</li>
            <li>🧠 AI-powered applications with RAG</li>
        </ul>

        <Divider />

        <div style={{ fontWeight: 'bold', marginBottom: 10, color: '#003399' }}>
            Open To
        </div>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li>💼 Backend / Full-Stack Software Engineering internships</li>
            <li>🤝 Open-source collaboration</li>
            <li>🚀 Startup opportunities</li>
            <li>📚 Mentorship & learning communities</li>
        </ul>

        <Divider />

        <div style={{
            marginTop: 12,
            padding: 10,
            backgroundColor: '#FFFDE7',
            border: '1px solid #E0D77D',
            borderRadius: 3,
            fontSize: 11,
            fontStyle: 'italic',
        }}>
            💡 Fun fact: This entire portfolio is built to look like Windows XP!
            Double-click icons, open windows, drag them around — it's a fully interactive OS experience.
        </div>
    </div>
);

const InfoRow = ({ label, value }) => (
    <div style={{ display: 'flex', gap: 8 }}>
        <span style={{ fontWeight: 'bold', minWidth: 80, color: '#555' }}>{label}:</span>
        <span>{value}</span>
    </div>
);

const Divider = () => (
    <div style={{
        height: 1,
        background: 'linear-gradient(to right, #ACA899, transparent)',
        margin: '10px 0',
    }} />
);

const XPButton = ({ label, onClick }) => (
    <button
        onClick={onClick}
        style={{
            padding: '3px 18px',
            fontSize: 11,
            fontFamily: 'Tahoma, sans-serif',
            backgroundColor: '#ECE9D8',
            border: '1px solid #003C74',
            borderRadius: 3,
            cursor: 'pointer',
            minWidth: 70,
        }}
    >
        {label}
    </button>
);

export default AboutMe;
