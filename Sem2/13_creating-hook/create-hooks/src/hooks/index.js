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

const useDebounce = (stateValue) => {
    const [dataDebounce, setDataDebounce] = useState('');
    useEffect(() => {
        // the waiting time after the user has completed their prompt
        const id = setTimeout(() => {
            setDataDebounce(stateValue);
        }, 1000);
        return () => {
            clearTimeout(id);
        }
    }, [stateValue])
    return dataDebounce
}

export {useSearchInput, useDebounce}

