import styled from 'styled-components'
import { BioData } from '../../data/constants';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const FooterContainer = styled.div`
    witdh: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
`;

const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({theme}) => theme.text_primary};
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.primary};
`;

const Nav = styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.text_primary};
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Juan Chilito Logo</Logo>
                <Nav>
                    <NavLink href="#About">Acerca de mi</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experiencia</NavLink>
                    <NavLink href="#Projects">Proyectos</NavLink>
                    <NavLink href="#Educacion">Educación</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={BioData.instagram} target="display">
                        <Instagram />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={BioData.linkedin} target="display">
                        <LinkedIn />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={BioData.github} target="display">
                        <GitHub />
                    </SocialMediaIcon>
                </SocialMediaIcons>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer