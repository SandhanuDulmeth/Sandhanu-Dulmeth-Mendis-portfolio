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
                padding: 20
            }}>
                <div style={{
                    width: 595, // A4 width approx
                    minHeight: 842, // A4 height approx
                    backgroundColor: '#FFF',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    padding: 40,
                    color: '#000',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    {/* Resume Header */}
                    <div style={{ textAlign: 'center', marginBottom: 30 }}>
                        <h1 style={{ fontSize: 42, margin: 0, textTransform: 'uppercase', letterSpacing: 2 }}>Sandhanu Mendis</h1>
                        <h2 style={{ fontSize: 20, margin: '10px 0', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Full Stack Developer</h2>
                        <div style={{ height: 2, background: '#000', width: '100%', marginTop: 10 }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: 30 }}>
                        {/* Left Column */}
                        <div style={{ width: '30%' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '1',
                                backgroundColor: '#333',
                                borderRadius: 4,
                                marginBottom: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FFF',
                                fontSize: 40
                            }}>
                                👨‍💻
                            </div>

                            <SectionTitle title="Contact" />
                            <div style={{ fontSize: 12, marginBottom: 20 }}>
                                <strong>Location</strong><br />
                                Sri Lanka<br /><br />
                                <strong>Education</strong><br />
                                UCSC (Undergraduate)<br />
                                Diploma in SE
                            </div>

                            <SectionTitle title="Tech Stack" />
                            <div style={{ fontSize: 12, marginBottom: 5 }}><strong>Back-End</strong></div>
                            <ul style={{ fontSize: 11, paddingLeft: 15, margin: '0 0 10px 0' }}>
                                <li>Java, Spring Boot</li>
                                <li>Spring Data JPA</li>
                                <li>MySQL</li>
                            </ul>

                            <div style={{ fontSize: 12, marginBottom: 5 }}><strong>Front-End</strong></div>
                            <ul style={{ fontSize: 11, paddingLeft: 15, margin: '0 0 10px 0' }}>
                                <li>React, Angular</li>
                                <li>JS/TypeScript</li>
                                <li>HTML5, CSS3</li>
                            </ul>

                            <div style={{ fontSize: 12, marginBottom: 5 }}><strong>Other</strong></div>
                            <ul style={{ fontSize: 11, paddingLeft: 15, margin: 0 }}>
                                <li>JavaFX</li>
                                <li>Maven, Git</li>
                                <li>REST APIs</li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 13, lineHeight: 1.4, marginTop: 0 }}>
                                Computer Science undergraduate at the University of Colombo School of Computing (UCSC) with hands-on experience in building complete web and desktop applications. Committed to writing clean, scalable code that solves real problems.
                            </p>

                            <SectionTitle title="Key Projects" />

                            <Job
                                title="Hospital Management System"
                                company="Academic Project"
                                date="2024"
                                desc="Automated over 1,000 patient records, streamlining hospital operations and data management."
                            />

                            <Job
                                title="Inventory Tracker"
                                company="Academic Project"
                                date="2023"
                                desc="Developed a tracking system that reduced stock errors by 35% through accurate real-time monitoring."
                            />

                            <SectionTitle title="Education" />
                            <Job
                                title="BSc in Computer Science"
                                company="University of Colombo School of Computing"
                                date="Present"
                            />
                            <Job
                                title="Diploma in Software Engineering"
                                company="Recognized Institute"
                                date="Completed"
                            />
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
        fontSize: 16,
        borderBottom: '1px solid #000',
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic'
    }}>
        {title}
    </h3>
);

const Job = ({ title, company, date, desc }) => (
    <div style={{ marginBottom: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 14 }}>
            <span>{title}</span>
            <span>{date}</span>
        </div>
        <div style={{ fontSize: 12, fontStyle: 'italic', marginBottom: 5 }}>{company}</div>
        {desc && <div style={{ fontSize: 13 }}>{desc}</div>}
    </div>
);

export default Resume;
