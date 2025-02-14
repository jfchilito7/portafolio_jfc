import { useRef } from 'react';
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

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
    }
`;

const ContactForm = styled.div`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 32px;
    border-radius: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 6px;
    color: ${({theme}) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({theme}) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({theme}) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({theme}) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({theme}) => theme.primary};
    }
`;

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({theme}) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple antes de enviar
        const formData = new FormData(form.current);
        const fromEmail = formData.get('from_email');
        const fromName = formData.get('from_name');
        const message = formData.get('message');

        if (!fromEmail || !fromName || !message) {
            alert('Por favor, completa todos los campos antes de enviar el mensaje.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fromEmail)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        emailjs
            .sendForm(
                'service_sbli6mc',
                'template_o7wkxgt',
                form.current,
                'GjC0VfLq-EpaC9pJ8'
            )
            .then(
                (result) => {
                    alert('Mensaje enviado correctamente');
                    form.current.reset(); // Reinicia el formulario tras enviarlo
                },
                (error) => {
                    alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
                }
            );
    };

    return (
        <Container id='contact'>
            <Wrapper>
                <Title>Contacto</Title>
                <Desc
                    style={{
                        marginBottom: '40px',
                    }}
                >
                    Si tienes alguan pregunta para mi o quieres contactarme, no dudes en hacerlo.
                </Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Contactame </ContactTitle>
                    <ContactInput placeholder="Tu Email" name='from_email' />
                    <ContactInput placeholder="Tu Nombre" name='from_name' />
                    <ContactInput placeholder="Asunto" name='subject' />
                    <ContactInputMessage placeholder="Mensaje" name='message' rows={4} />
                    <ContactButton type='submit' value='Enviar' />
                </ContactForm>

            </Wrapper>
        </Container>
    )
}

export default Contact