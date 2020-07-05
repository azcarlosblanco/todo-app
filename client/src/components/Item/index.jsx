import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Card, CardBody, Input, Alert, CardTitle, CardText, Button, Row, Col, FormGroup, Label } from "reactstrap";
import { MdDeleteForever } from "react-icons/md";
import { deleteTodos, updatedTodos } from "../../store/todos/action";

const ItemList = ({ todos }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => dispatch(deleteTodos(id));

  const updateToCompleted = (id, payload) =>
    dispatch(
      updatedTodos({
        id,
        ...payload,
        completed: !payload.completed,
      })
    );

  if (!todos.length > 0) {
    return (
      <div className="d-flex- justify-content-center my-5 text-danger">
        <Alert color={"danger"} className="d-flex px-5">
          No Todos Added{" "}
        </Alert>
      </div>
    );
  }

  return todos.map(({ completed, title, description, _id }) => (
      <Card key={_id} className="my-2" color={completed ? 'info' : ''}>
        <CardBody>
        <Row>
          <Col xl={1} className="d-flex justify-content-center">
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  defaultChecked={completed}
                  required
                  onClick={() =>
                    updateToCompleted(_id, {
                      completed,
                      title,
                      description,
                      _id,
                    })
                  }
                />{' '}
              </Label>
            </FormGroup>
          </Col>
          <Col xl={11}>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
                <Button outline color="danger" onClick={() => deleteTodo(_id)} ><MdDeleteForever/></Button>
          </Col>
        </Row>
        </CardBody>
      </Card>
    )
  );
};

ItemList.defaultProps = {
  todos: [],
};

ItemList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default ItemList;
