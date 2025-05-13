import { lazy, Suspense} from 'react'
import styled from 'styled-components'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../../data/constants';
import EducationCard from '../cards/EducationCard';

const EarthCanvas = lazy(() => import('../canvas/Earth'));

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 0 35px;
    }
`;

const Education = () =>{
    return (
        <Container id='Educación'>
            <Wrapper>
                <Title>Educación</Title>
                <Desc
                    style={{
                        marginBottom: '40px',
                    }}
                >
                    Mi Educación como ingeniero multimedia y experiencia en compañias y proyectos
                </Desc>

                <VerticalTimeline>
                    {education.map((education, index) => (
                        <EducationCard 
                            key={`education-${index}`}
                            education={education}
                        />
                    ))}
                </VerticalTimeline>
                <Suspense fallback={<div>Cargando...</div>}>
                    <EarthCanvas />
                </Suspense>
            </Wrapper>
        </Container>
    )
}

export default Education