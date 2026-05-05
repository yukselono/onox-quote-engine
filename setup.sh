#!/bin/bash

# package.json
cat << 'PKG' > package.json
{
  "name": "onox-quote-engine",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.445.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
PKG

# index.html
cat << 'HTML' > index.html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <title>ONOX Quote Engine</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
HTML

# vite config
cat << 'VITE' > vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
VITE

# src klasörü
mkdir src

# main.jsx
cat << 'MAIN' > src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
MAIN

# App.jsx (senin verdiğin kod)
cat << 'APP' > src/App.jsx
// BURAYA SENİN TÜM REACT KODUNU YAPIŞTIR
APP

# gitignore
cat << 'GIT' > .gitignore
node_modules
dist
.env
.DS_Store
GIT

chmod +x setup.sh
