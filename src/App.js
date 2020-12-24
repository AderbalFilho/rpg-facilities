import LasersFeelingsSheet from "@pages/LasersFeelingsSheet";
import TheHeader from "@components/TheHeader";
import TheFooter from "@components/TheFooter";

import './App.css';

function App() {
  return (
    <>
      <TheHeader title="Criação de fichas de RPG de Lasers &amp; Sentimentos"/>
      <LasersFeelingsSheet />
      <TheFooter />
    </>
  );
}

export default App;
