
interface DividerProps {
  label: string;
}

const Divider = ( { label }: DividerProps ) => {
  return (
    <div className="divider">
      {label}
    </div>
  )
}

export default Divider
