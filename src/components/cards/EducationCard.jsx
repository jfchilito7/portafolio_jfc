import styled from 'styled-components';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';

const Top = styled.div`
    width: 100%;
    display: flex;
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

const School = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const EducationCard = ({ education }) => {
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
                    backgroundImage: `url(${education?.img ?? ''})`,
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
            date={education?.date ?? ''}
        >
            <Top>
                {education?.img && <Image src={education.img} alt={education?.school ?? 'School logo'} />}
                <Body>
                    <School>{education?.school ?? 'Unknown School'}</School>
                    <Degree>{education?.degree ?? 'No degree specified'}</Degree>
                    <Date>{education?.date}</Date>
                </Body>
            </Top>
            {education?.grade && (
                <Grade>
                    <b>Grade: </b>
                    {education.grade}
                </Grade>
            )}
            {education?.desc && (
                <Description>
                    <Span>{education.desc}</Span>
                </Description>
            )}
        </VerticalTimelineElement>
    );
};

EducationCard.propTypes = {
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        degree: PropTypes.string,
        date: PropTypes.string,
        grade: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

export default EducationCard;
