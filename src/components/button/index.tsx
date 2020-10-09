import React, { ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div className="buttonMain">
            <button>{props.title}</button>
        </div>
    );
}

export default Button;