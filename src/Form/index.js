import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Co masz do zrobienia?" autoFocus={true} />
        <button className="form__button">Dodaj zadanie</button>
      </form>
);

export default Form;