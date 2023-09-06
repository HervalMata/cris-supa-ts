import './globals.css';
import type { Metadata } from 'next';
import React from "react";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: 'Cris Laços',
  description: 'A loja que embeleza sua cabeça.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
