# Hostel Management UI (Simple)

This workspace contains a lightweight, static frontend prototype for a hostel management system — admin and student interfaces created with Bootstrap 5. No server is required to view the pages (just open the HTML files in a browser), but the pages include forms that are currently static placeholders and need backend wiring for full functionality.

Core pages (examples):
- `hostel-admin.html` — Admin panel (dashboard, rooms, students, payments, maintenance, settings)
- `admin-announcements.html` — Admin announcements management (create, list, filter)
- `rooms.html`, `students.html`, `payments.html`, `maintenance.html`, `settings.html` — Admin sub-pages
- `student-dashboard.html` — Student landing/dashboard view
- `my-room.html` — Student "My Room" page
- `student-payments.html` — Student payments and history
- `student-maintenance.html` — Student maintenance requests
- `student-profile.html` — Student profile and settings
- `announcements.html` — Student-facing announcements
- `login.html`, `register.html`, `reset-password.html` — Authentication pages (static)

Assets & styles:
- `admin-styles.css` — Shared styles for admin/student pages
- `admin.js` — Small JS for UI interactions (sidebar toggle, etc.)

Recent additions and updates (Oct 22, 2025):
- Added `admin-announcements.html` (admin UI to manage announcements).
- Added student pages: `my-room.html`, `student-payments.html`, `student-maintenance.html`, `student-profile.html`.
- Updated `login.html` to include a Student/Admin tab and an Admin login form that posts to `hostel-admin.html`.
- Added `.profile-photo` utility to `admin-styles.css` and applied it in `student-profile.html` to ensure profile images fit their container.
- Updated admin sidebars in `rooms.html`, `students.html`, `payments.html`, `maintenance.html`, and `settings.html` to include a link to `admin-announcements.html`.

Notes & next steps:
- These pages are static HTML prototypes. To make them functional you'll need a backend (API + DB) to handle authentication, data storage, and actions (payments, maintenance, announcements publishing).
- I can generate SQL migrations and a minimal API scaffold (Node/Express or Python/FastAPI) if you'd like to wire up authentication and persistence.

If you want a short changelog or a different layout for the README, tell me which format you prefer and I'll adjust it.
