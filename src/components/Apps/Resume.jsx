import React from 'react';

import { useOS } from '../../context/OSContext';
import Contact from './Contact';

const Resume = () => {
    const { openWindow } = useOS();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#525659' }}>
            {/* Toolbar */}
            <div style={{
                height: 38,
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                gap: 15
            }}>
                <ToolbarButton icon="🔍" label="Zoom" />
                <ToolbarButton icon="💾" label="Save" onClick={() => window.print()} />
                <ToolbarButton icon="🖨️" label="Print" onClick={() => window.print()} />
                <div style={{ width: 1, height: 20, backgroundColor: '#ACA899' }}></div>
                <ToolbarButton icon="📧" label="Contact Me" onClick={() => openWindow('contact', 'Contact Me', <Contact />, '📧')} />
            </div>

            {/* PDF Content Area */}
            <div style={{
                flex: 1,
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '16px 10px'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 780,
                    backgroundColor: '#FFF',
                    boxShadow: '0 0 12px rgba(0,0,0,0.5)',
                    padding: '28px 36px',
                    color: '#000',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    {/* Resume Header */}
                    <div style={{ textAlign: 'center', marginBottom: 12 }}>
                        <h1 style={{ fontSize: 26, margin: 0, textTransform: 'uppercase', letterSpacing: 1.5, color: '#111827' }}>
                            Sandhanu Dulmeth Mendis
                        </h1>
                        <h2 style={{ fontSize: 13, margin: '4px 0', fontWeight: 'bold', color: '#0F766E' }}>
                            Software Engineering • DevOps • Backend Development
                        </h2>
                        <div style={{ fontSize: 10, color: '#4B5563', display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                            <span>📧 sandhanudulmeth@gmail.com</span>
                            <span>📍 Sri Lanka 🇱🇰</span>
                            <a href="https://github.com/SandhanuDulmeth" target="_blank" rel="noreferrer" style={{ color: '#003399', textDecoration: 'none' }}>
                                🔗 github.com/SandhanuDulmeth
                            </a>
                            <a href="https://linkedin.com/in/sandhanu-mendis-25ab18324" target="_blank" rel="noreferrer" style={{ color: '#003399', textDecoration: 'none' }}>
                                💼 linkedin.com/in/sandhanu-mendis
                            </a>
                        </div>
                        <div style={{ height: 2, background: '#003399', width: '100%', marginTop: 8 }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: 20 }}>
                        {/* Left Column (Metadata & Skills) */}
                        <div style={{ width: '33%', flexShrink: 0 }}>
                            <SectionTitle title="Education" />
                            <div style={{ fontSize: 10, marginBottom: 10, lineHeight: 1.4 }}>
                                <strong>BSc in Computer Science</strong><br />
                                University of Colombo<br />
                                School of Computing (UCSC)<br />
                                <span style={{ color: '#0F766E', fontWeight: 'bold' }}>2nd Year Undergraduate</span><br /><br />
                                <strong>Diploma in Software Engineering</strong><br />
                                <em>Completed</em>
                            </div>

                            <SectionTitle title="Core Tech Stack" />
                            <SkillGroup title="Backend & Systems" skills={['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Node.js', 'Express.js', 'WebSocket']} />
                            <SkillGroup title="DevOps & Cloud" skills={['Docker', 'Docker Compose', 'Docker Hub', 'GitHub Actions CI/CD', 'Linux', 'AWS (EC2, RDS)']} />
                            <SkillGroup title="Architecture & Concepts" skills={['Microservices', 'API Gateway', 'JWT Auth', 'Layered Arch', 'Flyway Migrations']} />
                            <SkillGroup title="Testing & QA" skills={['JUnit 5', 'Mockito', 'Spring MockMvc', 'Maven', 'API E2E Testing']} />
                            <SkillGroup title="Databases" skills={['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase']} />
                            <SkillGroup title="Frontend" skills={['React', 'TypeScript', 'Angular', 'Tailwind CSS', 'Vite']} />
                            <SkillGroup title="AI & Data" skills={['Python', 'Google Gemini', 'RAG', 'Machine Learning', 'Jupyter']} />

                            <SectionTitle title="CS Foundations" />
                            <div style={{ fontSize: 9.5, lineHeight: 1.35, color: '#374151' }}>
                                Data Structures & Algorithms, OOP, DBMS, Computer Networks, Operating Systems, Software Architecture, Calculus, Statistics.
                            </div>

                            <SectionTitle title="Open To" />
                            <div style={{ fontSize: 10, lineHeight: 1.35, color: '#111827' }}>
                                • Software Engineering Internships<br />
                                • Backend Development Internships<br />
                                • DevOps & Cloud Internships
                            </div>
                        </div>

                        {/* Right Column (Experience & Featured Projects) */}
                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontSize: 10.5,
                                lineHeight: 1.4,
                                marginBottom: 10,
                                color: '#1F2937',
                                backgroundColor: '#F9FAFB',
                                padding: '6px 8px',
                                borderLeft: '3px solid #003399'
                            }}>
                                2nd-year Computer Science undergraduate at UCSC with strong hands-on experience in Software Engineering, Backend Development, and DevOps. Proven track record building microservices with automated CI/CD pipelines to Docker Hub, 40/40 passing E2E API suites, and deployed client production systems.
                            </div>

                            <SectionTitle title="Featured Projects" />
                            
                            {/* NexusEnroll */}
                            <ProjectEntry
                                title="NexusEnroll — Microservices Student Enrollment Platform"
                                subtitle="FLAGSHIP PROJECT · Distributed Systems & DevOps"
                                date="2024 – Present"
                                bullets={[
                                    "Engineered an 11-module independently deployable microservices platform: Auth, Course, Student, Enrollment, Faculty, Academic Record, Notification, Reporting, and API Gateway (Port 8080).",
                                    "Implemented automated CI/CD pipeline with GitHub Actions running Maven test suites and building/publishing Docker images to Docker Hub (sandhanu/nexusenroll-api-gateway:latest).",
                                    "Created complete automated testing suite with 40/40 passing End-to-End API tests and 11/11 successful Maven module builds using JUnit 5, Mockito, and Spring MockMvc.",
                                    "Configured Flyway database migrations, JWT authentication, and Docker Compose local orchestration."
                                ]}
                                tech="Java · Spring Boot · Microservices · Docker · GitHub Actions · CI/CD · MySQL · Maven · JWT · Flyway · JUnit 5 · Mockito"
                            />

                            {/* Auto Parts Inventory */}
                            <ProjectEntry
                                title="Auto Parts Inventory Management System"
                                subtitle="Production System · Real Automobile Business"
                                date="2024 – Present"
                                bullets={[
                                    "Built and deployed a production web platform on Vercel to replace spreadsheet workflows for auto parts inventory.",
                                    "Developed role-based access, sales stock deduction, low-stock alerts, COGS analytics, inventory turnover metrics, and reorder suggestions.",
                                    "Integrated Supabase PostgreSQL database with authentication, secure storage, and real-time triggers."
                                ]}
                                tech="React · TypeScript · Tailwind CSS · Supabase · PostgreSQL · Vercel"
                            />

                            <SectionTitle title="Other Notable Projects" />
                            
                            <CompactProjectEntry
                                title="Gemini RAG Chatbot"
                                tech="Python · Google Gemini · RAG Architecture"
                                desc="Retrieval-Augmented Generation chatbot leveraging Google Gemini for context-grounded document queries."
                            />

                            <CompactProjectEntry
                                title="Real-Time WebSocket Chat Application"
                                tech="Java · Spring Boot · WebSocket · Angular · TypeScript"
                                desc="Full-duplex real-time chat application with multi-channel broadcasting and reactive frontend."
                            />

                            <CompactProjectEntry
                                title="Docker Todolist & Container Workflows"
                                tech="Docker · Containerisation · Linux"
                                desc="Containerised application demonstrating Dockerfile multi-stage builds and isolated container environments."
                            />

                            <CompactProjectEntry
                                title="Carrom Multiplayer Game"
                                tech="Node.js · Socket.io · Firebase · HTML5 Canvas"
                                desc="Real-time multiplayer carrom board game with custom 2D physics engine, virtual coin betting, and admin panel."
                            />

                            <CompactProjectEntry
                                title="Hospital Management System"
                                tech="Java · JavaFX · MySQL · Layered Architecture"
                                desc="Desktop application for patient scheduling, medical records, and appointment management."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ToolbarButton = ({ icon, label, onClick }) => (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', fontSize: 11, fontFamily: 'Tahoma, sans-serif' }}>
        <span style={{ fontSize: 14 }}>{icon}</span>
        <span>{label}</span>
    </div>
);

const SectionTitle = ({ title }) => (
    <h3 style={{
        fontSize: 12,
        borderBottom: '1.5px solid #003399',
        paddingBottom: 2,
        marginTop: 10,
        marginBottom: 6,
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        color: '#003399'
    }}>
        {title}
    </h3>
);

const SkillGroup = ({ title, skills }) => (
    <div style={{ marginBottom: 5, fontSize: 9.5 }}>
        <div style={{ fontWeight: 'bold', color: '#111' }}>{title}</div>
        <div style={{ color: '#4B5563', lineHeight: 1.25 }}>{skills.join(' · ')}</div>
    </div>
);

const ProjectEntry = ({ title, subtitle, date, bullets, tech }) => (
    <div style={{ marginBottom: 9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 11, color: '#111' }}>
            <span>{title}</span>
            <span style={{ fontSize: 9.5, fontWeight: 'normal', color: '#6B7280' }}>{date}</span>
        </div>
        <div style={{ fontSize: 9.5, color: '#0F766E', fontWeight: 'bold', marginBottom: 2 }}>{subtitle}</div>
        <ul style={{ margin: '2px 0 3px 0', paddingLeft: 14, fontSize: 9.5, lineHeight: 1.35, color: '#374151' }}>
            {bullets.map((b, idx) => (
                <li key={idx} style={{ marginBottom: 1 }}>{b}</li>
            ))}
        </ul>
        {tech && <div style={{ fontSize: 9, color: '#003399', fontStyle: 'italic' }}><strong>Tech:</strong> {tech}</div>}
    </div>
);

const CompactProjectEntry = ({ title, tech, desc }) => (
    <div style={{ marginBottom: 5, fontSize: 9.5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{title}</strong>
            <span style={{ color: '#0F766E', fontSize: 8.5 }}>{tech}</span>
        </div>
        <div style={{ color: '#4B5563', lineHeight: 1.25 }}>{desc}</div>
    </div>
);

export default Resume;
