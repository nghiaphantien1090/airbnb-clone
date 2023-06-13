const InputWhere = () => {
    const handleShowWhere = () => {

    }
    return (
        <div
            className='
								text-[12px]
								hover:rounded-full
								px-4
								py-[0.5px]
								cursor-pointer
								hover:bg-slate-100	 
								flex
								flex-col
								justify-center
							'
            onClick={handleShowWhere}
        >
            <label
                className='block font-semibold text-slate-600'
            >
                Where
            </label>
            <input
                type='text'
                className=' outline-none font-normal'
                placeholder='Search destinations'
            />

        </div>

    );
}

export default InputWhere;