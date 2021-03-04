const Mensaje = (props) => {
    return (
      <h1 style = {{color : props.color}}>
        {/* Hola mundo! */}
        {props.message}
      </h1>
    )
  }

  export default Mensaje