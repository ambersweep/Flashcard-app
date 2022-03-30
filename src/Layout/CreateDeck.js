import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index.js";
import Nav from "./Components/Nav.js";

function CreateDeck({ updateDecks }) {
  // make the original state of a new deck to contain an object
  // with empty strings for the deck's name and description
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });

  // create a variable to use the useHistory() hook
  const history = useHistory();

  // use changeForm to take the target deck and set it contain
  // it's current content as well as it's updated name and description
  const changeForm = ({ target }) => {
    setNewDeck({ ...newDeck, [target.name]: target.value });
  };

  // use submitForm to create the new deck
  const submitForm = async (event) => {
    event.preventDefault();
    const response = await createDeck(newDeck);
    // push the deck into history using the useHistory() hook
    history.push(`/decks/${response.id}`);
    // update the card deck using updateDeck()
    updateDecks(1);
  };

  // return a webpage containing the following content
  return (
    <div className="flex-container">
         <Nav name="New Deck" page="Create Deck" />
      <div>
        <h1>Create Deck</h1>
      </div>
   
      {/* a form for the following content */}
      <form onSubmit={submitForm}>
        {/* a text input for the card deck's name */}
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={newDeck.name}
            onChange={changeForm}
            id="name"
            className="form-control"
            placeholder="Deck Name"
          />
        </div>

        {/* a text area for the card's description */}
        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            value={newDeck.description}
            onChange={changeForm}
            className="form-control"
            id="description"
            placeholder="Brief description of the deck."
            rows={4}
          />
        </div>

        {/* a button for cancelling the deck */}
        <Link to={`/`} name="cancel" className="btn btn-secondary mr-2">
          Cancel
        </Link>

        {/* a button for submitted the deck */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;