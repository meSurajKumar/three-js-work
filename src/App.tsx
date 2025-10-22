// import {createRoot} from 'react-dom/client';
import {Canvas} from '@react-three/fiber';



function App() {
  


  return (
    <>
      {/* <p className='text-4xl text-blue-600 font-bold underline'>Hello</p>  */}
      <div className='w-full h-full mt-34'> 
        <Canvas camera={{position : [0, 5, 5], fov : 55}} shadows> {/* positions : x, y ,z  repectively  */}
          {/* 
            position: [0, 0, 12]
            Camera ka 3D position scene ke andar:
            X = 0 → center me horizontally
            Y = 0 → center vertically
            Z = 12 → camera 12 unit aage (z-axis me peeche hta hua)
            👉 Matlab: camera scene se 12 units door rakha gaya hai, taaki objects clearly dikhen.
            Agar z=2 kar doge to camera bahut close ho jayega.


            FOV = Field of View (kitna wide camera dekh sakta hai).
            Yeh degrees me hota hai — jaise real camera ka lens angle.
            Chhoti value (e.g. 20) → zoomed-in / telephoto look
            Badi value (e.g. 90) → wide-angle look
          
          */}
          
          <mesh position={[-2,0,0]} castShadow receiveShadow>
             <boxGeometry args={[5,2,7]}/> {/* width, length and depth: */}
              <meshStandardMaterial/>
              {/* <meshStandardMaterial color='orange/> */}

          </mesh>
          <ambientLight intensity={0.01}/> {/* ambient ligh is global ligt  for all objects in the scene and it's same for all the objects no shadows were created */}
          <directionalLight position={[0,-5,0]} color='red'/> {/* Directinal light is a light which comes from scource and it create shadows like sun light */}
          <directionalLight position={[0,5,0]} color='pink'/>
          <directionalLight position={[5,0,0]} color='yellow'/>
          <directionalLight position={[-5,0,0]} color='blue'/>
          <directionalLight position={[0,0,5]} color='orange'/>
          <directionalLight position={[0,0,-5]} color='green'/>
            {/*  [0,5,5] = respectivly [x,y,z]   */}

        /** Sphere Section */
        <mesh position={[2,0,0]} castShadow receiveShadow>
          <sphereGeometry args={[1.5,32,32]}/>
          <meshStandardMaterial color='hotpink'/>

        </mesh>

        </Canvas>
      </div>
    </>
  )
}

export default App
