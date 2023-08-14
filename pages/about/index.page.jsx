import "./code.css";

export { Page };
export const title = "Hello 😁",
  description = "world";

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
}
