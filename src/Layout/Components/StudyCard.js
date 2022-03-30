import React from "react";

export default function StudyCard({
  cards,
  currIndex,
  handleNext,
  handleFlip,
  back,
  front,
  cardFront,
}) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Card {currIndex + 1} of {cards.length}
            </h5>
             {/* If cardFront is True, displays front, if False, displays back*/}
            <p className="card-text">{cardFront ? front : back}</p>
            <button className="btn btn-secondary" onClick={handleFlip}>
              Flip
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
