import React from 'react';

const BootScreen = () => {
    return (
        <div style={{
            backgroundColor: '#000',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{ marginBottom: 50 }}>
                {/* Simple CSS Logo representation */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4
                    }}>
                        <div style={{ width: 30, height: 30, background: '#F25A29' }}></div>
                        <div style={{ width: 30, height: 30, background: '#7FBA00' }}></div>
                        <div style={{ width: 30, height: 30, background: '#00A4EF' }}></div>
                        <div style={{ width: 30, height: 30, background: '#FFB900' }}></div>
                    </div>
                    <h1 style={{ fontSize: 40, margin: 0 }}>Microsoft <span style={{ fontWeight: 'bold' }}>Windows</span> <span style={{ fontSize: 20, verticalAlign: 'super', color: '#FFF' }}>XP</span></h1>
                </div>
            </div>

            {/* Loading Bar */}
            <div style={{
                width: 250,
                height: 15,
                border: '2px solid #555',
                borderRadius: 4,
                padding: 2,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, #2E65C3, #2E65C3, transparent)',
                    backgroundSize: '50% 100%',
                    animation: 'bootLoad 2s linear infinite'
                }}></div>
            </div>

            <style>{`
        @keyframes bootLoad {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
      `}</style>
        </div>
    );
};

export default BootScreen;
