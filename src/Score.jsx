// import React from 'react';

// const Score = ({ date, score }) => {
//   return (
//     <li>
//       {date}: {score}
//     </li>
//   );
// };

// export default Score;

import React from "react";
export default function Score(props) {
  return (
    <div>
      <div>{props.date}</div>
      <p>{props.score}</p>
    </div>
  );
}
