import styled from 'styled-components'
import { BioData } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImage from '../../images/IMG_3458.PNG';
import HeroBgAnimation from '../HeroBgAnimation'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { headContainerAnimation, headContentAnimation, headTextAnimation } from '../../utils/motion';
import StarsCanvas from '../canvas/Stars';

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px) {
        padding: 32px 16px;
        clip-path: none; /* Desactivar en móviles */
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;

    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: center;
    }

    @media screen and (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;

    @media screen and (max-width: 960px) {
        order: 1;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div `
    font-weight: 700;
    font-size: 50px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
        text-align: center;
    }
`;

const TextLoop = styled.div `
    font-weight: 600;
    font-size: 32px;
    display: flex;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    gap: 12px;

    @media screen and (max-width: 960px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
        text-align: center;
    }
`;

const Span = styled.div `
    cursor: pointer;
    color: ${({theme}) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({theme}) => theme.text_primary + 95};

    @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 32px;
        text-align: center;
    }
`;

const ResumeButton = styled.a `
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    margin-top: 42px;
    background: linear-gradient(225deg, hsla(204, 100%, 50%, 1) 0%, hsla(204, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
    color: white;
    border: 2px solid ${({ theme }) => theme.primary};

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634;
        filter: brightness(1);
    }

    @media screen and (max-width: 960px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

const Img = styled.img `
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;

    @media screen and (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

const HeroBg = styled.div `
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const Hero = () => {
    return (
        <div id='Sobre mi'>
            <HeroContainer>
                <HeroBg>
                    <StarsCanvas />
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hola! Soy <br /> {BioData.name}
                                </Title>
                                <TextLoop>
                                Yo soy
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: BioData.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    /> 
                                </Span>
                                </TextLoop>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>{BioData.description}</SubTitle>
                            </motion.div>
                            
                            <ResumeButton href={BioData.resume} target='_blank' rel='noopener noreferrer'>Descargar CV</ResumeButton>
                        </HeroLeftContainer>
                        <HeroRightContainer>

                            <motion.div {...headContentAnimation}>
                                <Tilt>
                                    <Img src={HeroImage} alt='Juan Felipe Chilito' />
                                </Tilt>
                            </motion.div>
                            
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
                
            </HeroContainer>
        </div>
    )
}

export default Hero