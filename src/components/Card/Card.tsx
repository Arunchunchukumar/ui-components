import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  shadow?: boolean;
  style?: React.CSSProperties;
}

interface CardSubComponents {
  Header: React.FC<{ children: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
}

const CardComponent: React.FC<CardProps> = ({ children, padding = '0', shadow = true, style }) => (
  <div
    style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      boxShadow: shadow ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      overflow: 'hidden',
      padding,
      ...style,
    }}
  >
    {children}
  </div>
);

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: '16px 20px', borderBottom: '1px solid #e5e7eb', fontWeight: 600, fontSize: '16px' }}>
    {children}
  </div>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: '20px' }}>{children}</div>
);

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: '16px 20px', borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
    {children}
  </div>
);

export const Card = Object.assign(CardComponent, { Header, Body, Footer }) as React.FC<CardProps> & CardSubComponents;
