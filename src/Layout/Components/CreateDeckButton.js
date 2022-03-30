import React from "react";
import { Link } from "react-router-dom";

export default function CreateDeckButton() {
  return (
    <div>
      <Link className="btn btn-secondary mb-2 ml-3" to="/decks/new">
      <i className="bi bi-plus-circle mr-2"></i>
        Create Deck
      </Link>
    </div>
  );
}
