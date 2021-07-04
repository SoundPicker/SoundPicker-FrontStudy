import React, { useCallback, useState } from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from "styled-components";
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // 컴포넌트의 프롭스로 들어가는 함수들은 useCallback을 꼭 써달다
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    },[]);
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[]);

    return(     
        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} required/>
            </div>
            {/* {}==={} 는 false이기 때문에 스타일에 객체를 넣으면 다르다고 생각하여 리렌더링 한다. */}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    );

}

export default LoginForm;