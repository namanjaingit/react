import Card from "./card/card.component";
import "./card-list.style.css";

const CardList = (props) => {
    debugger
  const {data} = props;
  return (
    <div className="card-list">
      {data.map((item) => {
        const { name, id, email } = item;
        return (
          <div className="card-container">
            <Card
              id="monster-card"
              alterText={name}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            ></Card>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
