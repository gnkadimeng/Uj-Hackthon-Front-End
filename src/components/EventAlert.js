export const EventAlert = ({ isAlert, alertType, message }) => {
    if (!isAlert) {
        return "";
    }


    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className={`px-8 py-6 bg-${alertType} text-white flex justify-between rounded`}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p>{message}</p>
                    </div>
                </div>
            </div>

        </>
    );
}