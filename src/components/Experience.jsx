import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { ContactShadows } from '@react-three/drei'
import { T2 } from "./T2";

export const Experience = () => {

  const {animation} = useControls({
    animation: {
      Value: "Typing",
      options: ["Typing","hi","Standing"]
    },
  } );



  return (
    <>
      {/* <OrbitControls />
      <T2/>
      <ambientLight intensity={1}/> */}

      <Sky/>
      <Environment preset="sunset"/>
      <group position-y={-1}>
      <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
      <Avatar animation={animation}/>
      {
        animation==="Typing" && (
        <mesh scale={[0.8,0.5,0.8]} position-y={0.2}>
        <boxGeometry/>
        <meshStandardMaterial color="White"/>
      </mesh>
        )
      }
      
      <mesh
      scale={5}
      rotation-x={-Math.PI*0.5}
      position-y={-0.001}>
        
        <planeGeometry></planeGeometry>
        <meshStandardMaterial color="White"/>
      </mesh>
      </group>
    </>
  );
};
