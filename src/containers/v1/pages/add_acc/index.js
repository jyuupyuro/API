import React, { useState } from "react";
import { Modal, Button } from "antd";

import { useDispatch } from "react-redux";

import { goBackToPrev } from "../../service/navigation/services";

const Test1 = (props) => {
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
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello</h1>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Button
        style={{ width: 200 }}
        onClick={() => {
          dispatch(goBackToPrev("/Add"));
        }}
      >
        Go back
      </Button>
    </div>
  );
};

export default Test1;
