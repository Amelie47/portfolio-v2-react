import React from 'react';
import Menu from './components/structure/Menu';
import Social from './components/structure/Social';
import Home from './components/structure/Home';
import Picture from './components/structure/Picture';
import Projets from './components/structure/Projets';
import Formations from './components/structure/Formations';
import Whoami from './components/structure/Whoami';
import Contact from './components/structure/Contact';
import Footer from './components/structure/Footer';
import Langues from './components/structure/Langues';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
	     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
	     <meta name="HandheldFriendly" content="true"></meta>
       <Langues></Langues>
      <Menu></Menu>
      <Social></Social>
      <Home></Home>
      <Picture name="mountain" h="70"></Picture>
      <Projets></Projets>
      <Picture name="paper-triangles" h="20" pos="center"></Picture>
      <Formations></Formations>
      {/* TODO : ajouter citation sympa dans l'image papier hehe */}
      <Picture name="paper-square" h="45" pos="center"></Picture>
      <Whoami></Whoami>
      <Picture name="wall" h="20"></Picture>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
