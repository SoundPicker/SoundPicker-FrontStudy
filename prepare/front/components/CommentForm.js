import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import useInput from "../hooks/userinput";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        {/* button에 position-absolute 적용하니 클릭이 안됨. 추측으로는 Form을 벗어나서 클릭이 안되는 것 같음  */}
        <Button type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
