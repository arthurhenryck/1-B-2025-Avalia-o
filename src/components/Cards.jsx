import React from "react"
import './Cards.css'

function Cards({ produto, imagem }) {
    return (
        <>
            <div className="card7">{/*Card7*/}
                <div className="bottom"></div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-nLrynCmahulc5wxe2t6v3DRZ4xw0HG49U_EdND2FrEWk_urGlvJ7BNmtMThDqVzSxI&usqp=CAU" className="limpezaimg" />
                <p className="formatar texto"> {produto} </p>
            </div>
        </>
    )
}

export default Cards 