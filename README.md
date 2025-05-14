

---

# ⚡ React + TypeScript + Vite Starter

A minimal setup to build a fast and modern React application using Vite and TypeScript.

---

## 🚀 Features

⚛️ React + TypeScript
⚡ Vite for fast development
 ♻️ Hot Module Replacement (HMR)
 ✅ ESLint with recommended rules

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 ESLint Configuration (Optional)

To enable type-aware linting for better code quality, update `eslint.config.js`:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

---

## 📁 Folder Structure

```
src/
├── assets/
├── components/
├── App.tsx
├── main.tsx
tsconfig.json
vite.config.ts
```

---

## 🧾 License

MIT

---

Let me know if you'd like to add instructions for deploying, contributing, or customizing the template.

