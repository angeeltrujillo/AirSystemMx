import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.999}
      height={40}
      viewBox="0 0 20.999 40"
      {...props}>
      <Path
        d="M13.349 20.314l7.236-8.073L9.181 0v16.12L2.454 9.392 0 11.846l8.442 8.469L0 28.784l2.454 2.454 6.727-6.727L9.392 40l11.607-11.613zm3.192-8.047l-3.9 3.9-.026-7.836zm-3.9 12.189l3.9 3.9-3.931 3.931z"
        fill="#000000"
      />
    </Svg>
  );
}
export default SvgComponent;
