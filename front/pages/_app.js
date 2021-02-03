import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import Head from 'next/head'; //next에서 제공하는 헤드 수정 컴포넌트 
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore'

const App =({Component}) =>{ //pages들의 공통부분 
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>NodeBird</title>
        </Head>
        <Component />
        </>

    );
}

App.propTypes ={
    Component: PropTypes.elementType.isRequired,
}
export default wrapper.withRedux(App);