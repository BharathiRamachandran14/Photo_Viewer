import { useState } from 'react';
import './App.css';
import PhotoViewer from './PhotoViewer/PhotoViewer';
import ImageSelector from './PhotoViewer/ImageSelector';


function App() {
  const [imgID, setImgID] = useState(10);
  
  return (
      <div>
          <h1>React Photo Viewer</h1>
          <div className = 'photoViewer'>
            <PhotoViewer link={`https://picsum.photos/id/${imgID}/1000/500.jpg`} />
          </div>
          <div className = 'imageSelector'>
            <ImageSelector imgID={imgID} setImgID={setImgID}/>
          </div>
      </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (

//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App
