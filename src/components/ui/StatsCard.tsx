
import React from 'react';
import './StatsCard.css';

interface StatsCardProps {
  label: string;
  value: string;
  detail?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, detail }) => {
  return (
    <div className="stats-card reveal">
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
      {detail && <div className="stats-detail">{detail}</div>}
    </div>
  );
};
