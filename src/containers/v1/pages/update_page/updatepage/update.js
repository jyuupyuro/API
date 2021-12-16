import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';

import * as ACTION from '../../../service/redux/actions/account'
import { useDispatch } from 'react-redux';
const { Option } = Select;


const EditAcc = (props) => {

  const dispatch = useDispatch()


  useEffect(() => {
    console.log("passed in data", props.location.state)
    const account = props.location.state

    setUpdateAccount(account)
  }, [])

  const [updateAccount, setUpdateAccount] = useState({
    username: '',
    password: '',
    apiKey: '',
    status: '',
    usagepercentage: '',
    usage: '',
    service: '',
    projectCode: '',
    appliedAt: '',
    associate: '',
    nextmonthbill: '',
  })



  const changeAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(updateAccount))
    tempAccount[key] = value
    setUpdateAccount(tempAccount)
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div>

        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 13 }}
          layout="horizontol"
          marginBottom="15px"
        >
          <div>
            <h2>Update Account</h2>
          </div>
          <Form.Item label='Username'>
            <Input
              placeholder="Username"
              onChange={(e) => { changeAccount("username", e.target.value) }}
              value={updateAccount.username}
            />

          </Form.Item>
          <Form.Item label='Password'>
            <Input
              placeholder="Password"
              onChange={(e) => { changeAccount("password", e.target.value) }}
              value={updateAccount.password}

            />
          </Form.Item>

          <Form.Item label='API key'>
            <Input
              placeholder="API Key"
              onChange={(e) => { changeAccount("apiKey", e.target.value) }}
              value={updateAccount.apiKey}

            />
          </Form.Item>

          <Form.Item label='Status'>
            <Select onChange={(value) => {
              changeAccount("status", value)
            }}>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
              <Option value="suspended">Suspended</Option>
            </Select>
          </Form.Item>

          <Form.Item label='Usage Percentage'>
            <Input
              placeholder="Usage Percentage"
              onChange={(e) => { changeAccount("usagepercentage", e.target.value) }}
              value={updateAccount.usagepercentage}

            />
          </Form.Item>

          <Form.Item label='Usage'>
            <Input
              placeholder="Usage"
              onChange={(e) => { changeAccount("usage", e.target.value) }}
              value={updateAccount.usage}

            />
          </Form.Item>

          <Form.Item label='Service'>
            <Input
              placeholder="Service"
              onChange={(e) => { changeAccount("service", e.target.value) }}
              value={updateAccount.service}

            />
          </Form.Item>

          <Form.Item label='Project Code'>
            <Input
              placeholder="Project Code"
              onChange={(e) => { changeAccount("projectCode", e.target.value) }}
              value={updateAccount.projectCode}

            />
          </Form.Item>

          <Form.Item label='Applied At'>
            <Input
              placeholder="Applied At"
              onChange={(e) => { changeAccount("appliedAt", e.target.value) }}
              value={updateAccount.appliedAt}

            />
          </Form.Item>

          <Form.Item label='Associate'>
            <Input
              placeholder="Associate"
              onChange={(e) => { changeAccount("associate", e.target.value) }}
              value={updateAccount.associate}

            />
          </Form.Item>

          <Form.Item label='Next Month Bill Date'>
            <Input
              placeholder="Next Month Bill Date"
              onChange={(e) => { changeAccount("nextmonthbill", e.target.value) }}
              value={updateAccount.nextmonthbill}

            />
          </Form.Item>
          <Form.Item>
            <Button onClick={() => dispatch(ACTION.update_account(updateAccount))}>
              Save
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  );

}

export default EditAcc;