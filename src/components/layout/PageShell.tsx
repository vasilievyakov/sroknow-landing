
import React, { useEffect } from 'react';
import './PageShell.css';

interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('visible');
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-root">
      <header className="page-header">
        <div className="page-header-inner">
          <div className="page-logo">Sroknow</div>
          <nav className="page-nav" aria-label="Primary navigation">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#how-it-works">How it works</a>
            <a href="#security">Security</a>
            <a href="#proof">Pilot</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="page-actions">
            <a className="nav-link" href="#contact">
              Contact founders
            </a>
            <a className="nav-btn" href="#demo">
              Book a demo
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="page-footer">
        <div className="page-footer-inner">
          <div className="footer-brand">
            <div className="page-logo">Sroknow</div>
            <p className="footer-tagline">
              AI-powered assistant for language-inclusive education.
            </p>
          </div>
          <div className="footer-links">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#security">Security</a>
            <a href="#proof">Pilot</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-meta">
            <p>From personal struggle to institutional innovation.</p>
            <p>© {new Date().getFullYear()} Sroknow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
