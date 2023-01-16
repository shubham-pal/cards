import React from 'react';
import { Button, Form, Input } from 'antd';

const AddForm = ({ formData, onFormSubmit }) => {
  const onFinish = (values) => {
    onFormSubmit(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input value={formData.title || ''} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input description!' }]}
      >
        <Input value={formData.description || ''} />
      </Form.Item>

      <Form.Item
        label="Video URL"
        name="videoUrl"
        rules={[{ required: true, message: 'Please input video URL!' }]}
      >
        <Input value={formData.videoUrl || ''} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddForm;