import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'pathFinder',
  description: 'Roadmap for a better developer, designer. Explore amazing projects from the developers who are already connected with us. So, Lets connect and build powerful websites and showcase here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
       </body>
    </html>
  )
}
