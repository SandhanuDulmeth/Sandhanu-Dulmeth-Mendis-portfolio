import React, { useState } from 'react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'skills', label: 'Skills' },
        { id: 'devops', label: 'DevOps & Testing' },
        { id: 'interests', label: 'Interests & CS' },
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
                overflowX: 'auto',
            }}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '4px 14px',
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
                            whiteSpace: 'nowrap',
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
                {activeTab === 'devops' && <DevOpsTab />}
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
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{
                width: 76,
                height: 76,
                backgroundColor: '#1E293B',
                border: '2px solid #64748B',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 38,
                flexShrink: 0
            }}>
                👨‍💻
            </div>
            <div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: '#003399', marginBottom: 2 }}>
                    Sandhanu Dulmeth Mendis
                </div>
                <div style={{ fontSize: 12, fontWeight: 'bold', color: '#0F766E', marginBottom: 3 }}>
                    Software Engineering • DevOps • Backend Development
                </div>
                <div style={{ fontSize: 11, color: '#475569' }}>
                    🎓 2nd-year Computer Science undergraduate @ University of Colombo School of Computing (UCSC)
                </div>
            </div>
        </div>

        <Divider />

        {/* System Info Rows */}
        <div style={{ fontSize: 12, lineHeight: 1.8 }}>
            <InfoRow label="Education" value="BSc in Computer Science (2nd Year) — UCSC" />
            <InfoRow label="Diploma" value="Diploma in Software Engineering (Completed)" />
            <InfoRow label="Location" value="Sri Lanka 🇱🇰" />
            <InfoRow label="Email" value="sandhanudulmeth@gmail.com" />
            <InfoRow label="Status" value="Open to Software Engineering, Backend & DevOps Internships" />
        </div>

        <Divider />

        <div style={{ fontSize: 12, lineHeight: 1.6, color: '#333' }}>
            <p style={{ margin: '4px 0' }}>
                🚀 <strong>Experience:</strong> Building full-stack applications, REST APIs, microservice-based systems, and deployed production web applications.
            </p>
            <p style={{ margin: '4px 0' }}>
                ⚙️ <strong>Engineering Philosophy:</strong> Combining strong Computer Science fundamentals with modern DevOps practices — Docker, automated CI/CD pipelines, container orchestration, and layered test-driven backends.
            </p>
        </div>

        <Divider />

        {/* Key Highlights */}
        <div style={{
            backgroundColor: '#FFF',
            border: '1px solid #ACA899',
            padding: '10px 12px',
            borderRadius: 3,
            fontSize: 11,
            lineHeight: 1.6,
            marginBottom: 12,
        }}>
            <div style={{ fontWeight: 'bold', color: '#003399', marginBottom: 4 }}>
                🏆 Major Project Highlights:
            </div>
            <div>
                • <strong>NexusEnroll:</strong> 11-module microservices student enrollment platform with Spring Boot, API Gateway, JWT auth, MySQL, Flyway, and automated CI/CD pushing to Docker Hub (<code>sandhanu/nexusenroll-api-gateway:latest</code>). 40/40 E2E API tests passing.
            </div>
            <div style={{ marginTop: 4 }}>
                • <strong>Auto Parts Inventory System:</strong> Production-grade management platform built for a real automobile business using React, TypeScript, Supabase, PostgreSQL, and Vercel.
            </div>
        </div>

        {/* Links */}
        <div style={{ fontSize: 11, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://github.com/SandhanuDulmeth" target="_blank" rel="noopener noreferrer" style={{ color: '#003399', fontWeight: 'bold', textDecoration: 'none' }}>
                🐙 GitHub Profile
            </a>
            <a href="https://linkedin.com/in/sandhanu-mendis-25ab18324" target="_blank" rel="noopener noreferrer" style={{ color: '#003399', fontWeight: 'bold', textDecoration: 'none' }}>
                💼 LinkedIn
            </a>
            <a href="mailto:sandhanudulmeth@gmail.com" style={{ color: '#003399', fontWeight: 'bold', textDecoration: 'none' }}>
                📧 Email Me
            </a>
            <a href="https://sandhanudulmeth.github.io/Sandhanu-Dulmeth-Mendis-portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: '#003399', fontWeight: 'bold', textDecoration: 'none' }}>
                🌐 Live Portfolio
            </a>
        </div>
    </div>
);

const SkillsTab = () => {
    const skillCategories = [
        {
            title: '💻 Programming Languages',
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
            title: '⚙️ Backend & Architecture',
            skills: ['Spring Boot', 'Spring MVC', 'REST APIs', 'Node.js', 'Express.js', 'WebSocket', 'Microservices', 'API Gateway', 'JWT Authentication', 'Layered Architecture', 'MVC', 'API Design'],
        },
        {
            title: '🐳 DevOps & Infrastructure',
            skills: ['Docker', 'Docker Compose', 'Docker Hub Registry', 'GitHub Actions', 'CI/CD Pipelines', 'Linux', 'Git', 'GitHub', 'Containerisation', 'Build Automation'],
        },
        {
            title: '☁️ Cloud & Platforms',
            skills: ['Vercel', 'Supabase', 'AWS (EC2, RDS, IAM - Exploring)'],
        },
        {
            title: '🗄️ Databases',
            skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
        },
        {
            title: '🎨 Frontend',
            skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite', 'Astro', 'HTML5', 'CSS3'],
        },
        {
            title: '🧪 Testing & Development Tools',
            skills: ['JUnit 5', 'Mockito', 'Spring MockMvc', 'Maven', 'Postman', 'API Testing', 'Unit Testing', 'Integration Testing', 'E2E Testing'],
        },
        {
            title: '🤖 AI & Data',
            skills: ['Python', 'Google Gemini', 'RAG (Retrieval-Augmented Generation)', 'Jupyter', 'Machine Learning'],
        },
    ];

    return (
        <div>
            <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: '#003399' }}>
                🛠️ Technical Skills Overview
            </div>
            {skillCategories.map((cat, idx) => (
                <div key={idx} style={{ marginBottom: 10 }}>
                    <div style={{
                        fontSize: 11,
                        fontWeight: 'bold',
                        marginBottom: 4,
                        padding: '2px 8px',
                        backgroundColor: '#D6D2C2',
                        border: '1px solid #ACA899',
                        borderRadius: 2,
                    }}>
                        {cat.title}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, paddingLeft: 4 }}>
                        {cat.skills.map((skill, i) => (
                            <span key={i} style={{
                                fontSize: 11,
                                padding: '2px 7px',
                                backgroundColor: '#FFF',
                                border: '1px solid #ACA899',
                                borderRadius: 2,
                                color: '#222',
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

const DevOpsTab = () => (
    <div style={{ fontSize: 11, lineHeight: 1.5 }}>
        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 8, color: '#003399' }}>
            🔄 DevOps & Testing Workflows
        </div>

        {/* CI/CD Pipeline Visual */}
        <div style={{
            backgroundColor: '#1E293B',
            color: '#F8FAFC',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #475569',
            fontFamily: 'Consolas, monospace',
            fontSize: 10,
            marginBottom: 12,
        }}>
            <div style={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: 6 }}>
                🚀 NexusEnroll CI/CD Pipeline (GitHub Actions):
            </div>
            <pre style={{ margin: 0, lineHeight: 1.35, color: '#E2E8F0', overflowX: 'auto' }}>
{`Code Push / Pull Request
          ↓
    GitHub Actions
          ↓
      Maven Tests (JUnit 5 & Mockito)
          ↓
      Docker Build (Multi-stage)
          ↓
 Docker Hub Registry
(sandhanu/nexusenroll-api-gateway:latest)`}
            </pre>
        </div>

        {/* Testing Suite Card */}
        <div style={{
            backgroundColor: '#FFF',
            border: '1px solid #ACA899',
            padding: 10,
            borderRadius: 3,
            marginBottom: 12,
        }}>
            <div style={{ fontWeight: 'bold', color: '#003399', marginBottom: 6 }}>
                🧪 Automated Testing Suite
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', padding: 8, borderRadius: 3 }}>
                    <div style={{ fontSize: 14, fontWeight: 'bold', color: '#166534' }}>40 / 40 PASSED</div>
                    <div style={{ fontSize: 10, color: '#15803D' }}>End-to-End API Integration Tests</div>
                </div>
                <div style={{ backgroundColor: '#F0F9FF', border: '1px solid #BAE6FD', padding: 8, borderRadius: 3 }}>
                    <div style={{ fontSize: 14, fontWeight: 'bold', color: '#0369A1' }}>11 / 11 SUCCESS</div>
                    <div style={{ fontSize: 10, color: '#0284C7' }}>Maven Modules Build & Unit Tests</div>
                </div>
            </div>
            <div style={{ marginTop: 8, color: '#444' }}>
                Test coverage includes: Authentication, Course creation & paginated search, Enrollment & waitlist logic, Faculty roster & grading, Academic records & transcripts, Notifications & unread tracking, Reporting, and Global Exception Handling.
            </div>
        </div>

        {/* DevOps Concepts */}
        <div style={{
            backgroundColor: '#FFF',
            border: '1px solid #ACA899',
            padding: 10,
            borderRadius: 3,
        }}>
            <div style={{ fontWeight: 'bold', color: '#003399', marginBottom: 6 }}>
                🐳 DevOps Concepts Applied:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 10 }}>
                <div>• Application Containerisation</div>
                <div>• Docker Multi-Service Orchestration</div>
                <div>• Docker Compose Local Dev</div>
                <div>• CI/CD Pipelines (GitHub Actions)</div>
                <div>• Automated Test Validation</div>
                <div>• Docker Hub Registry Publishing</div>
                <div>• Database Migrations with Flyway</div>
                <div>• Linux Administration & Scripting</div>
            </div>
        </div>
    </div>
);

const InterestsTab = () => (
    <div style={{ fontSize: 12, lineHeight: 1.7 }}>
        <div style={{ fontWeight: 'bold', marginBottom: 8, color: '#003399' }}>
            📚 Computer Science Foundations
        </div>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            marginBottom: 12,
        }}>
            {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Management Systems',
                'Computer Networks',
                'Operating Systems',
                'Software Architecture',
                'Calculus',
                'Numerical Methods',
                'Statistical Inference',
                'Software Engineering',
            ].map((topic, i) => (
                <span key={i} style={{
                    fontSize: 10,
                    padding: '2px 7px',
                    backgroundColor: '#FFF',
                    border: '1px solid #ACA899',
                    borderRadius: 2,
                    color: '#333'
                }}>
                    {topic}
                </span>
            ))}
        </div>

        <Divider />

        <div style={{ fontWeight: 'bold', marginBottom: 6, color: '#003399' }}>
            🌱 Currently Learning & Exploring
        </div>
        <ul style={{ paddingLeft: 20, margin: '0 0 12px 0', fontSize: 11 }}>
            <li><strong>DevOps & Cloud:</strong> AWS (EC2, RDS, IAM), Monitoring & Logging, Infrastructure as Code, Kubernetes</li>
            <li><strong>Software Engineering:</strong> Advanced Microservices, System Design, Distributed Systems, Scalable Backend Architecture</li>
            <li><strong>AI & Data:</strong> Retrieval-Augmented Generation (RAG) with Gemini, Vector Search</li>
        </ul>

        <Divider />

        <div style={{ fontWeight: 'bold', marginBottom: 6, color: '#003399' }}>
            💼 Career Interests & Open Roles
        </div>
        <ul style={{ paddingLeft: 20, margin: '0 0 12px 0', fontSize: 11 }}>
            <li>Software Engineering Internships</li>
            <li>Backend Development Internships</li>
            <li>DevOps / Cloud / Platform Engineering Internships</li>
        </ul>

        <div style={{
            padding: 8,
            backgroundColor: '#FFFDE7',
            border: '1px solid #E0D77D',
            borderRadius: 3,
            fontSize: 11,
            fontStyle: 'italic',
            color: '#665C00'
        }}>
            💡 Tip: Open <strong>Command Prompt</strong> on the Desktop to interactively test commands like <code>docker pull sandhanu/nexusenroll-api-gateway:latest</code> or <code>mvn test</code>!
        </div>
    </div>
);

const InfoRow = ({ label, value }) => (
    <div style={{ display: 'flex', gap: 8, marginBottom: 2 }}>
        <span style={{ fontWeight: 'bold', minWidth: 75, color: '#555' }}>{label}:</span>
        <span>{value}</span>
    </div>
);

const Divider = () => (
    <div style={{
        height: 1,
        background: 'linear-gradient(to right, #ACA899, transparent)',
        margin: '8px 0',
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
