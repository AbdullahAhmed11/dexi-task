import { Switch, Route } from "react-router-dom";

import ChallengeOne from "./tasks/one";
import ChallengeTwo from "./tasks/two";
import ChallengeThree from "./tasks/three/three";
import One from "./One"
import Two from "./Two"
const Routes = () => (
    <Switch>
        <Route component={Two} path="/two" />
        <Route component={One} path="/one" />
    </Switch>
);

export default Routes;
