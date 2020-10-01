import styled from 'styled-components'


export const Wrapper = styled.div `
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 60px 40px;
    overflow: hidden;
    
    max-width: 100%;
    

    @media (max-width: 768px) {
        padding: 20px;
        
      }

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
      } 
`;

export const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Wrapper3 = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    position: relative;
    background-color: rgb(7, 15, 21);
    width: 100%;
`;

export const OuterContainer = styled.div`   
    display: flex;
    flex-shrink: 0;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background: rgb(249, 249, 249);
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%; 
`;

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
`;

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
`;

//table
export const TableContainer = styled.div`
    display: block;
    flex-direction: column;
    overflow-x: hidden;
    margin-top: 30px;
    
    max-width: 100%;
    border: 1px solid rgb(204, 204, 204);
`;

export const TableHeadersContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
        
    }
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: flex-end;
    border-collapse: separate;
    overflow: hidden;
    &:nth-child(even){
        background-color: rgb(233, 233, 233);
    }
`;

export const TableHeadersContainer2 = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
    display: none;
    justify-content: left;
    flex-direction: row;
    align-items: flex-end;
    border-collapse: separate;

    &:nth-child(even){
        background-color: rgb(233, 233, 233);
    }
`;

export const TableHeadersImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 0 0 20px;
    // text-align: left;
    // text-transform: uppercase;
    margin: 8px;
`

export const TableHeadersSpan = styled.span`
    display: flex;
    flex-direction: row;
    // flex: 1 1 100px;
    margin: 8px;
    
    align-self: inherit; 
`;

export const TableHeadersDiv = styled.div`
@media (max-width: 768px) {
    flex: 0 0 60px;
    white-space: normal;
    &:nth-child(n+2){
        
    }
    
}
    display: flex;
    flex-direction: row;
    flex: 1 1 90px;
    margin: 8px;
`;


export const TableHeadersText = styled.span`
@media (max-width: 768px) {
    font-size: 9px;
    width: 20vw;
    white-space: normal;
    display: flex;
    flex-wrap: wrap;
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

export const MarketText = styled.a`
@media (max-width: 768px) {
    font-size: 9px;
    width: 20vw;

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
    white-space: nowrap;

    

    cursor: pointer;
    text-decoration: none;
    &:visited {
        text-decoration: none;
    }
    
`;

export const MarketText2 = styled.span`
@media (max-width: 768px) {
    font-size: 9px;
    width: 20vw;
} 
    font-weight: normal;
    line-height: 1.5;
    word-break: normal;
    display: inline;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, btcglyph;
    text-align: left;
    color: rgb(16, 25, 34);
    font-size: 12px;
    white-space: nowrap
`;

export const SortText = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
export const MarketAnchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    &:visited {
        text-decoration: none;
    }
`;









