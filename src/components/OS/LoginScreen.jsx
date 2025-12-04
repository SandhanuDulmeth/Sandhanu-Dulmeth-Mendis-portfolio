import React, { useState } from 'react';
import { useOS } from '../../context/OSContext';

const LoginScreen = () => {
    const { login } = useOS();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = () => {
        setIsLoggingIn(true);
        setTimeout(() => {
            login();
        }, 1500); // Fake loading time
    };

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            background: 'linear-gradient(to bottom, #00309C 0%, #00309C 15%, #5A7EDC 15%, #5A7EDC 85%, #00309C 85%, #00309C 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            {/* Divider */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '15%',
                bottom: '15%',
                width: 2,
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)'
            }}></div>

            <div style={{ display: 'flex', width: '60%', maxWidth: 800, gap: 40 }}>
                {/* Left Side - Logo */}
                <div style={{ flex: 1, textAlign: 'right', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{
                        display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gap: 4, justifyContent: 'end', marginLeft: 'auto', marginBottom: 20
                    }}>
                        <div style={{ width: 40, height: 40, background: '#F25A29', borderRadius: '4px 0 0 0' }}></div>
                        <div style={{ width: 40, height: 40, background: '#7FBA00', borderRadius: '0 4px 0 0' }}></div>
                        <div style={{ width: 40, height: 40, background: '#00A4EF', borderRadius: '0 0 0 4px' }}></div>
                        <div style={{ width: 40, height: 40, background: '#FFB900', borderRadius: '0 0 4px 0' }}></div>
                    </div>
                    <h1 style={{ margin: 0, fontSize: 42, fontWeight: 'normal' }}>Microsoft</h1>
                    <h1 style={{ margin: 0, fontSize: 56, fontWeight: 'bold' }}>Windows <span style={{ fontSize: 24, verticalAlign: 'super' }}>XP</span></h1>
                    <p style={{ opacity: 0.7, marginTop: 10 }}>To begin, click your user name</p>
                </div>

                {/* Right Side - Users */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div
                        onClick={handleLogin}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 15,
                            cursor: 'pointer',
                            opacity: isLoggingIn ? 0.7 : 1,
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <div style={{
                            width: 60,
                            height: 60,
                            background: '#FFD700',
                            border: '2px solid #FFF',
                            borderRadius: 4,
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src="/favicon.png" alt="User Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <div style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Sandhanu Mendis</div>
                            {isLoggingIn ? (
                                <div style={{ color: '#FFF', fontSize: 12 }}>Loading your personal settings...</div>
                            ) : (
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Type your password</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Shutdown Button */}
            <div style={{
                position: 'absolute',
                bottom: '5%',
                left: '5%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: '#FFF',
                cursor: 'pointer'
            }}>
                <div style={{ width: 30, height: 30, background: '#D64B29', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FFF' }}>
                    ⏻
                </div>
                <span>Turn off computer</span>
            </div>
        </div>
    );
};

export default LoginScreen;
