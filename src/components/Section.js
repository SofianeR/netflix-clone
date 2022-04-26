const Section = (props) => {
  return (
    <div className="carroussel-container">
      <p className="carroussel-title">{props.category}</p>
      <div className="carroussel">
        <div>
          {props.img.map((pic) => {
            return <img src={pic} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Section;
