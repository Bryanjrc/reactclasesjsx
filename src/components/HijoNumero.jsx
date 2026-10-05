import { Component } from "react";

class HijoNumero extends Component {

    seleccionarNumero = () => {
        //CUANDO DESEEMOS, LLAMAMOS AL PADRE MEDIANTE SU METODO
        //EN props
        this.props.sumarNumeros(this.props.numero);
    }

    render() {
        return (
            <div>
                <h1 style={{color:"red"}}>
                    Número: {this.props.numero}
                </h1>

                <button onClick={this.seleccionarNumero}>
                    Sumar {this.props.numero}
                </button>
            </div>
        )
    }
}

export default HijoNumero;