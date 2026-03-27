import fs from "fs";

export const serverComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return <h1>server component two</h1>;
};
