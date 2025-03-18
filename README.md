# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Drag-and-Drop Workflow Builder

This project is a **Drag-and-Drop Workflow Builder** built using **Vite + React**. It allows users to create, edit, and manage workflows using an intuitive drag-and-drop interface. Users can add nodes, connect them, edit their properties, and save or load workflows.

## 🚀 Features

- **Drag-and-Drop Interface**: Create and connect nodes seamlessly.
- **Responsive Design**: Fully functional on all screen sizes, including mobile.
- **Node Properties Panel**: Edit properties like labels and descriptions.
- **Save & Load Workflows**: Store workflows in local storage and reload them.
- **Dark Mode**: Toggle between light and dark themes.
- **Undo & Redo**: Maintain workflow history for easy modifications.
- **Redux Integration**: Manage state efficiently with Redux.

## 📌 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## 🛠 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/drag-drop-workflow.git
   cd drag-drop-workflow
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## 🏃 Running the Application

To start the development server:
```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000`.

## 📦 Building for Production

To create a production build:
```sh
npm run build
# or
yarn build
```

## 🔍 Previewing the Production Build

To preview the production build locally:
```sh
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
├── src
│   ├── components    # UI Components (Sidebar, Canvas, etc.)
│   ├── pages         # Page-level components
│   ├── store        # Redux store and slices
│   ├── assets        # Static assets like styles and images
├── public            # Public assets (index.html, favicon, etc.)
├── vite.config.js    # Vite configuration file
├── vercel.json       # Vercel deployment configuration
```

## 🌍 Deployment

This project is configured for **Vercel deployment**. Push changes to the main branch, and Vercel will automatically build and deploy the application.

## 👥 Contributing

Contributions are welcome! Feel free to **open an issue** or **submit a pull request** if you have any suggestions or improvements.

## 📜 License

This project is licensed under the **MIT License**.

---

🔥 **Enjoy building workflows effortlessly!** 🚀

