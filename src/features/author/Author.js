import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <>
    <Header title="O autorze" />
    <Section
      title="Radosław Kowalczyk"
      body={
        <>
          <p>
            Nazywam się Radosław Kowalczyk, mam 27 lat. Na co dzień pracuję w służbie mundurowej. Lubię piłkę nożną, zarówno grać, jak i oglądać oraz czytać książki. <strong> Moją nową pasją </strong> jest kolekcjonowanie koszulek sportowych <strong>FC Barcelony.</strong> W technikum miałem
            trochę do czynienia z programowaniem i postanowiłem do tego wrócić. Mam nadzieję, że dzięki
            <strong> YouCode</strong> uda mi się zadziałać w tym kierunku.
          </p>
        </>
      }
    />
  </>
);