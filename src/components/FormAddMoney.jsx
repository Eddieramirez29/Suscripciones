
import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [defaultValue, setDefaultValue] = useState("1000$");

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
        setInput(""); // Restablecer el valor de input
        setDefaultValue("1000$"); // Restablecer el valor por defecto
    }

    return ( 
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Agregar Presupuesto</p>
                <input
                    type="number"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={defaultValue}
                />
                <input type="submit" value="Agregar" onClick={() => setDefaultValue("")} />
            </form>
            { error ? <p className="error">Presupuesto inválido</p> : null }
        </div>
    );
}

export default FormAddMoney;
