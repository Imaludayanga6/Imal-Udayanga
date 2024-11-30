import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: "/<My-portfolio>/", // Replace <repository-name> with your repo name
});
