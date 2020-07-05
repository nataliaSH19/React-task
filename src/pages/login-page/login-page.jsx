import React from 'react';
import { Card, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

import './login-page.styles.scss';

const LoginPage = () => {

    const { Title } = Typography;
    return (
        <div className='login-page'>
            <Card className='login-page__card'>
                <div className='login-page__card__header'>
                    <Title level={4}>SIGN IN</Title>
                    <Button type='link'>
                        <ArrowLeftOutlined type='arrow-left' />
                        <Link to='/'>Back To Home</Link>
                    </Button>
                </div>

            </Card>
        </div>
    );
}


export default LoginPage;
