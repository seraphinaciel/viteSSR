import "./code.css";
import Text from "../components/Text";

export { Page };
export const title = "😁 about",
  description = "this is a about page.";

function Page() {
  return (
    <>
      <h1>About</h1>
      <Text content="Example of using vite-plugin-ssr." />
    </>
  );
}
