import React from 'react';
import Menu from './components/js/Menu';
import Social from './components/js/Social';
import Home from './components/js/Home';
import Picture from './components/js/Picture';
import Projets from './components/js/Projets';
import Formations from './components/js/Formations';
import Whoami from './components/js/Whoami';
import Contact from './components/js/Contact';
import Footer from './components/js/Footer';

function App() {
  return (
    <div className="App">
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
