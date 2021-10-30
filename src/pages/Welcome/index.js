import { useState } from "react";
import { useDispatch } from "react-redux";
import Display from "../../components/Display";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { Button, Input, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { Container } from "./styles";
import { FileTextTwoTone, UserOutlined } from '@ant-design/icons';

export default function Welcome() {
  const [comment, setcomment] = useState();
  const dispatch = useDispatch();
  return (
    <Container>
      <Avatar size={64} icon={<UserOutlined />} />
      <Display />
      <div style={{ margin: "20px 0" }}>
        <Input
          placeholder="Comment..."
          onChange={(event) => setcomment(event.target.value)}
        ></Input>
        <Button type="primary" onClick={() => dispatch(addCommentThunk(comment))}>
        <FileTextTwoTone /> New Comment
        </Button>
      </div>
    </Container>
  );
}
