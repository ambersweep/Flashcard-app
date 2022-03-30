import React from "react";
import { Link } from "react-router-dom";

// create a function for the card form that takes in props
// including the card, it's deck's id, the form's submit
// component, and the form's change component
function CardForm({ submitForm, changeForm, card, deckId, cardFront, cardBack, firstBtnText }) {
  // using these props, display the following content on the page:
  return (
    <form
      id="cardForm"
      onSubmit={submitForm}
    >
      <div className="flex-container">
        <div className="form-group">
          {/* a text area for the front of the card's content */}
          <label>Front</label>
          <textarea
            name="front"
            value={card.front}
            onChange={changeForm}
            id="front"
            className="form-control"
            placeholder={cardFront}
            rows={4}
          />
        </div>

        <div className="form-group">
          {/* a text area for the back of the card's content */}
          <label>Back</label>
          <textarea
            name="back"
            value={card.back}
            onChange={changeForm}
            className="form-control"
            id="back"
            placeholder={cardBack}
            rows={4}
          />
        </div>
      </div>
    
    <div className="flex-container">
      <Link
        to={`/decks/${deckId}`}
        name="cancel"
        className="btn btn-secondary mr-2"
       
      >
        {firstBtnText}
      </Link>

      {/* a button for saving the card's content */}
      <button
        type="submit"
        className="btn btn-primary"
      >
        Save
      </button>
      </div>
    </form>
  );
}

export default CardForm;