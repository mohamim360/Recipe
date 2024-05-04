import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { dbConnect } from "@/services/mongo";
import AuthProvider from "./providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "khana Khazana",
  description: "Best Recipes for you",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <AuthProvider>
   <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
    </AuthProvider>
 
  );
}
