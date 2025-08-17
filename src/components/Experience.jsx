import { RigidBody } from "@react-three/rapier";
import { Platform } from "./Platform";
import { CharacterController } from "./CharacterController/CharacterController";
import { Manager } from "../hooks/useYuka";
import { JacobNpc } from "./Npcs";
// import { YukaMesh } from "./Yuka/YukaMesh";

export const Experience = ({ heroRef }) => {
  // Define clones with different positions
  const jacobClones = [
    { id: "jacob-1", name: "Jacob1", position: [0, 0, 8] },
    { id: "jacob-2", name: "Jacob2", position: [3, 0, 5] },
    { id: "jacob-3", name: "Jacob3", position: [-4, 0, 6] },
    { id: "jacob-4", name: "Jacob4", position: [2, 0, -3] },
  ];

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      {/* YUKA manager */}
      <Manager>
        {/* Hero character controller */}
        <CharacterController reference={heroRef} />

        {/* Multiple cloned Jacob NPCs */}
        {jacobClones.map((npc) => (
          <JacobNpc
            key={npc.id}        // ✅ unique key fixes React warning
            name={npc.name}     // ✅ distinct name if needed
            position={npc.position}
            heroRef={heroRef}
          />
        ))}

        {/* <YukaMesh /> */}

        <group>
          {/* Rapier triangle collider for stage */}
          <RigidBody friction={2} colliders="trimesh" type="fixed">
            <Platform />
          </RigidBody>
        </group>
      </Manager>
    </>
  );
};
