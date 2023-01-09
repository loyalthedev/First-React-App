// import React, { useState, useEffect } from 'react';

// const Team = () => {
//     const [number, setNumber] = useState(12);
//     const [name, setName] = useState('');
//     const [visibleName, setVisibleName] = useState('')
//     const [isVisible, setIsVisible] = useState(true)


    
//   return (
//     <div>
//       {isVisible && (
//         <div>
//           <h2>{number}</h2>
//           <h2>{visibleName}</h2>
//           <input type="text" 
//           placeholder='Enter name' 
//           value={name} 
//           onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//       )}

//       <div className="flex flex-wrap items-center gap-4 py-6">
//         <button className='btn' onClick={() => setNumber(number + 1)}>Increase Number</button>
//         <button className='btn' onClick={() => setVisibleName(name)}>Change name</button>
//         <button className='btn' onClick={() => setNumber(number - 1)}>Decrease number </button>
//         <button className='btn' onClick={() => setIsVisible(!isVisible)}>toggle visibility</button>
//       </div>
//     </div>
//   );
// }

// export default Team
