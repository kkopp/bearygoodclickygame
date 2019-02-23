import React from 'react';
import {
    MDBMask,
    MDBView,
    MDBCol,
} from 'mdbreact';

const GameCard = props => (
        <MDBCol size="3">
            <MDBView hover>
            <a onClick={() => props.selectCard(props.id)} className={props.curScore === 0}>
                <img src={props.image} className="img-fluid" alt="bear images" />
                <MDBMask className="flex-center" overlay="red-light" />
                </a>
            </MDBView>
        </MDBCol>
    );


export default GameCard;
