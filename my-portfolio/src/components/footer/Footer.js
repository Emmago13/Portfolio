import React from 'react';
import CodepenImg from '../../assets/images/Codepen.svg';
import LinkedinImg from '../../assets/images/Linkedin.svg';
import GithubImg from '../../assets/images/Github.svg';
import BehanceImg from '../../assets/images/Behance.svg';




const Footer = () => {
    return(
        <footer>
            <p>Emmanuel Gomez 2022 © All rights reserved.</p>
            <div>
                <a href="https://codepen.io/emmago13" target="_blank" rel='noreferrer' title="CodePen"><img src={CodepenImg} alt="CodePen" /></a>
                <a href="https://www.linkedin.com/in/emmanuel-g%C3%B3mez13/" target="_blank" rel='noreferrer' title="Linkedin"><img src={LinkedinImg} alt="Linkedin" /></a>
                <a href="https://github.com/Emmago13" target="_blank" rel='noreferrer' title="Github"><img src={GithubImg} alt="Github" /></a>
                <a href="https://www.behance.net/emmagomez7" target="_blank" rel='noreferrer' title="Behance"><img src={BehanceImg} alt="Behance" /></a>
            </div>
        </footer>
    )
}


export default Footer;