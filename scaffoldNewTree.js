import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const structure = [
  "public/favicon.ico",
  "public/index.html",
  "public/manifest.json",
  "src/api/auth.ts",
  "src/api/users.ts",
  "src/assets/logo.svg",
  "src/assets/react.svg",
  "src/components/common/Navbar.tsx",
  "src/components/Dashboard/ClientDashboard.tsx",
  "src/components/Dashboard/MoverDashboard.tsx",
  "src/components/Dashboard/TruckOwnerDashboard.tsx",
  "src/components/Dashboard/HelperDashboard.tsx",
  "src/components/Dashboard/AgentDashboard.tsx",
  "src/components/Auth/Login.tsx",
  "src/components/Auth/Signup.tsx",
  "src/context/AuthContext.tsx",
  "src/hooks/useAuth.ts",
  "src/pages/About.tsx",
  "src/pages/Contact.tsx",
  "src/pages/NotFound.tsx",
  "src/pages/Dashboard.tsx",
  "src/pages/Auth.tsx",
  "src/store/useUserStore.ts",
  "src/styles/theme.ts",
  "src/types/user.ts",
];

const placeholder = "// Placeholder file for project structure";

structure.forEach((file) => {
  const filePath = path.join(__dirname, file);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, placeholder);
});

console.log("Scaffolding complete. Existing files were preserved.");
