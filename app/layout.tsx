import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css';

const manrope = Manrope({subsets: ['latin'], variable: '--font-manrope'});
export const metadata: Metadata = {title: {default: 'Mega Power | Engineering Excellence', template: '%s | Mega Power'}, description: 'Premium engineering solutions for power, industrial and infrastructure projects.', metadataBase: new URL('https://megapower.example')};
export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) { const messages = await getMessages(); return <html lang="en"><body className={`${manrope.variable} antialiased`}><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body></html>; }
