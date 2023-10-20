
const Buttton = (props) => {
    const {className,children} =props;
  return (
    <button className={className} >
      {children}
    </button>
  )
}

export default Buttton
