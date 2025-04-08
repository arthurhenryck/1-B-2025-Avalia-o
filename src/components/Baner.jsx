import React from "react";
import './Baner.css'

function Baner() {
    return (
        <>
            <div className="baner">{/*Baner*/}
                <img src="https://manutencaocomputadores.net/wp-content/uploads/2016/09/manutencao_pcs.jpg" className="imgBaner" />
                <div className="dark"></div>
                <p className="escrBaner"> Concerto e limpeza de <br /> computadores e notbooks </p>
            </div>
        </>
    )
}

export default Baner