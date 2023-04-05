import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;

`;

export const Content = styled.div` 
    width: 100%;
    height: 100vh;

    .swiper-slide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 2.7rem;
    }

    .swiper-button-lock {
        display: flex;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 10rem;
        /* height: 51rem; */
       
        color: white;
        font-weight: bolder;
        /* mask-image: none; */
        border: 1px green solid;
    }


`;