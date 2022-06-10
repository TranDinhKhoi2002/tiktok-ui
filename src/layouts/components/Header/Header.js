import { Fragment } from "react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import images from "~/assets/images";
import config from "~/config";

import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import {
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { MailboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Images";
import Search from "../Search";

const cx = classNames.bind(styles);

const DUMMY_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@test",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...DUMMY_MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      seperate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <Fragment>
              <Tippy content="Upload video" placement="bottom" delay={[0, 50]}>
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom" delay={[0, 50]}>
                <button className={cx("action-btn")}>
                  <MessageIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy content="Mailbox" placement="bottom" delay={[0, 50]}>
                <button className={cx("action-btn")}>
                  <MailboxIcon />
                  <span>12</span>
                </button>
              </Tippy>
            </Fragment>
          ) : (
            <Fragment>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </Fragment>
          )}
          <Menu items={currentUser ? userMenu : DUMMY_MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/128514347b4c1a4e6a54a745d292d543.jpeg?x-expires=1654995600&x-signature=bwU3ZW4SKk6PKZakdxBaRpDkbDs%3D"
                alt=""
                fallbackImg="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_720x720.jpeg?x-expires=1652626800&x-signature=CgeuQDyFXBAC22v%2B9KYEtMLPULM%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
