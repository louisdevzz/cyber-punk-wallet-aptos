import { FC } from 'react';
import Image from 'next/image';
import { ComponentBaseProps } from '@/common/interfaces';

import ProfileBottomLeftElementDecor from '@/assets/svgs/profile-bottom-left-element-decor.svg';
import ProfileBottomRightElementDecor from '@/assets/svgs/profile-bottom-right-element-decor.svg';
import ProfileTopLeftElementDecor2 from '@/assets/svgs/profile-top-left-element-decor-2.svg';
import ProfileTopRightElementDecor from '@/assets/svgs/profile-top-right-element-decor.svg';

type IDashboardBottomProfileDecorProps = ComponentBaseProps;

const DashboardBottomProfileDecor: FC<IDashboardBottomProfileDecorProps> = () => {
  return (
    <>
      <Image
        src={ProfileTopLeftElementDecor2.src}
        alt="Profile Top Left Element Decor"
        width={ProfileTopLeftElementDecor2.width}
        height={ProfileTopLeftElementDecor2.height}
        className="absolute -left-[7px] -top-[7px] z-0"
      />
      <Image
        src={ProfileTopRightElementDecor.src}
        alt="Profile Top Right Element Decor"
        width={ProfileTopRightElementDecor.width}
        height={ProfileTopRightElementDecor.height}
        className="absolute -top-[6px] right-0 z-0"
      />
      <Image
        src={ProfileBottomRightElementDecor.src}
        alt="Profile Top Right Element Decor"
        width={ProfileBottomRightElementDecor.width}
        height={ProfileBottomRightElementDecor.height}
        className="absolute -bottom-[6px] -right-[6px] z-0"
      />
      <Image
        src={ProfileBottomLeftElementDecor.src}
        alt="Profile Top Right Element Decor"
        width={ProfileBottomLeftElementDecor.width}
        height={ProfileBottomLeftElementDecor.height}
        className="absolute -bottom-[6px] left-0 z-0"
      />
    </>
  );
};

export default DashboardBottomProfileDecor;
