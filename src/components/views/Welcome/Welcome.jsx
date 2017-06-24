import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";
import Build from "material-ui/svg-icons/action/build";
import Extension from "material-ui/svg-icons/action/extension";
import Iphone from "material-ui/svg-icons/hardware/phone-iphone";
import Computer from "material-ui/svg-icons/hardware/computer";
import Headset from "material-ui/svg-icons/hardware/headset-mic";
import Dashboard from "material-ui/svg-icons/action/dashboard";
import ColorLens from "material-ui/svg-icons/image/color-lens";
import Security from "material-ui/svg-icons/hardware/security";
import Settings from "material-ui/svg-icons/action/settings";
import Particles from "react-particles-js";
import FontIcon from "material-ui/FontIcon";
import Cloud from "material-ui/svg-icons/file/cloud";
import RaisedButton from "material-ui/RaisedButton";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import $ from "jquery";

import "./Welcome.css";

export default class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      selectedIndex: 0,
      staticJumbotron: false,
      fullWidthBackground: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.checkWidth();
    }, 200);
  }

  checkWidth = () => {
    const w = $(window).width();

    console.log(w);

    if (w <= 1000) {
      this.setState({
        staticJumbotron: true,
        fullWidthBackground: false
      });
    } else {
      this.setState({
        staticJumbotron: false,
        fullWidthBackground: true
      });
    }
  };

  select = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
    const favoritesIcon = (
      <FontIcon className="material-icons">favorite</FontIcon>
    );
    const nearbyIcon = <IconLocationOn />;

    let backgroundJumbotron = this.state.staticJumbotron
      ? <img
          style={{ width: "100%", minHeight: 300, opacity: 0.3 }}
          src={require("./images/nn-green.jpg")}
        />
      : <div />;

    if (this.state.fullWidthBackground) {
      backgroundJumbotron = (
        <Particles
          minHeight="100%"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "black",
                  blur: 1
                }
              }
            }
          }}
        />
      );
    }

    return (
      <div>
        <Row style={{ marginBottom: 60 }}>
          <Col
            xs={12}
            style={{
              textAlign: "center",
              background: "white",
              minHeight: 300,
              maxHeight: 700,
              marginBottom: 20
            }}
          >
            {/*<Image
            src={require("./images/nn-green.jpg")}
            style={{ width: 1150, maxHeight: 750, opacity: 0.09 }}
            responsive
          />*/}
            <div style={{ width: "100%", minHeight: 300, maxHeight: 700 }}>
              {backgroundJumbotron}
            </div>
            <Row>
              <Col xs={10} xsOffset={1} className="welcome-header">
                Launch a personalized <br />
                <span style={{ fontStyle: "italic" }}>"Hello World"</span>
                {" "}
                <br />
                <a href="https://aws.amazon.com/" target="_blank">
                  <img
                    className="aws-logo"
                    src={require("./images/aws-logo.png")}
                  />
                </a>
                <br />
                production-ready, virtual platform in 5 minutes!
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={10}
                xsOffset={1}
                sm={10}
                smOffset={1}
                md={4}
                mdOffset={0}
                lg={4}
                lgOffset={0}
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 0,
                  fontSize: 16,
                  fontWeight: "bold",
                  fontStyle: "italic"
                }}
              >
                {/*<Card
                  style={{
                    background: "black",
                    marginBottom: 10,
                    minHeight: 140
                  }}
                >*/}
                <NavLink to="/quickstart">
                  <RaisedButton
                    label="Go Cloud"
                    icon={
                      <Cloud
                        style={{
                          width: 50,
                          height: 50,
                          marginBottom: 5,
                          marginTop: 5,
                          color: "white"
                        }}
                      />
                    }
                    style={{ width: "90%", height: 110 }}
                    primary={true}
                  />
                </NavLink>
                {/*</Card>*/}
              </Col>
              <Col
                xs={10}
                xsOffset={1}
                sm={10}
                smOffset={1}
                md={4}
                mdOffset={0}
                lg={4}
                lgOffset={0}
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 0,
                  fontSize: 16,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  display: "block"
                }}
              >
                <NavLink to="/quickstart">
                  <RaisedButton
                    label="Go Mobile"
                    icon={
                      <Iphone
                        style={{
                          width: 50,
                          height: 50,
                          marginBottom: 5,
                          marginTop: 5,
                          color: "white"
                        }}
                      />
                    }
                    style={{ width: "90%", height: 110 }}
                    primary={true}
                  />
                </NavLink>
              </Col>
              <Col
                xs={10}
                xsOffset={1}
                sm={10}
                smOffset={1}
                md={4}
                mdOffset={0}
                lg={4}
                lgOffset={0}
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 0,
                  fontSize: 16,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  display: "block"
                }}
              >
                <NavLink to="/quickstart">
                  <RaisedButton
                    label="Go Web"
                    icon={
                      <Computer
                        style={{
                          width: 50,
                          height: 50,
                          marginBottom: 5,
                          marginTop: 5,
                          color: "white"
                        }}
                      />
                    }
                    style={{ width: "90%", height: 110 }}
                    primary={true}
                  />
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        {/*<Col xs={12}>
          <div
            style={{
                background: "black",
                width: "100%",
                boxShadow: "2px 2px 2px darkgrey",
                height: 2,
                marginTop: 10,
                marginBottom: 10
            }}
          />
        </Col>*/}
        <Row>
          <Col xs={12}>
            <Card style={{ marginTop: 10, marginBottom: 10 }}>
              <Row>
                <Col xs={12} style={{ marginTop: 20, marginBottom: 80 }}>
                  <h3 style={{ textAlign: "center", padding: 10 }}>
                    Build once, deploy everywhere!
                    <hr />
                  </h3>
                </Col>
                <Col
                  xs={8}
                  xsOffset={2}
                  sm={6}
                  smOffset={3}
                  md={4}
                  mdOffset={4}
                  lg={5}
                  lgOffset={1}
                >
                  <Image
                    src={require("./images/responsive_web_design.png")}
                    responsive
                  />
                  <br />
                </Col>
                <Col
                  xs={8}
                  xsOffset={2}
                  sm={6}
                  smOffset={3}
                  lg={5}
                  lgOffset={1}
                >
                  <List>
                    <NavLink to="/quickstart">
                      <ListItem
                        primaryText="Build Now!"
                        leftIcon={<Extension />}
                      />
                    </NavLink>
                    <ListItem
                      primaryText="Simple Intuitive UI/UX"
                      leftIcon={<ColorLens />}
                    />
                    <ListItem
                      primaryText="Application Management and Auto Scaling"
                      leftIcon={<Dashboard />}
                    />
                    <ListItem
                      primaryText="Production-ready and Secure"
                      leftIcon={<Security />}
                    />
                    <ListItem
                      primaryText="Services/Products"
                      leftIcon={<Settings />}
                    />
                    {/*<ListItem primaryText="Inbox" leftIcon={< />} />*/}
                  </List>
                  <br />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={{ marginTop: 10, marginBottom: 10 }}>
              <Row>
                <Col xs={12} style={{ marginTop: 20, marginBottom: 80 }}>
                  <h3 style={{ textAlign: "center", padding: 20 }}>
                    Superior Simplicity <br />
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>
                      (Security, Infrastructure and Technology Stack)
                    </span>
                    <hr />
                  </h3>
                </Col>
                <Col
                  xs={8}
                  xsOffset={2}
                  sm={6}
                  smOffset={3}
                  md={4}
                  mdOffset={4}
                  lg={5}
                  lgOffset={1}
                >
                  <Image
                    src={require("./images/aws-home-logo.jpg")}
                    responsive
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src={require("./images/react-logo.png")}
                    style={{ maxHeight: 120, marginTop: 10, marginBottom: 10 }}
                    responsive
                  />
                </Col>
                <Col
                  xs={8}
                  xsOffset={2}
                  sm={6}
                  smOffset={3}
                  lg={5}
                  lgOffset={1}
                >
                  <List>
                    <ListItem
                      primaryText="Build Now!"
                      leftIcon={<Extension />}
                    />
                    <ListItem
                      primaryText="Simple Intuitive UI/UX"
                      leftIcon={<ColorLens />}
                    />
                    <ListItem
                      primaryText="Application Management and Auto Scaling"
                      leftIcon={<Dashboard />}
                    />
                    <ListItem
                      primaryText="Production-ready and Secure"
                      leftIcon={<Security />}
                    />
                    <ListItem
                      primaryText="Services/Products"
                      leftIcon={<Settings />}
                    />
                    {/*<ListItem primaryText="Inbox" leftIcon={< />} />*/}
                  </List>
                  <br />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/*<Col xs={12}>
          <div
            style={{
                background: "black",
                width: "100%",
                boxShadow: "2px 2px 2px darkgrey",
                height: 2,
                marginTop: 10,
                marginBottom: 10
            }}
          />
        </Col>*/}
        <Col xs={12}>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onTouchTap={() => this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </Col>
      </div>
    );
  }
}
