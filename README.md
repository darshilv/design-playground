# Design Playground

An experimental **React + TypeScript + Vite** setup with **TailwindCSS** and **shadcn/ui** components for rapid prototyping.  
The goal: make it easy for designers and engineers to **try interaction patterns, test ideas, and share prototypes quickly**.

---

## 🚀 Features

- ⚡ **Vite** – fast dev server with hot module replacement
- 🎨 **TailwindCSS** – utility-first styling with design tokens baked in
- 🧩 **shadcn/ui** – composable, accessible components
- 🪝 **Zustand + localStorage** – simple state management + persistence
- 🔍 **TypeScript + ESLint** – type safety and linting for a smoother dev experience

---

## 🛠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/darshilv/design-playground.git
cd design-playground
```

### 2. Install packages

```bash
npm install
# or
yarn install
```

### 3. Run locally

```bash
npm run dev
```

Visit http://localhost:5173 in your browser.

In case you have multiple dev servers, look for the port number similar to "5173" in the CLI output

---

## How to Use

- Start by editing files in `src/` to experiment with new flows.
- Add pages under `src/pages/` for different prototype ideas. Think of them as containers/organisms
  - There are two examples of page types in the repo "home" and "experiment-one".
    - home does not inherit the Rippling chrome
    - experiment-one inherits the Rippling chrome
    - the `src/pages/index.tsx` contains routing example that any LLM agent will be able to update for you
- Use Zustand for any state that needs to be shared across features.
- Persist state to `localStorage` when you want the prototype to remember between reloads.
- Use URL params for filters, selections, or other sharable state.

---

## Policy

- the repo includes a design policy file at `/llm/policy/react.yml` which you can ask the AI agents to refer for clear outcomes
- Feel free to make updates to this and share what works for you

---

> This repo is for learning, testing, and fast iteration. It’s a sandbox for creative exploration, not production code.
> Not recommeded for simple and easy turnarounds
