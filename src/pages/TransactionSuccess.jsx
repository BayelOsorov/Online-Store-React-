import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TransactionSuccess = () => {
    return (
        <div className='tr-succ'  >
            <div >
                <img alt='' src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />
                <h1>Операция успешно выполнена!</h1>
                <h4>Спасибо за доверие</h4>
                <Link to='/products' >
                    <Button style={{ borderRadius: '20px', background: '#3CB371' }} variant='contained' >Вернуться к продуктам</Button>
                </Link>
            </div>
        </div>
    );
};

export default TransactionSuccess;