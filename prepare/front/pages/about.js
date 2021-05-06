import { useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from '@redux-saga/core';

const About = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>seungmi | NodeBird</title>
      </Head>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              짹짹
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
            description="노드버드 매니아"
          />
        </Card>
      ) : null}
    </AppLayout>
  );
};

// 언제 접속해도 데이터가 바뀔 일이 없으면 getStaticProps
// 블로그 게시글처럼 잘 바뀔 일이 없으면, html로 아예 뽑아주기 때문에 이걸 사용
export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 3,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;
