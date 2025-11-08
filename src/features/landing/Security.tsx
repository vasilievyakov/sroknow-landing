
import React from 'react';
import './Security.css';

export const Security: React.FC = () => {
  return (
    <section
      id="security"
      className="section security"
      aria-labelledby="security-title"
    >
      <div className="section-inner security-inner reveal">
        <h2 id="security-title" className="section-title">
          Academic data stays where it belongs.
        </h2>
        <p className="section-subtitle">
          Sroknow is built for institutions that treat academic integrity and privacy as
          non-negotiable. Your materials never become training data for public models.
        </p>
        <div className="security-grid">
          <div className="security-card">
            <h3>On-campus or private cloud</h3>
            <p>
              Deploy Sroknow within your own infrastructure or a dedicated environment so
              materials, Q&amp;A logs, and recordings never leave your control.
            </p>
          </div>
          <div className="security-card">
            <h3>Verified knowledge base</h3>
            <p>
              Only institution-approved content powers the assistant. Every answer can be
              traced back to original lectures and documents.
            </p>
          </div>
          <div className="security-card">
            <h3>Secure integrations</h3>
            <p>
              Integrate with your LMS or video tools through controlled APIs. Role-based
              access ensures the right students see the right content.
            </p>
          </div>
        </div>
        <p className="security-note">
          Designed to align with EU privacy requirements and institutional security
          standards.
        </p>
      </div>
    </section>
  );
};
