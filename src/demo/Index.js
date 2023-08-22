import React from 'react'

const propsData = {
    headerData : [
        { id: 'name', Colname: 'Name'},
        { id: 'age', Colname: 'Age'},
        { id: 'place', Colname: 'PLace'},
        { id: 'language', Colname: 'Language'},
    ],
    rowData : [
        {name : 'vish', place : 'Delhi', age : '20'},
        { language : 'Java', place : 'Goa', age : '30'},
        {name : 'sun', place : 'Mumbai', age : '10'},
        {language: 'Python', name : 'venus', place : 'Chennai', age : '40'},

    ]
}
console.log(propsData)
let finalRowData = []
let modifiedRowdata = propsData.rowData.map((ele)=> Object.entries(ele))
modifiedRowdata.map((row)=> {
    let tablerow = []
    propsData.headerData.map((col)=> {
        let flag = false
        row.map((ele)=>{
            if(ele.includes(col.id)){
                tablerow.push(ele[1])
                flag = true
            }
        })
        if (!flag){
            tablerow.push('')
        }
    })
    finalRowData.push(tablerow)
})

console.log(finalRowData)

function Index() {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {propsData.headerData.map((ele)=>
                    <th key={ele.id}>{ele.Colname}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                
                {finalRowData.map((row, index)=>{
                    let rowitems =  row.map((ele, index)=> <td key={index}>{ele}</td>)
                    return (
                        <tr key={index}>
                            {rowitems}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Index
