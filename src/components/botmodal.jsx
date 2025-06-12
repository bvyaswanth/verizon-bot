const BotModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 w-full h-full bg-[#00000080] bg-opacity-50 flex items-center justify-center">
            <div className="bg-white h-[580px] w-[1000px] mx-auto p-[2%] border-2 border-black rounded-[10px] shadow-md">
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default BotModal;
