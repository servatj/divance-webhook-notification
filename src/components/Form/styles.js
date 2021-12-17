import styled from 'styled-components';

export const TextArea = styled.textarea`
  display: block;
  background: #fff;
  grid-area: nav;
  padding: 0.25rem;
  height: 100px;
	resize: none;
	overflow: auto;
  transition: border 0.5s;
	-webkit-transition: border 0.5s;
	-moz-transition: border 0.5s;
	-o-transition: border 0.5s;
	border: solid 3px #98d4f3;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;

  &:focus{
	border: solid 3px #77bde0;
  }
`;


export const Container = styled.div`
  display: flex;
`

export const Form = styled.div`
  margin: 0 auto;
  width: 500;

`

export const Button = styled.button`
  display: block;
  background-color: #F90;
	color: white;
	height: 50px;
	cursor: pointer;
	margin-top: 30px;
	font-size: 1.29em;
	font-family: 'Sniglet', cursive;
	-webkit-transition: background-color 0.5s;
	-moz-transition: background-color 0.5s;
	-o-transition: background-color 0.5s;
	transition: background-color 0.5s;
`