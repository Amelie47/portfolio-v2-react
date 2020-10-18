import React from 'react';
import Langues from '../structure/Langues';
import Logo from '../structure/Logo';
import Social from '../structure/Social';
import Button from '../structure/Button';
import ProjectTitle from '../structure/ProjectStructure/Project_Title';
import SectionResume from '../structure/ProjectStructure/Project_Section_Resume';
import SectionScreens from '../structure/ProjectStructure/Project_Section_Screens';
import SectionDetails from '../structure/ProjectStructure/Project_Section_Details';

import '../scss/ProjectStyles/project.scss';

import getDatas from '../js/Datas';
import onLoad from '../js/Onload';

import { useParams, Link } from 'react-router-dom';
import { toTop, toInitialPos, removeScrollPosition } from '../js/Scroll';

function Project() {
  onLoad();

  // Objet
  let { id } = useParams();
  const project = getDatas().projects.find((element) => element.id === id);

  toTop();

  function back() {
    toInitialPos();
    removeScrollPosition();
  }

  // Couleurs
  // const primaryStyle = { backgroundColor: project.couleurs.primaire };
  // const secondaryStyle = { backgroundColor: project.couleurs.secondaire };
  // const thirdStyle = { backgroundColor: project.couleurs.tertiaire };

  return (
    <div className='Project'>
      <Langues></Langues>
      <Logo></Logo>
      <Social></Social>

      <h1>{project.name}</h1>
      <Link to={`/`} onClick={back}>
        <Button rotate='gauche' shadow='true'></Button>
      </Link>

      <ProjectTitle project={project}></ProjectTitle>
      <SectionResume resume={project.content.resume}></SectionResume>
      <SectionScreens
        imageCode={project.images.code}
        projectScreenSection={project.images.screens.firstScreenSection}
      ></SectionScreens>
      <SectionDetails details={project.content.details}></SectionDetails>
    </div>
  );
}

export default Project;
