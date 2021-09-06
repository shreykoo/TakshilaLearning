import React from 'react';

export const Title = ({ children }) => (
    <p className="text-2xl font-bold">{children}</p>
);

export const Subtitle = ({ children }) => (
    <p className="text-xl font-bold">{children}</p>
);

export const Heading = ({ children }) => (
    <p className="text-lg font-bold">{children}</p>
);

export const Subheading = ({ children }) => (
    <p className="text-md font-bold">{children}</p>
);

export const Description = ({ children }) => (
    <p className="text-sm font-bold">{children}</p>
);

export const Paragraph = ({ children }) => (
    <p className="text-xs font-bold">{children}</p>
);

