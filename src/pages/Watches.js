import styled from "styled-components";

import watch1 from "../img/watch-1.jpeg";
import watch2 from "../img/watch-2.jpeg";
import watch3 from "../img/watch-3.jpeg";
import watch4 from "../img/watch-4.jpeg";
import watch5 from "../img/watch-5.jpg";
import watch6 from "../img/watch-6.jpg";

const Watches = () => {
  return (
    <>
      <FeaturedProductTextStyle>Featured Products</FeaturedProductTextStyle>
      <GridStyle>
        <GridItemStyle>
          <img src={watch1} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
        <GridItemStyle>
          <img src={watch2} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
        <GridItemStyle>
          <img src={watch3} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
        <GridItemStyle>
          <img src={watch4} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
        <GridItemStyle>
          <img src={watch5} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
        <GridItemStyle>
          <img src={watch6} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </GridItemStyle>
      </GridStyle>
    </>
  );
};

const FeaturedProductTextStyle = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: #fc8621;
    width: 150px;
    height: 4px;
    top: 40px;
    left: 520px;
  }
`;

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const GridItemStyle = styled.div`
  background-color: #393e46;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  img {
    max-width: 100%;
    object-fit: cover;
  }
  p {
    margin-top: 20px;
    line-height: 1.5rem;
  }
`;

export default Watches;
