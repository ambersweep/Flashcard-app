import React from "react";
import CreateDeckButton from "./Components/CreateDeckButton";
import DeckCard from "./Components/DeckCard";
export default function Home({ decks }) {
  const deckList = decks.map(({ id, name, description, cards }) => (
    <DeckCard
      id={id}
      key={id}
      name={name}
      description={description}
      totalCards={cards.length}
    />
  ));
  return (
    <div>
      <ul>
        <CreateDeckButton />
        {deckList}
      </ul>
    </div>
  );
}
