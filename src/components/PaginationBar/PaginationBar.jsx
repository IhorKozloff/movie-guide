import { PaginationWrapper, PaginationListItem, PaginationButton, PaginationList } from "./PaginationBar.styled";
import { useEffect, useState } from "react";

export const PaginationBar = ({totalPages, setCurrentPage, currentPage}) => {


const [visibilityList, setVisibilityList] = useState([]);

function paginationStartArrCreator (current, total) {
    
    if (total > 5 ) {
        if (total - current <= 4) {
            return [total - 5, total - 4, total - 3, total - 2, total - 1, total] 
        }

        if (current - 2 > 0) {
            return [current - 2, current - 1, current,  current + 1, current + 2, "...", total]
        }
        if (current - 1 > 0) {
            return [current - 1, current,  current + 1, current + 2, current + 3, "...",total]
        }
        if (current - 1 === 0) {
            return [current, current + 1, current + 2, current + 3, current + 4, "...",total]
        }
        if (current + 5 === total) {
            return [current - 2, current - 1, current,  current + 1, current + 2, "...",total]
        }
        if (current + 5 === total) {
            return [current - 2, current - 1, current,  current + 1, current + 2, "...",total]
        }
       
    } else {
        let items = [];
        for (let i = 1; i <= total; i += 1)  {
            items.push(i)
        };
        return items;
    }

}

useEffect(() => {
    setVisibilityList(paginationStartArrCreator(Number(currentPage), Number(totalPages)))
},[currentPage, totalPages])


    return (
            <PaginationWrapper>
                    <PaginationList>
                        {
                            visibilityList !== [] && visibilityList.map(item => {
                            if (item === "...") {
                                return (
                                <PaginationListItem key={item} className="background-none">
                                    <PaginationButton type="button">{item}</PaginationButton>
                                </PaginationListItem>)
                            }
                            return item.toString() !== currentPage
                                ?  (
                                        <PaginationListItem key={item}>
                                            <PaginationButton type="button" onClick={() => {setCurrentPage(`${item}`)}}>{item}</PaginationButton>
                                        </PaginationListItem>
                                    )
                                :  (
                                    <PaginationListItem key={item} claccName="active-button" active>
                                        <PaginationButton type="button" onClick={() => {setCurrentPage(`${item}`)}}>{item}</PaginationButton>
                                    </PaginationListItem>
                                    )      
                            })
                        }
                    </PaginationList>
            </PaginationWrapper>
    )
}
