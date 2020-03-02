import * as d3 from 'd3';
import React from "react";
import { animated, useSpring } from 'react-spring';

function SvgStickLegs(props) {
  const
    line = d3.line(),
    a0 = line([[800, -1103], [500, 97]]),
    b0 = line([[800, -1103], [1100, 97]]),
    a1 = line([[1500, -1103], [1800, 97]]),
    b1 = line([[1500, -1103], [1200, 97]])

  const springA = useSpring({ d: a1, from: { d: a0 }});
  const springB = useSpring({ d: b1, from: { d: b0 }});
  const springC = useSpring({ cx: 1500, from: { cx: 800 }});

  // const [ springs ] = useSprings(2, index =>
  //   index === 0
  //     ? ({ d: d1, from: { d: d0 }, config: { reset: true } })
  //     : ({ d: d0, from: { d: d1 } }));

  return (
    <>
      <svg viewBox="0 0 16000 1600" {...props}>
        <g transform="translate(0 1303)">
          <animated.path
            id="p0"
            d={springA.d}
            fill="#803300"
            stroke="#69f"
            strokeWidth={32}
            strokeLinecap="round"
          />
          <animated.path
            id="p1"
            d={springB.d}
            fill="#803300"
            stroke="#f90"
            strokeWidth={32}
            strokeLinecap="round"
          />
          <animated.circle cx={springC.cx} cy={-1103} r={100} fill="#fc0" />
        </g>
      </svg>
    </>
  );
}

export default SvgStickLegs;

