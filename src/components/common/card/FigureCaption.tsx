
const FigureCaption = (props) => {
  const {children,figCaption,h3 ,figName} =props;
  // console.log(props);
  return (
    <figcaption className={figCaption}>
      <h3 className={h3}>{figName}</h3>
      {children}
    </figcaption>
  )
}

export default FigureCaption
