"use client";
import { useState } from "react";
export const clientComponentOne = () => {
  const [name, setName] = useState("Batman");
  return <h1>client component one</h1>;
};
