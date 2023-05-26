import { Unit, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Unit>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </Unit>
);

export default Section;