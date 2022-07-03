import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { IU } from '@/assets';

import {
  increment,
  decrement,
  decreaseByRandom,
} from '@/store/modules/counter';
import { RootState } from '@/store/modules';

type Props = {};

function Main({}: Props) {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }: RootState) => counter.value);

  const plus = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const minus = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const decreaseCount = () => {
    dispatch(decreaseByRandom());
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus()}>-</button>
      <span>{value}</span>
      <button onClick={() => plus()}>+</button>
      <button onClick={() => decreaseCount()}>- random</button>
    </div>
  );
}

export default Main;
