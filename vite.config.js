import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  server: {
    host: true, // 192.168.0.194
    port: 5000,
    open: true,
  },
  // build: {
  //   outDir: 'build',
  // },
  plugins: [react(), ssr()],
};
