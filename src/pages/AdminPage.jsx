import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminCard from '../components/AdminCards/AdminCard';

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <Link to='/admin/add' >
                <Button style={{ marginTop: 40 }} variant='outlined' color='primary' >Добавить товар</Button>
            </Link>
            <AdminCard />
        </div>
    );
};

export default AdminPage;