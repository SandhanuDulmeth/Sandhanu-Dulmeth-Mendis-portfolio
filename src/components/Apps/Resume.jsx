import React from 'react';

import { useOS } from '../../context/OSContext';
import Contact from './Contact';

const Resume = () => {
    const { openWindow } = useOS();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#525659' }}>
            {/* Toolbar */}
            <div style={{
                height: 40,
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                gap: 15
            }}>
                <ToolbarButton icon="🔍" label="Zoom" />
                <ToolbarButton icon="💾" label="Save" />
                <ToolbarButton icon="🖨️" label="Print" />
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
                padding: 20
            }}>
                <div style={{
                    width: 595, // A4 width approx
                    minHeight: 842, // A4 height approx
                    backgroundColor: '#FFF',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    padding: '30px 40px',
                    color: '#000',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    {/* Resume Header */}
                    <div style={{ textAlign: 'center', marginBottom: 15 }}>
                        <h1 style={{ fontSize: 32, margin: 0, textTransform: 'uppercase', letterSpacing: 2 }}>Sandhanu Dulmeth Mendis</h1>
                        <h2 style={{ fontSize: 16, margin: '6px 0', fontStyle: 'italic', fontFamily: 'Georgia, serif', color: '#444' }}>Full-Stack Developer</h2>
                        <div style={{ fontSize: 10, color: '#666', display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                            <span>📧 sandhanudulmeth@gmail.com</span>
                            <span>📍 Sri Lanka</span>
                            <span>🔗 github.com/SandhanuDulmeth</span>
                            <span>💼 linkedin.com/in/sandhanu-mendis</span>
                        </div>
                        <div style={{ height: 2, background: '#000', width: '100%', marginTop: 10 }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: 24 }}>
                        {/* Left Column */}
                        <div style={{ width: '32%' }}>
                            <div style={{
                                width: 80,
                                height: 80,
                                backgroundColor: '#EAEAEA',
                                borderRadius: '50%',
                                marginBottom: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#333',
                                fontSize: 36,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                border: '1px solid #CCC'
                            }}>
                                👨‍💻
                            </div>

                            <SectionTitle title="Contact" />
                            <div style={{ fontSize: 11, marginBottom: 12, lineHeight: 1.5 }}>
                                <strong>Location:</strong> Sri Lanka 🇱🇰<br />
                                <strong>Email:</strong> sandhanudulmeth@gmail.com<br />
                                <strong>GitHub:</strong> SandhanuDulmeth<br />
                                <strong>LinkedIn:</strong> sandhanu-mendis
                            </div>

                            <SectionTitle title="Education" />
                            <div style={{ fontSize: 11, marginBottom: 12, lineHeight: 1.4 }}>
                                <strong>BSc in Computer Science</strong><br />
                                University of Colombo<br />
                                School of Computing<br />
                                <em>2nd Year Undergraduate</em><br /><br />
                                <strong>Diploma in SE</strong><br />
                                <em>Completed</em>
                            </div>

                            <SectionTitle title="Tech Stack" />
                            <SkillGroup title="Backend" skills={['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Python']} />
                            <SkillGroup title="Frontend" skills={['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Astro']} />
                            <SkillGroup title="Databases" skills={['Supabase', 'MongoDB', 'MySQL']} />
                            <SkillGroup title="AI / ML" skills={['Google Gemini', 'RAG', 'Jupyter']} />
                            <SkillGroup title="DevOps" skills={['Docker', 'Git', 'GitHub Actions', 'Vercel']} />
                        </div>

                        {/* Right Column */}
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 11, lineHeight: 1.4, marginTop: 0, marginBottom: 12, color: '#333' }}>
                                2nd-year Computer Science undergraduate at the University of Colombo School of Computing (UCSC) with hands-on production experience. Built and deployed a real-world inventory management system for an auto parts business. Committed to writing clean, scalable code that solves real problems.
                            </p>

                            <SectionTitle title="Featured Project" />
                            <ProjectEntry
                                title="Auto Parts Inventory System"
                                subtitle="Production System — Real Client"
                                date="2024 – Present"
                                desc="Built a full-stack inventory management system deployed on Vercel for an auto parts business. Features include dual-role access, PDF report exports, COGS analytics, inventory turnover metrics, reorder suggestions, and sales-by-brand breakdowns."
                                tech="React · TypeScript · Tailwind CSS · Supabase · Vercel"
                            />

                            <SectionTitle title="Key Projects" />
                            <ProjectEntry
                                title="Gemini RAG Chatbot"
                                subtitle="AI / Machine Learning"
                                date="2024"
                                desc="AI chatbot leveraging Retrieval-Augmented Generation (RAG) with Google Gemini for context-aware, intelligent responses."
                                tech="Python · Google Gemini · RAG"
                            />
                            <ProjectEntry
                                title="Real-Time Chat Application"
                                subtitle="Full-Stack System"
                                date="2024"
                                desc="Real-time messaging application with WebSocket-based communication. Built with Angular frontend and Spring Boot backend."
                                tech="Angular · TypeScript · Java · Spring Boot · WebSocket"
                            />
                            <ProjectEntry
                                title="Inventory Management System"
                                subtitle="Full-Stack Application"
                                date="2024"
                                desc="Complete inventory management solution with React/Vite frontend and Spring Boot RESTful API backend."
                                tech="React · Vite · TypeScript · Java · Spring Boot"
                            />
                            <ProjectEntry
                                title="Hospital Management System"
                                subtitle="Desktop Application"
                                date="2024"
                                desc="JavaFX desktop application with layered architecture for managing hospital operations and patient records."
                                tech="Java · JavaFX"
                            />
                            <ProjectEntry
                                title="Carrom Multiplayer Game"
                                subtitle="Real-Time Multiplayer Game"
                                date="2024"
                                desc="Full-stack real-time multiplayer carrom game using Socket.io and Matter.js physics. Built with user authentication, virtual currency coin betting, striker skin store, and secure admin panel."
                                tech="Node.js · Socket.io · Firebase · Cloudinary · HTML/JS"
                            />

                            <SectionTitle title="Additional Skills" />
                            <div style={{ fontSize: 11, lineHeight: 1.4 }}>
                                <ul style={{ paddingLeft: 15, margin: 0 }}>
                                    <li>RESTful API design & development · WebSocket real-time communication</li>
                                    <li>Docker containerization · CI/CD with GitHub Actions</li>
                                    <li>Agile development practices · Postman API testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ToolbarButton = ({ icon, label, onClick }) => (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', fontSize: 12 }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span>{label}</span>
    </div>
);

const SectionTitle = ({ title }) => (
    <h3 style={{
        fontSize: 13,
        borderBottom: '1px solid #000',
        paddingBottom: 2,
        marginTop: 14,
        marginBottom: 6,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic'
    }}>
        {title}
    </h3>
);

const SkillGroup = ({ title, skills }) => (
    <div style={{ marginBottom: 6, fontSize: 10 }}>
        <div style={{ fontWeight: 'bold', color: '#111' }}>{title}</div>
        <div style={{ color: '#444', lineHeight: 1.3 }}>{skills.join(', ')}</div>
    </div>
);

const ProjectEntry = ({ title, subtitle, date, desc, tech }) => (
    <div style={{ marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 12 }}>
            <span>{title}</span>
            <span style={{ fontSize: 10, fontWeight: 'normal', color: '#666' }}>{date}</span>
        </div>
        <div style={{ fontSize: 10, fontStyle: 'italic', marginBottom: 2, color: '#555' }}>{subtitle}</div>
        {desc && <div style={{ fontSize: 11, lineHeight: 1.3, marginBottom: 2 }}>{desc}</div>}
        {tech && <div style={{ fontSize: 10, color: '#003399', fontStyle: 'italic' }}>Tech: {tech}</div>}
    </div>
);

export default Resume;
