
# Reddit Clone

A full-stack Reddit clone built with Next.js, React, and modern web technologies. This project demonstrates a social media platform where users can view posts, interact with content, and experience a Reddit-like interface.

## Features

- **Modern UI**: Responsive design with a clean, Reddit-inspired layout.
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability.
- **Sidebar Navigation**: Left and right sidebars for navigation and additional content.
- **Post Feed**: Dynamic post cards displaying post data.
- **Context API**: Global state management for sidebar toggling and other UI states.
- **Next.js Routing**: File-based routing for pages and layouts.

## Project Structure

```
.
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.jsx       # Main layout component
│   │   └── page.jsx         # Home page
│   ├── components/
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   ├── PostCard.jsx     # Individual post card component
│   │   ├── SidebarLeft.jsx  # Left sidebar
│   │   ├── SidebarRight.jsx # Right sidebar
│   │   └── index.js         # Component exports
│   ├── context/
│   │   └── SidebarContext.js# React Context for sidebar state
│   └── data/
│       └── post.js          # Mock post data
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JS project configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project metadata and dependencies
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
	```bash
	git clone <repository-url>
	cd reddit-clone
	```
2. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```
3. **Run the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	```
4. **Open in browser:**
	Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Key Files and Folders

- **src/app/layout.jsx**: Main layout, includes Navbar and sidebars.
- **src/app/page.jsx**: Home page, renders the post feed.
- **src/components/**: All UI components (Navbar, PostCard, Sidebars).
- **src/context/SidebarContext.js**: Provides sidebar open/close state.
- **src/data/post.js**: Contains mock post data for the feed.

## Customization

- **Add Posts**: Edit `src/data/post.js` to add or modify posts.
- **UI Changes**: Update components in `src/components/` for custom styles or features.
- **Sidebar Content**: Modify `SidebarLeft.jsx` and `SidebarRight.jsx` for navigation or widgets.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [ESLint](https://eslint.org/)
- [PostCSS](https://postcss.org/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Note:** This is a demo project and does not include backend functionality such as authentication, posting, or commenting. You can extend it by integrating a backend of your choice.
