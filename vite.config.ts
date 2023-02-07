import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteDefineEnvs from "vite-define-envs-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    new viteDefineEnvs(["REACT_APP_SC_ATTR", "SC_ATTR"], "process.env")
  ],
})
