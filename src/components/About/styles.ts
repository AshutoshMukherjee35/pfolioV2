import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
      /* Enable hardware acceleration for smoother animations */
      will-change: transform, opacity;
      transform: translate3d(0, 0, 0);
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
    /* Enable hardware acceleration */
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
    /* Enable hardware acceleration */
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    /* Enable hardware acceleration */
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
  }

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
     /* Enable hardware acceleration */
     will-change: transform, opacity;
     transform: translate3d(0, 0, 0);
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
        /* Enable hardware acceleration */
        will-change: transform, opacity;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
        /* Enable hardware acceleration */
        will-change: transform, opacity;
        transform: translate3d(0, 0, 0);
      }
    }
  }
`
