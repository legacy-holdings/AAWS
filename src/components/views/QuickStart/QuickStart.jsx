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
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import Security from "material-ui/svg-icons/hardware/security";
import VpnKey from "material-ui/svg-icons/communication/vpn-key";

import "./Quickstart.css";

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class AwsInitialSignup extends Component {
  constructor() {
    super();
    this.state = {
      finished: false,
      stepIndex: 0,
      accessKeyIdVak: undefined,
      secretAccessKeyVal: undefined
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 2 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 &&
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 400, margin: "auto" }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>
              Create an Amazon Web Services Account
            </StepLabel>
            <StepContent>
              <div>
                <br />
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <a
                    style={{ fontSize: 18, fontWeight: "bold" }}
                    href="https://www.amazon.com/ap/signin?openid.assoc_handle=aws&openid.return_to=https%3A%2F%2Fsignin.aws.amazon.com%2Foauth%3Fresponse_type%3Dcode%26client_id%3Darn%253Aaws%253Aiam%253A%253A015428540659%253Auser%252Fawssignupportal%26redirect_uri%3Dhttps%253A%252F%252Fportal.aws.amazon.com%252Fbilling%252Fsignup%253Fredirect_url%253Dhttps%25253A%25252F%25252Faws.amazon.com%25252Fregistration-confirmation%2526state%253DhashArgs%252523%2526isauthcode%253Dtrue%26noAuthCookie%3Dtrue&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&action=&disableCorpSignUp=&clientContext=&marketPlaceId=&poolName=&authCookies=&pageId=aws.ssop&siteState=pre-register%2Cen_US&accountStatusPolicy=P1&sso=&openid.pape.preferred_auth_policies=MultifactorPhysical&openid.pape.max_auth_age=120&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&server=%2Fap%2Fsignin%3Fie%3DUTF8&accountPoolAlias=&forceMobileApp=0&language=en_US&forceMobileLayout=0"
                    target="_blank"
                  >
                    AWS Sign Up
                  </a>
                  <br />
                  <br />
                  <a href="https://aws.amazon.com/" target="_blank">
                    AWS: What is it?
                  </a>
                </div>
              </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>
              Create and Submit Security Credentials
            </StepLabel>
            <StepContent>
              <ol>
                <li>
                  From the dashboard, click on your username in the top right hand corner, and click "My Security Credentials"
                  <br />
                  <img
                    style={{ width: 400, height: 300 }}
                    src={require("./images/aws-security-credentials-dd.png")}
                  />
                </li>
                <br />
                <li>
                  Click on the "Continue to Security Credentials" button
                  <br />
                  <img
                    style={{ width: 300, height: 200 }}
                    src={require("./images/aws-sec-creds.png")}
                  />
                </li>
                <br />
                <li>
                  Click on the "+" next to "Access Keys"
                  <br />
                  <img
                    style={{ width: 400, height: 300 }}
                    src={require("./images/access-keys-creds.png")}
                  />
                </li>
                <br />
                <li>
                  Click on "Create New Access Key" button
                  <br />
                  <img
                    style={{ width: 400, height: 300 }}
                    src={require("./images/create-new-access-key.png")}
                  />
                </li>
                <br />
                <li>
                  Click on "Show Access Key" link
                  <br />
                  <img
                    style={{ width: 400, height: 300 }}
                    src={require("./images/create-access-key.png")}
                  />
                </li>
                <br />
                <li>
                  Copy the "Access Key ID" and the "Secret Access Key"
                  <br />
                  <img
                    style={{ width: 400, height: 300 }}
                    src={require("./images/show-access-creds.png")}
                  />
                </li>
                <br />
                <li>
                  Submit "Access Key ID" and "Secret Access Key"
                  <br />
                  <VpnKey
                    style={{
                      display: "inline-block",
                      width: "10%",
                      marginRight: 10
                    }}
                  />
                  <TextField
                    style={{
                      display: "inline-block",
                      width: "80%"
                    }}
                    floatingLabelText="Access Key ID"
                    errorText={this.state.accessKeyIdErrorText}
                  />
                  <br />
                  <Security
                    style={{
                      display: "inline-block",
                      width: "10%",
                      marginRight: 10
                    }}
                  />
                  <TextField
                    style={{
                      display: "inline-block",
                      width: "80%"
                    }}
                    floatingLabelText="Secret Access Key"
                    errorText={this.state.secretAccessKeyErrorText}
                  />
                  <br />
                </li>
              </ol>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>
              Verify Your Account
            </StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished &&
          <p style={{ margin: "20px 0", textAlign: "center" }}>
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a> to reset the example.
          </p>}
      </div>
    );
  }
}

export default class QuickStart extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={10} xsOffset={1} className="quickstart-header">
            Quick Start
            <hr />
          </Col>
          <Col xs={10} xsOffset={1}>
            <h4>Initial Setup:</h4>
            <AwsInitialSignup />
          </Col>
        </Row>
      </div>
    );
  }
}
