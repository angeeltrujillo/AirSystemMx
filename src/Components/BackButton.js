import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12.914}
      height={20}
      viewBox="0 0 12.914 20"
      {...props}>
      <Path
        d="M.438 8.938l8.5-8.5a1.493 1.493 0 012.118 0l1.412 1.412a1.493 1.493 0 010 2.118L6.451 9.997l6.023 6.023a1.493 1.493 0 010 2.118l-1.412 1.418a1.493 1.493 0 01-2.118 0l-8.5-8.5a1.5 1.5 0 01-.006-2.124z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
