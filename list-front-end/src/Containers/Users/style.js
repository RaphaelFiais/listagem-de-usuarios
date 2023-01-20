import styled from "styled-components";
import Background from '../../assets/bg-image2.svg';
import { FaTrashAlt } from "react-icons/fa";

export const Container = styled.div`
    background: url("${Background}");
    background-size:  cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    min-height: 100vh
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
    border-radius: 61px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:30px;
    width: 100%;
    min-height: 100%;
    ul{
        min-height: 250px;
    }
    h2{
        font-weight: 400;
        text-align: center;
        color: #fff;
    }
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
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content:center ;
    gap:20px;
    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 50px;
    &:hover{
        transform: scale(1.05);
        transition: 300ms;
    }
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 40px;
    color: #FFFFFF;
    margin-top:35px;
`

export const ListItem = styled.li`
    margin-bottom: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    list-style: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
`
export const Trash = styled(FaTrashAlt)`
    cursor: pointer;
    color: black;
`
