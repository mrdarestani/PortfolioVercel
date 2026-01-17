
# [my website is mrdarestani.com](https://mrdarestani.com)


# 1. Make sure development server is running and everything works locally
- Remove-Item -Recurse -Force node_modules  
- Remove-Item -Force package-lock.json  
- npm cache clean --force  
- npm install react@18.2.0 react-dom@18.2.0  
- ---npm install  
- ---npm install --legacy-peer-deps  
- 1- Start the development server  
--  npm run dev  
--  npm run build 
- 2- Check for additional issues  
-- npm audit fix --force   


# 2. If using Git, commit and push changes (if applicable)
- git add .
- git commit -m "Add All images Projects"
- git push origin main  # or your specific branch

# 3. Deploy changes to Vercel
- vercel login  
- vercel  
- "Set up and deploy?" → Type y and press Enter.  
- "Which scope do you want to deploy to?" → Select your account.  
- "Link to existing project?" → Choose "Create a new project" if you haven’t linked it yet.  
- "Which framework are you using?" → Choose Next.js.  
- "Deploy now?" → Type y and press Enter.  
- vercel --prod  

- Sometimes, Vercel might cache some old builds. If you run into this issue, you can force a fresh deploy by clearing the Vercel cache:
- vercel --prod --force

continious deployment on vercel
- rm -rf node_modules
- rm -f package-lock.json
- npm install
- npm run build
## Commit & push (IMPORTANT)
- git status
- git add .
- git commit -m "Fix build errors and finalize project pages"
- git push origin main
## Run exact Vercel build locally (optional but powerful)
- npm i -g vercel
- vercel pull
- vercel build

## What you will learn

- Latest Next.js 13 features
- Next.js App Router
- Next.js Server Actions
- Client & Server Components
- TypeScript (Beginner & Intermediate)
- Tailwind CSS
- Context API
- Advanced Animations with Framer Motion
- React.Email & Resend
- Custom React hooks
- Fresh, modern UI design
- Light & Dark mode
- Responsive website

## Setup

1. Add RESEND_API_KEY environment variable in .env.local
2. In the send-email.ts action file, change the "to" email to your own email
