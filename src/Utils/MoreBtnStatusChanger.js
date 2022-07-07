export function handleMoreBtnStatus (page, pages, setter) {
    if(page === pages) {
        setter(false);
    }
}