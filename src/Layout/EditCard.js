import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard, readDeck, readCard } from "../utils/api/index.js";
import CardForm from "./Components/CardForm.js";
import Nav from "./Components/Nav.js";

function EditCard({ updateDecks }) {
  const [deck, setDeck] = useState([]);
  const [card, editCard] = useState({ front: "", back: "", deckId: "" });
  const { deckId, cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    const cardInfo = async () => {
      const response = await readCard(cardId, abortController.signal);
      editCard(() => response);
    };
    cardInfo();
    return () => abortController.abort();
  }, [cardId]);

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
    editCard({ ...card, [target.name]: target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
    updateDecks(1);
  };

  return (
    <div>
      {/* navigation bar */}
      <Nav name={deck.name} page={card.id} />

      <div className="flex-container">
        <h1>Edit Card</h1>
      </div>
      <CardForm
        submitForm={submitForm}
        changeForm={changeForm}
        card={card}
        deckId={deckId}
        firstBtnText="Cancel"
      />
    </div>
  );
}

export default EditCard;
