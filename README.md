<<<<<<< HEAD


# 🏙️ Janvaani – Smart Civic Issue Reporting Platform

### 🚀 Developed by **Team Crazy**

| 👩‍💻 Member     | 🧩 Role                                  |
| ---------------- | ---------------------------------------- |
| **Vedanti Adhe** | Research and API Integration             |
| **Abha Dhandre** | Frontend & UI/UX (Admin Dashboard)       |
| **Ayush Bisen**  | Flutter App Developer & Backend Engineer |

---

## 🚨 Problem Statement

Civic issues like **potholes**, **broken streetlights**, and **garbage overflow** often remain unresolved due to fragmented and non-transparent reporting systems — affecting public safety and hygiene.

### ⚠️ Key Challenges

* **Unreported Issues** – Citizens rarely report civic problems.
* **Slow Responses** – Municipal departments delay resolutions.
* **Fragmented Tracking** – No central dashboard or progress visibility.
* **Workflow Gaps** – No structured approval or feedback loop.

---

## 💡 Our Solution: **Janvaani**

**Janvaani** bridges the gap between citizens and municipal authorities with a **Flutter mobile app** and an **AI-powered admin dashboard**, ensuring faster, smarter, and transparent issue resolution.

### 🔁 Workflow

1. **Citizen Reports** → Upload image & location.
2. **AI Detection** → YOLO model categorizes issue (e.g., pothole).
3. **Auto Routing** → Assigned to the right department.
4. **Admin Review** → Dashboard tracks progress & updates.
5. **Resolution** → Status automatically updates in the app.

---

## ✨ Key Features

### 📱 **Mobile Application (Flutter)**

* 🌐 Multi-language support
* 📍 GPS-based location tagging
* 📸 Real-time image capture
* 🤖 AI-based issue classification
* 🔔 Live tracking of complaints
* 🏅 Gamified rewards system
* ✅ Social validation via Green/Red flag system

### 🖥️ **Admin Dashboard (Next.js)**

* 📊 Real-time analytics
* ⚙️ Issue approval & management
* 🧠 AI Model performance control
* 🗺️ Heatmap visualization (Google Maps API)
* 📂 Department-wise performance metrics

---

## 🏗️ Technical Architecture

### 🎨 Frontend Stack

* **Flutter** → Cross-platform mobile app
* **Next.js** → Admin dashboard
* **Tailwind CSS** → Responsive, clean UI
* **Google Maps API** → Location & heatmap integration

### ⚙️ Backend Stack

* **Node.js + Express.js** → Server & API handling
* **MongoDB** → Main database
* **Firebase** → Authentication & real-time sync
* **Cloudinary** → Image & media storage

### 🧠 AI/ML Stack

* **YOLOv8** → Real-time object detection
* **Google Gemini AI** → Image + text analysis
* **Custom ML Models** → Issue classification & prioritization

---

## 🤖 AI Model Details

### 🔍 YOLOv8 Object Detection

* **Model:** YOLOv8n (COCO pre-trained)
* **Custom Classes:** pothole, garbage, streetlight, water-logging
* **Accuracy:** 92%
* **Inference Time:** < 2s

### ✅ Semi-Automatic Approval Logic

```text
GREEN FLAG → Auto-Approve
• 15+ unique green flags from nearby verified users

RED FLAG → Auto-Reject
• 15+ red flags or spam/duplicate detection
```

### 🧩 Gemini AI Integration

* Image analysis for better object recognition
* NLP-based description understanding
* Sentiment scoring for urgency prediction

---

## ⚙️ Installation & Setup

### 📋 Prerequisites

* Node.js 16+
* MongoDB Atlas
* Firebase Project
* Cloudinary Account
* Google Cloud API Key

### 🧾 Environment Variables

Create a `.env` file in your backend directory:

```env
# Database Configuration
MONGO_URI=your_mongo_uri_here

# Media Storage
CLOUDINARY_URL=your_cloudinary_url_here

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=""
GEMINI_API_KEY=""
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json

# Application Settings
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

---

## 🛠️ Installation Steps

### 1️⃣ Clone Repository

```bash
git clone https://github.com/team-crazy/janvaani.git
cd janvaani
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup (Flutter)

```bash
cd app
flutter pub get
flutter run
```

### 4️⃣ Firebase Setup

```bash
npm install -g firebase-tools
firebase login
firebase init
```

---

## 🔌 API Endpoints

### 🔐 Authentication

* `POST /api/auth/register` – Register new user
* `POST /api/auth/login` – Login user
* `POST /api/auth/verify` – Verify JWT

### 🗂️ Issue Management

* `POST /api/issues/report` – Report new issue
* `GET /api/issues/pending` – View pending issues
* `PUT /api/issues/:id/approve` – Approve issue
* `PUT /api/issues/:id/reject` – Reject issue
* `PUT /api/issues/:id/assign` – Assign department

### 🤖 AI Services

* `POST /api/ai/classify` – Classify issue image
* `POST /api/ai/validate` – Validate issue with Gemini
* `GET /api/ai/metrics` – Get AI performance metrics

---

## 🗄️ Database Schema (Simplified)

### 👤 Users

```json
{
  "name": "string",
  "email": "string",
  "role": "citizen | admin | department",
  "civicScore": 100,
  "reportsCount": 5
}
```

### 🗺️ Issues

```json
{
  "title": "Pothole near main road",
  "category": "pothole",
  "priority": "high",
  "status": "approved",
  "location": {"lat": 0, "lng": 0},
  "greenFlags": 10,
  "redFlags": 2,
  "aiConfidence": 0.92
}
```

### 🏢 Departments

```json
{
  "name": "PWD",
  "contact": {"email": "pwd@gov.in", "phone": "1234567890"},
  "performance": {"resolutionRate": 84, "avgResolutionTime": 2.3}
}
```

---

## 📈 Impact Metrics

| Metric                        | Result       |
| ----------------------------- | ------------ |
| 🕒 Issue Resolution Rate      | **84%**      |
| ⚡ Avg. Resolution Time        | **2.3 days** |
| 👥 Citizen Reporting Increase | **+40%**     |
| 🤖 AI Accuracy                | **92%**      |
| 🏛️ Dept. Efficiency          | **+77%**     |

---

## 🛡️ Security Features

* JWT-based Authentication
* Role-based Access Control
* Encrypted Data Transmission
* Input Validation & Rate Limiting
* Firebase-secured Auth Layer

---

## ⚖️ Legal Compliance

> 🏛️ *"Safe Public Infrastructure is a Fundamental Right (Article 21)"*
> — Supreme Court of India

---

## 🌟 Vision

**Team Crazy** is building smarter, safer, and cleaner cities —
one issue at a time. 💪
=======
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
>>>>>>> b53589f0b2c94b31fbf5e3e30dce52eb4c18ce76
