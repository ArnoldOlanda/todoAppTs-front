import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const UserIcon = (props: any) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_12_22)">
        <Path
          d="M12.5 14.063a7.033 7.033 0 007.031-7.032A7.033 7.033 0 0012.5 0a7.033 7.033 0 00-7.031 7.031 7.033 7.033 0 007.031 7.032zm6.25 1.562h-2.69a8.51 8.51 0 01-7.12 0H6.25A6.25 6.25 0 000 21.875v.781A2.344 2.344 0 002.344 25h20.312A2.344 2.344 0 0025 22.656v-.781a6.25 6.25 0 00-6.25-6.25z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_12_22">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
