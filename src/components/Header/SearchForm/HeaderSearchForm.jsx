import React from "react";
import { Formik } from "formik";
import { IconSVG } from 'Utils/Icons';
import { SearchForm, SearchFormTextArea, SearchFormBtn} from 'components/Header/SearchForm/HeaderSearchForm.styled';




export const HeaderSearchForm = ({setQueryMovie}) => {

    return (
        <>
            <Formik initialValues={{movie:''}} onSubmit={({movie}, actions) => {
                if (movie.trim() === '') {
                    return;
                };

                console.log(movie)
                setQueryMovie(movie)
                actions.resetForm();

            }}>
                <SearchForm className="header-form">
                    <SearchFormTextArea type="text" name="movie" placeholder="Поиск фильмов" className="search-input"/>
                    <SearchFormBtn type="submit" className="search-form-btn">
                        <IconSVG id={"search-icon"}/>
                    </SearchFormBtn>
                </SearchForm>
            </Formik>
        </>
    );
};