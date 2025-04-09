

```markdown
# 🧾 Multi-Step Form (Next.js + React Hook Form + Zod)
![Multi-Step Form Screenshot](https://i.ibb.co.com/xtytWNBw/Screenshot-23.png)

A dynamic, animated multi-step form built using **Next.js**, **React Hook Form**, **Zod**, and **Framer Motion**. Designed for modern web applications, this project supports form validation, API submission with Axios, and MongoDB integration for data persistence. State management is powered by **React Query** for optimal performance.

---

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 🚀 Features

- 🔄 Multi-step form flow
- ✅ Zod schema-based form validation
- 🎬 Smooth transitions with Framer Motion
- 🔌 API calls using Axios
- ⚡ Global state management via React Query
- 🧠 MongoDB database integration
- ♻️ Reusable and modular components
- 📱 Fully responsive and accessible

---

## 🛠 Installation

1. **Clone the repository**

```bash
git clone https://github.com/nodeNINJAr/multi-step-form
cd your-repo
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

---

## ▶️ Usage

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

Update the `.env.local` file to reflect your local or production settings. At a minimum, define:

```env
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

You can extend this for third-party services or additional credentials.

---

## 📦 Dependencies

| Package                    | Description                              |
|----------------------------|------------------------------------------|
| `@hookform/resolvers`      | Validation resolver for React Hook Form  |
| `@tanstack/react-query`    | Data fetching and caching                |
| `axios`                    | HTTP client for API requests             |
| `framer-motion`            | Animations and transitions               |
| `mongodb`                  | MongoDB driver for Node.js               |
| `motion`                   | (Likely duplicate of `framer-motion`)    |
| `next`                     | React framework                          |
| `react`                    | UI library                               |
| `react-dom`                | React DOM bindings                       |
| `react-hook-form`          | Performant form handling                 |
| `react-icons`              | SVG icon library                         |
| `zod`                      | Schema validation                        |

---

## 🧪 Examples

Each step is a modular component:

```tsx
// StepOne.tsx
const StepOne = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input id="email" {...register("email")} />
    </div>
  );
};
```

Use Zod for validation:

```ts
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
```

---

## 🧯 Troubleshooting

- **Form validation not working?** Check Zod schemas and field names.
- **MongoDB errors?** Ensure the URI is correct and the database is online.
- **Transitions not triggering?** Confirm `framer-motion` is correctly implemented and wrapped.

---

## 👥 Contributors

- [Mehedi Hasan](https://github.com/nodeNINJAr)

Feel free to contribute! Fork, create a branch, and submit a pull request.


