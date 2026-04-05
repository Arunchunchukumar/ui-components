# UI Components

![React](https://img.shields.io/badge/React-18-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Storybook](https://img.shields.io/badge/Storybook-7.0-ff4785) ![Rollup](https://img.shields.io/badge/Rollup-4.0-ec4a3f) ![License](https://img.shields.io/badge/License-MIT-green)

A production-ready React component library with TypeScript, Storybook documentation, and tree-shakeable ESM/CJS builds.

## Components

- **Button** - Primary, secondary, outline, ghost variants with loading states
- **Modal** - Accessible dialog with backdrop, animations, and focus trapping
- **Input** - Text input with labels, validation, error states, and icons
- **Card** - Flexible content container with header, body, and footer slots

## Installation

```bash
npm install @arun/ui-components
```

## Usage

```tsx
import { Button, Modal, Input, Card } from '@arun/ui-components';

function App() {
  return (
    <Card>
      <Card.Header>Sign In</Card.Header>
      <Card.Body>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <Button variant="primary" size="lg" fullWidth>Sign In</Button>
      </Card.Body>
    </Card>
  );
}
```

## Development

```bash
git clone https://github.com/your-username/ui-components.git
cd ui-components
npm install
npm run storybook   # Launch Storybook at localhost:6006
npm run build       # Build library
npm test            # Run tests
```

## License

MIT License - see [LICENSE](LICENSE) for details.
