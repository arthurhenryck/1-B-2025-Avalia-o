
import './Header.css' // Importa o CSS  

function Header() {
    return (
        <>
            <div className="header">{/*Cabeçalho*/}
                <img src="https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc=w240-h480-rw" className="logo" />
                <p className="cyber"> Cyber Assist </p>
            </div>
        </>
    )
}

export default Header