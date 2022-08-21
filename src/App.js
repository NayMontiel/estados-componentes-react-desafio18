import { useState } from "react";
import Input from "./componets/Input";
import Boton from "./componets/Boton";



function App() {


  const [enabled, setEnabled] = useState(false)
  const [inputName, setinputName] = useState('');
  
  return (
    <div className="App">
      <header>
        <h2>Estado de los Componentes y Eventos</h2>
      </header>

      <Input         
      
        valname={inputName}
        setinputName={setinputName}
        setEnabled={setEnabled}
        valPassword={enabled}
                
      />

      {enabled ? <Boton /> : null}
      
      <footer>
        <h5>©Todos Los Derechos Reservados</h5>
      </footer>
    </div>
  );
}

export default App;
