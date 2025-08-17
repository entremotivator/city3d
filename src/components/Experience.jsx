import { RigidBody } from "@react-three/rapier";
import { Platform } from "./Platform";
import { CharacterController } from "./CharacterController/CharacterController";
import { Manager } from "../hooks/useYuka";
import { JacobNpc } from "./Npcs/JacobNpc"; // make sure path matches your project

export const Experience = ({ heroRef }) => {
  // List of Jacob NPC clones with unique IDs + positions
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

        {/* Multiple Jacob NPCs */}
        {jacobClones.map((npc) => (
          <JacobNpc
            key={npc.id}
            id={npc.id}              // ✅ unique for Yuka
            name={npc.name}          // ✅ unique display/AI name
            position={npc.position}
            heroRef={heroRef}        // still pass hero for interactions
          />
        ))}

        <group>
          {/* Rapier collider for stage */}
          <RigidBody friction={2} colliders="trimesh" type="fixed">
            <Platform />
          </RigidBody>
        </group>
      </Manager>
    </>
  );
};
