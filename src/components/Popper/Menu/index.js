import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ items = [], hideOnClick = false, children, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderedItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prevHistory) => [...prevHistory, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      offset={[12, 8]}
      onHide={() => {
        setHistory((prevHistory) => prevHistory.slice(0, 1));
      }}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
                }}
              />
            )}
            {renderedItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
