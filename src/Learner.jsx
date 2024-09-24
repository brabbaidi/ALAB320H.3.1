// import React from 'react';
// import Score from './Score';  // Import the Score component

// const Learner = ({ name, bio, scores }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{bio}</p>
//       <h3>Scores:</h3>
//       <ul>
//         {scores.map((scoreObj, index) => (
//           <Score 
//             key={index} 
//             date={scoreObj.date} 
//             score={scoreObj.score} 
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Learner;

import React from 'react'
import Score from './Score'
export default function Learner(props) {
  return (
   <div>
    <h1>{props.name}</h1>
    <p>{props.bio}</p>
    {props.scores.map((score,index) =>{
      return <Score date={score.date} score={score.score}/>
    })}
   </div>
  )
}
