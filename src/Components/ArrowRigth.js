import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12.908}
      height={20}
      viewBox="0 0 12.908 20"
      {...props}>
      <Path
        d="M12.468 11.062l-8.5 8.5a1.493 1.493 0 01-2.118 0L.44 18.15a1.493 1.493 0 010-2.118l6.023-6.023L.44 3.983a1.493 1.493 0 010-2.118L1.85.44a1.493 1.493 0 012.118 0l8.5 8.5a1.5 1.5 0 010 2.122z"
        fill="#272727"
      />
    </Svg>
  );
}

export default SvgComponent;
