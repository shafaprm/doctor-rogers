import styled from 'styled-components';

const Adds = () => {
    return (
        <AddsContainer>
            <h1 style = {{fontWeight: 400, fontSize: '12px', fontFamily: 'Roboto', letterSpacing: '0.7px'}}>FREE STANDARD SHIPPING ON ORDER OVER $40</h1>
        </AddsContainer>
    )
}

const AddsContainer = styled.div`
    width: 100%;
    height: 37px;
    background-color: #a8b5b0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Adds;