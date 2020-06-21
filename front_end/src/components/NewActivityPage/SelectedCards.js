import React, { useState } from 'react';
import styled from 'styled-components';

// bring a flexbox with five empty slots; that's it. 

const StyleSelectedCard = styled.div`
    border: 1px solid navy;
    background-color: #D5F5E3;
    height: 50px;
    text-align: center;
    vertical-align: center;
`

const StyleContainerSelected = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    background-color: #ffffff;
    border: 2px solid orange;
    margin-bottom: 15px;
`

const SelectedCards = (props) => {
    const cardsMap = props.chosenCards.map((value) => {

        return (
            <StyleSelectedCard>
                {value}
            </StyleSelectedCard>)
    })


    return (
        <StyleContainerSelected>
            {cardsMap}
        </StyleContainerSelected>
    )
}

export default SelectedCards;