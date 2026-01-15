# PeakLeads Setup Instructions

## Firebase Configuration

Your Firebase project has been created: **peakleads**

### Getting Your Firebase Config Values

1. Go to [Firebase Console](https://console.firebase.google.com/project/peakleads)
2. Click on Project Settings (gear icon in the sidebar)
3. Scroll down to "Your apps"
4. If you don't see a web app yet:
   - Click the web icon (`</>`)
   - Register your app with name "PeakLeads Web"
   - Copy the config values

### Environment Setup

Create a `.env.local` file in the root directory with these values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=peakleads.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=peakleads
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=peakleads.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Firebase
npm run deploy
```

## Project Structure

```
peakleads/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── common/      # Reusable components (Button, Toggle, etc.)
│   └── layout/      # Layout components
├── lib/             # Firebase and other libraries
├── config/          # Configuration files
├── utils/           # Utility functions
├── types/           # TypeScript types
└── hooks/           # Custom React hooks
```

## Firebase Hosting URL

Your app will be available at:
- Default: https://peakleads.web.app
- Custom: https://peakleads.firebaseapp.com

## Next Steps

1. Get your Firebase config values from the console
2. Create `.env.local` with the values
3. Enable Firebase Authentication in the console
4. Enable Firestore Database in the console
5. Set up security rules for Firestore
6. Deploy: `npm run deploy`

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Firebase** - Backend services (Auth, Firestore, Storage, Analytics)
- **Framer Motion** - Animations
