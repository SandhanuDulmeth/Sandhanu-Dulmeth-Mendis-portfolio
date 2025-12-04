import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ padding: 20, fontFamily: 'Tahoma, sans-serif', lineHeight: '1.5' }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                    width: 120,
                    height: 120,
                    backgroundColor: '#DDD',
                    border: '1px solid #999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 50,
                    flexShrink: 0
                }}>
                    👨‍💻
                </div>
                <div>
                    <h2 style={{ marginTop: 0, color: '#0058EE' }}>Sandhanu Mendis</h2>
                    <p>
                        Hello! I am <strong>Sandhanu Mendis</strong>, a Computer Science undergraduate at the <strong>University of Colombo School of Computing (UCSC)</strong> and a full-stack developer with hands-on experience in building complete web and desktop applications.
                    </p>
                    <p>
                        I combine academic rigor with practical skills, holding a <strong>Diploma in Software Engineering</strong>. My projects prove my skills in both front-end and back-end development.
                    </p>

                    <h3 style={{ borderBottom: '1px solid #CCC', paddingBottom: 5, marginBottom: 10 }}>My Proven Track Record</h3>
                    <ul style={{ paddingLeft: 20 }}>
                        <li>Built a <strong>Hospital Management System</strong> that automated 1,000+ patient records.</li>
                        <li>Developed an <strong>Inventory Tracker</strong> that reduced stock errors by 35%.</li>
                    </ul>

                    <h3 style={{ borderBottom: '1px solid #CCC', paddingBottom: 5, marginBottom: 10 }}>My Tech Stack</h3>
                    <ul style={{ paddingLeft: 20, fontSize: 13 }}>
                        <li><strong>Back-End:</strong> Java, Spring Boot, Spring Data JPA, MySQL</li>
                        <li><strong>Front-End:</strong> React, Angular, JavaScript/TypeScript, HTML5, CSS3</li>
                        <li><strong>Desktop:</strong> JavaFX</li>
                        <li><strong>Tools:</strong> Maven, Git, REST APIs, JSON</li>
                    </ul>

                    <p style={{ marginTop: 20, fontStyle: 'italic' }}>
                        I am committed to writing clean, scalable code that solves real problems. Let's discuss your project!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
