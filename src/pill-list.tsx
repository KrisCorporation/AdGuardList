
// const pillsObj=[
//     {
//         label:'CSE',
//     },
//     {
//         label:'CHSCT',
//     },
//     {
//         label:'TSSDF',
//     },
//     {
//         label:'TSSDdF',
//     }
// ];

const colorFromLabelData= {
    CSE:'#1B499B',
    CHSCT:'#30C5F1',
    TSSDF:'#EC519B'
}

function colorFromLabel(label){
    return label in  colorFromLabelData ? colorFromLabelData[label] : '#000000'
}

function PillList({pillsObj}) {
    return (

            <div className='flex gap-[12px]'>
                {
                    pillsObj.map(p=>{
                        return pill(p)
                    })
                }
            </div>
    )
  }
  
  export default PillList

  function pill(p){
    return(
        <div className={"font-title text-white text-[12px] font-bold bg-slate-500 p-1 px-2 rounded-full"} style={{ backgroundColor: colorFromLabel(p.label)}} >
            {p.label}
        </div>
    )
    
  }