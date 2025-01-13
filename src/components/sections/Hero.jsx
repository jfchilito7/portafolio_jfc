import styled from 'styled-components'
import { BioData } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImage from '../../images/HeroImage.PNG';
import HeroBgAnimation from '../HeroBgAnimation'

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
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
    positoion: relative;
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

    @media screen and (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
        margin-buttom: 80px;
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
        text-align: center;
    }

    @media screen and (max-width: 960px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
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
        text-align: center;
    }

    @media screen and (max-width: 960px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.div `
    cursor: pointer;
    color: ${({theme}) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-buttom: 42px;
    color: ${({theme}) => theme.text_primary + 95};

    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a `
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    margin-top: 42px;
    
    background: hlsa(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(204, 100%, 50%, 1) 0%, hsla(204, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(204, 100%, 50%, 1) 0%, hsla(204, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(204, 100%, 50%, 1) 0%, hsla(204, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634,
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
    border: 2px solid ${({theme}) => theme.primary};

    @media screen and (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

const HeroBg = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }

`;

const Hero = () => {
    return (
        <div id='about'>
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
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
                        <SubTitle>{BioData.description}</SubTitle>
                        <ResumeButton>Descargar CV</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Img src={HeroImage} alt='Juan Felipe Chilito' />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero