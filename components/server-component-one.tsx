import fs from "fs";

export const serverComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return <h1>server component one</h1>;
};
