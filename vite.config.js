import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

export default {
  server: {
    host: true, // 192.168.0.194
    open: true,
  },
  // build: {
  //   outDir: 'build',
  // },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [react(), ssr()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".cjs": "js", // CommonJS 모듈을 JS로 로드하도록 설정
      },
    },
  },
};
