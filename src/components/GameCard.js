import React from 'react';
import {
    MDBMask,
    MDBView,
    MDBCol,
} from 'mdbreact';

const GameCard = props => (
        <MDBCol size="3">
            <MDBView hover>
            <div onClick={() => props.selectCard(props.id)}>
                <img src={props.image} className="img-fluid" alt="bear images" />
                <MDBMask className="flex-center" overlay="red-light" />
                </div>
            </MDBView>
        </MDBCol>
    );


export default GameCard;
