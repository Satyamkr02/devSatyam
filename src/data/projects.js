import { imageLinks } from '../utils/imageLinks';

export const PROJECTS = [
  {
    id: 'anyo-chat',

    title: 'Anyo Chat App',

    shortDescription:
      'A real-time chat application built using React Native and Firebase with authentication and instant messaging.',

    coverImage:
      'https://cdn.dribbble.com/userupload/46865064/file/42b541ee90cb05471058c40433921bec.webp?resize=752x&vertical=center',

    techStack: [
      'React Native',
      'Firebase Authentication',
      'Firebase Realtime Database',
      'NativeWind',
    ],
    innerTechStackImages: [
      imageLinks.reactNative,
      imageLinks.androidStudio,
      imageLinks.gitHub,
    ],

    outerTechStackImages: [
      imageLinks.html,
      imageLinks.css,
      imageLinks.javascript,
      imageLinks.nextJs,
    ],

    role: 'Designed and developed the full mobile application including UI, authentication flow, and real-time messaging system.',

    features: [
      'User Authentication (Login & Signup)',
      'Real-time chat using Firebase',
      'Modern chat UI',
      'User profile with display name',
      'Instant message updates',
    ],

    screenshots: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      'https://images.unsplash.com/photo-1611746869696-d09bce200020',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb',
    ],

    androidApk: 'https://your-domain.com/app-release.apk',
    iosApp: 'https://apps.apple.com/app/id123456',

    repoUrl: 'https://github.com/...',
    projectUrl: 'https://...',
  },

  {
    id: 'vyb-store',

    title: 'VYB Clothing Store',

    shortDescription:
      'An e-commerce platform for the VYB clothing brand where users can browse and purchase T-shirts.',

    coverImage:
      'https://cdn.dribbble.com/userupload/43169772/file/original-6c9a843b6d8d1b393cf08bf2c3a330e1.png?resize=752x&vertical=center',

    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    innerTechStackImages: [
      imageLinks.nextJs,
      imageLinks.tailwindCss,
      imageLinks.gitHub,
    ],

    outerTechStackImages: [
      imageLinks.html,
      imageLinks.css,
      imageLinks.javascript,
    ],

    role: 'Built the complete e-commerce platform including product listing, checkout flow, and UI design.',

    features: [
      'Product listing page',
      'Product detail page',
      'Add to cart',
      'Secure payment integration',
      'Responsive UI',
    ],

    screenshots: [
      'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47',
      'https://images.unsplash.com/photo-1520975922203-b4dc1a5f5f0b',
    ],

    androidApk: 'https://your-domain.com/app-release.apk',
    iosApp: 'https://apps.apple.com/app/id123456',

    repoUrl: 'https://github.com/...',
    projectUrl: 'https://...',
  },
];
