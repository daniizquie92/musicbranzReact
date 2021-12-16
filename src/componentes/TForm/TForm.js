import React from "react";
import Button from '@mui/material/Button'
class TForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      entity: "artist"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    this.setState( {[name]: value });
  }

  handleSubmit() {
    //event.preventDefault();
    //envio de dato al estado padre, llamando a metodo
    console.log("la entidad del form es: "+this.state.entity)
    this.props.adddato(this.state.nombre,this.state.entity);
    //inicializa el form
    this.setState({
        nombre: "",
      });
  }

  render() {
    return (
      <div>
        <label>Nombre:<input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}/></label>
        <select name="entity" onChange={this.handleChange}>
            <option value="artist">Artista</option>
            <option value="release-group">Lanzamiento</option>
        </select>
        <Button variant="contained"   onClick={() => {this.handleSubmit()}}>Buscar</Button>
      </div>
    );
  }
}

export default TForm;
