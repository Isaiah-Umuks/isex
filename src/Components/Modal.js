import React from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import './styles/Modal.css';
import Easyshop from './Easyshop';

const Modal = ({showModal}) => {

  return (
    <div className='modal'>
        
        <div className="close-modal">
            <Close className='cm' onClick={showModal} />
        </div>

        <div className="cart"> <Link to='/'>Fetch from API</Link></div>
        <div className="cart"> <Link to='/'>Easyshop</Link></div>
        <div className="cart"> <Link to='https://www.couragebusinessconsultants.com/?page_id=25'>Blog with CMS</Link></div>
        <div className="cart"> <Link to='https://africatomorrowplus.com/'>CMS Website</Link></div>
        
    </div>
  )
}

export default Modal;