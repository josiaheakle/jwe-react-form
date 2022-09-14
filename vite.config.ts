import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts()],
	build: {
		outDir: "dist",
		emptyOutDir: true,
		lib: {
			entry: "src/index.ts",
			name: "NPM",
			formats: ["es"],
			fileName: "jwe-react-form",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
