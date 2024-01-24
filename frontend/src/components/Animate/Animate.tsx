import { useState } from "react";
import styles from './Animate.module.css'

export const Animate = <P extends object>(animation: 'tada' | 'wobble') => (
    BaseComponent: React.ComponentType<P>) => (props: P)=> {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className={isHovered ? styles[`${animation}Animation`] : ''}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <BaseComponent {...props} />
            </div>
        );
    }
