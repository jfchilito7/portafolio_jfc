import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { BioData } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { useState, useMemo } from "react";
import Logo from '../images/JFC.png';


const Nav = styled.div `
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    color: white;
`;


const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const GithubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    list-style: none;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light};
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    z-index: 999;
`;

const GithubButtonComponent = () => (
    <GithubButton href={BioData.github} target='_blank'>
        Github Perfil
    </GithubButton>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const mobileMenu = useMemo(
        () => (
            <MobileMenu isOpen={isOpen}>
                {['Sobre mi', 'Habilidades', 'Experiencia', 'Proyectos', 'Educación'].map((item) => (
                    <NavLink key={item} onClick={() => setIsOpen(false)} href={`#${item}`}>
                        {item}
                    </NavLink>
))}
                <GithubButtonComponent />
            </MobileMenu>
        ),
        [isOpen]
    )
    
    return (
        <Nav role="navigation">
            <NavbarContainer>
            <NavLogo to="/">
                <img src={Logo} alt="Logo" loading="lazy" style={{ width: "120px", height: "45px" }} />
            </NavLogo>

            <MobileIcon onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
                <MenuRounded />
            </MobileIcon>

            <NavItems>
                {['Sobre mi', 'Habilidades', 'Experiencia', 'Proyectos', 'Educación'].map((item) => (
                    <NavLink key={item} onClick={() => setIsOpen(false)} href={`#${item}`}>
                        {item}
                    </NavLink>
))}
            </NavItems>

            {isOpen && mobileMenu} 
            <ButtonContainer>
                <GithubButtonComponent />
            </ButtonContainer>
        </NavbarContainer>
        </Nav>
        
    )
}

export default Navbar;