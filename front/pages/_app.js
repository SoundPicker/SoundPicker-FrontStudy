import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'

// index js 의 부모!
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      {/* <div>공통</div> */}
      <Component />
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird
