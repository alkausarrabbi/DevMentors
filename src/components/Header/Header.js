import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { useSpring, animated } from 'react-spring'


const Header = () => {
    const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 500,
    // config: config.molasses,
    onRest: () => set(!flip),
  })
    return (
        <div className="header bg-dark ">
             <img className="logo" src={logo} alt="" />
             <animated.h3 className="font-monospace fst-italic fs-1" style={props}>Welcome to Dev Mentors'</animated.h3>
        </div>
    );
};

export default Header;