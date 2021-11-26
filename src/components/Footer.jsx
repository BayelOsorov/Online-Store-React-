import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const MyFooter = () => {
    return (
        <Box>

            <Container>
                <Row>
                    <Column>
                        <Heading>О нас</Heading>
                        <FooterLink href="#">о нас</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Политика </Heading>
                        <FooterLink href="#">Политика конфиденциальности</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Свяжитесь с нами</Heading>
                        <FooterLink href="#">WhatsApp</FooterLink>
                        <FooterLink href="#">Telegram</FooterLink>
                        <FooterLink href="#">Viber</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Соцсети</Heading>
                        <FooterLink href="#">

                            <img className='footer-logo' src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="" />

                        </FooterLink>
                        <FooterLink href="#">
                            <img className='footer-logo' src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="" />
                        </FooterLink>
                        <FooterLink href="#">
                            <img className='footer-logo' src="https://cdn-icons-png.flaticon.com/512/3773/3773262.png" alt="" />
                        </FooterLink>

                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default MyFooter;
