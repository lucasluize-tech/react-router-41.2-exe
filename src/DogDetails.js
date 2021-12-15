import { useParams, useHistory } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const DogDetails = ({ dogs }) => {
  const history = useHistory();
  const name = useParams();
  const dog = dogs["dogs"].filter((dog) => dog.name === name.name);
  console.log(dog);

  const handleClick = () => {
    history.push("/dogs");
  };

  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardImage src={dog[0].src} position='top' alt={dog[0].name} />
      <MDBCardBody>
        <MDBCardTitle>{dog[0].name}</MDBCardTitle>
        <MDBCardText>
          <h5>{dog[0].age} yrs.</h5>
          <ul>
            {dog[0].facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </MDBCardText>
        <MDBBtn onClick={handleClick}>Go Back</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default DogDetails;
