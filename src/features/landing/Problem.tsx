
import React from 'react';
import './Problem.css';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="section problem" aria-labelledby="problem-title">
      <div className="section-inner problem-inner reveal">
        <h2 id="problem-title" className="section-title">
          Understanding lectures should not depend on your language skills.
        </h2>
        <p className="section-subtitle">
          Every year, thousands of international students lose months simply trying to
          understand lectures in a new language — instead of learning the subject they
          came for.
        </p>
        <div className="problem-layout">
          <div className="problem-copy">
            <ul>
              <li>
                Slides, lectures, and assignments arrive in the local language. Students
                juggle screenshots, mobile translators, and classmates’ notes.
              </li>
              <li>
                Generic tools — Google Translate, Zoom subtitles — often miss academic
                context and ignore smaller languages.
              </li>
              <li>
                AI chat summaries lack references to verified course materials and cannot
                be centrally controlled by the institution.
              </li>
            </ul>
            <p className="problem-impact">
              The impact: lost focus, lower performance, and frustration — for students
              and staff.
            </p>
          </div>
          <div className="problem-visual" aria-hidden="true">
            <div className="problem-card problem-card-chaos">
              <div className="problem-label">Today</div>
              <p>Tabs, screenshots, parallel translators, missed context, guesswork.</p>
            </div>
            <div className="problem-card problem-card-calm">
              <div className="problem-label">With Sroknow</div>
              <p>
                One trusted space where every lecture is understandable, interactive, and
                aligned with your institution’s standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
