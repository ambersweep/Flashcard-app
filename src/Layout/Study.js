import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import { readDeck } from "../utils/api/index.js";
import { Link, useParams, useHistory } from "react-router-dom";

export default function Study() {
  const history = useHistory();
  const [cards, setCards] = useState([]);
  const [cardFront, setCardFront] = useState(true);
  const [deckTitle, setDeckTitle] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  const { deckId } = useParams();

  const currentCard = cards.find((card, index) => index === currIndex);

  const handleNext = () => {
    if (currIndex === cards.length - 1) {
      window.confirm(
        "Restart cards? Click 'cancel' to return to the home page."
      )
        ? setCurrIndex(() => 0)
        : history.push("/");
    } else {
      setCurrIndex((currIndex) => currIndex + 1);
    }
  };

  // If cardFront is True, displays front of card, if False, displays back of card
  const handleFlip = () => {
    setCardFront(() => !cardFront);
    console.log(cardFront);
  };

  useEffect(() => {
    const ac = new AbortController();
    async function fetchDeck() {
      try {
        const response = await readDeck(deckId, ac.signal);
        setCards(response.cards);
        setDeckTitle(response.name);
      } catch (err) {
        if (err.type === "AbortError") {
          console.error("Aborted", err);
        }
      }
    }

    fetchDeck();
    return () => ac.abort();
  }, [deckId]);

  if (cards.length > 2) {
    return (
      <div>
        <Nav name={deckTitle} page="Study" />
        <h1>Study: {deckTitle}</h1>
        <div className="row p-3">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">
                Card {currIndex + 1} of {cards.length}
              </h5>

              <p className="card-text">
                {cardFront ? currentCard.front : currentCard.back}
              </p>

              {/* flip card button */}
              <button onClick={handleFlip} className="btn btn-secondary mr-3">
                <i class="bi bi-arrow-clockwise mr-2"></i>
                Flip
              </button>

              {/* if card is on back side, provide a button to go to next card */}
              {cardFront ? null : (
                <button onClick={handleNext} className="btn btn-primary">
                  <i class="bi bi-arrow-right mr-2"></i>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (cards.length <= 2) {
    return (
      <div className="flex-container">
        <Nav name={deckTitle} page="Study" />
        <h1>Study: {deckTitle}</h1>
        <div>
          <h3>Not enough cards.</h3>
          <p className="card-text">
            You need at least 3 cards to study. There are {cards.length} cards
            in this deck.
          </p>

          <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
            <i className="bi bi-plus-circle mr-2"></i>
            Add Cards
          </Link>
          
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
