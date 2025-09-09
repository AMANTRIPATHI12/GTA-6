🎮 Rockstar Landing Page Animation

A responsive React + Tailwind + GSAP project that recreates a Rockstar-style landing page animation.
The page starts with a "VI" SVG mask reveal animation, followed by dynamic parallax effects and animated elements (sky, background, character, and text).

🚀 Features

SVG Mask Reveal – The background image is revealed only through the "VI" text, then expands dramatically.

GSAP Animations – Smooth rotation, scaling, and reveal effects for text, images, and character.

Parallax Mouse Movement – Background, sky, and text shift slightly with mouse movement for immersion.

Responsive Design – Built with Tailwind CSS to adapt across screen sizes.

Interactive Sections – Landing page, scroll indicator, and content with images and text.

🛠️ Tech Stack

React – Component-based UI.

GSAP – For advanced animations and timeline control.

Tailwind CSS – Utility-first responsive styling.

Remix Icons – For icons (e.g., scroll arrow).

📂 Project Structure
src/
│── App.jsx       # Main component with animations + layout
│── index.css     # Tailwind CSS imports
│── assets/       # Images (bg.png, sky.png, girlbg.png, imag.png, ps5.png)

⚡ Installation

Clone this repo:

git clone https://github.com/your-username/rockstar-landing.git
cd rockstar-landing


Install dependencies:

npm install


Start development server:

npm run dev


Open in browser:

http://localhost:5173

🎬 How It Works
1. Initial Mask Reveal

The background image is hidden by default.

The <mask> only shows it through the "VI" text.

GSAP rotates and scales the text group (.vi-mask-group) until it expands and disappears.

2. Landing Page Animation

When the mask is removed, .main content animates in:

Text (.text) scales & fades in.

Sky & Background (.sky, .bg) slightly scale for depth.

Character (.character) slides up and scales for dramatic effect.

3. Parallax Effect

On mouse move:

Text shifts slightly.

Background, sky, and character shift at different speeds → parallax illusion.

🙌 Credits
sheryians coding school.
Built with ❤️ using React, Tailwind, and GSAP.
