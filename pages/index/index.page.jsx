import { Counter } from "./Counter";
import Text from "../../components/Text";

// head의 title, meta 내용

export const documentProps = {
  title: "😁 main",
  description: `this is a main page.`,
};

function Page() {
  return (
    <>
      <h1>Welcome to home</h1>
      <Text content="This page is:" />
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}

export { Page };
