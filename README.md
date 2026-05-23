# 🏆 RCB Champions 2025 | Ee Sala Cup Namdu! ❤️🖤

Welcome to the **RCB Champions 2025** celebration web application! This modern, interactive React + Vite web application celebrates Royal Challengers Bengaluru's historic first-ever IPL title victory in 2025.

This repository is pre-configured and structured to be **directly uploaded to GitHub** and **automatically hosted on GitHub Pages** with perfect file connections and seamless SPA (Single Page Application) routing.

---

## 📁 Repository Folder Structure

When you upload this project to GitHub, your repository will look exactly like this:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # 🤖 Automatic GitHub Actions Deployment Workflow
├── public/
│   ├── gallery/              # 📸 High-quality celebration images
│   ├── favicon.svg           # 📌 Site favicon
│   ├── icons.svg             # ⚡ Vector icons
│   ├── rcb-logo.svg          # 🏆 Official RCB logo
│   └── 404.html              # 🔗 SPA routing fallback (fixes page refresh 404s)
├── src/
│   ├── components/           # 🧩 Modular React components
│   ├── pages/                # 📄 View pages (Home, Journey, Players, Stats, etc.)
│   ├── context/              # 🔄 App-wide state management
│   ├── utils/                # 🛠️ Helper utility functions
│   ├── App.jsx               # 🛣️ React Router structure & entry App component
│   ├── index.css             # 🎨 Tailwind CSS imports & animations system
│   └── main.jsx              # 🚀 React DOM mounting entry point
├── .gitignore                # 🚫 Tells Git what to ignore (like node_modules and dist)
├── index.html                # 🌐 App HTML wrapper & routing redirect parser
├── package.json              # 📦 Project dependencies & run scripts
├── postcss.config.js         # 🎨 PostCSS configuration for Tailwind
├── tailwind.config.js        # 📐 Custom Tailwind CSS theme tokens & design system
└── vite.config.js            # ⚡ Vite config with relative base paths pre-configured
```

---

## 🚀 How to Directly Upload and Host on GitHub

Follow these simple steps to put your site online in less than 5 minutes!

### Option A: Using the Command Line (Recommended)

Open your terminal in this folder (`Site`) and run the following commands:

```bash
# 1. Initialize git
git init

# 2. Add all files (excluding node_modules automatically via .gitignore)
git add .

# 3. Create your first commit
git commit -m "feat: initial commit of RCB Champions 2025 website"

# 4. Create a new repository on github.com (do not add a README, license, or gitignore there)
# 5. Link your local repository to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Rename default branch to main
git branch -M main

# 7. Push your files to GitHub
git push -u origin main
```

---

### Option B: Drag & Drop via GitHub Website (If you don't have Git installed)

1. Create a **new repository** on [github.com](https://github.com). Keep it public, and do **not** check "Add a README file" or "Add .gitignore".
2. Click the **"uploading an existing file"** link on the empty repository page.
3. Select **all the files and folders** inside your local `Site` folder (except the `node_modules` folder, which is huge and unnecessary to upload) and drag them into the upload box.
4. Wait for the upload to complete, type a commit message (e.g., `Initial commit`), and click **Commit changes**.

---

## 🌐 Activating Your Free Live Website (GitHub Pages)

Once you upload the files, the pre-built **GitHub Action** will automatically run to build and host your website. You only need to enable it in your GitHub repository settings:

1. On your GitHub repository page, go to the **Settings** tab.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** -> **Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**.
4. That's it! 🚀 

Go to the **Actions** tab at the top of your repository. You will see a workflow running called `Deploy to GitHub Pages`. Once it finishes, it will print the live URL of your website (e.g., `https://your-username.github.io/your-repo-name/`).

---

## 🔒 What Makes the Connections "Perfect"?

To ensure everything runs flawlessly when hosted on GitHub Pages, we have configured two advanced features:

1. **Relative Asset Base Path (`vite.config.js`)**
   ```javascript
   base: './'
   ```
   By default, Vite assumes the site is hosted at the root domain (`domain.com`). GitHub Pages hosts your site in a subfolder (`domain.com/repo-name/`). Our pre-configured `base: './'` makes all asset paths relative, so images, styles, and scripts load flawlessly on any path.

2. **Clean Single-Page Application (SPA) Routing (`public/404.html` & `index.html`)**
   If you refresh the browser while on a route like `/journey` or `/players`, GitHub Pages normally shows a `404 Not Found` error. We have integrated the industry-standard `spa-github-pages` redirect script. When a user lands on a deep route or refreshes, `404.html` instantly routes them back to the primary app wrapper and preserves the history stack, maintaining **100% connected paths** without messy hashes (`#`) in your URLs!

---

## 🛠️ Local Development

If you want to run the project locally on your machine:

1. Open your terminal in this directory.
2. Install the packages:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the browser link shown in the terminal (usually `http://localhost:3000`).

---
### *Ee Sala Cup Namdu! 🏆 Play Bold!*
