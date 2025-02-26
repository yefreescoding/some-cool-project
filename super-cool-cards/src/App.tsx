import "./App.css";
import Card from "./Components/Card";
import data from "./data/cards.json";

function App() {
  return (
    <main className="main">
      <section className="main__section">
        {data.cards.map((card) => (
          <Card
            name={card.name}
            image={card.image}
            description={card.description}
            link={card.link}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
