export const getCountPage = (elements: number): number => {
    const totalCharacters: number = elements;
    const elementsPerPage: number = 5;

    const pageCount: number = totalCharacters % elementsPerPage > 0 ?
        Math.floor(totalCharacters / elementsPerPage) + 1 :
        Math.floor(totalCharacters / elementsPerPage);

    return pageCount;
}