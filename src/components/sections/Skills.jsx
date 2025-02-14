import styled from 'styled-components'
import { skills } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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

const Title = styled.h2`
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

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 50px;
    justify-content: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;

    @media screen and (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }

    @media screen and (max-width: 500px) {
        max-width: 300px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 80};
    border: 1px solid ${({theme}) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
    return (
        <Container id="Habilidades">
            <Wrapper>
                <Title>Habilidades</Title>
                <Desc>
                    Estas son algunas de mis habilidades en las que he estado trabajando durante los últimos años.
                </Desc>

                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Skill key={index}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, idx) => (
                                    <SkillItem key={idx}>
                                        <SkillImage src={item.image} alt={item.name || "Skill"} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;