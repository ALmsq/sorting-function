import styled from 'styled-components'
import px2vw from '../../utils/px2vw'
// display: flex;
// flex-shrink: 0;
// align-items: center;
// flex-direction: column;
// background: rgb(249, 249, 249);
//top
export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${px2vw(32)};
    overflow: hidden;
    max-width: 100%

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
      }
`
export const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const Wrapper3 = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    position: relative;
    background-color: rgb(7, 15, 21);
`


export const OuterContainer = styled.div`   
    display: flex;
    flex-shrink: 0;
    
    align-items: center;
    flex-direction: column;
    background: rgb(249, 249, 249);
`
export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    
`
export const BannerSpan = styled.span`
    font-weight: normal;
    line-height: 1.5;
    word-break: normal;
    display: inline;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, btcglyph;
    font-size: 40px;
    text-align: center;
    text-transform: inherit;
    color: rgb(16, 25, 34);
`
export const MarketInput = styled.input`
    display: flex;
    flex-basis: auto;
    
    flex-grow: 1;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid rgb(204, 204, 204);
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, btcglyph;
    font-size: 14px;
    color: rgb(16, 25, 34);
    caret-color: rgba(16, 25, 34, 0.4);
    background-color: rgb(255, 255, 255);
    height: 40px;
    margin-top: 20px;
`

//table
export const TableContainer = styled.table`
    display: block;
    flex-direction: column;
    overflow-x: auto;
    margin-top: 30px;
    
    max-width: 100%;
    border: 1px solid rgb(204, 204, 204);
}
`
export const TableHeadersContainer = styled.thead`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: flex-end;
    border-collapse: separate
`
// display: flex;
//     box-pack: center;
//     justify-content: center;
//     box-align: center;
//     align-items: center;
//     flex-direction: row;
//     flex-grow: 0;
//     flex-shrink: 0;
//     flex-basis: 20px;
//     margin: 8px;
//     overflow: hidden;
//     align-self: center;
export const TableHeadersImg = styled.td`
    text-align: left;
    text-transform: uppercase;
    margin: 8px
`
// font-weight: bold;
//     line-height: 1.5;
//     word-break: normal;
//     display: inline;
//     font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, btcglyph;
//     text-align: left;
//     color: rgb(16, 25, 34);
//     font-size: 12px;
//     text-transform: uppercase;
export const TableHeadersSpan = styled.th`
    display: flex;
    flex-direction: row;
    flex: 1 1 100px;
    margin: 8px;
    overflow: hidden;
    align-self: inherit;
`
export const TableHeadersDiv = styled.div`
@media (max-width: 768px) {
    width: 100px
}
    display: flex;
    flex-direction: row;
    margin: 8px;
`

export const TableHeadersText = styled.text`
@media (max-width: 768px) {
    font-size: 9px
} 
    font-weight: bold;
    line-height: 1.5;
    word-break: normal;
    display: inline;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, btcglyph;
    text-align: left;
    color: rgb(16, 25, 34);
    font-size: 12px;
    text-transform: uppercase;
    

    
`;









