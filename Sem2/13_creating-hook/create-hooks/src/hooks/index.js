import { useState } from "react";

const useSearchInput = () => {
    const [searchValue, setSearchValue] = useState('')
    const [isSearch, setIsSearch] = useState(false);

    return {
        // returning an object
        search: {
            value: searchValue,
            setSearchValue,
        },
        isSearch: {
            active: isSearch,
            setIsSearch,
        },
    };
};

export {useSearchInput}