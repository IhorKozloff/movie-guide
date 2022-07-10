import { PaginationWrapper, PaginationListItem, PaginationButton } from "./PaginationBar.styled";

export const PaginationBar = ({totalPages, setCurrentPage, currentPage}) => {


function paginationStartArrCreator (count) {
    let items = []
    for (let i = 1; i <= count; i += 1)  {
        items.push(i)
    }
   


   return items.map(item => {

       return item.toString() !== currentPage
        ?  (
                <PaginationListItem key={item} prosoProps={"prosoProps"}>
                    <PaginationButton type="button" onClick={() => {setCurrentPage(`${item}`)}}>{item}</PaginationButton>
                </PaginationListItem>
            )
        :  (
            <PaginationListItem key={item} active>
                <PaginationButton type="button" onClick={() => {setCurrentPage(`${item}`)}}>{item}</PaginationButton>
            </PaginationListItem>
            )      
    })
}



    return (
        <PaginationWrapper>
            <ul>
                {paginationStartArrCreator(totalPages)}
            </ul>
        </PaginationWrapper>
    )
}
