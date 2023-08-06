

const Card = () => {

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    Anime
                </span>
                <img className='w-full h-full object-cover rounded-lg' src='https://www.egames.news/__export/1678996472734/sites/debate/img/2023/03/16/alice-cosplay-one-piece-luffy-gear-5-nika.jpg_423682103.jpg' alt='gear-five' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Gear 5</span>
                <span className='text-lg font-medium'>$1000</span>
            </p>
        </div>
    );

}

export {Card};