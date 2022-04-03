import React from "react";
import './About.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
    return (
        <div className="fondo-about fondo-duplicado">
            <div className="contenedor-about contenedor-duplicado">
                <div>
                    <h3 className="title-about">Application created by <br />
                        <p className="nombre-about">Ramiro Diaz</p>             
                    </h3>
                    <div className="parrafos-about">
                        <div className="link-about">
                            <a
                            href="https://www.linkedin.com/in/ramiro-diaz-bravo-web-full-stack-developer/"
                            target="_blank"
                            rel="noopener noreferrer">
                                <AiFillLinkedin className="logo-about"/>
                                <p className="texto-about">My Linkedin</p>
                            </a>
                        </div>
                        <div className="link-about">
                            <a
                            href="https://github.com/RamiroDiaz22"
                            target="_blank"
                            rel="noopener noreferrer">
                            <AiFillGithub className="logo-about"/>
                                <p className="texto-about">My Github</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}