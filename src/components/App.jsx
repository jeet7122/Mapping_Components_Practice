import React from "react";
import Emoji from "./Emoji";
import Header from "./Header";
import emojipedia from "../emojipedia";
import Card from "./Card";
import Footer from "./Footer";

function CreateCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div className="main">
      <div>
        <Header />
        {emojipedia.map(CreateCard)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
