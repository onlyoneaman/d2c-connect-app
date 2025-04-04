# D2C Connect

![D2C Connect](https://picsum.photos/800/400?random=1) 

## Connecting D2C Brands with Top Freelance Designers

D2C Connect is a platform that bridges the gap between direct-to-consumer brands and talented freelance designers. Our mission is to help brands find the perfect designer for their projects while enabling designers to showcase their skills and find meaningful work.

**Live Demo:** [https://d2c-connect-app.2000-aman-sinha.workers.dev/](https://d2c-connect-app.2000-aman-sinha.workers.dev/)

## Features

### For Brands

- **Browse Designer Portfolios**: Explore a curated network of talented designers with expertise in various disciplines.
- **Advanced Filtering**: Find designers based on skills, hourly rates, availability, and more.
- **Secure Collaboration**: Connect with designers through our platform with secure communication and payment systems.
- **Reviews and Ratings**: Make informed decisions based on past client experiences.

### For Designers

- **Showcase Your Work**: Create a compelling portfolio that highlights your skills and expertise.
- **Find Relevant Projects**: Access opportunities that match your skills and interests.
- **Build Your Reputation**: Collect reviews and ratings to enhance your profile.
- **Seamless Payments**: Get paid securely and on time for your work.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Cloudflare Workers
- **Authentication**: Custom authentication system (demo)
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/d2c-connect.git
   cd d2c-connect
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
d2c-connect/
├── src/
│   ├── app/                  # Next.js app router
│   │   ├── designer/         # Designer profile pages
│   │   ├── list/             # Designer listing page
│   │   ├── login/            # Authentication pages
│   │   ├── signup/           # User registration
│   │   └── layout.tsx        # Root layout
│   ├── components/           # Reusable UI components
│   │   ├── Footer.tsx        # Global footer
│   │   └── Navbar.tsx        # Navigation and header
│   └── styles/               # Global styles
├── public/                   # Static assets
└── package.json              # Project dependencies
```

## Development Guidelines

### Cursor Rules

- Use consistent naming conventions (PascalCase for components, camelCase for variables)
- Keep component files focused on a single responsibility
- Use TypeScript interfaces for props and state
- Implement proper error handling for API calls and user interactions
- Add JSDoc comments for complex functions
- Organize imports with React/Next imports first, then third-party libraries, then local imports
- Maintain responsive design principles throughout the application

### Code Style

The project uses ESLint and TypeScript for code quality. Run linting with:

```bash
npm run lint
# or
yarn lint
```

## Deployment

This project is deployed on Cloudflare Workers. To deploy your own instance:

1. Set up a Cloudflare account and install Wrangler CLI
2. Configure your environment variables
3. Run the deployment command:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## Future Enhancements

- Implement real authentication system with JWT
- Add messaging functionality between designers and brands
- Create project management features for ongoing collaborations
- Develop a payment processing system
- Add analytics dashboard for users

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the designers and brands that inspired this platform
- Built with Next.js, React, and Tailwind CSS
- Deployed on Cloudflare Workers
