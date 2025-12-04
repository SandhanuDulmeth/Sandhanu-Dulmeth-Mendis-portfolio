import React from 'react';

const InternetExplorer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'Tahoma, sans-serif' }}>
            {/* Address Bar */}
            <div style={{ padding: 5, borderBottom: '1px solid #999', backgroundColor: '#ECE9D8', display: 'flex', gap: 5, alignItems: 'center' }}>
                <span style={{ fontSize: 20, color: '#999' }}>⬅️ ➡️</span>
                <div style={{ flex: 1, backgroundColor: '#FFF', border: '1px solid #7F9DB9', padding: '2px 5px', fontSize: 12 }}>http://www.google.com</div>
                <button style={{ padding: '0 10px' }}>Go</button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>
                <h2 style={{ fontFamily: 'Times New Roman', color: '#000' }}>The page cannot be displayed</h2>
                <p style={{ fontSize: 12 }}>The page you are looking for is currently unavailable. The Web site might be experiencing technical difficulties, or you may need to adjust your browser settings.</p>
                <hr />
                <p style={{ fontSize: 12, color: '#666' }}>Cannot find server or DNS Error<br />Internet Explorer</p>
            </div>
        </div>
    );
};

export default InternetExplorer;
