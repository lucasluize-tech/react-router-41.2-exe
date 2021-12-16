import { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({ setColors, colors }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    colors: colors,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setColors(() => [...colors, formData.color]);
    history.push("/colors");
  };
  return (
    <div className='ColorForm container my-3'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='color'>Pick a Color:</label>
        <input
          type='color'
          name='color'
          id='color'
          onChange={handleChange}
          value={colors.color}
        />
        <button className='btn btn-primary mx-3'>Pick</button>
      </form>
    </div>
  );
};

export default ColorForm;
