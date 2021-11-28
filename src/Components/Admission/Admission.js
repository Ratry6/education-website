import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Accordion, Col, Form, ListGroup, Row } from 'react-bootstrap';
import './Admission.css'

const Admission = () => {
    return (
        <div>
            <div className="admission-header">
                <div className="rules-description">
                    <h2>Admission Rules</h2>
                    <p>Create more engaging and effective e-learning courses. Enroll now and earn a certificate! Ensure your e-learning programs contribute to behavioral-based outcomes for your learners.</p>
                </div>
                <div className="rules-list">
                    <Accordion> 
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Break-up Content</Accordion.Header>
                            <Accordion.Body>
                                Don’t overload a screen with too much text or too many graphics. Breaking-up content into smaller chunks will allow for better learning retention.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Pay Attention to Course Flow</Accordion.Header>
                            <Accordion.Body>
                                Your courses should follow a logical progression and navigational pattern so as to avoid confusion.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Avoid Distraction</Accordion.Header>
                            <Accordion.Body>
                                Don’t overdue the graphics, sometimes simple text is enough to drive home a point. Stick with a standard color-scheme.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Assessments Matter</Accordion.Header>
                            <Accordion.Body>
                                Always include some form of assessment, but not just on memorizing. Also include questions to assess business context.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Set SMART Objectives</Accordion.Header>
                            <Accordion.Body>
                                The objectives of your elearning should be specific, measurable, attainable, relevant, and time-bound.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                </div>
                <div className="form-part">
                <h2>Admission Form</h2>
                <Form className="form-fillup">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name1" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name2" placeholder="Enter your last name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEducation">
                        <Form.Label>Education</Form.Label>
                        <Form.Control placeholder="your educational background in brief" />
                    </Form.Group>
                    

                    <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>BioChemistry</option>
                                <option>History</option>
                                <option>Human Resources</option>
                                <option>Environmental Science</option>
                                <option>......</option>
                            </Form.Select>
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                       
                       

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control placeholder="Enter your mobile number" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className="btn-submit"  type="submit">
                        Submit Now
                    </Button>
                </Form>
                </div>

            
        </div>
    );
};

export default Admission;