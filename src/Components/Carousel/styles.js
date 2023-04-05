import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items:center;
    justify-content: center;
    
    .swiper-slide {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    
        gap: 2.7rem;
    }

    .swiper-button-next::after,
    .swiper-button-prev::before {
        width: 1rem;
        height: 50.9rem;
       
        color: white;
        font-weight: bolder;
        /* mask-image: none; */
        bolder: 1px red solid;
    }


`;