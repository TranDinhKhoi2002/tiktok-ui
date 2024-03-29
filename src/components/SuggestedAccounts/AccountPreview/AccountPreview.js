import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664888400&x-signature=WY0NbQbScJx3E8GLDrHQYJHZoMk%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>trandinhkhoi102</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>Trần Đình Khôi</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>10M&nbsp;</strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>120M&nbsp;</strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
