# Rachelle Tania's Executive Assistant Portfolio

A modern, professional portfolio website built with **Next.js**, **React**, and **Tailwind CSS**.

## Features

✨ **Modern Design** - Clean, professional layout optimized for desktop and mobile  
⚡ **Fast Performance** - Built with Next.js for optimal speed and SEO  
📱 **Responsive** - Mobile-first design that works on all devices  
✉️ **Contact Form** - Easy way for potential clients to reach out  
🎨 **Tailored Content** - Showcases services, experience, and expertise  

## Getting Started

### Prerequisites
- Node.js 18+ (or use nvm)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The page auto-updates as you edit files.

### Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Step 1: Push to GitHub

First, create a new repository on GitHub with the name `tanias-portfolio` (or your preferred name).

Then, in this project directory, run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tanias-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (the one you created Tania's account with)
3. Click "Add New..." → "Project"
4. Select the `tanias-portfolio` repository
5. Click "Deploy"

That's it! Vercel will automatically deploy your site and provide a URL.

### Step 3: Buy a Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add a custom domain
4. You can either:
   - Buy a domain through Vercel Marketplace
   - Use an existing domain and update DNS settings

## Project Structure

```
app/
├── page.tsx          # Home page (main portfolio)
├── layout.tsx        # Root layout
└── globals.css       # Global styles

package.json          # Dependencies
next.config.js        # Next.js configuration
tailwind.config.js    # Tailwind CSS configuration
```

## Customization

### Edit Content
- Open `app/page.tsx` to edit portfolio content
- Update experience, skills, tools, and contact information

### Colors & Styling
- Edit `tailwind.config.js` to change color scheme
- Modify `app/globals.css` for global styles

### Contact Form Integration
Currently, the contact form is a placeholder. To make it functional:
- Use a service like **Resend**, **SendGrid**, or **Formspree**
- Update the `handleSubmit` function in `app/page.tsx`

Example with Resend (recommended):
```typescript
// Install: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'rachelletanialopez27@gmail.com',
  subject: `New Portfolio Contact: ${formData.name}`,
  html: `<p>Message: ${formData.message}</p>`
});
```

## Environment Variables

Create a `.env.local` file for sensitive data:

```
RESEND_API_KEY=your_key_here
```

## Support

For questions or issues, reach out to:
- 📧 rachelletanialopez27@gmail.com
- 📱 +63 9951 1810

## License

© 2025 Rachelle Tania Lopez. All rights reserved.
