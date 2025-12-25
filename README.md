# Blog API
A RESTful blog API backend built with Node.js, Express, and PostgreSQL, Prisma ORM, developed as part of The Odin Project backend curriculum.
This project teaches how to design a backend API independently from any frontend UI — enabling multiple clients (websites, mobile apps, etc.) to interact with the same backend via JSON. 

## 🎨 Live preview
The server will take a few second to start as it'is deployed on free plan (Le serveur prendra un peu de temps pour demarer car l'app est deploye sur un plan gratuit de Render). 
AS you don't have access to the admin app, this is a screenshot:
<p align="center">
  <img src="https://res.cloudinary.com/deeklaav9/image/upload/v1766526584/blog_api2_yq4tcx.png" alt="Admin app" width="60%">
</p>
[See the apllication (Voir l'application)](https://siakablog-web-d1yr.vercel.app/)
- Be aware that i refactored the app by removing Comments part so users can't authenticate anymore, they can't comments posts (The site is free as it is my personal blog, i don't need comments) and you will don't see any comment stuff. Only admin application need a authentication. If you want to see the original source code [See here](https://github.com/chacka1315/blog-app)

## 🚀 Project Summary
- This application provides a JSON API for a blog system where:
- Blog posts and comments are stored in a database
- Routes return JSON responses instead of HTML
- Responsive React apps (Web/Admin) can fetch, create, update, and delete blog content
- Authentication ( with JWTs) is used to protect certain routes (login → token → API access)
The focus is on API design, separation of concerns (backend vs frontend), and RESTful routes. 

## ✨ Key Features & Concepts
- Express server serving JSON endpoints
- RESTful routing for resources like posts and comments
- Separation of backend API from frontend UI, allowing multiple frontends to consume the same API 
- JWT authentication to protect routes (login → token → authorized API access) 
- CORS configured to allow frontend access from other origins 
- Designed around HTTP verbs (GET, POST, PUT, DELETE) for CRUD actions 


## 🏁 Conclusion
This Blog API project marks a key transition from traditional server‑generated pages to API‑first backend architecture, enabling decoupled frontends and backends — a fundamental skill for modern web development.

## 📁 Project structure
```
.
├── README.md
├── apps
│   ├── admin
│   │   ├── README.md
│   │   ├── dist/
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── public/
│   │   ├── src
│   │   │   ├── App.jsx
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── main.jsx
│   │   │   ├── routes.jsx
│   │   │   └── styles
│   │   └── vite.config.js
│   ├── api
│   │   ├── package.json
│   │   ├── prisma.config.ts
│   │   └── src
│   │       ├── app.js
│   │       ├── config
│   │       ├── controllers/
│   │       ├── errors/
│   │       ├── generated/
│   │       ├── middlewares/
│   │       ├── prisma/
│   │       └── routes/
│   └── web
│       ├── README.md
│       ├── dist/
│       ├── index.html
│       ├── package.json
│       ├── public/
│       ├── src
│       │   ├── App.jsx
│       │   ├── assets/
│       │   ├── components/
│       │   ├── main.jsx
│       │   ├── routes.jsx
│       │   └── styles/
│       ├── vercel.json
│       └── vite.config.js
├── eslint.config.js
├── package.json
├── packages
│   ├── client
│   │   ├── package.json
│   │   └── src
│   │       ├── auth.js
│   │       ├── comment.js
│   │       ├── index.js
│   │       ├── post.js
│   │       └── user.js
│   ├── ui
│   │   ├── package.json
│   │   └── src
│   │       ├── Button.jsx
│   │       ├── Error.jsx
│   │       ├── Icons.jsx
│   │       ├── Input.jsx
│   │       ├── Loader.jsx
│   │       ├── index.jsx
│   │       └── styles
│   └── utils
│       ├── package.json
│       └── src
│           ├── dateFormat.js
│           ├── handleTokenStorage.js
│           ├── index.js
│           ├── slug.js
│           └── validateField.js
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```
