# DECISIONS

## 1. Why this approach over the obvious alternative?

The obvious alternative for a productivity application would be to build a full-stack architecture with a database, API layer, and user authentication to persist tasks and data. However, I chose to implement a frontend-only architecture utilizing React state and local demonstration data. This decision was made to keep the scope strictly focused on delivering a highly polished, responsive homepage and landing experience. Bypassing unnecessary backend complexity allowed me to dedicate my time exclusively to UI/UX, responsive design, typography, and complex micro-interactions (like the native view transitions and GSAP canvas animations) while still communicating how the product interface works through functional frontend demonstrations.

## 2. Trade-off under the time limit

The primary trade-off made under the time constraints was building a polished, marketing-focused homepage instead of a fully functional productivity platform. The current implementation does not include persistent user accounts, backend task storage, authentication, or real API integrations. Instead, it relies on local state to demonstrate the UI. The Crowd Canvas animation also required significant implementation and debugging effort but was chosen because it provided a distinctive visual interaction for the homepage. 

With a full week, I would expand this into a complete application by adding a backend API, persistent task storage, and user authentication. I would also invest time in stronger accessibility (a11y) testing, more extensive cross-browser/device testing, performance optimizations, and complete multi-user functionality.

## 3. AI tools and verification

I used AI tools as a development assistant for generating UI component ideas, exploring implementation approaches, and debugging layout issues. Specifically, I used an AI-assisted prompt to explore the implementation of the Crowd Canvas animation using React, JavaScript, Tailwind CSS, HTML5 Canvas, and GSAP. The AI helped generate the logic for sprite-sheet character rendering, randomized movement, direction flipping, a walking bounce, depth sorting, character recycling, responsive resizing, and animation cleanup.

After receiving the generated approach, I personally reviewed the code, integrated it into the project, and adapted the implementation to match the specific design aesthetic of FocusFlow. I manually tweaked the offset logic to ensure the characters grounded perfectly at the bottom of the section, tested the animation's responsive behavior across different screen sizes, fixed layout issues, and visually verified the final production build. 

Furthermore, while AI assisted with brainstorming and initial boilerplates, I actively relied on researching the official documentation for React, GSAP, and Tailwind CSS. Many of the libraries, hooks, and layout techniques utilized in this project were discovered and validated directly through reading the official docs, ensuring best practices were followed rather than blindly accepting AI output.

## Final implementation summary

FocusFlow is a frontend-only React application built with Vite and Tailwind CSS. The project strictly avoids fabricated social proof or fake backend claims, focusing instead on delivering a highly polished, responsive homepage with local demonstration data, an interactive product preview, and a custom GSAP Crowd Canvas animation, all verified and tested for a smooth user experience.
