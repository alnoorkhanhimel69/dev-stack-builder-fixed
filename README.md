# Dev Stack

A responsive React + TypeScript development-stack builder inspired by the supplied UI reference. Explore popular technologies, compare their details, and build a personalized stack with instant feedback.

## Tech Used

- React + TypeScript
- Vite
- CSS
- React-Toastify
- Local JSON data loaded with `fetch`

## Features

1. Responsive sticky navigation with a mobile menu.
2. Technology cards with category, difficulty, ratings, and add-to-stack actions.
3. Live stack management with duplicate protection, individual removal, clear-all, and toast notifications.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript or TypeScript. React uses it to describe what the interface should render in a readable way.

### 2. What is the difference between props and state?
Props are values passed into a component by its parent. State is data owned by a component that can change and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it?
`useState` stores changing data in a function component. This project uses it for the mobile menu, loaded technologies, and selected stack.

### 4. What does the `useEffect` hook do, and why did you need it?
`useEffect` runs side effects after rendering. It is used here to fetch the local JSON file when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify which list items changed, were added, or were removed so it can update the DOM efficiently.

### 6. What is conditional rendering?
Conditional rendering means showing different UI depending on a condition. The stack shows an empty-state message when there are no selected technologies.

### 7. How do you pass data from a parent to a child, and how does a child send something back?
A parent passes data through props. A child can send information back by calling a callback function that the parent passed as a prop.
