
function Menu(){

    return(
        <>
            <div className="w-full h-[120px] bg-primary text-white drop-shadow-xl flex gap-[100px] items-center justify-center">
                <img src="./src/assets/logo1.png"  className="h-[80px]" />
                {/* <div className="w-[80px] h-[80px] bg-white text-black">
                    logo
                </div> */}
                <div className="text-white font-title font-bold text-[18px] flex gap-[45px] mt-[30px] items-center">
                    <a href=""> ACCEUIL </a>
                    <a href=""> EQUIPE </a>
                    <a href=""> ARTICLES </a>
                    <a href=""> DOCUMENTS </a>
                    <a className="bg-secondary-3 p-2 pt-1 pb-1 rounded" href=""> ADHERER </a>
                </div>
                <img src="./src/assets/Logo.png"  className="h-[80px]" />
                {/* <div className="w-[80px] h-[80px] bg-white text-black">
                    logo
                </div> */}
            </div>
        </>
    )

}

export default Menu