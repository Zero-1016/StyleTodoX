import Header from "@/components/layout/Header";
import '../styles/globals.css'
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Create Todo App',
    description: 'Generated by create Todo app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <div className={'flexCenter'}>
            {children}
        </div>
        </body>
        </html>
    );
}
