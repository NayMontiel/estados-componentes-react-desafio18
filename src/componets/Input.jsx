const Input = ({ setinputName, inputName, setEnabled, enabled}) => {
 
   
    return (
        <>
            <div className='container bg-light p-3'>
                <form className='form-control mb-2'>
                 
                    <div>
                        <label className='label mb-2' >Nombre</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Ingrese un texto'
                            className='form-control'
                            value={inputName}

                            onChange={(e) => setinputName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label mb-2'>Contraseña</label><br />
                        <input
                            type="password"
                            name="password"
                            placeholder='Ingresa una contraseña'
                            className='form-control'
                            value={enabled}
                            onChange={(e) => e.target.value === '252525' ? setEnabled(true) : setEnabled(false)}
                        />
                    </div>
                           
                </form>
            </div>
        </>
    )
}

export default Input