import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { listDecks } from "../utils/api";
import Study from "./Study";
import EditDeck from "./EditDeck";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import EditCard from "./EditCard";
import AddCard from "./AddCard";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deckLength, setDeckLength] = useState(0);
  // update the decks by adding the total number of decks together
  const updateDecks = (newDecks) => {
    setDeckLength(() => deckLength + newDecks);
  };
  
  useEffect(() => {
    const ac = new AbortController();
    async function fetchDecks() {
      try {
        const response = await listDecks(ac.signal);
        setDecks(response);
      } catch (err) {
        if (err.type === "AbortError") {
          console.error("Aborted", err);
        }
      }
    }
    fetchDecks();
    return () => ac.abort();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home decks={decks} />
          </Route>
          {/* Create Deck Page */}
          <Route path="/decks/new">
            <CreateDeck updateDecks={updateDecks} />
          </Route>
          {/* Deck Page */}
          <Route path="/decks/:deckId" exact>
            <Deck updateDecks={updateDecks} />
          </Route>
           {/* Study Page */}
          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>
           {/* Add Card Page */}
          <Route path="/decks/:deckId/cards/new">
            <AddCard updateDecks={updateDecks} />
          </Route>
           {/* Edit Deck Page */}
          <Route path="/decks/:deckId/edit">
            <EditDeck updateDecks={updateDecks} />
          </Route>
           {/* Edit Card Page */}
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard updateDecks={updateDecks} />
          </Route>
           {/* Not Found Page */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
