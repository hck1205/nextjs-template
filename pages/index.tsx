import { useEffect } from 'react';
import Image from 'next/image';

import { IU } from '@/assets';

type Props = {};

function Main({}: Props) {
  useEffect(() => {}, []);

  return (
    <div>
      <Image src={IU} alt="Picture of IU" />
    </div>
  );
}

export default Main;
