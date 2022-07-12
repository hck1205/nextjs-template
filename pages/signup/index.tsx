import { useState, ChangeEvent } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { register } from '@/store/modules/auth';
import { AppDispatch } from '@/store';

import { SignUpInfo, SignUpInfoBool } from './types';
import { InputWrapper, PageWrapper } from './styles';
import { NextRouter, useRouter } from 'next/router';

const INPUT_KEYS = {
  EMAIL: 'email',
  NICKNAME: 'nickname',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'passwordConfirm',
};

const { EMAIL, NICKNAME, PASSWORD, PASSWORD_CONFIRM } = INPUT_KEYS;

const sessionStorage = globalThis?.sessionStorage;

export default function Signup() {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [values, setValues] = useState<SignUpInfo>({
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const [inValid, setInvalid] = useState<SignUpInfoBool>({
    email: false,
    nickname: false,
    password: false,
    passwordConfirm: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;
    setValues({ ...values, [key]: value });

    const isInvalid: boolean = validateInput({ key, value });
    setInvalid({ ...inValid, [key]: isInvalid });
  };

  const validateInput = (data: { key: string; value: string }) => {
    const { key, value } = data;

    switch (key) {
      case EMAIL:
        break;
      case NICKNAME:
        break;
      case PASSWORD: {
        const pwdValue = R.prop('passwordConfirm', values);
        return pwdValue ? !R.equals(pwdValue, value) : false;
      }
      case PASSWORD_CONFIRM: {
        return R.compose(R.not, R.equals(value), R.path([PASSWORD]))(values);
      }
    }

    return false;
  };

  const submit = () => {
    const hasEmptyValue = (val: string, key: string) => R.isEmpty(val);
    const emptyKeyList: string[] = R.compose(
      R.keys,
      R.pickBy(hasEmptyValue)
    )(values);

    const invalidKeyList: string[] = R.compose(
      R.keys,
      R.pickBy((val: string, key: string) => inValid[key])
    )(values);

    if (invalidKeyList.length > 0) return;

    // check empty values
    if (emptyKeyList.length > 0) {
      let emptyKeyValues = {};
      emptyKeyList.forEach((key) => {
        emptyKeyValues = { ...emptyKeyValues, [key]: true };
      });

      setInvalid({ ...inValid, ...emptyKeyValues });
      return;
    } else {
      dispatch(register(values)).then((data) => {
        const isLoggedin = R.compose(
          R.equals('fulfilled'),
          R.pathOr('', ['meta', 'requestStatus'])
        )(data);

        if (isLoggedin) {
          const prevPath = sessionStorage?.getItem('prevPath');
          const goToPath = prevPath === '/signup' || !prevPath ? '/' : prevPath;

          router.push(goToPath);
        }
      });
    }
  };

  return (
    <PageWrapper>
      <InputWrapper>
        <TextField
          error={inValid[EMAIL]}
          id="email"
          label="Email address"
          variant="outlined"
          margin="normal"
          helperText={''}
          onChange={handleChange}
        />

        <TextField
          error={inValid[NICKNAME]}
          id="nickname"
          label="Nick name"
          variant="outlined"
          margin="normal"
          helperText={''}
          onChange={handleChange}
        />

        <TextField
          error={inValid[PASSWORD]}
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          helperText={''}
          onChange={handleChange}
        />

        <TextField
          error={inValid[PASSWORD_CONFIRM]}
          id="passwordConfirm"
          label="Password Confirm"
          variant="outlined"
          margin="normal"
          helperText={''}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={submit}
        >
          Submit
        </Button>
      </InputWrapper>
    </PageWrapper>
  );
}
