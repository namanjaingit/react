import './card.style.css';

const Card = (props) => {
    const { classes, id, alterText, src } = props;
    return (
        <div className={classes} id={id}>
          <img alt={alterText} src={src} />
        </div>
    );
}

export default Card;