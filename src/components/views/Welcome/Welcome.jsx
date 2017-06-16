import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Image } from "react-bootstrap";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";
import Particles from "react-particles-js";
import Build from "material-ui/svg-icons/action/build";

import "./Welcome.css";

export default class Welcome extends Component {
    render() {
        return (
      <div>
        <Col
          xs={12}
          style={{ textAlign: "center", background: "black", minHeight: 300 }}
        >
          {/*<Image
            src={require("./images/nn-green.jpg")}
            style={{ width: 1150, maxHeight: 750, opacity: 0.09 }}
            responsive
          />*/}
          <Particles
            width="100%"
            maxHeight={750}
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "gold",
                            blur: 5
                        }
                    }
                }
            }}
          />
          <Row>
            <Col xs={8} xsOffset={2} className="welcome-header">
              Launch a personalized <br />
              <span style={{ fontStyle: "italic" }}>"Hello World"</span> <br />
              <a
                href="https://aws.amazon.com/"
                target="_blank"
              >
                <img
                  style={{ height: "16vw", width: "16vw", marginBottom: 20 }}
                  src={require("./images/aws-logo.png")}
                />
              </a>
              <br />
              production virtual platform in 5 minutes!
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
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
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} style={{ marginTop: 20, marginBottom: 80 }}>
              <h1 style={{ textAlign: "center" }}>
                Build once, deploy everywhere!
              </h1>
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
            <Col xs={8} xsOffset={2} sm={6} smOffset={3} lg={5} lgOffset={1}>
              <List>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                <ListItem primaryText="Services" leftIcon={<Build />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              </List>
              <br />
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
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
        </Col>
      </div>
        );
    }
}
