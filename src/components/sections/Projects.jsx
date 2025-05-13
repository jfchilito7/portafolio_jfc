import { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 0px 16px;
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

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    /* Usamos un atributo personalizado */
    &[data-active='true'] {
        background: ${({ theme }) => theme.primary + '20'};
    }

    &:hover {
        background: ${({ theme }) => theme.primary + '20'};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id='Proyectos'>
            <Wrapper>
                <Title>Proyectos</Title>
                <Desc 
                    style={{
                        marginBottom: '40px',
                    }}
                >
                    He trabajado en una amplia variedad de proyectos, desde aplicaciones web
                    hasta diseños interactivos. Aquí hay algunos de mis trabajos.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton 
                        data-active={toggle==='all'}
                        onClick={() => setToggle('all')}
                        >All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        data-active={toggle === 'web app'}
                        onClick={() => setToggle('web app')}
                    >Web app  
                    </ToggleButton>
                    <Divider />
                    {/* <ToggleButton
                        data-active={toggle === 'Mobile app'}
                        onClick={() => setToggle('Mobile app')}
                    >Mobile app
                    </ToggleButton> */}
                    <Divider />
                    <ToggleButton 
                        data-active={toggle === 'Design'}
                        onClick={() => setToggle('Design')}
                    >Diseño
                    </ToggleButton>
                </ToggleButtonGroup>
                <CardContainer>
                    {projects
                        .filter((project) => toggle === 'all' || project.category === toggle)
                        .map((project, index) => (
                            <ProjectCard key={`project-${index}`} project={project} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects