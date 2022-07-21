import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

//run after each test
afterEach(() => {
    cleanup();
})

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'wash dish', completed: false };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(`todo-${todo.id}`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
    expect(todoElement).not.toContainHTML('strike');
});

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'wash car', completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(`todo-${todo.id}`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
    expect(todoElement).toContainHTML('strike');
});

//use snapshot to verify that the component hasn't changed
//since the last time we ran the test
//Note: press u for update snapshot
test('match snapshot', () => {
    const todo = { id: 3, title: 'wash dishes', completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});