import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ShoopingIcon = (props: any) => {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.171 11.77l1.806-8.125c.13-.586-.306-1.145-.894-1.145H6.081L5.73.75A.922.922 0 004.833 0H.917A.927.927 0 000 .938v.625c0 .517.41.937.917.937h2.669l2.683 13.415a2.195 2.195 0 00-1.075 1.898c0 1.208.958 2.187 2.14 2.187 1.18 0 2.138-.98 2.138-2.188 0-.612-.246-1.165-.642-1.562h8.007c-.396.397-.643.95-.643 1.563 0 1.208.958 2.187 2.14 2.187 1.18 0 2.138-.98 2.138-2.188 0-.866-.492-1.614-1.206-1.968l.21-.949c.131-.586-.305-1.145-.893-1.145H8.33l-.25-1.25h11.196a.921.921 0 00.894-.73z"
        fill="#87E096"
      />
    </Svg>
  );
};
