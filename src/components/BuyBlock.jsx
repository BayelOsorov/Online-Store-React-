import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function ByuBlock() {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h2 className='fot-h2'>Вы можете оплатить заказ с помощью банковских карт и платёжных систем</h2>
                <div className='fot-images' >
                    {/* ours */}
                    <img className='fot-img' src="http://procurement.kg/wp-content/uploads/2020/01/KICB-2-2.png" alt="" />
                    <img className='fot-img' src="data:image/png;base64,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" alt="" />

                    <img className='fot-img' src="https://www.rsk.kg/uploads/news/9a7238c887392004121aff8aba6a25996fa753ea.jpg" alt="" />

                    <img className='fot-img' src="https://lh3.googleusercontent.com/0--vN2hDnwVJ9OBxB6neVAdd-1UG7KdRZ8QHoSJh7s_AIG4iRvZZ7jT3efL4pltXAGQ=w600-h300-pc0xffffff-pd" alt="" />

                    <img className='fot-img' src="https://im0-tub-ru.yandex.net/i?id=5162d7bd33740f1d0aeeed1fbc7010fc-sr&n=13" alt="" />

                    <img className='fot-img' src="https://economist.kg/wp-content/uploads/2019/03/finansy-balans-koshelek.jpg" alt="" />

                    <img className='fot-img' src="https://play-lh.googleusercontent.com/6whxOEbdSOwrVM_bFygaVaZVEpCCXdXEqWa_ZSY9FOhPgVEO1sxdkf2yb4ahMj1hrCTd=h1024-no-tmp_megapay_kg_apk.jpg" alt="" />



                    {/* international */}

                    <img className='fot-img' src="https://static.tildacdn.com/tild3033-3064-4430-a639-626633613661/master-card.jpg" alt="" />

                    <img className='fot-img' src="https://static.tildacdn.com/tild3637-6338-4538-a530-323966346132/maestro.jpg" alt="" />

                    <img className='fot-img' src="https://static.tildacdn.com/tild6338-3836-4133-a564-326637613866/yandex-money.jpg" alt="" />

                    <img className='fot-img' src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="" />

                    <img className='fot-img' src="https://static.tildacdn.com/tild3837-3366-4130-a139-616466646663/visa.jpg" alt="" />


                </div>
            </Container>
        </React.Fragment>

    );
}