import { useState, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { TextField, Button } from '@mui/material';

import { InputWrapper, PageWrapper } from './styles';

const warningText = '아이디 또는 비밀번호를 다시 입력해주세요.';

export default function Login() {
  const [shouldRender, setShouldRender] = useState(true);
  const [values, setValues] = useState({
    userId: '',
    password: '',
  });
  const [invalid, setInvalid] = useState({
    userId: false,
    password: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;

    setValues({ ...values, [key]: value });
    setInvalid({ ...invalid, [key]: false });
  };

  const goToPrevPath = () => {};

  const submit = () => {};

  useEffect(() => {}, []);

  return shouldRender ? (
    <PageWrapper>
      <InputWrapper>
        <TextField
          error={invalid.userId}
          id="userId"
          label="ID"
          variant="outlined"
          margin="normal"
          helperText={invalid.userId ? warningText : ''}
          onChange={handleChange}
        />
        <TextField
          error={invalid.password}
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          helperText={invalid.password ? warningText : ''}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={submit}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => {}}
        >
          Kakao
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Naver
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Google
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Facebook
        </Button>
        <Link href={{ pathname: '/signup' }}>
          <Button variant="outlined" size="large" color="primary">
            Sign up
          </Button>
        </Link>
      </InputWrapper>
    </PageWrapper>
  ) : null;
}
