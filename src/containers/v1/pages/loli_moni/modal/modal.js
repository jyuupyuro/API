import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const ModalAdd = (props) => {
    const [account, setAccount] = useState("");
    const [api, setAPI] = useState("");
    const [bill, setBill] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };

      return(
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
        onOk={handleOk}
        footer={[
          <Button key="save"  onClick={handleOk}>Save</Button>,
          <Button key="cancel"  onClick={handleCancel}>Cancel</Button>
        ]}
      >
         <Form
            labelCol={{ span:8 }}
            wrapperCol={{span:13}}
            layout="horizontol"
            marginBottom= "15px"
        >
        <div>
        <h2>Add New Account</h2>
        </div>
        <Form.Item label='Account'>
          <Input
            placeholder="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='API key'>
          <Input
            placeholder="API Key"
            value={api}
            onChange={(e) => setAPI(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Next Month Bill Date'>
          <Input
            placeholder="Next Month Bill Date"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
      );
}

export default ModalAdd;