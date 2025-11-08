
import React from 'react';
import './Hero.css';
import { Button } from '../../components/ui/Button';
import { StatsCard } from '../../components/ui/StatsCard';

export const Hero: React.FC = () => {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="section-inner hero-inner">
        <div className="hero-content reveal">
          <p className="hero-kicker">
            AI-powered assistant for language-inclusive education
          </p>
          <h1 id="hero-title" className="hero-title">
            Professional education. Instantly.
          </h1>
          <p className="hero-subtitle">
            Sroknow helps colleges and universities support foreign students by adapting
            lectures and materials into any language — directly inside their own academic
            ecosystem.
          </p>
          <div className="hero-actions">
            <Button as="a" href="#demo" variant="primary">
              Book a demo
            </Button>
            <Button as="a" href="#demo" variant="outline">
              Join pilot program
            </Button>
          </div>
          <p className="hero-trust">
            Trusted by educators and language-diverse communities.
          </p>
          <div className="hero-stats">
            <StatsCard label="Students supported" value="150+" />
            <StatsCard label="Better comprehension" value="85%" />
            <StatsCard label="Student satisfaction" value="92%" />
          </div>
        </div>
        <div className="hero-visual reveal" aria-hidden="true">
          <div className="hero-screen">
            <div className="hero-screen-header">
              <div className="hero-avatar-circle" />
              <div className="hero-meta">
                <div className="hero-meta-title">Applied AI in Healthcare</div>
                <div className="hero-meta-sub">Live lecture • 10:00–11:30</div>
              </div>
              <div className="hero-lang-pill">SLO ➝ ENG</div>
            </div>
            <div className="hero-video-placeholder">
              <div className="hero-lecturer" />
              <div className="hero-slides">
                <div className="hero-slide-line short" />
                <div className="hero-slide-line" />
                <div className="hero-slide-line" />
              </div>
            </div>
            <div className="hero-subtitles">
              <div className="hero-sub hero-sub-main">
                “Machine learning improves diagnostics when trained on verified clinical
                data sets.”
              </div>
              <div className="hero-sub hero-sub-alt">„Strojno učenje izboljša diagnozo …“</div>
              <div className="hero-sub hero-sub-alt">“Машинное обучение улучшает диагностику…”</div>
              <div className="hero-sub hero-sub-alt">“Enseñanza automática mejora el diagnóstico…”</div>
            </div>
            <div className="hero-pills">
              <span>Real-time subtitles</span>
              <span>Contextual Q&amp;A</span>
              <span>Podcasts &amp; quizzes</span>
              <span>Secure on-campus deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
