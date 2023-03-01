import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PersonalIcon = (props: any) => {
  return (
    <Svg
      width={19}
      height={22}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.5 11c2.998 0 5.429-2.462 5.429-5.5S12.499 0 9.5 0C6.502 0 4.071 2.462 4.071 5.5S6.501 11 9.5 11zm3.8 1.375h-.708a7.31 7.31 0 01-3.092.688 7.324 7.324 0 01-3.092-.688H5.7c-3.147 0-5.7 2.587-5.7 5.775v1.788C0 21.075.912 22 2.036 22h14.928C18.088 22 19 21.076 19 19.937V18.15c0-3.188-2.553-5.775-5.7-5.775z"
        fill="#FBBE62"
      />
    </Svg>
  );
};
