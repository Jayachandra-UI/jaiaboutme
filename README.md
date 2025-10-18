# MERN Stack Developer Portfolio

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS. Perfect for showcasing your full-stack development skills and projects.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations and transitions
- **Dark Theme** - Eye-friendly dark color scheme optimized for developers
- **Multiple Sections**:
  - Hero section with call-to-action buttons
  - About section highlighting your experience and approach
  - Skills showcase organized by categories
  - Featured projects with tech stack tags
  - Contact form for inquiries
  - Social media links
- **Performance Optimized** - Built with Next.js for fast loading and SEO
- **Easy to Customize** - Simple component structure for quick updates

## Tech Stack

- **Frontend**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <your-repo-url>
   cd mern-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio

## Customization

### Update Your Information

Edit the component files to add your personal information:

- **`components/header.tsx`** - Navigation and branding
- **`components/hero.tsx`** - Main headline and introduction
- **`components/about.tsx`** - Your background and experience
- **`components/skills.tsx`** - Your technical skills
- **`components/projects.tsx`** - Your featured projects
- **`components/contact.tsx`** - Contact form and social links
- **`components/footer.tsx`** - Footer content

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Other SEO metadata

### Customize Colors

The portfolio uses design tokens in `app/globals.css`. Update the CSS variables to match your brand:

\`\`\`css
:root {
  --primary: oklch(0.55 0.2 260);      /* Primary brand color */
  --accent: oklch(0.6 0.25 260);       /* Accent color */
  --background: oklch(0.08 0 0);       /* Background color */
  --foreground: oklch(0.95 0 0);       /* Text color */
  /* ... other colors ... */
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo>
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your portfolio is live!**
   Vercel will automatically deploy on every push to main

### Deploy to Other Platforms

**Build for production:**
\`\`\`bash
npm run build
npm start
\`\`\`

Then deploy the `.next` folder to your hosting platform.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills section
│   ├── projects.tsx        # Projects showcase
│   ├── contact.tsx         # Contact form
│   └── footer.tsx          # Footer
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
└── README.md               # This file
\`\`\`

## Contact Form Integration

The contact form currently logs submissions to the console. To enable email notifications:

1. **Option 1: Use Vercel Postgres + Resend**
   - Set up a Vercel Postgres database
   - Use Resend for email delivery
   - Create an API route to handle form submissions

2. **Option 2: Use a Third-Party Service**
   - Integrate with Formspree, EmailJS, or similar services
   - Update the form submission handler in `components/contact.tsx`

3. **Option 3: Backend Integration**
   - Connect to your MERN backend API
   - Send emails through your Node.js server

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified and tree-shaken
- Code splitting happens automatically
- Vercel provides edge caching for fast global delivery

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags for link previews
- Mobile-friendly responsive design
- Fast Core Web Vitals scores

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Visit [Vercel support](https://vercel.com/help)

## Next Steps

1. Customize all sections with your information
2. Add your actual projects with links
3. Update social media links
4. Set up email notifications for the contact form
5. Deploy to Vercel
6. Share your portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
