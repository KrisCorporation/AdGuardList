import PillList from "./pill-list"

const people={
    prenom: 'Vincent',
    nom: 'Ogier',
    metier: "Ingénieur Bureau d'Étude",
    activites: [
        {
            label:'CSE',
        },
        {
            label:'CHSCT',
        },
        {
            label:'TSSDF',
        }
    ],
    phone:'57 28',
    mail:'vincent.ogier@collins.com'
}

function People() {
    return (

    <div className='bg-white drop-shadow-2xl rounded-3xl flex flex-col gap-[25px] items-center w-fit p-[45px] pb-[30px]'>
        <div className="flex flex-col gap-[10px] items-center">
            <div className="h-[250px] w-[250px] bg-slate-300 rounded-xl">
                
            </div>
            
            <div className="flex flex-col gap-[10px] items-center">
                <div className="flex flex-col gap-1 items-center">
                    <div className="leading-none text-primary font-title font-bold text-[24px]">
                        {people.nom} {people.prenom}
                    </div>
                    <div className="leading-none text-secondary font-title font-bold text-[18px]">
                        {people.metier}
                    </div>
                </div>
                <PillList pillsObj={people.activites}/>
            </div>
        </div>
        <div className="text-center text-slate-900 text-sm">
            {people.phone} <br />
            {people.mail}
        </div>
    </div>
    )
  }
  
  export default People