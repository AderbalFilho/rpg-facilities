import TheHeader from "@components/TheHeader";
import TheFooter from "@components/TheFooter";
import Routes from "./routes";

import './App.css';

function App() {
  return (
    <>
      <TheHeader title="Criação de fichas de RPG de Lasers &amp; Sentimentos"/>
      <Routes />
      <TheFooter />
    </>
  );
}

export default App;
