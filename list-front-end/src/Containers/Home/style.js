import styled from "styled-components";
import Background from '../../assets/bg-image.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size:  cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`
export const Image = styled.img`
    width: 330px;
    height: 176px;
    margin: 30px 45px;
`

export const Div = styled.div`
    width: 414px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;  
`
export const BoxList = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:30px;
    width: 100%;
    height: 100%;
`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    padding-left: 15px;
`
export const Span = styled.span`
    width: 44px;
    height: 22px;
    padding-left:  20px;
    padding-bottom: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`
export const Label = styled.label`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content:center ;
    gap:20px;   
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    img{
        transform: rotateY(180deg);
    }
    &:hover{
        transform: scale(1.05);
        transition: 300ms;
    }
`


