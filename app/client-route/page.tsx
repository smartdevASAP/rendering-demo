"use client";

import { useTheme } from "@/components/theme_provider";
import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoute() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        this is a client component
      </h1>
      <p>{result}</p>
    </>
  );
}
