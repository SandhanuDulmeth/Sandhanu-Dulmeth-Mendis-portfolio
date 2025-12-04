import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OSProvider, useOS } from '../../context/OSContext';
import React from 'react';

// Helper component to consume context for testing
const TestComponent = () => {
    const { openWindow, windows, closeWindow } = useOS();
    return (
        <div>
            <button onClick={() => openWindow('test-window', 'Test Window', () => <div>Content</div>)}>Open Window</button>
            <div data-testid="window-count">{windows.length}</div>
            {windows.map(w => (
                <div key={w.id} data-testid={`window-${w.id}`}>
                    {w.title}
                    <button onClick={() => closeWindow(w.id)}>Close</button>
                </div>
            ))}
        </div>
    );
};

describe('OS Context and Window Manager', () => {
    it('should open a window when requested', () => {
        render(
            <OSProvider>
                <TestComponent />
            </OSProvider>
        );

        const openBtn = screen.getByText('Open Window');
        fireEvent.click(openBtn);

        expect(screen.getByTestId('window-count')).toHaveTextContent('1');
        expect(screen.getByText('Test Window')).toBeInTheDocument();
    });

    it('should close a window when requested', () => {
        render(
            <OSProvider>
                <TestComponent />
            </OSProvider>
        );

        const openBtn = screen.getByText('Open Window');
        fireEvent.click(openBtn);

        const closeBtn = screen.getByText('Close');
        fireEvent.click(closeBtn);

        expect(screen.getByTestId('window-count')).toHaveTextContent('0');
    });
});
