"use client";
import { serverSideFunction } from "@/utils/server-utils";
export default function ClientRoute() {
  const result = serverSideFunction();
  return <h1>this is a client component {result}</h1>;
}
