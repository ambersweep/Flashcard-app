import React from "react";

export default function Nav({ name, page }) {
  return (
    <div className="flex-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door-fill"></i> Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/">{name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {page}
          </li>
        </ol>
      </nav>
    </div>
  );
}
