import styled from '@emotion/styled';

export const LargeBtn = styled.button`
    width: 140px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #FFF;
    &:hover {
        background-color: #FF6B01;
        color: #FFF;
        box-shadow: 5px 5px 15px 1px #000000;
        transform: scale(1.1);
    }
    &.library-btn:hover {
        background-color: #810114;
        color: #FFF;
        box-shadow: 5px 5px 15px 1px #FFF;
        transform: scale(1.1);
    }

}
`;
// &.header-inform-btn {
//     margin-right: 15px;
// }
// &.header-inform-btn:hover {
//     box-shadow: 5px 5px 15px 1px #fff;
// }
// &.library-active {
//     background-color: #810114;
//     color: #FFF;
// } 