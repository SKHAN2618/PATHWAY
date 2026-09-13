# Pathway v3 — multi-page clickable prototype

## Pages
- index.html — landing page
- how-it-works.html
- pricing.html
- marketplace.html
- onboarding.html
- customer-dashboard.html
- professional-dashboard.html
- login.html
- signup.html
- brand-kit.html

## Preview locally
### Option 1 — easiest on Windows/Mac with Python installed
1. Unzip the folder.
2. Open a terminal inside the folder.
3. Run:
   python preview.py
4. Your browser should open:
   http://localhost:8000

### Option 2 — any simple web server
Run:
   python -m http.server 8000
Then open:
   http://localhost:8000

### Option 3 — VS Code
Install the “Live Server” extension, open this folder, right-click index.html, choose “Open with Live Server”.

## Publish free with GitHub Pages
1. Create a GitHub repository.
2. Upload every file in this folder.
3. Repository Settings → Pages.
4. Deploy from branch → main → /root.
5. GitHub gives you a public URL.

This is a static prototype. Buttons and page navigation work, but no real accounts, payments, database, council integrations or AI backend are active yet.
