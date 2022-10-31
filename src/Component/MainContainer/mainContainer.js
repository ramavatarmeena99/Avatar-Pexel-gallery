import React, { useEffect, useState } from "react";
// import { Image } from '../../ImageData';
import { API_KEY } from "../../key";
import styled from "styled-components";

export default function MainContainer() {
  // const [selectImage, setSelectImage] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("animal");



  const getPhotos = async () => {
    // let url = `https://api.pexels.com/v1/curated?per_page=50/search?query=${query}`;
    let url = `https://api.pexels.com/v1/search?query=${query}=query&per_page=48`;


    await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPhotos(res.photos);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };

  return (
    <>
      <Container>
        <ForSearch>
        <Input
        className="inputSearch"
        onKeyDown={onKeyDownHandler}
        placeholder="Search for free photos"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
        </ForSearch>
     <AllSearchImage>
     {photos?.map((item, index) => {
          return (
            <Div key={index}>
              <Img src={item?.src.medium} alt="all set"></Img>
            </Div>
          );
        })}
     </AllSearchImage>
       
      </Container>
      <div
      style={{width:"100%", height:"7vh", position:"fixed", bottom:"0px", left:"0px"}}
      >
        {/* <Button onClick={onBack}>BACK</Button>
        <Button onClick={onNext}>NEXT</Button> */}
      </div>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ForSearch = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllSearchImage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction:row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;


const Div = styled.div`
  max-width: 20%;
  flex-basis: 100px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

const Img = styled.img`
  width: 200px;
  height: 100%;
  margin: 5px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border:1px solid green;
  padding-left:10px;
  font-size:18px;
`;
