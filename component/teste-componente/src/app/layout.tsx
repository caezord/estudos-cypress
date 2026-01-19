import "./globals.css";
import { UserForm } from '../../components/teste'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} 
        <UserForm />

      </body>
    </html>
  );
}
