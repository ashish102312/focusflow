#  FocusFlow

Welcome to **FocusFlow**—a beautiful, editorial-style web experience designed to uncomplicate your productivity. 

We believe that managing your tasks shouldn't feel like a chore. FocusFlow brings your tasks, priorities, and daily goals into one incredibly focused workspace, helping you stop reacting and start orchestrating your day.

---

##  The Tech Stack

This project isn't just about looking good; it's built on a modern, lightning-fast foundation. Here is a look under the hood at the technologies powering FocusFlow:

### Core Architecture
- **[React](https://react.dev/)**: The heart of our user interface, allowing us to build reusable, state-driven components.
- **[Vite](https://vitejs.dev/)**: Our incredibly fast build tool and development server. It keeps our feedback loop tight and our builds optimized.

### Styling & Design System
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows us to rapidly build out our custom, editorial aesthetic without fighting with cascading stylesheets.
- **Vanilla CSS (Variables)**: We leverage native CSS variables to handle our custom color palettes and seamless dark mode switching.
- **[Lucide React](https://lucide.dev/)**: Clean, consistent, and beautiful SVG icons used throughout the interface.

### Motion & Animation
- **[Framer Motion](https://www.framer.com/motion/)**: The powerhouse behind our layout transitions, smooth reveals, and the satisfying staggered typewriter effects you see on the homepage.
- **[GSAP](https://gsap.com/) (GreenSock Animation Platform)**: The industry standard for high-performance animations. We use GSAP to power our complex `<canvas>` rendering (like the bustling crowd animation in our Hero section!).
- **View Transitions API**: We use modern browser APIs to create native, app-like transitions when toggling between light and dark themes.

---

##  Features & Highlights

- **Immersive Hero Section**: A full-viewport introduction featuring a handwritten typography aesthetic paired with a custom GSAP-driven `<canvas>` animation of a crowd walking by.
- **Native Theme Toggling**: Effortlessly switch between our warm, editorial light theme and a sleek dark theme.
- **Professional 'Fat Footer'**: A structured, multi-column footer complete with a pulsing server-status indicator, providing a premium SaaS feel.
- **Responsive Layouts**: Utilizing CSS Grid to build "bento-box" style feature cards that reflow perfectly from mobile phones to massive desktop displays.

---

## 🚀 Getting Started

Want to run FocusFlow locally? It's incredibly simple.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashish102312/focusflow.git
   cd focusflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Experience the flow:**
   Open your browser and navigate to `http://localhost:5173`. 

---

*Focus less on organizing, and more on doing. Welcome to FocusFlow.*
