import React from 'react'
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderDetails

    >
        <RenderImage>Avatar Pexels </RenderImage>
         </HeaderDetails>
  )
}

const HeaderDetails = styled.div`
  width: 100%;
  height: 7vh;
  background-color:lightgray;
  display:flex;
  align-items:center;
border:1px solid gray;
  justify-content:center;

`;
const RenderImage = styled.p`
font-size:22px;
font-weight:600;
`;
