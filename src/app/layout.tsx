import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata = {
  title: 'Flexibble',
  description: 'Shocase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar  */}
        <Navbar/>
        <main>
          {children}
        </main>
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  )
}
