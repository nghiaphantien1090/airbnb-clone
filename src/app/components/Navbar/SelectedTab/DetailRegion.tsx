import Image from 'next/image';
import flexible from '../../../../../public/flexible.jpeg'
import usa from '../../../../../public/usa.jpeg'
import thailand from '../../../../../public/thailand.jpeg'
import southkorea from '../../../../../public/southkorea.jpeg'
import australia from '../../../../../public/australia.jpeg'
import europe from '../../../../../public/europe.jpeg'
import Tab from './Tab';

const DetailRegion = () => {

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
                    <RegionListing src={flexible} label={`I'm flexible`} />
                    <RegionListing src={usa} label={`Usa`} />
                    <RegionListing src={thailand} label={`Thai Land`} />
                    <RegionListing src={australia} label={`Australia`} />
                    <RegionListing src={southkorea} label={`South Korea`} />
                    <RegionListing src={europe} label={`Europe`} />
                </div>

            </>
        </Tab>
    );
}

type PropsRegion = {
    src: any
    label: string
}

const RegionListing: React.FC<PropsRegion> = (
    { src, label }
) => {
    return (
        <div
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
        </div>
    )
}

export default DetailRegion;