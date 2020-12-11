import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.883}
      height={29.177}
      viewBox="0 0 21.883 29.177"
      {...props}>
      <Path
        d="M14.851 9.751L12.406 12.2l-.017-4.9 2.462 2.456m-2.462 12.52l2.456-2.456-2.445-2.445zm9.494-7.494c0 11.717-4.1 14.395-10.548 14.395S0 26.5 0 14.783 4.753 0 11.2 0s10.683 3.072 10.683 14.783zm-9.032 0l4.525-5.049-7.13-7.653v10.081L6.041 7.955 4.5 9.488l5.283 5.3-5.283 5.3 1.533 1.533 4.206-4.206.131 9.688 7.26-7.266-4.781-5.055z"
        fill="#272727"
      />
    </Svg>
  );
}

export default SvgComponent;
