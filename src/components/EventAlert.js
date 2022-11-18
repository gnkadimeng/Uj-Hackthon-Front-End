export const EventAlert = ({ isAlert, message }) => {
    if (!isAlert) {
        return "";
    }


    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className={`px-8 py-6 bg-amber-300 text-black flex justify-between rounded`}>
                    <div className="flex items-center">
                        <p>{message}</p>
                    </div>
                </div>
            </div>

        </>
    );
}