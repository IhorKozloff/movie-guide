import { ThemeInput } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {




function onThemeSwitcherChange () {

}


    return(
        <label>
        Interest rate:
        <ThemeInput
            type="range"
            name="interest_rate"
            value="40"
            min="0"
            max="100"
            step="20"
            onChange={onThemeSwitcherChange}
        />
        </label>


    )
}