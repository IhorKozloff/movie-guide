import { ThemeBtn, ThemeSwitcherWrapper } from './ThemeSwitcher.styled';
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
                localStorage.setItem("theme", "dark")
                break;
            case "setDarkTheme":
                setThemeStatus("light")
                localStorage.setItem("theme", "light")
                break;
                default:
                    console.log('incorrect button')
        }
    }



    return(
        <ThemeSwitcherWrapper className='theme-switcher'>
            {status === "light" && <ThemeBtn className='theme-switcher__button' type='submit' name='setLightTheme' onClick={setTheme}>
                <IconSVG className='theme-switcher__icon' id={'icon-light-theme'}/>
            </ThemeBtn>}
            
            {status === "dark" && <ThemeBtn className='theme-switcher__button' type='submit' name='setDarkTheme' onClick={setTheme}>
                <IconSVG className='theme-switcher__icon' id={'icon-dark-theme'}/>
            </ThemeBtn>}
        </ThemeSwitcherWrapper>
        

    )
}
