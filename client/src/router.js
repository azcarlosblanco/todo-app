import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "reactstrap";

const TodoApp = lazy(() => import("./screens/todos"));

const Router = () => (
  <Suspense
    fallback={
      <div className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
        <Spinner color="primary" />
      </div>
    }
  >
    <Switch>
      <Route path="/" exact component={TodoApp} />
    </Switch>
  </Suspense>
);

export default Router;
