import { useParams, Link } from "react-router-dom";

const Color = () => {
  const { colorName } = useParams();

  return (
    <div style={{ backgroundColor: `${colorName}` }}>
      <h1 className='text-light'>You chose {colorName} as BackGround!</h1>
      <Link className='text-light' to='/colors'>
        Go back
      </Link>
    </div>
  );
};

export default Color;
