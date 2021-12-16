import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

const Routes = ({ dogs, colors, setColors }) => {
  return (
    <Switch>
      <Route exact path='/colors'>
        <ColorList colors={colors} />
      </Route>
      <Route exact path='/colors/new'>
        <ColorForm setColors={setColors} colors={colors} />
      </Route>
      <Route exact path='/colors/:colorName'>
        <Color />
      </Route>
      <Route exact path='/dogs'>
        <DogList dogs={dogs} />
      </Route>
      <Route path='/dogs/:name'>
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to='/dogs' />
    </Switch>
  );
};

export default Routes;
