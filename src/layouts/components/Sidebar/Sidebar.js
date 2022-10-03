import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "~/config";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem icon={<HomeIcon />} title="For You" to={config.routes.home} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          icon={<UserGroupIcon />}
          title="Following"
          to={config.routes.following}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem icon={<LiveIcon />} title="LIVE" to={config.routes.live} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
