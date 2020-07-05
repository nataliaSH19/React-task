import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import './home-page.styles.scss';

const HomePage = () => {
    const { Title, Text } = Typography;

    return (
        <div className='home-page'>
            <Title>Welcome Vasya!</Title>
            <Text className='text' >
                To ReactJS Sign In and Registration Form(
                created by Natalia)
      </Text>
            <div className='button-container'>

                <Button type="primary">
                    <Link to='/login'>Sign In</Link>
                </Button>
                <Button type='default '>
                    <Link to='/register'>Register</Link>
                </Button>

            </div>
        </div>
    );
};

export default HomePage;