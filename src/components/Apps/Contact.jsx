import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: 20, fontFamily: 'Tahoma, sans-serif' }}>
            <h3>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
                <div>
                    <label style={{ display: 'block', marginBottom: 5, fontSize: 12 }}>Name:</label>
                    <input type="text" style={{ width: '100%', padding: 5, border: '1px solid #7F9DB9' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: 5, fontSize: 12 }}>Email:</label>
                    <input type="email" style={{ width: '100%', padding: 5, border: '1px solid #7F9DB9' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: 5, fontSize: 12 }}>Message:</label>
                    <textarea rows={5} style={{ width: '100%', padding: 5, border: '1px solid #7F9DB9', fontFamily: 'sans-serif' }}></textarea>
                </div>
                <button style={{
                    padding: '5px 20px',
                    alignSelf: 'flex-start',
                    background: '#ECE9D8',
                    border: '1px solid #003C74',
                    borderRadius: 3,
                    cursor: 'pointer'
                }}>Send</button>
            </div>
        </div>
    );
};

export default Contact;
