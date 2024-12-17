import { useState } from "react"

const ParagraphText = () => {

    const [paraText, setParaText] = useState("")

    const handleInput = e => {
        setParaText(e.target.value)
    }

    return (
        <div>
            Type Here: <input type="text" value={paraText} onChange={handleInput}></input>
            <p>{paraText}</p>
        </div>
    )

}

export default ParagraphText;