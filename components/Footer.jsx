import React from 'react';
import Link from 'next/link';
const uamLogo = '/assets/images/png/uam-logo.png';
const instaLogo = '/assets/images/png/insta-logo.png';
const tiktokLogo = '/assets/images/png/tiktok-logo.png';
const youtubeLogo = '/assets/images/png/youtube-logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer__container'>
            <div className='footer__container__logo'>
                <img 
                className='footer__logo'
                src={uamLogo}
                alt='uam-logo' 
                />
            </div>
            <div className='footer__container__social'>
                <h4 className='footer__social__title'>Síguenos en</h4>
                <ul className='social__links'>
                    <li>
                        <Link href='#'>
                            <img 
                            className='footer__social__icon'
                            src={instaLogo} 
                            alt='instagram'
                            width={500}
                            height={500}
                                />
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <img 
                            className='footer__social__icon'
                            src={tiktokLogo}
                            alt='tiktok'
                            width={500}
                            height={500}
                                />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <p className='footer__text'>© 2023 Universidad Autónoma de Manizales. Todos los derechos reservados.</p>
    </footer>
  )
}
