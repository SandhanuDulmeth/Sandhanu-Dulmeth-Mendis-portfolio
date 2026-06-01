import React, { useState } from 'react';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [sent, setSent] = useState(false);

    const email = 'sandhanudulmeth@gmail.com';

    const handleSend = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            fontFamily: 'Tahoma, sans-serif',
            backgroundColor: '#ECE9D8',
        }}>
            {/* Outlook Express Toolbar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
                backgroundColor: '#ECE9D8',
                borderBottom: '1px solid #ACA899',
                gap: 4,
            }}>
                <ToolbarBtn icon="📤" label="Send" onClick={handleSend} primary />
                <ToolbarBtn icon="✂️" label="Cut" />
                <ToolbarBtn icon="📋" label="Copy" />
                <ToolbarBtn icon="📌" label="Paste" />
                <div style={{ width: 1, height: 20, backgroundColor: '#ACA899', margin: '0 4px' }} />
                <ToolbarBtn icon="📎" label="Attach" />
                <ToolbarBtn icon="🔤" label="Spelling" />
            </div>

            {/* Email Header Fields */}
            <div style={{
                padding: '4px 0',
                backgroundColor: '#FFF',
                borderBottom: '1px solid #ACA899',
            }}>
                <EmailField label="To:" value={email} readOnly />
                <EmailField label="Cc:" value="" readOnly />
                <EmailField
                    label="Subject:"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Type your subject here..."
                />
            </div>

            {/* Body */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your message here..."
                    style={{
                        flex: 1,
                        padding: 10,
                        border: 'none',
                        outline: 'none',
                        resize: 'none',
                        fontFamily: 'Tahoma, sans-serif',
                        fontSize: 12,
                        lineHeight: 1.5,
                        backgroundColor: '#FFF',
                    }}
                />
            </div>

            {/* Contact Info Bar */}
            <div style={{
                padding: '8px 12px',
                backgroundColor: '#ECE9D8',
                borderTop: '1px solid #ACA899',
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
            }}>
                <span style={{ fontWeight: 'bold', color: '#003399' }}>📇 Contact Info:</span>
                <a href="mailto:sandhanudulmeth@gmail.com" style={linkStyle}>
                    📧 sandhanudulmeth@gmail.com
                </a>
                <a href="https://linkedin.com/in/sandhanu-mendis-25ab18324" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    💼 LinkedIn
                </a>
                <a href="https://github.com/SandhanuDulmeth" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    🐙 GitHub
                </a>
                <a href="https://sandhanudulmeth.github.io/Sandhanu-Dulmeth-Mendis-portfolio/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    🌐 Portfolio
                </a>
            </div>

            {/* Success Toast */}
            {sent && (
                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    right: 10,
                    padding: '8px 16px',
                    backgroundColor: '#DFF0D8',
                    border: '1px solid #3C763D',
                    borderRadius: 3,
                    fontSize: 11,
                    color: '#3C763D',
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
                }}>
                    ✅ Your default email client should have opened!
                </div>
            )}
        </div>
    );
};

const EmailField = ({ label, value, onChange, readOnly, placeholder }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px 8px',
        gap: 6,
        borderBottom: '1px solid #F0F0F0',
    }}>
        <span style={{
            fontSize: 11,
            fontWeight: 'bold',
            color: '#555',
            minWidth: 55,
        }}>
            {label}
        </span>
        <input
            type="text"
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            placeholder={placeholder}
            style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 12,
                fontFamily: 'Tahoma, sans-serif',
                padding: '3px 4px',
                backgroundColor: readOnly ? '#F5F5F5' : '#FFF',
                color: readOnly ? '#003399' : '#000',
            }}
        />
    </div>
);

const ToolbarBtn = ({ icon, label, onClick, primary }) => (
    <div
        onClick={onClick}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2px 8px',
            cursor: 'pointer',
            fontSize: 10,
            borderRadius: 3,
            border: '1px solid transparent',
            minWidth: 42,
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.border = '1px solid #ACA899';
            e.currentTarget.style.backgroundColor = '#F8F7F4';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.border = '1px solid transparent';
            e.currentTarget.style.backgroundColor = 'transparent';
        }}
    >
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontWeight: primary ? 'bold' : 'normal' }}>{label}</span>
    </div>
);

const linkStyle = {
    color: '#003399',
    textDecoration: 'none',
    cursor: 'pointer',
};

export default Contact;
