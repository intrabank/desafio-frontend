
interface InputProps {
  type: string,
  value: string,
  placeholder: string,
  id: string,
  name: string,
  label: string,
  required: boolean,
  onChange: (event: React.FormEvent) => void,
}

export const InputField = ({type, value, placeholder, id, name, label, required, onChange}: InputProps) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
        onChange={onChange} />
    </label>

  )
}