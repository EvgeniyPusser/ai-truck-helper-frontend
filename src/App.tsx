import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    volume: 0,
    needHelpers: false,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: { target: { name: any; value: any; type: any; checked: any; }; }) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: JSON.stringify(formData) }),
      });

      const data = await response.json();
      setResult(data.reply);
    } catch (err) {
      if (err instanceof Error) {
        alert("Error: " + err.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>AI Truck Helper - Move Planner</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from"
          placeholder="From (city)"
          value={formData.from}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="text"
          name="to"
          placeholder="To (city)"
          value={formData.to}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="number"
          name="volume"
          placeholder="Volume (m3)"
          value={formData.volume}
          onChange={handleChange}
          min="1"
          required
          className="form-input"
        />

        <label className="form-label">
          <input
            type="checkbox"
            name="needHelpers"
            checked={formData.needHelpers}
            onChange={handleChange}
          />{" "}
          Need helpers
        </label>

        <button type="submit" disabled={loading} className="form-button">
          {loading ? "Planning..." : "Get Plan"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Plan Results:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

