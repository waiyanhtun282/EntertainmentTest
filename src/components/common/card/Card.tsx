
const Card = (props) => {
    const { className,children} =props;
  return (
    <>
    <figure className={className} />
    {children}
    </>
      
   
  );
};

export default Card;
