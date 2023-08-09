
interface PropsLinks {
    Content: string
    onClick: () => void
}

const UserLink: React.FC<PropsLinks> = ({ Content, onClick }) => {
    
    return (
        <button type='button'
        className='
         hover:bg-blue-100
         hover:rounded-lg
         cursor-pointer
         py-2
         px-4
          text-left
        '
            onClick={onClick}
        >
            {Content}
        </button>
    )
}
 export default UserLink
