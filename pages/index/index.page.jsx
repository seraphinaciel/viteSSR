import { Counter } from "./Counter";
import Button from "../components/Button";
import Text from "../components/Text";

// head의 title, meta 내용
export const title = "welcome 😁",
  description = "this is a main page.";

function Page() {
  return (
    <>
      <h1 className="text-pink-900">Welcome</h1>
      <Text content="This page is:" />
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Button label="hello Btn" />
    </>
  );
}

export { Page };
