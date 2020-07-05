import React from 'react';
import { Card, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import Form from '../../components/Form';



import './register-page.styles.scss';


const RegisterPage = () => {

    const { Title } = Typography;
    return (
        <div className='register-page'>
            <Card className='register-page__card'>
                <div className='register-page__card__header'>
                    <Title className='title' >Register</Title>
                    <Button className='button' >

                        <ArrowLeftOutlined type='arrow-left' />
                        <Link to='/'>Back To Home</Link>
                    </Button>
                </div>
                <Form />
            </Card>
        </div>
    );
}


export default RegisterPage;
