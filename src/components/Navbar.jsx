import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
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

const NavLogo = styled(LinkR)`
    padding: 0 6px;
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
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 0 20px;
    font-size: 16px;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLogo to="/">ChilitoLogo</NavLogo>

            <NavItems>
                <NavLink href="#About">Acerca de mi</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experiencia</NavLink>
                <NavLink href="#projects">Proyectos</NavLink>
                <NavLink href="#Education">Educación</NavLink>
            </NavItems>

            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
        </NavbarContainer>
    )
}

export default Navbar;