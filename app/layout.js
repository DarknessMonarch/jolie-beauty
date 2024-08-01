import '@/app/style/globals.css';
import { Poppins } from 'next/font/google';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jolie-beauty.com/'),
  title: 'jolie-beauty',
  applicationName: 'jolie-beauty',
  author: 'jolie-beauty',
  description: 'A salon of your choice',
  keywords: ['hair', 'beauty', 'salon', 'jolie-beauty', 'hair product', 'beauty product', 'salon product'],

  openGraph: {
    title: 'jolie-beauty',
    description: 'A salon of your choice',
    url: 'https://jolie-beauty.com/',
    siteName: 'jolie-beauty',
    // images: '/assets/banner.png',
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: 'favicon-16x16.png' },
      new URL('favicon-16x16.png', 'https://jolie-beauty.com'),
    ],
    shortcut: ['/public/favicon-32x32.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={poppins.className}>
          {children}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
