import React from 'react';
import './SpinningAvatar.css';

interface SpinningAvatarProps {  
  size?: number;
}

const SpinningAvatar: React.FC<SpinningAvatarProps> = ({ size = 100 }) => {
  return <div className="spinning-avatar" style={{ '--avatar-size': `${size}px` } as React.CSSProperties}></div>;
};

export default SpinningAvatar;
