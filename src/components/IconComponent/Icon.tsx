import React from 'react';
import { Link } from 'react-router-dom';
import IconCss from './Icon.module.css';

interface Props {
  image: string;
  link: string;
  name: string;
  className?: any;
}

const Icon: React.FC<Props> = ({ image, name, link, className }) => {
  return (
    <Link to={link} className={IconCss.body + ' ' + className}>
      <div className={IconCss.imageContainer}>
        <Link to={link}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <Link to={link}>{name}</Link>
    </Link>
  );
};

export default Icon;
