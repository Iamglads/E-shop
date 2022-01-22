import React from 'react';
import Menu from '../Navbar/Menu/Menu'

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='container__footer'>
                <div className='footer__wrappe'>
                    <div className='box-one'>
                        <h2>Eshop</h2>
                        <Menu />
                    </div>
{/*                     <div className='box-two'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rerum unde tempora nihil accusantium. Ab officiis sapiente repellendus non, illum ratione harum, placeat earum dicta voluptas tempora voluptate nihil accusamus?</p>
                        <div>
                            reseau sociaux
                        </div>
                    </div> */}
                    <div className='box-three'>
                        <p>Frontend Mentor Design - By Gladston Aristoverne</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
