# Interactive Blog Card Showcase

This project is a single-page application that displays a list of blog cards with basic blog information. Each card has smooth hover animations, and the page transition demonstrates basic CSS animations. The styling is done using ShadCN UI components.

## Features

- Responsive design for both mobile and desktop
- Blog cards with hover animations
- Smooth transitions for better user experience
- Dark mode toggle
- "View More" functionality to expand blog content

## Setup and Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/interactive-blog-card-showcase.git
   cd interactive-blog-card-showcase
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Animations and Transitions

This project uses various animations and transitions to enhance the user experience:

1. **Card Hover Effect**: When hovering over a blog card, it slightly enlarges and changes its shadow.
2. **Fade-in Animation**: Blog cards fade in and slide up when the page loads.
3. **Staggered Animation**: Cards appear one after another with a slight delay.
4. **Smooth Theme Transition**: Smooth transition between light and dark modes.
5. **Expand/Collapse Content**: Smooth expansion and collapse of blog content.

## Deployment

To deploy this project to Netlify, follow these steps:

1. Create a Netlify account if you don't have one: https://app.netlify.com/signup

2. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

3. Build your project:
   ```
   npm run build
   ```

4. Deploy to Netlify:
   ```
   netlify deploy
   ```

5. Follow the prompts in the CLI. When asked for the publish directory, enter `.next`.

6. Once you're satisfied with the preview, deploy to production:
   ```
   netlify deploy --prod
   ```

Your site will now be live on Netlify! You can customize your domain and other settings in the Netlify dashboard.

## Technologies Used

- Next.js
- React
- TypeScript
- ShadCN UI
- Tailwind CSS
- next-themes for dark mode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).