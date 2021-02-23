import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";

export default function CardTitle({ data }) {
  const onImangeClick=()=>{
    console.log("Image Clicked")
  }
  return (
    <div className="gutter-example">
<center>

      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
                />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
                />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img
              
                alt="example"
                width="100%"
                src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
              />
            </div>
            <div className="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img
              onClick={onImangeClick}
                alt="example"
                width="100%"
                src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
              />
            </div>
            <div className="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img
            alt="example"
            width="100%"
            src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
          />
        </div>
        <div className="custom-card">
          <h3>Europe Street beat</h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img
            alt="example"
            width="100%"
            src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
          />
        </div>
        <div className="custom-card">
          <h3>Europe Street beat</h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img
            alt="example"
            width="100%"
            src="https://cdn.vox-cdn.com/thumbor/HIluJzxPz3qH66lFxxHKVl10UzQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/60211577/acastro_180403_1777_youtube_0001.0.jpg"
          />
        </div>
        <div className="custom-card">
          <h3>Europe Street beat</h3>
          <p>www.instagram.com</p>
        </div>
      </Card>
      </center>
    </div>
  );
}
