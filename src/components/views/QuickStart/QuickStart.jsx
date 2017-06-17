import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TextField from "material-ui/TextField";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

const TextFieldExampleError = () => (
  <div>
    <TextField hintText="Hint Text" errorText="This field is required" /><br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    />
    <br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    />
    <br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    />
    <br />
  </div>
);

export default class QuickStart extends Component {
    render() {
        return (
      <div>
        <Row>
          <Col xs={12}>
            {/*STEP 1: Setup AWS Account - Get Keys */}
            <Card>
              <h3 style={{ textAlign: "center", padding: 20 }}>
                QuickStart
              </h3>
            </Card>
            {/*<TextFieldExampleError />*/}
          </Col>
        </Row>
      </div>
        );
    }
}
