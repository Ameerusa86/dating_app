"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class" // Ensures that the theme class is added to the <html> element
      defaultTheme="system" // Default theme is set to system
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
