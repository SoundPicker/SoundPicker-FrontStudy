import AppLayout from "../components/AppLayout"
import Head from "next/head";
import FollowList from "../components/FollowList"
import NicknameEditForm from "../components/NicknameEditForm"

const Profile =()=>{
    const followerList =[{nickname:'ahyeon'},{nickname:'nomad'},{nickname:'zerocho'}];
    const followingList =[{nickname:"ahyeon"},{nickname:"nomad"},{nickname:"zerocho"}];
    return (
    <>
    <Head>
            <meta charSet="utf-8" />
            <title>내프로필 | NodeBird</title>
        </Head>

    <AppLayout> 
        <NicknameEditForm />
        <FollowList header="팔로잉목록" data={followingList}/>
        <FollowList header="팔로워목록" data={followerList}/>
    </AppLayout>
    </>);
};
export default Profile;