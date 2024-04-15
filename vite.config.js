import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define Vite configuration
export default defineConfig({
  plugins: [react()], // Use Vite plugin for React
  server: {
    port: 3000, // Set server port to 3000
    open: true, // Open browser automatically when server starts
  },
});
