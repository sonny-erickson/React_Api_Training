import styled from 'styled-components'

const Button = styled.button`
background-color:#ff4444;
border: 1px solid;
color: white;
padding: .375rem .75rem;
transition: background-color 0.25s, color 0.25s;
border-radius: .25rem;
transition: background-color 0.25s, color 0.25s;

&:hover{
    opacity: 0.6;
    color: black;
    cursor: pointer;
}
`;
export default Button;

