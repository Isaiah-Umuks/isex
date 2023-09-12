import React, {useState} from 'react'
import './styles/Section.css';
import {Link} from 'react-router-dom';
import Modal from './Modal';

const Section = () => {

  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive)
  }

  return (
    <div className='section'>
      <div>
        <h1 className='main-header'>My name is <span>Isaiah Umuk's</span></h1>
        <p className='main-status'>Passionate and Ambitious Full-Stack Web Developer  | HTML5 & CSS3 | ReactJS | NodeJS/ExpressJS | Vanilla JavaScript | Bootstrap | Databases| Git & Github | SEO | Scrum | Trello | WordPress  
          </p>
          <div className="main-btn">
            <Link onClick={showModal} to='/'>See More</Link>
          </div>

        {modalActive && <Modal showModal={showModal} />}

      </div> 
      
    </div>
  )
};

export default Section;