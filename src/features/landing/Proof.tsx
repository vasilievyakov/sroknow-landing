
import React from 'react';
import './Proof.css';
import { StatsCard } from '../../components/ui/StatsCard';

export const Proof: React.FC = () => {
  return (
    <section id="proof" className="section proof" aria-labelledby="proof-title">
      <div className="section-inner proof-inner reveal">
        <h2 id="proof-title" className="section-title">
          Tested in real classrooms.
        </h2>
        <p className="section-subtitle">
          Sroknow started as a personal solution to studying in Slovenia with zero local
          language — and is now piloted with Kamnik Higher School to support real
          students in multiple languages.
        </p>
        <div className="proof-grid">
          <div className="proof-left">
            <div className="proof-badge">Pilot program</div>
            <p className="proof-text">
              At Kamnik Higher School in Slovenia, foreign students use subtitles,
              contextual Q&amp;A, and audio summaries across 5 languages to follow
              lectures from day one.
            </p>
            <blockquote className="proof-quote">
              “For the first time, our foreign students follow every lecture.”
              <span>Dean, Kamnik Higher School</span>
            </blockquote>
          </div>
          <div className="proof-stats">
            <StatsCard label="Students supported" value="150+" />
            <StatsCard label="Improved comprehension" value="85%" />
            <StatsCard label="Student satisfaction" value="92%" />
          </div>
        </div>
      </div>
    </section>
  );
};
