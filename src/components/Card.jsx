

export default function Card(props) {
   console.log(props)
   return (
      <div>
            {
            <><button onClick={onclose}>X</button>
            <h2>id: {this.props.id}</h2>
            <h2>Name: {this.props.name}</h2>
            <h2>Status: {this.props.status}</h2>
            <h2>Species: {this.props.species}</h2>
            <h2>Género: {this.props.gender}</h2>
            <h2>Origen: {this.props.origin}</h2>
            <img src={this.props.image} alt={this.props.name} /></>
         }
      </div>
   );
}

