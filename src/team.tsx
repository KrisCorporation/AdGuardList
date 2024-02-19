import People from "./people"

function Team(){
    return (
        <>
        <div className="flex justify-center gap-5 flex-col items-center mt-10">

            <div className="leading-none text-primary text-center font-title font-bold text-[35px]">
                Une présentation de votre équipe <br />
                <div className="text-[40px]">Ensemble pour Vous</div>
            </div>
            <svg className="w-[200px] h-[10px]">
                <line x1="10" y1="5" x2="190" y2="5"  stroke-width="4" stroke-linecap="round" className="stroke-secondary-3" />
            </svg>
            <div className="leading-none text-secondary text-center font-title italic text-[24px]">
                {/* Découvrez la force unie qui compose notre équipe. <br /> */}
                Une équipe engagée à défendre vos droits avec détermination. <br />
                Construisons l'avenir du travail, vers des conditions justes et équitables.
            </div>

            <div className="w-[1180px] flex flex-wrap gap-[30px] mt-10">
                <People/>
                <People/>
                <People/>
                <People/>
                <People/>
                <People/>
                <People/>
                <People/>
                <People/>
            </div>
            
        </div>
        </>
    )
}

export default Team