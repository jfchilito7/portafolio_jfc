import styled from 'styled-components'
import { BioData } from '../../data/constants';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import LogoImg from '../../images/JFC.png';

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: relative;
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

const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({theme}) => theme.text_secondary};
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>
                    <img src={LogoImg} alt="Logo" style={{ width:"120px", height: "45px" }} />
                </Logo>
                <SocialMediaIcons>
                    <SocialMediaIcon href={BioData.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram aria-label='Instagram' />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={BioData.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn aria-label='LinkedIn' />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={BioData.github} target="_blank" rel="noopener noreferrer">
                        <GitHub aria-label='Github' />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2025 Juan Felipe Chilito. All rights reserved </Copyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer