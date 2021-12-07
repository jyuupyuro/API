import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const ModalAdd = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [api, setAPI] = useState("");
    const [status, setStatus] = useState("");
    const [usagePercentage, setUsagePercentage] = useState("");
    const [service, setService] = useState("");
    const [associate, setAssociate] = useState("");
    const [projectCode, setProjectCode] = useState("");
    const [usage, setUsage] = useState("");
    const [appliedAt, setAppliedAt] = useState("");
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
        <Form.Item label='Username'>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

        </Form.Item>
        <Form.Item label='Password'>
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='API key'>
          <Input
            placeholder="API Key"
            value={api}
            onChange={(e) => setAPI(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Status'>
          <Input
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Usage Percentage'>
          <Input
            placeholder="Usage Percentage"
            value={usagePercentage}
            onChange={(e) => setUsagePercentage(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Usage'>
          <Input
            placeholder="Usage"
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Service'>
          <Input
            placeholder="Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Project Code'>
          <Input
            placeholder="Project Code"
            value={projectCode}
            onChange={(e) => setProjectCode(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Applied At'>
          <Input
            placeholder="Applied At"
            value={appliedAt}
            onChange={(e) => setAppliedAt(e.target.value)}
          />
        </Form.Item>

        <Form.Item label='Associate'>
          <Input
            placeholder="Associate"
            value={associate}
            onChange={(e) => setAssociate(e.target.value)}
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