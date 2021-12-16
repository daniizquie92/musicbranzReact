import './App.css';
import Header from './componentes/Header';
import React from 'react';
import Table from './componentes/Table';
import TForm from './componentes/TForm';
import axios from 'axios'
import TBody from './componentes/TBody';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cabeceraArtista: ['Nombre','Mas Informacion'],
      cabeceraCancion: ['Titulo','Artista','Tipo'],
      datos: null,
      entidad: "artist",
      api_root:'https://musicbrainz.org/ws/2/'
    }
    this.buscar = this.buscar.bind(this);
  }

  buscar(query,entity) {
    const url = this.state.api_root+entity+"?query="+query+"&limit=0&offset=0&fmt=json";
    this.setState({entidad: entity});
    console.log("la entidad es: "+entity)
    //console.log("Ha cambiado la entidad?"+this.state.entidad)
    console.log("La url es: "+ url)
    axios.get(url).then((response)=>{
      if(entity === "artist")
      {
        this.setState({datos: response.data.artists});
        console.log("datos de artist"); 
        console.log(this.state.datos)   
      }
      else{
        this.setState({datos: response.data['release-groups']});
        console.log("datos de release-group"); 
        console.log(this.state.datos)  
      }
    }).catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
    });
    console.log("Ha cambiado la entidad?"+this.state.entidad)
  }

  render(){
    if(this.state.datos)
    {
      if(this.state.entidad === "artist")
      {
        console.log("ha entrado en artist");

        return(
          <div className="App">
            <TForm adddato={this.buscar}></TForm>
            <Table columnas={this.state.cabeceraArtista} filas={this.state.datos} entidad={this.state.entidad}></Table> {/*evento={this.clicarPelicula}></Table>*/}
          </div>
        );
      }
      else
      {
        console.log("ha entrado en release-group");
        return(
          <div className="App">
            <TForm adddato={this.buscar}></TForm>
            <Table columnas={this.state.cabeceraCancion} filas={this.state.datos} entidad={this.state.entidad}> </Table> {/*evento={this.clicarPelicula}></Table>*/}
          </div>
        );
      }
    }
    else
    {
      return(
        <div>
          <Header ejercicio="Musicbrainz"></Header>
          <TForm adddato={this.buscar}></TForm>
        </div>
      );
    }
    
  }
}

export default App;
