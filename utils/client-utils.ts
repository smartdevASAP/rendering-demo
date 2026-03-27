import "client-only"; //this means that this code block is designed to run on the client side, and it will fail in runtime if it nis ran on  server components
export const clientSideFunction = () => {
  console.log(`use window object,
    use localstorage`);
  return "client result";
};
//clientnside
