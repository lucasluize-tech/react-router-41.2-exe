import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      <div className='conainer-fluid header text-dark'>
        <h1>Welcome to the color factory.</h1>
        <Link to='/colors/new'>Add a color</Link>
      </div>
      <div>
        <p>Please select a color:</p>
        <div className='container d-flex flex-column gap-2 justify-content-center'>
          {colors.map((color) => (
            <Link to={`/colors/${color}`}>{color}</Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorList;
