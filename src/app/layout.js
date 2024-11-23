
import { Manrope, } from '@next/font/google'
import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})


export const metadata = {
  title: "We5vie",
  description: "E-commerce next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
