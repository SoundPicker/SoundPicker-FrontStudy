import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  if (!me) {
    return null;
  }

  useEffect(() => {
    if (!me && me.id) {
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
