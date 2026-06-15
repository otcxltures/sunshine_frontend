Development notes
=================

Run frontend (dev):

```bash
cd sunshine_frontend
npm install
npm start
```

If Vite picks a different port, open the URL printed in terminal (default 5173).

Backend (local) should be running at `http://127.0.0.1:8000` and the frontend uses `VITE_API_URL` in `.env`.

Test accounts:
- Login as admin: username `admin` password `anything` → returns admin token for local dev.

Seed backend (if needed):

```bash
cd ../sunshine_backend
PYTHONPATH=. ./venv/bin/python scripts/seed.py
```
