import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const config = {
    base: "/gym24/",
  };

  if (command !== "serve") {
    config.base = "/";
  }

  return config;
});
