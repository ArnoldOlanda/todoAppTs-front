import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HamburguerIcon = (props: any) => {
  return (
    <Svg
      width={16}
      height={10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke="#000" strokeWidth={2} strokeLinecap="round" d="M1 1L15 1" />
      <Path stroke="#000" strokeWidth={2} strokeLinecap="round" d="M3 9L13 9" />
    </Svg>
  );
};
