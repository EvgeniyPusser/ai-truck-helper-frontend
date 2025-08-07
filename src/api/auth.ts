// Placeholder file for project structure
// src/api/auth.ts

export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:3001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return await response.json(); // { token, user }
}
