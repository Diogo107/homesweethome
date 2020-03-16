import React from 'react';
import { building } from '../../Services/otherServices';

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
  Col
} from 'reactstrap';

class Building extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      numberOfApartment: '',
      admin: this.props.user._id,
      residents: '',
      picture: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    console.log(value);
    this.setState({
      [inputName]: value
    });
  }

  sendMessage(event) {
    event.preventDefault();
    const { name, address, numberOfFloors, admin, numberOfApartments, picture } = this.state;
    building({ name, address, numberOfFloors, admin, numberOfApartments, picture });
    this.props.history.push('/');
  }

  render() {
    {
      console.log('this is the create building', this.props);
    }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up</small>
              </div>
              <Form role="form" onSubmit={this.sendMessage} method="POST">
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
                <FormGroup>
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
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Number of Apartments"
                      type="text"
                      name="numberOfApartments"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                </FormGroup>
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

                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create Building
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Building;
