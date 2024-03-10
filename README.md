# Rapid Resume Pro - [Live Demo](https://rapidresumepro.netlify.app)

### Built with

- HTML5
- CSS
- JS
- React (Vite)

## Project Overview

Rapid Resume Pro is a dynamic resume builder designed to streamline the process of creating a professional resume. The project is constructed with HTML5, CSS, and JavaScript, with the added efficiency of React powered by Vite.

### Features

In this project, I organized each section of the resume into its own components, including Education, Experience, Personal Details, and Skills. Each component features input forms for users to add, edit, and delete information, providing a user-friendly experience. The states of these components are utilized to populate the resume dynamically. The information is mapped through object arrays, and the formatted data is then presented in a cohesive resume format.

### Implementation Challenges

#### 1. Handling Edits:
   - One challenging aspect was managing edits efficiently. Initially, I attempted to handle edits without a separate state, leading to difficulties in managing the current state of the section object. This challenge was overcome by implementing a dedicated state solely for edits, simplifying the editing process.

#### 2. State Management:
   - Initially, local state management for each section posed challenges when attempting to format information into a cohesive resume. This issue was resolved by elevating the object arrays for each section to the app level. This allowed for better control and access to the information within the components, facilitating the formatting process in the Resume component.

## Live Demo

Explore the Rapid Resume Pro live demo to experience the ease of creating and formatting a professional resume. [Rapid Resume Pro - Live Demo](https://rapidresumepro.netlify.app)
