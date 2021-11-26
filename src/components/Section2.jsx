import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Section2 = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h1 className='section-h1' >АКСЕССУАРЫ ДЛЯ ТЕБЯ</h1>
                <AwesomeSlider>
                    <div data-src="https://static.tildacdn.com/tild3736-3135-4830-b032-376535643666/a1.jpg" />
                    <div data-src="https://static.tildacdn.com/tild3336-6637-4632-b666-306364623662/a5.jpg" />
                    <div data-src="https://static.tildacdn.com/tild6535-6337-4264-b964-656336646464/a3.jpg" />
                    <div data-src="https://static.tildacdn.com/tild6661-3262-4637-b238-333632643233/a2.jpg" />
                </AwesomeSlider>
            </Container>
        </React.Fragment>

    );
};

export default Section2;