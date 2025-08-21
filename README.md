# 🌊 Ripplr – A Social Media Platform

Ripplr is a **modern social media platform** built with **React Native, Node.js, Express, and MongoDB**, designed for seamless cross-platform experiences.
It integrates **Arcjet, Clerk, Cloudinary, and NativeWind** to provide **secure authentication, media sharing, and personalized user interactions**.

📱 **Mobile App:** Expo + React Native
🌐 **Backend:** Express.js API deployed on **Vercel**

---

## ✨ Features

* **🔑 Authentication** – Sign up / Sign in with **Google & Apple** via **Clerk**.
* **📝 Create & Share Posts** – Upload **text and images** with Cloudinary support.
* **💬 Interactions** – Like, comment, and reply on posts.
* **👥 User Management** – Follow / unfollow users and explore user profiles.
* **🖼 Profile Customization** – Edit profile details and profile picture.
* **🔔 Notifications** – Get notified for likes, comments, and follows.
* **📩 Messaging (Conversations)(in development)** – View and manage message threads.
* **🔍 Search (in development)** – Search for users easily.
* **🗑 Content Control** – Delete posts and comments anytime.
* **⚡ Secure & Scalable** – Powered by **Arcjet security policies** and **serverless backend on Vercel**.

---

## 🛠 Tech Stack

* **Mobile App:** React Native, Expo, NativeWind (Tailwind for React Native)
* **Backend:** Node.js, Express.js, MongoDB, Arcjet
* **Authentication:** Clerk (Google & Apple OAuth)
* **Media Management:** Cloudinary
* **Deployment:** Vercel (Backend API)

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/EcstaticFly/Ripplr.git
cd Ripplr
```

### 2️⃣ Setup Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside `server/` and add:

```bash
MONGODB_URL=your_mongodb_connection_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLERK_SECRET_KEY=your_clerk_secret_key
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key
PORT=5000
```

Run the server locally:

```bash
npm run dev
```

---

### 3️⃣ Setup Mobile App

```bash
cd ../mobile
npm install
```

Create a `.env` file inside `mobile/` and add:

```bash
EXPO_PUBLIC_API_URL=http://localhost:5000/api
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Run the mobile app:

```bash
npx expo start
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to **fork** the repo, open issues, and submit a **pull request**.

---

## 📜 License

This project is licensed under the **GNU General Public License v3**.

---

## 📬 Contact

For inquiries, reach out to me at **[Suyash Pandey](mailto:suyash.2023ug1100@iiitranchi.ac.in)**.
