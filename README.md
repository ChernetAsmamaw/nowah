# Nowah

Nowah is your ultimate subscription-based solution for simplified living in Kigali. We help busy professionals, young families, and expats reclaim their time through premium, reliable home services:

- 🧼 Expert Cleaning  
- 🍱 Ready-to-eat Meal Deliveries  
- 👕 Laundry & Ironing Services  

## 🎯 Project Goal

Build the **frontend** of the Nowah platform using **React**, starting with a minimal and beautiful **landing page**.

---

## ✨ Features (Planned)

- Responsive landing page with clean UI
- Subscription overview section
- Service highlights (Cleaning, Meals, Laundry)
- Call-to-action (CTA) for onboarding
- Testimonials and trust badges
- Newsletter signup

---

## 🎨 Design Theme

| Element           | Color               |
|------------------|---------------------|
| Primary           | Green (`#1E7F3E`)   |
| Action Buttons    | Orange (`#FF8C42`)  |
| Background & Text | White / Neutral     |

The aesthetic focuses on a **clean, calming interface** with energetic orange CTAs to guide users.

---

## 🧱 Frontend Tech Stack

| Tech       | Description                         |
|------------|-------------------------------------|
| React      | JavaScript framework for UI         |
| Vite       | Lightweight build tool              |
| TailwindCSS| Utility-first CSS framework         |
| React Router | For page navigation               |
| Axios      | For future API integration          |

---

## 🏗️ Architecture Overview

```plaintext
nowah-frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Logos, images
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (Landing, etc.)
│   ├── styles/           # Global styles (Tailwind config)
│   ├── App.jsx           # Root component
│   ├── main.jsx          # React DOM render
└── tailwind.config.js    # Theme customization
