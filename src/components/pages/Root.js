import React from 'react';
import Menu from '../structure/Menu';
import Social from '../structure/Social';
import Home from '../structure/Home';
import Picture from '../structure/Picture';
import Projets from '../structure/Projets';
import Formations from '../structure/Formations';
import Whoami from '../structure/Whoami';
import Contact from '../structure/Contact';
import Footer from '../structure/Footer';
import Langues from '../structure/Langues';
import Logo from '../structure/Logo';


function Root() {
    return (
        <div className="Root">

            <Langues></Langues>
            <Logo></Logo>
            <Menu></Menu>
            <Social></Social>
            <Home></Home>
            <Picture name="mountain" h="50"></Picture>

            <Projets titleid="0"></Projets>
            <Picture name="paper-triangles" h="20" pos="center"></Picture>

            <Formations titleid="1"></Formations>
            <Picture name="paper-square" h="20" pos="center"></Picture>

            <Whoami titleid="2"></Whoami>
            <Picture name="wall" h="20"></Picture>

            <Contact titleid="3"></Contact>

            <Footer></Footer>
        </div>
    );
}

export default Root;