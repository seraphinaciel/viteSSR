// prop type
import PropTypes from "prop-types";

// node module

// components
import { Title } from "./Text";
import Word from "./TextSplit";

// style
import styles from "./PageTitle.module.css";

// utils
import { CM } from "#root/utils";

function PageTitle({ title = [""], description = null, layoutId = "default", className, ...props }) {
  return (
    <div data-layout={layoutId} className={CM(styles.title_box, className)} {...props}>
      <Title
        tagName="h1"
        className={CM(
          {
            "md:col-start-2 md:col-span-10": true,
          },
          styles.title,
        )}
      >
        {/* 레이아웃은 module.css의 class 활용할 것 */}
        {title.map((text, index) => (
          <Word
            key={index}
            content={text}
            splitType="word"
            animationType="fade up"
            animationConfig={{
              arrange: {
                start: "top 70%",
                end: "+=70%",
              },
            }}
            className={"inline md:flex"}
          />
        ))}
      </Title>
      {description != null && (
        <div className="mt-40 md:mt-70 md:col-start-3 md:col-span-5">
          <Word
            tagName="p"
            content={description.text}
            className="basic_p | text-heading-10 md:text-heading-8"
            splitType="none"
            animationConfig={{
              arrange: {
                start: "top 95%",
              },
            }}
          ></Word>
          <Word
            tagName="p"
            content={description.transform}
            className="basic_p_2 | mt-30 text-body-5-kr font-normal text-base-1"
            splitType="none"
            animationConfig={{
              arrange: {
                start: "top 95%",
              },
            }}
          >
            {description?.transform}
          </Word>
        </div>
      )}
    </div>
  );
}

const layoutIdList = ["default", "careers"];
PageTitle.propTypes = {
  layoutId: PropTypes.oneOf(layoutIdList),
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      transform: PropTypes.string.isRequired,
    }),
  ]),
  className: PropTypes.string,
};

export default PageTitle;
