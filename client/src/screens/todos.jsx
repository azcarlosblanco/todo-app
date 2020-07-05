import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import Loader from "../components/Loader";
import TodoList from "../components/Item";
import TodoInput from "../components/Input";
import { getTodos } from "../store/todos/action";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { unCmplTodos, cmplTodos } = useSelector(state => state.todoReducers)

  const [state, setState] = React.useState({
    showAllTasks: false,
    showPendingTasks: true,
    showCompletedTasks: true,
  });

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleStatus = (status) => {
    if (status === "pending") {
      setState({
        ...state,
        showAllTasks: false,
        showPendingTasks: true,
        showCompletedTasks: false,
      });
    } else if (status === "completed") {
      setState({
        ...state,
        showAllTasks: false,
        showPendingTasks: false,
        showCompletedTasks: true,
      });
    } else {
      setState({
        ...state,
        showAllTasks: true,
        showPendingTasks: false,
        showCompletedTasks: false,
      });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xl={12} className="d-flex justify-content-center my-2">
          <h3 className="mt-3">Todo Application</h3>
        </Col>

        <Col md={3} lg={3} xl={2}>
          <TodoInput handleStatus={handleStatus} />
        </Col>

        <Col md={9} xl={10}>
          <Loader>
              {(state.showPendingTasks || state.showAllTasks) && (
                <TodoList todos={unCmplTodos} />
              )}
              <nav aria-label="breadcrumb" className="mt-5">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item" aria-current="page">Done</li>
                </ol>
              </nav>
              {(state.showCompletedTasks || state.showAllTasks) && (
                <TodoList todos={cmplTodos} />
              )}
            </Loader>
        </Col>
      </Row>
    </Container>
  );
};
export default TodoApp;
