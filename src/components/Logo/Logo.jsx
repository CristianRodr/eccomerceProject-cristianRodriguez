import "./Logo.css"
import helmet from "./assets/spacesuit.svg"
export function Logo() {
    return (
        <>
            <div className="helmet">
                <img className="helmet__logo" src={helmet} alt="helmet"/>
                <h2 className="helmet__title">Mr. Casco</h2>
            </div>
        </>
    )
}