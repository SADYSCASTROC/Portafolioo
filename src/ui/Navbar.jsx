import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { FaBars } from 'react-icons/fa';
import fotoImg from '../assets/fotoImg.jpeg'


export const Navbar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {

            path: "/inicio",
            mane: "Inicio",
            icon: <HomeIcon />
        },
        {
            path: "/sobreMi",
            mane: "Sobre Mi",
            icon: <Person />
        },
        {
            path: "/portafolio",
            mane: "Portafolio",
            icon: <WorkIcon />
        },
        {
            path: "/educacion",
            mane: "Educación",
            icon: <CardMembershipIcon />
        },

    ]
    return (
        <div className='containe contNav'>
            <div style={{ width: isOpen ? '100%' : '2px'  }} className='sidebar'>
                <div className="top_section">
                    <Link to='/' onClick={toggle} style={{ display: isOpen ? 'block' : 'none' }} className='logo nav-link'>
                        <img src={fotoImg} alt="" className='fotoImg' />
                        <p className='descripLogo'>Desarrolladora <span> web</span></p>
                    </Link>

                    <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
                        <div className='contButon'>
                        <FaBars onClick={toggle} className='butonMenu' />
                        </div>
                    </div>
                </div>
                <div className='contLinks'>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className='link nav-link' activeclassName="active ">
                                <div className="icon " style={{ display: isOpen ? 'block' : 'none' }}>{item.icon}</div>
                                <div onClick={toggle} style={{ display: isOpen ? 'block' : 'none' }} className="link_text">{item.mane}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <footer className='d-flex justify-content-center align-items-end ' style={{ display: isOpen ? 'block' : 'none' }}>
                    <div  style={{ display: isOpen ? 'block' : 'none' }} className='footrConteIcons' > <a href="https://www.linkedin.com/in/sadys-castro/" target="_blank"><LinkedInIcon /></a> </div>
                    <div  style={{ display: isOpen ? 'block' : 'none' }} className='footrConteIcons'> <a href="https://github.com/SADYSCASTROC" target="_blank"><GitHubIcon /></a></div>
                    <div  style={{ display: isOpen ? 'block' : 'none' }} className='footrConteIcons'> <a href="mailto:sadyscastro@gmail.com" target="_blank"><EmailIcon /></a></div>
                </footer>
            </div>
            <main  className='main'>{children}</main>
        </div>
    )
}
