import React from 'react';

interface Props {
  bgcolor: string;
  completed: string;
}
const ProgressBar = ({ bgcolor, completed }: Props) => {
  const containerStyles = {
    backgroundColor: '#e0e0de',
    height: 20,
    marginBottom: '1rem',
    width: '100%',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right' as const,
    transition: 'width 1s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
