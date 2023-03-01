import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const WorkIcon = (props: any) => {
  return (
    <Svg
      width={21}
      height={18}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.125 12.214a.65.65 0 01-.656.643H8.53a.65.65 0 01-.656-.643v-1.928H0v5.785C0 17.1.919 18 1.969 18H19.03c1.05 0 1.969-.9 1.969-1.929v-5.785h-7.875v1.928zm5.906-8.357H15.75V1.93C15.75.9 14.831 0 13.781 0H7.22C6.169 0 5.25.9 5.25 1.929v1.928H1.969C.919 3.857 0 4.757 0 5.786V9h21V5.786c0-1.029-.919-1.929-1.969-1.929zm-5.906 0h-5.25V2.571h5.25v1.286z"
        fill="#83B1F6"
      />
    </Svg>
  );
};
