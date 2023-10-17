import { Item, List, StyledNavLink } from "./styled";

const Navigation = () => (
    <nav>
            <List>
                <Item>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
)

export default Navigation;