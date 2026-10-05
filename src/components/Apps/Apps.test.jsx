import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { OSProvider } from '../../context/OSContext';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Terminal from './Terminal';
import InternetExplorer from './InternetExplorer';

describe('Portfolio Applications Suite', () => {
    it('renders AboutMe and switches tabs cleanly', () => {
        render(
            <OSProvider>
                <AboutMe />
            </OSProvider>
        );

        expect(screen.getByText('Sandhanu Dulmeth Mendis')).toBeInTheDocument();
        expect(screen.getByText(/Software Engineering • DevOps • Backend Development/i)).toBeInTheDocument();

        // Switch to Skills tab
        const skillsTab = screen.getByText('Skills');
        fireEvent.click(skillsTab);
        expect(screen.getByText(/Technical Skills Overview/i)).toBeInTheDocument();
        expect(screen.getByText('Spring Boot')).toBeInTheDocument();
        expect(screen.getByText('Docker')).toBeInTheDocument();

        // Switch to DevOps & Testing tab
        const devopsTab = screen.getByText('DevOps & Testing');
        fireEvent.click(devopsTab);
        expect(screen.getByText(/NexusEnroll CI\/CD Pipeline/i)).toBeInTheDocument();
        expect(screen.getByText(/40 \/ 40 PASSED/i)).toBeInTheDocument();

        // Switch to Interests & CS tab
        const interestsTab = screen.getByText('Interests & CS');
        fireEvent.click(interestsTab);
        expect(screen.getByText(/Computer Science Foundations/i)).toBeInTheDocument();
        expect(screen.getByText(/Data Structures & Algorithms/i)).toBeInTheDocument();
    });

    it('renders Projects and filters by category', () => {
        render(
            <OSProvider>
                <Projects />
            </OSProvider>
        );

        expect(screen.getAllByText(/NexusEnroll — Microservices Platform/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/Auto Parts Inventory System/i)).toBeInTheDocument();

        // Click DevOps filter
        const devopsBtn = screen.getByText('🐳 DevOps & Microservices');
        fireEvent.click(devopsBtn);

        expect(screen.getAllByText(/NexusEnroll — Microservices Platform/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/docker-todolist/i)).toBeInTheDocument();
    });

    it('renders Resume with updated credentials and projects', () => {
        render(
            <OSProvider>
                <Resume />
            </OSProvider>
        );

        expect(screen.getAllByText('Sandhanu Dulmeth Mendis')[0]).toBeInTheDocument();
        expect(screen.getByText(/NexusEnroll — Microservices Student Enrollment Platform/i)).toBeInTheDocument();
        expect(screen.getByText(/BSc in Computer Science/i)).toBeInTheDocument();
        expect(screen.getByText(/University of Colombo/i)).toBeInTheDocument();
    });

    it('renders Command Prompt terminal and runs commands', () => {
        render(
            <OSProvider>
                <Terminal />
            </OSProvider>
        );

        expect(screen.getByText(/Microsoft Windows XP/i)).toBeInTheDocument();

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'nexusenroll' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(screen.getByText(/Architecture Diagram:/i)).toBeInTheDocument();
        expect(screen.getByText(/API Gateway/i)).toBeInTheDocument();

        // Test mvn test command
        fireEvent.change(input, { target: { value: 'mvn test' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(screen.getByText(/40 \/ 40 Tests PASSED/i)).toBeInTheDocument();
    });

    it('renders InternetExplorer with GitHub profile and stats badges', () => {
        render(
            <OSProvider>
                <InternetExplorer />
            </OSProvider>
        );

        expect(screen.getByText('@SandhanuDulmeth')).toBeInTheDocument();
        expect(screen.getByText('nexus-enroll2.0')).toBeInTheDocument();
        expect(screen.getByText(/Pinned Repositories/i)).toBeInTheDocument();
    });
});
