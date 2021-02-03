import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";

// 특정 컴포넌트끼리 공통인 애는 레이아웃으로 만들어
// 개별 컴포넌트를 감싸면 됨
const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search
            enterButton="Search"
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      {/* 24를 넘지 않으면 한 줄로 표현, 아니면 넘어간다 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* targe="_blank"가 보안 위협이 있으므로 ref 꼭 써주기 */}
          <a
            href="https://github.com/ksmself"
            target="_blank"
            ref="noreferrer noopener"
          >
            Made by SeungmiKim
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
