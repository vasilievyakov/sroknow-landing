
import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="section how-it-works"
      aria-labelledby="how-title"
    >
      <div className="section-inner how-inner reveal">
        <h2 id="how-title" className="section-title">
          How Sroknow fits into your institution.
        </h2>
        <p className="section-subtitle">
          From first pilot to full deployment, Sroknow is designed to be light for your
          IT team and natural for your students.
        </p>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-index">1</div>
            <div className="how-body">
              <h3>Upload or connect materials</h3>
              <p>
                Connect recordings, slides, and notes from your LMS or video platform, or
                upload them directly. No content redesign needed.
              </p>
            </div>
          </div>
          <div className="how-step">
            <div className="how-index">2</div>
            <div className="how-body">
              <h3>AI adapts within minutes</h3>
              <p>
                Transcription, translation, Q&amp;A, summaries, and audio content are
                generated automatically — using only your academic sources.
              </p>
            </div>
          </div>
          <div className="how-step">
            <div className="how-index">3</div>
            <div className="how-body">
              <h3>Students learn in their language</h3>
              <p>
                Students watch, listen, and ask questions in a format and language that
                works for them — while you maintain full control of quality and privacy.
              </p>
            </div>
          </div>
        </div>
        <p className="how-note">
          Works across formats: live sessions, recorded lectures, practical courses, and
          professional programs.
        </p>
      </div>
    </section>
  );
};
