import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { StyledSearch } from "./styled";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParamsInput = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParamsInput.delete(searchQueryParamName);
        } else {
            searchParamsInput.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParamsInput.toString()}`);
    };

    return (
        <StyledSearch>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledSearch>
    )
}