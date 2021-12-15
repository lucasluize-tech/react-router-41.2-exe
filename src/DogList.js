import { NavLink } from "react-router-dom";
import "./doglist.css";

const DogList = ({ dogs }) => {
  const dogList = dogs["dogs"];

  return (
    <ul className='dogsContainer'>
      {dogList.map((dog) => (
        <li key={dog.name}>
          <NavLink to={`/dogs/${dog.name}`}>
            <img src={dog.src} className='dogPhoto' />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DogList;
