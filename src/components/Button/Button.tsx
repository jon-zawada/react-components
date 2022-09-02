import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  size: string;
}

const Button = (props: ButtonProps) => {
  return <button className={props.size}>{props.label}</button>;
};

export default Button;