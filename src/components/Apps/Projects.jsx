import React from 'react';

const Projects = () => {
    const projects = [
        { id: 1, name: 'Hospital System', icon: '🏥', type: 'Java/Spring' },
        { id: 2, name: 'Inventory Tracker', icon: '📦', type: 'React/Node' },
        { id: 3, name: 'Portfolio V1', icon: '📁', type: 'Web' },
        { id: 4, name: 'E-Commerce', icon: '🛒', type: 'Angular' },
    ];

    return (
        <div style={{ padding: 10, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {projects.map((p) => (
                <div key={p.id} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    cursor: 'pointer',
                    padding: 5
                }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8F0FA'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                    <div style={{ fontSize: 40 }}>{p.icon}</div>
                    <div style={{ textAlign: 'center', fontSize: 12, marginTop: 5, fontWeight: 'bold' }}>{p.name}</div>
                    <div style={{ textAlign: 'center', fontSize: 10, color: '#888' }}>{p.type}</div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
