import { useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme


function App()  {
    const celClickedListener = (e) => {
        console.log(e)
    }

       const [rowData, setRowData] = useState([
        {make:'Ford' , model : 'focus', price: 40000},
        {make:'Toyota' , model : 'Calica', price: 45000},
        {make:'BMW' , model : '4 Series', price: 50000},
    ]);

    const [colDefs, setcolDefs]= useState([
        {field : 'make'},
        {field : 'model'},
        {field : 'price'},
    ]);

    const defaultColDef = useMemo(()=> ({
        sortable :true,
        filter : true
    }), []);

    useEffect(()=> {
        fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then(response => response.json())
        .then(data => setRowData(data))
    }, [])

  return (
    <div
      className="ag-theme-quartz-dark" style={{height:500}}
    >
      <AgGridReact
      onCellClicked={celClickedListener} rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} rowSelection='multiple' animateRows={true}/>
    </div>
  );
};

export default App