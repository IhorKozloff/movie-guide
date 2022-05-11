import { NavigationLinksList, NavigationLinksItem, NavigationLink } from 'components/Header/Navigation/Navigation.styled';



export const Navigation = () => {
    return (
        <>
        <NavigationLinksList>
            <NavigationLinksItem>
                <NavigationLink to="/">home</NavigationLink>
            </NavigationLinksItem>

            <NavigationLinksItem>
                <NavigationLink to="/library">my library</NavigationLink>
            </NavigationLinksItem>
        </NavigationLinksList>
        </>
    )
};