import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

import * as ACTION from '../../../service/redux/actions/account'
import { useDispatch } from 'react-redux';

const ModalAdd = () => {

  const dispatch = useDispatch()

  const [newAccount, setNewAccount] = useState({
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


  const updateAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(newAccount))
    tempAccount[key] = value
    setNewAccount(tempAccount)
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
      <Button type="primary" variant="contained"
        style={{
          float: 'right'
        }}
        color="primary"
        className="float-right"
        onClick={showModal}
      >
        Create Account
      </Button>
      <div>
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={() => console.log(newAccount)}
          footer={[
            <Button key="save" onClick={() => dispatch(ACTION.add_account(newAccount))}>Save</Button>,
            <Button key="cancel" onClick={handleCancel}>Cancel</Button>
          ]}
        >
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 13 }}
            layout="horizontol"
            marginBottom="15px"
          >
            <div>
              <h2>Add New Account</h2>
            </div>
            <Form.Item label='Username'>
              <Input
                placeholder="Username"
                onChange={(e) => { updateAccount("username", e.target.value) }}
              />

            </Form.Item>
            <Form.Item label='Password'>
              <Input
                placeholder="Password"
                onChange={(e) => { updateAccount("password", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='API key'>
              <Input
                placeholder="API Key"
                onChange={(e) => { updateAccount("apiKey", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Status'>
              <Input
                placeholder="Status"
                onChange={(e) => { updateAccount("status", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Usage Percentage'>
              <Input
                placeholder="Usage Percentage"
                onChange={(e) => { updateAccount("usagepercentage", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Usage'>
              <Input
                placeholder="Usage"
                onChange={(e) => { updateAccount("usage", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Service'>
              <Input
                placeholder="Service"
                onChange={(e) => { updateAccount("service", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Project Code'>
              <Input
                placeholder="Project Code"
                onChange={(e) => { updateAccount("service", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Applied At'>
              <Input
                placeholder="Applied At"
                onChange={(e) => { updateAccount("appliedAt", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Associate'>
              <Input
                placeholder="Associate"
                onChange={(e) => { updateAccount("associate", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Next Month Bill Date'>
              <Input
                placeholder="Next Month Bill Date"
                onChange={(e) => { updateAccount("nextmonthbill", e.target.value) }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );

}

export default ModalAdd;