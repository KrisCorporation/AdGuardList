import { icons } from 'lucide-react';

function Test(){
    return(
        <>

            <div className='flex gap-2'>
                <div className="bg-primary flex flex-col text-white gap-[10px] p-[15px] rounded-xl">
                    <BtnNav icon={'Users'} label={'Qui sommes nous ?'} text={'une équipe a vos côtés'} />
                    <BtnNav icon={'BookMarked'} label={'Nos missions ?'} text={'défendre vos droits'} />
                </div>
                <div className="bg-primary flex flex-col text-white gap-[10px] p-[15px] rounded-xl">
                    <BtnNav icon={'BookText'} label={'Documents'} text={'une équipe a vos côtés'} />
                    <BtnNav icon={'FileText'} label={'Articles'} text={'défendre vos droits'} />
                    <BtnNav icon={'MessageCircleQuestion'} label={'Foire Aux Questions'} text={'défendre vos droits'} />
                </div>
                <div className="bg-primary flex flex-col text-white gap-[10px] p-[15px] rounded-xl">
                    <BtnNav icon={'Handshake'} label={'Devenir Sympathisant'} text={'une équipe a vos côtés'} type={'secondary'}/>
                    <BtnNav icon={'Heart'} label={'Devenir Adhérant'} text={'défendre vos droits'} type={'secondary-3'}/>
                </div>
            </div>
            
        </>
    )
}

export default Test

BtnNav.defaultProps = {
    type: 'primary',
}

function BtnNav({icon,label,text,type}){

    return(
        <div className={"flex gap-[20px] p-[20px] pt-[10px] pb-[10px] items-center hover:bg-[#4069B2] rounded-xl "+`bg-${type}`}>
            <Icon name={icon} color={'white'} size={24}/>
            <div className="leading-none flex gap-[3px] flex-col font-title ">
                <div className="font-semibold text-[18px]">
                    {/* Qui sommes nous ? */}
                    {label}
                </div>
                <div className="font-light text-[12px]">
                    {/* une équipe a vos côtés */}
                    {text}
                </div>
            </div>
        </div>
    )
}

const Icon = ({ name, color, size }:any) => {
    const LucideIcon = icons[name];
    return <LucideIcon color={color} size={size} />;
  };