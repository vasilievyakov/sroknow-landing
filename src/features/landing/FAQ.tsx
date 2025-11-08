
import React from 'react';
import './FAQ.css';
import { AccordionItem } from '../../components/ui/Accordion';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="section-inner faq-inner reveal">
        <h2 id="faq-title" className="section-title">
          Frequently asked questions.
        </h2>
        <p className="section-subtitle">
          Clear answers for academic leaders, IT teams, and program coordinators.
        </p>
        <div className="faq-grid">
          <div className="faq-main">
            <AccordionItem
              question="Can Sroknow integrate with our LMS?"
              answer="Yes. Sroknow connects via API or can be deployed inside your environment to integrate with existing LMS and video systems, without forcing new tools on lecturers or students."
              defaultOpen
            />
            <AccordionItem
              question="Is data stored securely?"
              answer="Yes. Course materials, recordings, and Q&A logs remain inside your institution's controlled infrastructure or a dedicated private environment. They are never used to train public models."
            />
            <AccordionItem
              question="Do you support smaller or rare languages?"
              answer="Yes. Sroknow is designed specifically to cover languages that generic tools often ignore. During onboarding we map your language needs and configure translation accordingly."
            />
            <AccordionItem
              question="How fast is setup?"
              answer="Pilot deployment takes days, not months. Once connected, new lectures and materials are processed within minutes after upload."
            />
            <AccordionItem
              question="How complex is it for students?"
              answer="Students access Sroknow through the interfaces they already use. There is no need to learn prompts or master AI — they simply choose their language and preferred format."
            />
          </div>
          <div className="faq-side">
            <div className="faq-note">
              Prefer to talk it through?
              <br />
              Reach the founders at <span>founders@sroknow.com</span>
            </div>
            <div className="faq-mini">
              Ideal for:
              <ul>
                <li>Universities with growing international cohorts</li>
                <li>Professional schools and colleges</li>
                <li>Specialized programs taught in local languages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
