import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";
import "./ImageGallery.css"; // Import custom CSS for additional styles

const ImageGallery = ({ images }) => {
  return (
    <>
      <Title title="Latest Gallery" />
      <Container>
        <Row className="gy-4">
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="gallery-card">
                <Card.Img 
                  variant="top" 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image" 
                />
                <Card.Body className="text-center">
                  <Card.Text>{image.alt}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ImageGallery;
