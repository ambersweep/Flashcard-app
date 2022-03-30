import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

export default function DeckCard({
  id,
  description,
  name,
  totalCards,
  updateDecks,
}) {
  const history = useHistory();

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(id);
      updateDecks(-1);
    } else {
      history.go(0);
    }
  };

  return (
    <div>
      <div className="col-sm-9">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h5 className="card-title col-sm-10 text-truncate">{name}</h5>
              <p className="text-muted ml-3">{totalCards} cards</p>
            </div>
            <p className="card-text">{description}</p>
            <div>
              <div className="row"></div>
              <Link className="btn btn-secondary mr-2" to={`/decks/${id}`}>
                <i className="bi bi-eye-fill mr-2"></i>
                View
              </Link>
              <Link className="btn btn-primary mr-2" to={`/decks/${id}/study`}>
                <i className="bi bi-journal-bookmark-fill mr-2"></i>
                Study
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
