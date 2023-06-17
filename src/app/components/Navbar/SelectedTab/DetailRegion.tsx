import Image from 'next/image';

import flexible from '../../../../../public/flexible.jpeg'
import usa from '../../../../../public/usa.jpeg'
import thailand from '../../../../../public/thailand.jpeg'
import southkorea from '../../../../../public/southkorea.jpeg'
import australia from '../../../../../public/australia.jpeg'
import europe from '../../../../../public/europe.jpeg'

import Tab from './Tab';

import { useAppDispatch } from '@/app/hook/hookRedux';
import { selectDestination } from '@/app/redux/reducer/SearchSlide';

const DetailRegion = () => {

    const dispatch= useAppDispatch()
    const handleSelectDestination=(destination:Destination)=>{
        dispatch(selectDestination(destination))
    }
    
    return (
        <Tab
            className='
                w-1/2
                h-72
                overflow-scroll
                scroll
            '
        >
            <>
                <h6
                    className='
                    text-[12px]
                    font-semibold 
                    text-slate-700
                    pb-6
                '>
                    Search by Region
                </h6>
                <div
                    className='
                    grid
                    grid-cols-3
                    grid-rows-2
                    gap-2
                '
                >
                    <RegionListing onClick={()=>handleSelectDestination('flexible')} src={flexible} label={`I'm flexible`} />
                    <RegionListing onClick={()=>handleSelectDestination('usa')} src={usa} label={`Usa`} />
                    <RegionListing onClick={()=>handleSelectDestination('thailand')} src={thailand} label={`Thai Land`} />
                    <RegionListing onClick={()=>handleSelectDestination('australia')} src={australia} label={`Australia`} />
                    <RegionListing onClick={()=>handleSelectDestination('southkorea')} src={southkorea} label={`South Korea`} />
                    <RegionListing onClick={()=>handleSelectDestination('europe')} src={europe} label={`Europe`} />
                </div>

            </>
        </Tab>
    );
}

export type Destination='flexible'|'europe'|'australia'|'thailand'|'usa'|'southkorea'

type PropsRegion = {
    src: any
    label: string
    onClick:()=>void
}

const RegionListing: React.FC<PropsRegion> = (
    { src, label ,onClick}
) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className='
            '
        >
            <Image
                src={src}
                alt='abc'
                className='
                    rounded-md
                    cursor-pointer
                    border-transparent
                    border-[0.25px]
                    hover:border-[0.25px]
                    hover:border-slate-500
                '
            />
            <p
                className='
                    text-[12px]
                    pt-1
                '
            >
                {label}
            </p>
        </button>
    )
}

export default DetailRegion;