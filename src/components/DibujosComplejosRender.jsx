import { Component } from "react";

class DibujosComplejosRender extends Component {

    state = {
        nombres: ["Diana", "Antonia", "Adrian", "Lucia"]
    }

    generarNombre = () => {
        //PODEMOS UTILIZAR DIRECTAMENTE EL MÉTODO DEL ARRAY push
        //SI ES UN OBJETO SIMPLE (string, int) NO PODEMOS ASIGNAR
        this.state.nombres.push("NUEVO NOMBRE");
        //SI NO REASIGNAMOS EL VALOR MEDIANTE setState, NO LO VEREMOS
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return(
            <div>
                <h1>Dibujos complejos render</h1>
                
                <button onClick={this.generarNombre}>
                    Generar nombre
                </button>
                {
                    //ESTO ES CÓDIGO JSC DE REACT
                    this.state.nombres.map((nombre, index) => {
                        //ESTE CÓDIGO NECESITA UN RETURN PARA EL RENDER
                        return (
                            <h4 style={{color: "blue"}} key={index}>
                                {nombre}
                            </h4>
                            
                        )
                    })
                }
            </div>
        )
    }

}

export default DibujosComplejosRender;