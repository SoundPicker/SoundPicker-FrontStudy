import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

// Component에 index.js, profile.js ... 등이 들어감
// 쟤들의 부모인 셈. 모든 페이지에서 공통으로 적용하고 싶은 게 있다면 이런 식으로
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

// props 있으면 점검을 위해
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
