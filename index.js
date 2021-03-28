var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Titulo inserido por JS :O"
// container.appendChild(titulo)

function Contador(props) {

    const [numero,setNumero] = React.useState(0)
    
    function somar(){

        setNumero(numero+1)

    }
    function subtrair(){
        setNumero(numero-1)

    }
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <img height="100" src={props.imagem}></img>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="Pichu" imagem="https://cdn.bulbagarden.net/upload/b/bb/Spiky-eared_Pichu_DP_1.png" />
            <Contador titulo="Pikachu" imagem="https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png"/>
            
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);

// ReactDOM.render(App(),container);