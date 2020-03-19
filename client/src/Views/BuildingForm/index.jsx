import React from 'react';
import { building } from '../../Services/otherServices';
import { editUserInformation } from '../../Services/authentication';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label
} from 'reactstrap';

class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      loaded: false,
      name: '',
      address: '',
      numberOfFloors: '',
      admin: this.props.user._id,
      numberOfApartments: [],
      picture: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.addSlot = this.addSlot.bind(this);
    this.eraseSlot = this.eraseSlot.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      loaded: true
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value
    });
  }

  addSlot(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    const slot = {
      _id: Math.floor(Math.random() * 10000000).toString(),
      slot: event.target[0].value,
      email: ''
    };
    this.setState(previousState => ({
      numberOfApartments: [...previousState.numberOfApartments, slot],
      temp: ''
    }));
    console.log('this.state', this.state);
  }

  async sendMessage(event) {
    event.preventDefault();
    try {
      const { name, address, numberOfFloors, admin, numberOfApartments, picture } = this.state;
      const newBuilding = await building({
        name,
        address,
        numberOfFloors,
        admin,
        numberOfApartments,
        picture
      });
      console.log(newBuilding.data.building._id)
     let buildingId = newBuilding.data.building._id
     const updateUser = await editUserInformation({buildingId})
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  eraseSlot(slot) {
    //slot.preventDefault();
    //console.log('Button entry', slot);
    let arr = this.state.numberOfApartments;
    //console.log('Searching for.....', arr);
    for (let i = 0; i < arr.length; i++) {
      //console.log('i', arr[i]);
      if (arr[i].slot == slot) {
        arr.splice(i, 1);
      }
    }
    //console.log('Final Array', arr);
    this.setState({
      numberOfApartments: arr
    });
  }

  render() {
    {
      console.log(this.state);
    }
    return (
      <>
        {(this.state.loaded && (
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign up</small>
                </div>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name of the building"
                      type="text"
                      name="name"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Address"
                      type="text"
                      name="address"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-phone-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Number of Floors"
                      type="number"
                      name="numberOfFloors"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </FormGroup>
                {/*  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-code-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Admin"
                      type="text"
                      name="admin"
                      readonly
                      value={this.props.user._id}
                      onChange={this.handleInputChange}
                      required
                    />
                  </InputGroup>
                </FormGroup> */}
                <Form onSubmit={this.addSlot}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Apartment Reference"
                        type="text"
                        name="temp"
                        value={this.state.temp}
                        onChange={this.handleInputChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <Button>Add Appartment</Button>
                </Form>
                <ul>
                  {this.state.numberOfApartments.map(slot => (
                    <li key={slot.slot}>
                      {slot.slot}{' '}
                      <button id={slot.slot} onClick={() => this.eraseSlot(slot.slot)}>
                        x
                      </button>
                    </li>
                  ))}
                </ul>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Picture"
                      type="file"
                      name="picture"
                      id="picture"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </FormGroup>
                <Form role="form" onSubmit={this.sendMessage} method="POST">
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Create Building
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        )) ||
          ''}
      </>
    );
  }
}
export default Building;
