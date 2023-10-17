import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { StyledSearch } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../useQueryParameter";

export default () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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