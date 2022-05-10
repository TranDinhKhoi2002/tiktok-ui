import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem(props) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e03be69e85f3999a17c77c145e7032d8~c5_300x300.webp?x-expires=1652317200&x-signature=jMbbPWUHcjz4sUyXXrreFyWcR30%3D"
        alt="Khoi"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Tran Van B</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
