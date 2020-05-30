import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Form} from 'reactstrap';


class CampsiteInfo extends Component {
    constructor(props){
        super(props);
    }

    renderComments(comments){
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
                </div>
            );
        }

        return <div />
    }

    renderCampsite(){
        const campsite = this.props.campsite;

        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render(){
        if(this.props.campsite != null){
            return(
                <div className="row">
                    {this.renderCampsite()}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }else return(<div></div>);
    }
}


export default CampsiteInfo;