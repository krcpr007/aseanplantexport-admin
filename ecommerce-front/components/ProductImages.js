import styled from "styled-components";
import {useState} from "react";

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({images}) {
  function convertURL(originalURL) {
    // this function made for below problem as it was not showing in the browser so i have to come with solution.
    /*
    let originalURL = "https://plant-ecommerce.s3.amazonaws.com/catalog/++CM Begonia/bowerae tiger.png";
    let convertedURL = convertURL(originalURL);
    console.log(convertedURL); // Output: "https://plant-ecommerce.s3.ap-south-1.amazonaws.com/catalog/%2B%2BCM%20Begonia/bowerae%20tiger.png"
    */
    // Replace characters as needed
    let convertedURL = originalURL.replace(/\+/g, '%2B')
                                  .replace(/\+/g, '%20')
                                  .replace(/ /g, '%20');
    return convertedURL;
}
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={convertURL(activeImage)} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
            <Image src={convertURL(image)} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}