
import React from 'react';
import './Solution.css';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="section solution" aria-labelledby="solution-title">
      <div className="section-inner solution-inner">
        <div className="solution-header reveal">
          <h2 id="solution-title" className="section-title">
            AI turns any lecture into a personal learning space.
          </h2>
          <p className="section-subtitle">
            Sroknow lets institutions instantly repackage their own verified materials
            into accessible formats for every student — without extra workload for
            lecturers or complex tools for students.
          </p>
        </div>
        <div className="solution-grid">
          <div className="solution-card reveal">
            <h3>Real-time subtitles</h3>
            <p>
              Live subtitles in almost any language, including smaller ones often ignored
              by mainstream tools — available directly in your existing platforms.
            </p>
          </div>
          <div className="solution-card reveal">
            <h3>Contextual Q&amp;A</h3>
            <p>
              Students ask questions in their language and receive sourced answers based
              strictly on your course content, keeping academic quality under control.
            </p>
          </div>
          <div className="solution-card reveal">
            <h3>Podcasts, summaries, quizzes</h3>
            <p>
              Auto-generated audio summaries, topic-based podcasts, and quizzes help
              students review and prepare at their own pace.
            </p>
          </div>
          <div className="solution-card reveal">
            <h3>Inside your ecosystem</h3>
            <p>
              All workflows run within your infrastructure or via secure APIs. No need to
              learn prompts or new software — students simply study as usual.
            </p>
          </div>
        </div>
        <p className="solution-tagline reveal">
          No prompt engineering. No app chaos. Just natural, inclusive learning.
        </p>
      </div>
    </section>
  );
};
