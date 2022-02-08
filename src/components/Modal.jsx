
const Modal = ({ body, buttons, isOpen }) => (
    <div id="modal" className={`${isOpen ? '' : 'hidden'} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4`}>
        <div className="relative top-20 sm:top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">

            <div className="text-xl rounded-t-md px-4 py-2">
                <h3>Why</h3>
            </div>

            <div className="max-h-48 px-4">
                <div className="">
                    {body}
                </div>
            </div>

            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                {buttons}
            </div>
        </div>
    </div>
);
export default Modal;
