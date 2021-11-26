import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


export default function OurPart() {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h2 className='fot-h2'>Наши партнеры</h2>
                <div className='fot-images' >
                    {/* ours */}

                    {/* international */}

                    <img className='fot-img' src="http://www.zecraft.com/wp-content/uploads/2016/04/brioni-logotype.png" alt="" />

                    <img className='fot-img' src="https://static.tildacdn.com/tild6634-6137-4832-b131-306363633739/Armani.jpg" alt="" />

                    <img className='fot-img' src="https://logos-world.net/wp-content/uploads/2020/09/Lacoste-Emblem.png" alt="" />

                    <img className='fot-img' src="https://www.shapedesign.fr/sites/shape_design/galerie_photos/images_sources/417/34443.jpg" alt="" />

                    <img className='fot-img' src="https://1000logos.net/wp-content/uploads/2019/06/Burberry-Logo-1968.jpg" alt="" />

                    <img className='fot-img' src="https://dwglogo.com/wp-content/uploads/2020/05/coah_logo_1200X672-1024x573.png" alt="" />

                    <img className='fot-img' src="https://a.allegroimg.com/original/117a48/f7e02d6a43c9b629e803eaf5fae0/Versace-Bright-Crystal-90-ml-Pojemnosc-opakowania-90-ml" alt="" />



                </div>
            </Container>
        </React.Fragment>

    );
}