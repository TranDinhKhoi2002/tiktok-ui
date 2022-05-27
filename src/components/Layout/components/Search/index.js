import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccountItem from "~/components/AccountItem";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";
import useDebounce from "~/hooks/useDebounce";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedValue.trim().length === 0) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const hideResultHandler = () => {
    setShowResult(false);
  };

  const clearSearchHandler = () => {
    setSearchValue("");
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const inputChangeHandler = (e) => {
    const searchInputValue = e.target.value;

    if (!searchInputValue.startsWith(" ")) {
      setSearchValue(searchInputValue);
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference
    // element solves this by creating a new parentNode context.
    <div>
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
            onChange={inputChangeHandler}
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

          <button className={cx("search-btn")} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
