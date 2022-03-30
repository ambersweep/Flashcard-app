import React from "react";

export default function DeckForm({ name, description }) {
  return (
    <div>
      <form>
        <label for="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder={name}
        ></input>
        <label for="formGroupExampleInput" class="form-label">
          Description
        </label>
        <input
          type="textarea"
          class="form-control"
          id="description"
          placeholder={description}
        ></input>
        <button type="button" class="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
