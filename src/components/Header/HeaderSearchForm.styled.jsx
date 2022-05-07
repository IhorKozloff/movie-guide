import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
    width: 100%;
    position: relative;
    display: flex;
`;
export const SearchFormTextArea = styled(Field)`
    width: 100%;
    color: #fff;
    font-size: 14px;
    line-height: 1.14;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    outline: none;
    &::placeholder {
        color: #fff;
    }
`;
export const SearchFormBtn = styled.button`
    background: none;
    border: none;
    &:hover {
        cursor: pointer;
        transform:scale(1.3);
    }
`; 