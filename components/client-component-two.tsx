"use client";
import { useState } from "react";
export const clientComponentTwo = () => {
  const [name, setName] = useState("Batman");
  return <h1>client component two</h1>;
};
