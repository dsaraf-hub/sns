'use client';

import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  text = 'Image Placeholder',
  bgColor = 'var(--neutral-light)', // Default to soft peach from new palette
  textColor = 'var(--foreground)', // Default to main foreground color
  className = '',
}) => {
  // Updated random color function to use new palette
  const getRandomColorFromPalette = () => {
    const colors = [
      'var(--primary)',   // Golden Yellow
      'var(--secondary)', // Soft Blue
      'var(--accent)',    // Coral
      'var(--neutral-light)', // Soft Peach
      'var(--neutral-medium)', // Light Green
      '#fec89a', // Light Coral
      '#e0aaff', // Pastel Purple
      '#caffbf', // Pastel Green
      '#9bf6ff', // Pastel Cyan
      '#ffadad'  // Pastel Red/Pink
    ];
    // If a specific bgColor is provided and it's not the default, use it.
    // Otherwise, pick a random one from our new palette.
    return bgColor !== 'var(--neutral-light)' ? bgColor : colors[Math.floor(Math.random() * colors.length)];
  };

  const finalBgColor = getRandomColorFromPalette();

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width: '100%', 
        height: '100%',
        backgroundColor: finalBgColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: 'inherit',
        border: `1px solid ${textColor === 'var(--foreground)' ? 'var(--neutral-dark)' : 'transparent'}` // Subtle border if using default text color
      }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage; 