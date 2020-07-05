import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalBody,
  ModalFooter,
  Container,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";

import { addTodos, } from "../../store/todos/action";

const TodoInput = ({ handleStatus }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modal, setModal] = useState(false);
  
  const toggle = () => {
    setModal(!modal);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodos({ title, description }));
    if (title !== "") {
      setTitle('');
      setDescription('');
      setModal('');
    }
  };

  return (
    <Container>
      <Button color="info" className="mb-3" onClick={toggle}>
        <MdAdd /> New task
      </Button>
      <Form>
          <legend>Status</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="all-tasks"
                name="date-filter"
                value="all-tasks"
                onChange={() => handleStatus("allTasks")}
              />{' '}
              All tasks
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="pedning-tasks"
                name="date-filter"
                value="pending-tasks"
                onChange={() => handleStatus("pending")}
              />{' '}
              Pending tasks
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                id="completed-tasks"
                name="date-filter"
                value="completed-tasks"
                onChange={() => handleStatus("completed")}
                />{' '}
              Completed tasks
            </Label>
          </FormGroup>
        </Form>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader
          className={"py-3 bg-info text-white"}
          toggle={toggle}
        >
          Add Todos
        </ModalHeader>
        <ModalBody className={"px-4"}>
          <Form>
            <FormGroup>
              <Label for="Title">Title</Label>
              <Input
                type="text"
                placeholder="title..."
                required
                value={title}
                onChange={handleTitleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Description">Description</Label>
              <Input
                placeholder="description..."
                required
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button
              color="primary"
              className={"px-5"}
              onClick={handleSubmit}
            >
              Add
            </Button>
            <Button className={"px-5"} onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default TodoInput;
