interface ControlledInputProps {
    value: string
    onChange: (value: string) => void
}

const ControlledInput = ({
    value,
    onChange
}: ControlledInputProps) => {

    return (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    )
}

export default ControlledInput