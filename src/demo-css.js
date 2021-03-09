import { Form, Input, Button, Select } from 'antd'
import React, { Component } from 'react'
const { Option } = Select
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
}

const formDemo = () => {
  const [form] = Form.useForm()
  console.log(form)
  // 下拉框的change事件
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          name: 'Hi, man!',
        })
        return

      case 'female':
        form.setFieldsValue({
          name: 'Hi, lady!',
        })
        return

      case 'other':
        form.setFieldsValue({
          name: 'Hi there!',
        })
        return
    }
  }

  const onFinish = (values) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({
      name: 'Hello world!',
      gender: 'male',
    })
  }

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="姓名"
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="性别"
        rules={[
          {
            required: true,
            message: '请输入性别',
          },
        ]}
      >
        <Select placeholder="请选择" onChange={onGenderChange} allowClear>
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="自定义性别"
              rules={[
                {
                  required: true,
                  message: '请输入自定义性别',
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }}
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          自定义填充
        </Button>
      </Form.Item>
    </Form>
  )
}

export default formDemo
