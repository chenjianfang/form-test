import { Button, Form, Input } from 'antd';
import React from 'react';
import {post, get} from './http';
import 'antd/dist/antd.css';


const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    const data = {
      ...values,
      ...{
        a: 1
      }
    }
    post('url', data)
  };

  return (
    <div style={{width: '400px', margin: '10px auto'}}>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >

      
      <Form.Item
        label="Username"
        name="username"
      >
        <Input />
      </Form.Item>



      <Form.Item
       wrapperCol={{
        offset: 8,
        span: 16,
      }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default App;
