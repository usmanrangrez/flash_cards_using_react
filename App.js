import React from "react"
import Cards from "./Cards"
import Sdata from "./Sadata";


function ncard(val) {
    return (
        <Cards
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    );
}

function App() {
    return (
        <>
            <h1 className='heading'>H304</h1>
            {Sdata.map(ncard)}
        </>
    );
}

export default App;