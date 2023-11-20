import './App.css';
// import { Abdelwaheb, Bannier } from './Components/Bannier';
import './Style.css'
import Bannier from './Components/Bannier';
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<div style={{width:'50%'}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      <h1 className='rahma'>Hello React</h1>
      <h2 style={{color:'orange',textDecoration:'underline'}}>Groupe F2</h2>
      {/* <Bannier/> */}
      <Bannier/>
      {/* <Abdelwaheb/> */}
    </div>
  );
}

export default App;
