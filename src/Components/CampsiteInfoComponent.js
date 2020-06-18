import React, {Component} from 'react';
import {Card, CardImg, Modal, ModalHeader, ModalBody, CardText, CardBody, Label, Button, Breadcrumb, BreadcrumbItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors} from 'react-redux-form';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite({campsite}){

    return(
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments != null){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(
                        <div className="m-1">
                            <div>{comment.text}</div>
                            <div> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>  
                        </div>
                    )
                })}
                <CommentForm />
            </div>
        );
    }

    return <div />
}
  

function CampsiteInfo(props){

    if(props.campsite){
        return(
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments}></RenderComments>
                    
                </div>
            </div>
        );
    }
    return <div />
}

class CommentForm extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil"></i> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="rating">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control "
                                validators={{
                                    minLength: minLength(2),
                                    maxLength: maxLength(15),
                                }}/>
                                <Errors className="text-danger" model=".author" show="touched" component="div" 
                                messages={{
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be less than 15 characters'
                                }}/>
                            </div>
                            <div className="form-group">    
                                <Label htmlFor="rating">Comment</Label>
                                <Control.textarea model=".text" id="text" name="text" className="form-control" rows="6" />
                            </div>
                            <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}


export default CampsiteInfo;