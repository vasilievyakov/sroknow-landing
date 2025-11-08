
import React from 'react';
import './FinalCTA.css';
import { Button } from '../../components/ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section id="demo" className="section final-cta" aria-labelledby="cta-title">
      <div className="section-inner final-cta-inner reveal">
        <h2 id="cta-title" className="cta-title">
          Join the future of inclusive education.
        </h2>
        <p className="cta-subtitle">
          See how Sroknow can help your institution support every student from day one —
          with a secure, academically grounded AI assistant that works in your ecosystem.
        </p>
        <div className="cta-grid">
          <div className="cta-form">
            <form
              className="cta-form-body"
              onSubmit={e => {
                e.preventDefault();
                alert(
                  'Thank you. A Sroknow founder will contact you to schedule a demo.'
                );
              }}
            >
              <div className="cta-field">
                <label htmlFor="institution">Institution name</label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder="e.g., Kamnik Higher School"
                  required
                />
              </div>
              <div className="cta-row">
                <div className="cta-field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="cta-field">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@institution.edu"
                    required
                  />
                </div>
              </div>
              <div className="cta-field">
                <label htmlFor="students">
                  Number of foreign students you support annually
                </label>
                <input
                  id="students"
                  name="students"
                  type="number"
                  min={1}
                  placeholder="Approximate number"
                />
              </div>
              <div className="cta-field">
                <label htmlFor="message">What challenge should Sroknow solve first?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Short context helps us prepare a relevant walkthrough."
                />
              </div>
              <div className="cta-actions">
                <Button type="submit" variant="primary">
                  Book a demo
                </Button>
                <Button as="a" href="#contact" variant="ghost">
                  Contact founders
                </Button>
              </div>
              <p className="cta-note">
                We respond within 2 business days. No spam, no public case study without
                your consent.
              </p>
            </form>
          </div>
          <div id="contact" className="cta-side">
            <div className="cta-pill">From personal struggle to scalable inclusion</div>
            <p>
              Sroknow was born from the lived experience of studying in a foreign country
              with zero local language. Everything we build is grounded in what real
              students and educators need — not in abstract AI hype.
            </p>
            <div className="cta-contact">
              <h3>Talk directly to the founders</h3>
              <p>
                Discuss pilot options, integration models, and data policies in a concise
                25-minute call.
              </p>
              <ul>
                <li>Tailored pilot for 1–2 programs or departments</li>
                <li>Secure deployment options (on-prem / private cloud)</li>
                <li>Measurement plan for comprehension and satisfaction</li>
              </ul>
              <p className="cta-email">
                Reach us at: <span>founders@sroknow.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
