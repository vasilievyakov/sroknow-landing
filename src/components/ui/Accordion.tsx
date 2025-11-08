
import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <button
        className="accordion-header"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="accordion-body" aria-hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
