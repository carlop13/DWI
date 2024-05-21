import React from "react";
import "/DWI/intro-git/Screen/Welcome/welcome.css";

function Index() {
  
    return (
      <>
        <div>
            <h1>App con react</h1>
            <br />
            <p>Bienvenido a mi app donde podrás consulta temas interesantes</p>
            <br />
            <div className="estiloBoton">
                <button className="boton1">Ir al listado de tareas</button>
                <button className="boton2">Más sobre mí</button>
            </div>
        </div>
      </>
    )
  }

  export default Index