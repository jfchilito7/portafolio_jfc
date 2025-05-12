import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme}) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    margin-top: 8px;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme}) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({theme}) => theme.card};
`;

const Button = styled.button`
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    border: 2px solid ${({ theme }) => theme.primary};
    padding: 0.5rem 1rem;
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #fff;
        color: ${({ theme }) => theme.primary};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}50;
    }
`;

const ProjectCard = ({ project }) => {
    if (!project) return null;

    const handleCodeClick = (e) => {
        e.stopPropagation(); // evita que el clic en el botón dispare el enlace del <a> padre
        window.open(project.github, '_blank', 'noopener,noreferrer');
    };

    return (
        <a
            href={project.webapp}
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Card>
                <Image
                    src={project.image || 'fallback-image.png'}
                    alt={`Imagen del proyecto ${project.title || 'Desconocido'}`}
                    onError={(e) => {
                        e.target.src = 'fallback-image.png';
                    }}
                />

                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                    <Description>{project.description}</Description>
                    <Tags>
                        {project.tags.map((tag, index) => (
                            <span key={index} className='tag'>
                                {tag}
                            </span>
                        ))}
                    </Tags>
                </Details>

                {Array.isArray(project.member) && project.member.length > 0 && (
                    <Members>
                        {project.member.map((member, index) => (
                            <Avatar
                                key={index}
                                src={member.img || 'fallback-avatar.png'}
                                alt='Avatar del miembro'
                            />
                        ))}
                    </Members>
                )}

                <Button onClick={handleCodeClick} style={{ marginTop: '1rem' }}>
                    Ver código
                </Button>
            </Card>
        </a>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        github: PropTypes.string,
        webapp: PropTypes.string,
        member: PropTypes.arrayOf(
            PropTypes.shape({
                img: PropTypes.string,
            })
        ),  
    }),
};

export default ProjectCard