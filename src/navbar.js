import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return (<>
    <Nav variant="pills" defaultActiveKey="/home" className='clo'>
    <Nav.Item>
        <Nav.Link href="#/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
      </Nav.Item>  
      <Nav.Item>
      <Nav.Link href="#/alldata">Alldata</Nav.Link>
      </Nav.Item> 
    </Nav>
    </>
  );
}
