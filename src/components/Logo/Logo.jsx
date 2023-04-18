import "./Logo.css"
import comic from "./assets/comic-2026591.svg"
export function Logo() {
    return (
        <>
            <div className="helmet">

                <img className="helmet__logo" src={comic} alt="helmet"/>
                <h2 className="helmet__title">Mr. Casco</h2>
            </div>
        </>
    )
}