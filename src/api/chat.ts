// API call for Chat AI
// src/api/chat.ts

export async function fetchMovePlan(formData: any) {
  const response = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: JSON.stringify(formData) }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch move plan");
  }

  const data = await response.json();
  return data.reply;
}

