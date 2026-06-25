# Fermo — Framer → React conversion

This repository contains **two fully independent implementations** of the
[Fermo](https://fermo.framer.website/) portfolio template (originally built in Framer
by Federico Esposito), reconstructed from the supplied Framer / unframer exports.

| Project | Folder | Stack | Description |
|---------|--------|-------|-------------|
| **Project 1** | [`project-1-framer-reconstruction/`](./project-1-framer-reconstruction) | React + Vite + bundled Framer runtime | Faithful reconstruction assembled from the Framer "Design to AI" / unframer component exports. Keeps `framer-motion` + the bundled `_framer-runtime.js`. |
| **Project 2** | [`project-2-react-typescript-clone/`](./project-2-react-typescript-clone) | React + Vite + **TypeScript** | A clean, fully independent rewrite with **no** Framer runtime, **no** unframer wrappers and **no** property controls — visually and behaviourally identical. |

Each project is delivered as its own pull request from its own branch:

- `feature/project-1-framer-reconstruction` → **PR #1**
- `feature/project-2-react-typescript-clone` → **PR #2**

See each project's own `README.md` for setup and run instructions.
