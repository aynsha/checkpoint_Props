import React from "react";
import Container  from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import PlayersList from "./components/PlayersList";
import './components/style.css'
function App() {
  return (
    <div>
      <Container className="mt-4">
      <h1>Liste des Joueuses du Monde</h1>
      {/* Importation de notre composant PlayersList pour afficher le rendu */}
      <PlayersList/>
    </Container>
    </div>
  );
}

export default App;
