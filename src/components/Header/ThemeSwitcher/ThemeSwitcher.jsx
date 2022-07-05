import { ThemeInput, ThemeBtn, ThemeSwitcherWrapper } from './ThemeSwitcher.styled';
// import { useState } from 'react';
import { IconSVG } from 'Utils/Icons';
import { useThemeContext } from 'Hooks/ThemeContext';



export const ThemeSwitcher = () => {
    const {status, setThemeStatus} = useThemeContext();

    function setTheme (event) {
        const currentBtn = event.currentTarget.name;

        console.log(currentBtn)

        switch(currentBtn) {
            case "setLightTheme":
                setThemeStatus("dark")
                break;
            case "setDarkTheme":
                setThemeStatus("light")
                break;
                default:
                    console.log('incorrect button')
        }
    }



    return(
        <ThemeSwitcherWrapper>
            {status === "light" && <ThemeBtn type='submit' name='setLightTheme' onClick={setTheme}>
                <IconSVG id={'icon-light-theme'}/>
            </ThemeBtn>}
            
            {status === "dark" && <ThemeBtn type='submit' name='setDarkTheme' onClick={setTheme}>
                <IconSVG id={'icon-dark-theme'}/>
            </ThemeBtn>}
        </ThemeSwitcherWrapper>
        

    )
}
