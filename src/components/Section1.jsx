import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Section1 = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h1 className='section1-h1' >АКСЕССУАРЫ ДЛЯ СМАРТФОНОВ</h1>
                <AwesomeSlider>
                    <div data-src="https://static.tildacdn.com/tild6661-6465-4763-b566-373864306233/title_1.jpg" />
                    <div data-src="https://static.tildacdn.com/tild3765-3331-4034-b262-653365393439/Title_3.jpg" />
                    <div data-src="https://static.tildacdn.com/tild3432-3336-4665-b032-323031363731/title_5.jpg" />
                    <div data-src="https://static.tildacdn.com/tild3536-3138-4238-b531-366538373539/title_4.jpg" />
                    <div data-src="https://static.tildacdn.com/tild6433-6566-4232-a638-633435663231/title_2.jpg" />

                </AwesomeSlider>
            </Container>
        </React.Fragment>

    );
};

export default Section1;