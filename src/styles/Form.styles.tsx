import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 30%;
    margin: 10px auto;

    label {
        text-transform: capitalize;
        padding-right: 5px;
        font-weight: 500;
    }

    input  {
        width: 50%;
        height: 35px;
        margin-bottom: 10px;
        outline: none;
        border: 1px solid lightgray;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 3px;
        background-color: white;
        border-style: solid;
        font-size: 1rem;
    }

    ::-webkit-input-placeholder {
        text-transform: capitalize;
    }
      
    :-ms-input-placeholder {
        text-transform: capitalize;      
    }
      
    ::placeholder {
        text-transform: capitalize;      
    }

    p {
        padding: 10px;
        border: 1px solid black;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: transparent;
        margin: 0.5rem 0.2rem;
        cursor: pointer;
        font-weight: bold;

        &:not([disabled]):hover {
            background-color: white;
            color: black;
        }
    }

    button[disabled] { 
        cursor: not-allowed;
    }
`;