import { useEffect, useState } from "react";
import "./App.css";


//Just Make it what you are sending from backend and saving in state:
type TDeck = {
  title: string;
  _id: string;
};

function App() {
  const [title, setTitle] = useState<string>("");
  const [deck, setDeck] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("http://localhost:4999/api/deckcreateDeck", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setTitle("");
  }

  useEffect(() => {
    async function fetchAllDecks() {
      const res = await fetch("http://localhost:4999/api/deck/getDecks");
      const data = await res.json();
      setDeck(data);
      console.log(data);
    }

    fetchAllDecks();
  }, []);

  return (
    <>
      <form>
        <label htmlFor="deck">Deck</label>
        <input
          type="text"
          id="deck"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" onClick={(e) => handleCreateDeck(e)}>
          Create Deck
        </button>
      </form>


    </>
  );
}

export default App;
