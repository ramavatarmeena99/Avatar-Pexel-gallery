import React, { useEffect, useState } from "react";
// import { Image } from '../../ImageData';
import { API_KEY } from "../../key";
import styled from "styled-components";

export default function MainContainer() {
  const [selectImage, setSelectImage] = useState([]);

  const [allImage, setallImage] = useState([]);
  let onBack = () => {
    if (selectImage.length > 1) {
      let a = selectImage?.splice(0, selectImage.length - 1);

      console.log(a, "ss");
      setSelectImage(a);
    }
  };
  let onNext = () => {
    setSelectImage([...selectImage, allImage[selectImage.length + 1]]);
    let newArr = [...selected, { key: txt?.toString(), category }];

    localStorage.setItem("myItems", JSON.stringify(newArr));
  };

  const getPhotos = async () => {
    let url = `https://api.pexels.com/v1/curated?per_page=100`;

    await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setallImage(res.photos);
        setSelectImage([res.photos[0]]);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <>
      <Container>
        {selectImage?.map((item, index) => {
          return (
            <Div key={index}>
              <Img src={item?.src.medium} alt="all set"></Img>
            </Div>
          );
        })}
      </Container>
      <div
      style={{width:"100%", height:"7vh", position:"fixed", bottom:"0px", left:"0px"}}
      >
        <Button onClick={onBack}>BACK</Button>
        <Button onClick={onNext}>NEXT</Button>
      </div>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
  cursor:pointer;
  border:1px solid green;
`;
