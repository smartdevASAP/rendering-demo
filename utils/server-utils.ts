import "server-only";
export const serverSideFunction = () => {
  console.log(`multiple dependacies,
    use multiple libraries
    browsing tokens
    `);
  return "server result";
};
//this should only run on the server side components
