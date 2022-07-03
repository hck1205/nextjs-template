import { useState, ChangeEvent, useEffect } from 'react';
import * as R from 'ramda';
import { TextField, Button } from '@mui/material';

import { InputWrapper, PageWrapper } from './styles';

const INPUT_KEYS = {
  USER_ID: 'userId',
  NICKNAME: 'nickname',
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'passwordConfirm',
};

const { USER_ID, NICKNAME, EMAIL, PASSWORD, PASSWORD_CONFIRM } = INPUT_KEYS;

export default function Signup() {
  const [values, setValues] = useState({
    [USER_ID]: '',
    [NICKNAME]: '',
    [EMAIL]: '',
    [PASSWORD]: '',
    [PASSWORD_CONFIRM]: '',
  });

  const [inValid, setInvalid] = useState({
    [USER_ID]: false,
    [NICKNAME]: false,
    [EMAIL]: false,
    [PASSWORD]: false,
    [PASSWORD_CONFIRM]: false,
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
      case USER_ID:
        break;
      case NICKNAME:
        break;
      case EMAIL:
        break;
      case PASSWORD: {
        const pwdValue = R.prop(PASSWORD_CONFIRM, values);
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

    // check empty values
    if (emptyKeyList.length > 0) {
      let emptyKeyValues = {};
      emptyKeyList.forEach((key) => {
        emptyKeyValues = { ...emptyKeyValues, [key]: true };
      });

      setInvalid({ ...inValid, ...emptyKeyValues });
      return;
    } else if (invalidKeyList.length > 0) {
      return;
    } else {
    }
  };

  return (
    <PageWrapper>
      <InputWrapper>
        <TextField
          error={inValid[USER_ID]}
          id="userId"
          label="ID"
          variant="outlined"
          margin="normal"
          helperText={inValid[USER_ID] ? '아이디 중복 애러' : ''}
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
          error={inValid[EMAIL]}
          id="email"
          label="Email address"
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
