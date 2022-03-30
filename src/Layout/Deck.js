import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api/index.js";
import { deleteDeck, deleteCard } from "../utils/api/index.js";

// create a function that retrieves an updated deck's id,
// fetches it's card data, and sets the deck's useState to
// contain it's content
function Deck({ updateDecks }) {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { id, name, description, cards } = deck;

  useEffect(() => {
    const abortController = new AbortController();
    const deckInfo = async () => {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(() => response);
    };
    deckInfo();
    return () => abortController.abort();
  }, [deckId]);

  // create a handler for the delete button
  const deleteHandler = async () => {
    // if the button is clicked and confirmed by the user, delete the deck using it's id
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(id);
      // use updateDecks() to subtract it from the card deck
      updateDecks(-1);
      // redirect to the home page
      history.push("/");
      // if the delete is not confirmed, leave the deck as is and remain on the same page
    } else {
      history.go(0);
    }
  };

  // if there is no deck or no cards, return the following webpage
  // that displays "loading..."
  if (!deck || !cards) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      // if a deck or cards are present, return a webpage with the following content
    );
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i className="bi bi-house-door-fill mr-1"></i>
                Home
              </a>
            </li>
            <li className="breadcrumb-item text-truncate">{name}</li>
          </ol>
        </nav>

        {/* a container holding the card deck, including their name,
                description, a button to study it, a button to edit it, a 
                button to add cards to the deck, and a button to delete it */}

        <div className="flex-container">
          <div className="card-body">
            <div className="row">
              <h5 className="card-title ml-3">{name}</h5>
            </div>

            {/* deck description */}
            <p className="card-text">{description}</p>

            <div>
              {/* edit button */}
              <Link to={`/decks/${id}/edit`} className="btn btn-secondary mr-2">
                <i className="bi bi-pencil-square mr-2"></i>
                Edit
              </Link>

              {/* study button */}
              <Link to={`/decks/${id}/study`} className="btn btn-primary mr-2">
                <i className="bi bi-journal-bookmark-fill mr-2"></i>
                Study
              </Link>

              {/* add cards button */}
              <Link
                to={`/decks/${id}/cards/new`}
                className="btn btn-primary mr-2"
              >
                <i className="bi bi-plus-circle mr-2"></i>
                Add Cards
              </Link>

              {/* delete button */}
              <button
                onClick={deleteHandler}
                name="delete"
                value={id}
                className="btn btn-danger"
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        </div>

        {/* a container containing all cards, including their front, back
                an edit button, and a delete button */}

        <div className="flex-container ml-2">
          <h1>Cards</h1>
        </div>

        {cards.length
          ? cards.map((card, index) => (
              <div className="row d-flex" key={index}>
                <div className="card col-sm-5 m-4">
                  <div className="row card-body">
                    {/* front */}
                    <p className="text-muted">front</p>
                    <h4 className="col-10 card-text">{card.front}</h4>
                  </div>

                  <div className="d-flex justify-content-end pl-4">
                    {/* edit button */}
                    <Link
                      to={`${url}/cards/${card.id}/edit`}
                      className="btn btn-secondary mb-2"
                    >
                      <i className="bi bi-pencil-square mr-2"></i>
                      Edit
                    </Link>

                    <button
                      type="delete"
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this card? You will not be able to recover it."
                          )
                        ) {
                          await deleteCard(card.id);
                          history.go(0);
                        } else {
                          history.go(0);
                        }
                      }}
                      name="deleteCard"
                      value={card.id}
                      className="btn btn-danger ml-2 mb-2"
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
                <div className="card col-sm-5 m-4">
                  <div className="row card-body">
                    {/* back */}
                    <p className="text-muted">back</p>
                    <h4 className="col-10 card-text">{card.back}</h4>
                  </div>

                  <div className="d-flex justify-content-end pl-4">
                    {/* edit button */}
                    <Link
                      to={`${url}/cards/${card.id}/edit`}
                      className="btn btn-secondary mr-2 mb-2"
                    >
                      <i className="bi bi-pencil-square mr-2"></i>
                      Edit
                    </Link>

                    <button
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this card? You will not be able to recover it."
                          )
                        ) {
                          await deleteCard(card.id);
                          history.go(0);
                        } else {
                          history.go(0);
                        }
                      }}
                      name="deleteCard"
                      value={card.id}
                      className="btn btn-danger mr-2 mb-2"
                    >
                      <i
                        aria-hidden="true"
                        style={{ color: "#ffffff" }}
                        className="fa fa-trash"
                      ></i>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Deck;
