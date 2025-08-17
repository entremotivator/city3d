import { RigidBody } from "@react-three/rapier";
import { Platform } from "./Platform";
import { CharacterController } from "./CharacterController/CharacterController";
import { Manager } from "../hooks/useYuka";
import { JacobNpc } from "./Npcs";

export const Experience = ({ heroRef }) => {
  // Unique IDs and positions for clones
  const jacobClones = [
    { id: "jacob-1", position: [0, 0, 8] },
    { id: "jacob-2", position: [3, 0, 5] },
    { id: "jacob-3", position: [-4, 0, 6] },
    { id: "jacob-4", position: [2, 0, -3] },
  ];

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      {/* YUKA manager */}
      <Manager>
        {/* Hero character controller */}
        <CharacterController reference={heroRef} />

        {/* Jacob clones */}
        {jacobClones.map((npc) => (
          <JacobNpc
            key={npc.id}
            id={npc.id}               // ✅ pass a unique id to avoid conflicts
            name={`Jacob-${npc.id}`}  // ✅ unique name so Yuka AI won’t clash
            position={npc.position}
            heroRef={heroRef}
          />
        ))}

        <group>
          <RigidBody friction={2} colliders="trimesh" type="fixed">
            <Platform />
          </RigidBody>
        </group>
      </Manager>
    </>
  );
};
