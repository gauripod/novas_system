export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight position={[6, 10, 4]} intensity={0.55} castShadow />
      <directionalLight position={[-6, -4, -6]} intensity={0.2} />
    </>
  );
}
