
import React from 'react';
import './WhyNow.css';

export const WhyNow: React.FC = () => {
  return (
    <section id="why-now" className="section whynow" aria-labelledby="whynow-title">
      <div className="section-inner whynow-inner reveal">
        <h2 id="whynow-title" className="section-title">
          The world is ready for language-inclusive education.
        </h2>
        <p className="section-subtitle">
          Sroknow stands at the intersection of student mobility, accessibility, and
          mature AI infrastructure — making inclusion practical, not aspirational.
        </p>
      </div>
      <div className="section-inner whynow-points reveal">
        <div className="whynow-point">
          <h3>Global student mobility</h3>
          <p>
            More students cross borders every year. Institutions must support diverse
            languages without diluting academic quality.
          </p>
        </div>
        <div className="whynow-point">
          <h3>Inclusion mandates</h3>
          <p>
            Governments and accreditation bodies now expect accessible learning for all
            students — from day one, not after they master the local language.
          </p>
        </div>
        <div className="whynow-point">
          <h3>AI that respects institutions</h3>
          <p>
            Modern AI can translate and structure content precisely and economically,
            while keeping ownership and verification in the hands of educators.
          </p>
        </div>
      </div>
    </section>
  );
};
