

const ModalBooksInfo = ({ titlename,data }) => {
    return (
        <div className='grid grid-cols-2'>
            <div>{titlename}</div>
            <div>{data}</div>
        </div>
    );
};

export default ModalBooksInfo;