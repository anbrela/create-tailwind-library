# Create Tailwind Library

Welcome to **Create Tailwind Library**! This CLI tool sets up a complete environment for creating React component libraries with Tailwind CSS, TypeScript, ESLint, and Husky.

## Features

- 🛠️ **React**: Build reusable components with React.
- 🎨 **Tailwind CSS**: Style your components with utility-first CSS.
- 💻 **TypeScript**: Write type-safe code with TypeScript.
- 📏 **ESLint**: Maintain code quality and consistency.
- 🐶 **Husky**: Run pre-commit hooks to ensure code quality.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Install the CLI globally using npm:

```bash
npm install -g create-tailwind-library
```

### Usage

```bash
npx create-tailwind-library my-project
```

This will create a new directory my-project with the initial setup.

### Project Structure

```lua
my-project/
├── src/
│   ├── components/
│   │   └── button.tsx
│   ├── styles/
│   │   └── globals.css
│   └── index.ts
├── .eslintrc.json
├── .gitignore
├── package.json
├── postcss.config.js
├── rollup.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Scripts

- npm run build: Build the library using Rollup.
- npm run lint: Run ESLint to check for code quality issues.

### Example Components

```tsx
import React from "react";

const Button: React.FC = ({ children }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
```

### Styling

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ESLint Configuration

The project uses a standard ESLint configuration for TypeScript and React, ensuring code quality and consistency across your library.

### Husky

Husky is set up to run pre-commit hooks using lint-staged, ensuring that your code meets the quality standards before every commit.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

### License

This project is licensed under the MIT License.

Happy coding!
