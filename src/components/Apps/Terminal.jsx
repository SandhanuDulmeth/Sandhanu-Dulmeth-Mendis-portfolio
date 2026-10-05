import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'Microsoft Windows XP [Version 5.1.2600]' },
        { type: 'output', text: '(C) Copyright 1985-2001 Microsoft Corp.' },
        { type: 'output', text: '' },
        { type: 'output', text: 'Sandhanu Dulmeth Mendis — Developer Terminal Environment' },
        { type: 'output', text: 'Type "help" to view available commands, or try "nexusenroll", "docker", "mvn test".' },
        { type: 'output', text: '' },
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView?.({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;

        const cmd = input.trim();
        const cmdLower = cmd.toLowerCase();

        const newHistory = [...history, { type: 'input', text: `C:\\Documents and Settings\\Sandhanu> ${input}` }];

        if (cmdLower === 'clear' || cmdLower === 'cls') {
            setHistory([]);
            setInput('');
            return;
        } else if (cmdLower === 'help') {
            newHistory.push(
                { type: 'output', text: 'Available commands:' },
                { type: 'output', text: '  nexusenroll    - Inspect the NexusEnroll microservices architecture' },
                { type: 'output', text: '  docker pull    - Simulate pulling Docker Hub image (sandhanu/nexusenroll-api-gateway)' },
                { type: 'output', text: '  mvn test       - Run automated JUnit & MockMvc test suite simulation' },
                { type: 'output', text: '  skills         - List technical skills & tech stack' },
                { type: 'output', text: '  projects       - Display featured repositories' },
                { type: 'output', text: '  systeminfo     - Display profile system information' },
                { type: 'output', text: '  contact        - Show social & contact channels' },
                { type: 'output', text: '  cls / clear    - Clear terminal screen' },
            );
        } else if (cmdLower === 'nexusenroll' || cmdLower === 'architecture') {
            newHistory.push(
                { type: 'output', text: '=====================================================' },
                { type: 'output', text: 'NexusEnroll — Microservices Student Enrollment Platform' },
                { type: 'output', text: 'CI/CD: GitHub Actions (Passing) | Docker Hub: Published' },
                { type: 'output', text: '=====================================================' },
                { type: 'output', text: 'Architecture Diagram:' },
                { type: 'output', text: '                ┌─────────────────────┐' },
                { type: 'output', text: '                │      Frontend       │' },
                { type: 'output', text: '                └──────────┬──────────┘' },
                { type: 'output', text: '                           ▼           ' },
                { type: 'output', text: '                ┌─────────────────────┐' },
                { type: 'output', text: '                │     API Gateway     │ (Port: 8080)' },
                { type: 'output', text: '                └──────────┬──────────┘' },
                { type: 'output', text: '            ┌──────────────┼──────────────┐' },
                { type: 'output', text: '            ▼              ▼              ▼' },
                { type: 'output', text: '       Auth Service  Course Service Student Service' },
                { type: 'output', text: '            ▼              ▼              ▼' },
                { type: 'output', text: '       Enrollment   Faculty Service Academic Record' },
                { type: 'output', text: '            └──────────────┬──────────────┘' },
                { type: 'output', text: '                           ▼' },
                { type: 'output', text: '                 Notification & Reporting' },
                { type: 'output', text: '                           ▼' },
                { type: 'output', text: '                         MySQL' },
                { type: 'output', text: '' },
                { type: 'output', text: 'Key Metrics: 40/40 API Tests Passed | 11/11 Maven Modules Build Success' },
                { type: 'output', text: 'Repository: https://github.com/SandhanuDulmeth/nexus-enroll2.0' },
            );
        } else if (cmdLower.startsWith('docker') || cmdLower === 'docker pull') {
            newHistory.push(
                { type: 'output', text: '$ docker pull sandhanu/nexusenroll-api-gateway:latest' },
                { type: 'output', text: 'Using default tag: latest' },
                { type: 'output', text: 'latest: Pulling from sandhanu/nexusenroll-api-gateway' },
                { type: 'output', text: 'a3ed95caeb02: Pull complete [62.4MB / 62.4MB]' },
                { type: 'output', text: '8a1c60f731ac: Pull complete [24.1MB / 24.1MB]' },
                { type: 'output', text: '739c3e981df2: Pull complete [18.7MB / 18.7MB]' },
                { type: 'output', text: 'Digest: sha256:d826a7e0c90bfa7c58c214bb893077712' },
                { type: 'output', text: 'Status: Downloaded newer image for sandhanu/nexusenroll-api-gateway:latest' },
                { type: 'output', text: 'docker.io/sandhanu/nexusenroll-api-gateway:latest' },
            );
        } else if (cmdLower.includes('mvn') || cmdLower === 'test') {
            newHistory.push(
                { type: 'output', text: '$ mvn clean test' },
                { type: 'output', text: '[INFO] Scanning for projects...' },
                { type: 'output', text: '[INFO] ------------------------------------------------------------------------' },
                { type: 'output', text: '[INFO] Building NexusEnroll Suite 2.0.0-RELEASE' },
                { type: 'output', text: '[INFO] ------------------------------------------------------------------------' },
                { type: 'output', text: '[INFO] Running com.nexusenroll.auth.JwtAuthenticationTests ... OK' },
                { type: 'output', text: '[INFO] Running com.nexusenroll.gateway.RoutingFilterTests ... OK' },
                { type: 'output', text: '[INFO] Running com.nexusenroll.course.CourseEnrollmentTests ... OK' },
                { type: 'output', text: '[INFO] Running com.nexusenroll.academic.TranscriptGenTests ... OK' },
                { type: 'output', text: '[INFO] Running com.nexusenroll.reporting.AuditReportTests ... OK' },
                { type: 'output', text: '[INFO]' },
                { type: 'output', text: '[INFO] Results: 40 / 40 Tests PASSED (0 failures, 0 errors, 0 skipped)' },
                { type: 'output', text: '[INFO] 11 / 11 Modules BUILD SUCCESS' },
                { type: 'output', text: '[INFO] ------------------------------------------------------------------------' },
                { type: 'output', text: '[INFO] Total time: 8.423 s' },
                { type: 'output', text: '[INFO] Finished at: 2026-10-05T14:15:00+05:30' },
            );
        } else if (cmdLower === 'skills') {
            newHistory.push(
                { type: 'output', text: 'Technical Skills:' },
                { type: 'output', text: '  Languages:   Java, Python, JavaScript, TypeScript, SQL' },
                { type: 'output', text: '  Backend:     Spring Boot, Spring MVC, REST APIs, Node.js, Express.js, WebSocket' },
                { type: 'output', text: '  DevOps:      Docker, Docker Compose, Docker Hub, GitHub Actions, CI/CD, Linux' },
                { type: 'output', text: '  Cloud:       Vercel, Supabase, AWS (EC2, RDS, IAM)' },
                { type: 'output', text: '  Testing:     JUnit 5, Mockito, Spring MockMvc, Maven, Postman' },
                { type: 'output', text: '  Databases:   MySQL, PostgreSQL, MongoDB, Supabase' },
                { type: 'output', text: '  Frontend:    React, TypeScript, Angular, Tailwind CSS, Vite, Astro' },
                { type: 'output', text: '  AI / Data:   Python, Google Gemini, RAG, Jupyter, Machine Learning' },
            );
        } else if (cmdLower === 'projects') {
            newHistory.push(
                { type: 'output', text: 'Key Repositories (github.com/SandhanuDulmeth):' },
                { type: 'output', text: '  1. nexus-enroll2.0                   - Microservices Student Enrollment Platform (Docker, CI/CD)' },
                { type: 'output', text: '  2. Inventory_System_Frontend         - Auto Parts Inventory Frontend (React/Vite)' },
                { type: 'output', text: '  3. Inventory_System_BackEnd          - Auto Parts Inventory Backend (Spring Boot)' },
                { type: 'output', text: '  4. gemini-rag-chatbot                - RAG Document Chatbot (Python/Gemini)' },
                { type: 'output', text: '  5. docker-todolist                   - Containerised Docker Demo' },
                { type: 'output', text: '  6. Carrom_game                       - Real-Time Multiplayer Board Game (Node/Socket.io)' },
                { type: 'output', text: '  7. Hospital-Management-System-JAVAFX - Layered Desktop Application' },
            );
        } else if (cmdLower === 'systeminfo' || cmdLower === 'neofetch') {
            newHistory.push(
                { type: 'output', text: 'OS Name:                   Microsoft Windows XP Professional' },
                { type: 'output', text: 'OS Version:                5.1.2600 Service Pack 3' },
                { type: 'output', text: 'System Host:               Sandhanu Dulmeth Mendis' },
                { type: 'output', text: 'Primary Role:              Software Engineering • DevOps • Backend' },
                { type: 'output', text: 'Institution:               University of Colombo School of Computing (UCSC)' },
                { type: 'output', text: 'Degree Program:            BSc in Computer Science (2nd Year)' },
                { type: 'output', text: 'Open To:                   SWE, Backend & DevOps Internships' },
                { type: 'output', text: 'Location:                  Sri Lanka 🇱🇰' },
            );
        } else if (cmdLower === 'contact' || cmdLower === 'email') {
            newHistory.push(
                { type: 'output', text: 'Contact Information:' },
                { type: 'output', text: '  Email:     sandhanudulmeth@gmail.com' },
                { type: 'output', text: '  LinkedIn:  https://linkedin.com/in/sandhanu-mendis-25ab18324' },
                { type: 'output', text: '  GitHub:    https://github.com/SandhanuDulmeth' },
                { type: 'output', text: '  Portfolio: https://sandhanudulmeth.github.io/Sandhanu-Dulmeth-Mendis-portfolio/' },
            );
        } else if (cmdLower === '') {
            // just enter
        } else {
            newHistory.push(
                { type: 'output', text: `'${cmd}' is not recognized as an internal or external command,` },
                { type: 'output', text: 'operable program or batch file. Type "help" for a list of commands.' }
            );
        }

        setHistory(newHistory);
        setInput('');
    };

    return (
        <div
            onClick={() => inputRef.current?.focus()}
            style={{
                backgroundColor: '#000',
                color: '#EEE',
                fontFamily: 'Lucida Console, Courier New, monospace',
                fontSize: 12,
                height: '100%',
                padding: 10,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                cursor: 'text',
                userSelect: 'text'
            }}
        >
            {history.map((line, idx) => (
                <div
                    key={idx}
                    style={{
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.35,
                        color: line.type === 'input' ? '#FFFF88' : '#EEE',
                        marginBottom: 1,
                    }}
                >
                    {line.text}
                </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                <span style={{ color: '#FFFF88', marginRight: 6, whiteSpace: 'nowrap' }}>
                    C:\Documents and Settings\Sandhanu&gt;
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#FFF',
                        fontFamily: 'Lucida Console, Courier New, monospace',
                        fontSize: 12,
                        flex: 1,
                        padding: 0,
                    }}
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default Terminal;
