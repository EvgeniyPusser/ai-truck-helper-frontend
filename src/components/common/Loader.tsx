// Loader component
// src/components/common/Loader.tsx

export default function Loader() {
  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}
