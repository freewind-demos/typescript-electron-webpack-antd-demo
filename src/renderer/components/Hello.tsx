import React, {useState} from 'react';
import {Modal, Button} from 'antd';

export default function Hello() {
  const [show, setShow] = useState(false);
  return <div>
    <Button onClick={() => setShow(true)}>Open</Button>
    <Modal visible={show} onOk={() => setShow(false)} onCancel={() => setShow(false)}>Hello</Modal>
  </div>
};
