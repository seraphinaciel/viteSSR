import { Counter } from "./Counter";
import Text from "#root/components/Text";

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

      <a
        href=""
        className="p-2 text-orange-600 hover:bg-orange-700 hover:text-white"
      >
        a : Hover over me
      </a>
      <button>button : Hover over me</button>

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
