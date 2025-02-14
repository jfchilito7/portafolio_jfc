import styled from 'styled-components'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';

const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
`;

const Image = styled.img`
    height: 50px;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }  
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;



const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            icon={
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${experience?.img ?? ''})`,
                    }}
                />
            }
        contentStyle={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#1d1836',
            color: '#fff',
            boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
            backgroundColor: 'rgba(17, 25, 40, 0.83)',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            borderRadius: '6px',
        }}

        contentArrowStyle={{
            borderRight: '7px solid  rgba(255, 255, 255, 0.3)',
        }}
        date={experience?.date ?? ''}
        >
            <Top>
                {experience?.img && <Image src={experience.img} alt={`Logo de ${experience?.company}`} />}
                <Body>
                    <Role>{experience?.role ?? 'Unknown Role'}</Role>
                    <Company>{experience?.company ?? 'Unknown Company'}</Company>
                    <Date>{experience?.date}</Date>
                </Body>
            </Top>
                <Description>
                    {experience?.desc && <Span>{experience.desc}</Span>}
                    {experience?.skills && (
                        <>
                            <br />
                            <Skills>
                                <b>Skills:</b>
                                <ItemWrapper>
                                    {experience?.skills?.map((skill, index) => (
                                        <Skill key={index}>• {skill}</Skill>
                                    ))}
                                </ItemWrapper>
                            </Skills>
                        </>
                    )}
                </Description>
        </VerticalTimelineElement>
    );
};

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        role: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        desc: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        img: PropTypes.string,
    }).isRequired,
};


export default ExperienceCard