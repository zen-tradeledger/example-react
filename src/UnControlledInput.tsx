import { useEffect, useState } from "react"

interface UnControlledInputProps {
    value: string
    onChange?: (value: string) => void
}

const UnControlledInput = ({
    value,
    onChange
}: UnControlledInputProps) => {
    const [state, setState] = useState(value)

    useEffect(() => {
        setState(value)
    }, [value])

    return (
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} 
            onBlur={() => {
                onChange && onChange(state)
            }} />
    )
}

export default UnControlledInput