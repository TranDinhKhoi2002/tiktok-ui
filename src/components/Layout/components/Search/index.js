import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue.trim().length === 0) {
      setSearchResult([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchValue === searchInputRef.current.value) {
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
          .then((res) => res.json())
          .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const hideResultHandler = () => {
    setShowResult(false);
  };

  const clearSearchHandler = () => {
    setSearchValue("");
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      onClickOutside={hideResultHandler}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h3 className={cx("search-title")}>Accounts</h3>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
          ref={searchInputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
        />
        {searchValue && !loading && (
          <button className={cx("clear-btn")} onClick={clearSearchHandler}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;