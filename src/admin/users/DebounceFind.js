import React, { useState, useEffect } from 'react';

function useDebounce(text, props, delay) {
    delay = delay || 500;
    // const [debounced, setDebounced] = useState(text);
  
    useEffect(() => {
      const handler = setTimeout(() => {
          // setDebounced(text);
          props.handleSearchUser(text);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [text, delay]);
  
    // return debounced;
}
  
function DebounceFind(props) {
    const [val, setVal] = useState("");
    // const [title, setTitle] = useState("");
    useDebounce(val, props);
  
    // useEffect(() => {
    //   if (debouncedVal) {
    //     setTitle(debouncedVal);
    //   }
    // }, [debouncedVal]);
    return (
        <>
            <input
                type="text" name="usersfilter" placeholder="Filter by user" maxLength="240" className="s-input s-input__search js-search-users" id="js-search-users"
                onChange={({ target }) => setVal(target.value)}
            />
        </>
    );
}

export default DebounceFind