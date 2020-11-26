import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../Dashboard/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const AddRent = () => {
    const [services, setServices] = useState({});
    const [files, setFiles] = useState(null);

    const handleInput = (e) => {
        const newServices = { ...services };
        newServices[e.target.name] = e.target.value;
        setServices(newServices);
    }

    const handleFileInput = e => {
        const newFile = e.target.files[0];
        setFiles(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', files)
        formData.append('title', services.title)
        formData.append('description', services.description)

        fetch('https://fierce-forest-06981.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("New service added successfully");
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }

    return (
        <div>
            <Form style={{ paddingLeft: '20px' }}>
                <Row style={{ padding: '20px', width: '100%', height: '300px', background: '#FFFFFF', borderRadius: '10px' }}>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>Service Title</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="title" type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>Location</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="location" type="text" placeholder="Enter location" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>No of Bathroom</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="bathroom" type="text" placeholder="Enter no" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>Price</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="price" type="text" placeholder="Price" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>No of Bedroom</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="bedroom" type="text" placeholder="Enter no" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ fontWeight: '700' }}>Thumbnail</Form.Label>
                            <br/>
                            <div class="upload-btn-wrapper">
                                <button onChange={(e) => handleFileInput(e)} className="upload-btn" ><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUpload} />Upload a file</button>
                                <input type="file" name="file" />
                            </div>
                        </Form.Group>

                    </Col>
                </Row>
                <Button onClick={(e) => handleSubmit(e)} style={{ float: "right", margin: '20px', height: '40px', width: '100px', background: '#28A745' }} type="submit" variant="success">Submit</Button>
            </Form>
        </div>
    );
};

export default AddRent;