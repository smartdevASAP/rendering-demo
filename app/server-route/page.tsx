import { serverSideFunction } from "@/utils/server-utils";
export default function ServerRoute() {
  const result = serverSideFunction();
  return <h1>this is a server component {result} </h1>;
}
