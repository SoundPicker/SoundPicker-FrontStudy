
import {Form,Input} from 'antd'
import {useMemo} from 'react'; //rerendering을 막기위한 장치 , useCallback은 함수를 반환하지만 useMemo는 결과값을반환

const NicknameEditForm =()=>{
    const style=useMemo(()=> ({
        marginBottom:'20px',
        border: '1px solid #d9d9d9',
        padding: '20px'
    }),[]);

    return(
        <Form>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    );
};
export default NicknameEditForm;