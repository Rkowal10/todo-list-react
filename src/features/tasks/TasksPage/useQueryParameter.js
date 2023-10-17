import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParamsInput = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParamsInput.delete(key);
        } else {
            searchParamsInput.set(key, value);
        }

        const newSearch = searchParamsInput.toString();
        history.push(`${location.pathname}?${newSearch}`);
    }
}