import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index.js";
import CardForm from "./Components/CardForm.js";
import Nav from "./Components/Nav.js";

function AddCard() {
  const [deck, setDeck] = useState([]);

  // initial state of card before data is added through CardForm
  const [card, addCard] = useState({ front: "", back: "", deckId: "" });

  // variable for id of deck
  const { deckId } = useParams();


  useEffect(() => {
    const abortController = new AbortController();
    const deckInfo = async () => {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(() => response);
    };

    deckInfo();
    return () => abortController.abort();
  }, [deckId]);

  const changeForm = ({ target }) => {
    addCard({ ...card, [target.name]: target.value });
  };

  // handles adding data to card when submit button is clicked
  const submitForm = (event) => {
    event.preventDefault();
    addCard({ ...card, deckId: deckId });
    createCard(deckId, card);
    addCard({ front: "", back: "", deckId: "" });
  };

  return (
    <div>
      <Nav name={deck.name} page="Add Card" />

      {/* before deck.name is fetched, displays "loading..." once title is fetched switches to "deck.name: Add Card"*/ }
      <div>
        <h1>{deck.name ? deck.name + ": Add Card" : "Loading title..."}</h1>
      </div>

        {/* form with props for  */}
      <CardForm
        submitForm={submitForm}
        changeForm={changeForm}
        card={card}
        deckId={deckId}
        firstBtnText="Done"
        cardFront="Front side of card"
        cardBack="Back side of card"
      />
    </div>
  );
}

export default AddCard;
