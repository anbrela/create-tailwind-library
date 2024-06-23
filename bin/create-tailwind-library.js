#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const program = new Command();
const templateDir = path.resolve(__dirname, "../templates");

program
  .version("1.0.0")
  .arguments("<project-name>")
  .action((projectName) => {
    const projectPath = path.resolve(process.cwd(), projectName);

    console.log(
      `🚀 Creating a new Tailwind component library in ${projectPath}`
    );

    // Copy template files
    fs.copySync(templateDir, projectPath);

    // Copy .gitignore explicitly
    fs.copySync(
      path.join(templateDir, "_gitignore"),
      path.join(projectPath, ".gitignore")
    );

    console.log("📦 Installing dependencies...");
    // Install dependencies
    try {
      execSync("npm install", { stdio: "inherit", cwd: projectPath });
    } catch (error) {
      console.error("❌ Error installing dependencies", error);
      process.exit(1);
    }

    console.log("📘 Installing type definitions...");
    // Install type definitions
    try {
      execSync(
        "npm install @types/react @types/react-dom @types/node --save-dev",
        { stdio: "inherit", cwd: projectPath }
      );
    } catch (error) {
      console.error("❌ Error installing type definitions", error);
      process.exit(1);
    }

    console.log("🔧 Initializing Git repository...");
    // Initialize Git repository
    try {
      execSync("git init", { stdio: "inherit", cwd: projectPath });
    } catch (error) {
      console.error("❌ Error initializing Git repository", error);
      process.exit(1);
    }

    console.log("🐶 Configuring Husky...");
    // Install and configure Husky
    try {
      execSync("npx husky install", { stdio: "inherit", cwd: projectPath });
      execSync('npx husky add .husky/pre-commit "npx lint-staged"', {
        stdio: "inherit",
        cwd: projectPath,
      });
    } catch (error) {
      console.error("❌ Error configuring Husky", error);
      process.exit(1);
    }

    console.log("✅ Project setup complete!");
  });

program.parse(process.argv);
