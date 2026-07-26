import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Welcome to my page";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                if (onComplete) {
                    onComplete();
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText, onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center place-items-center place-content-center">
            <div className="mb-4 text-4xl font-mono font-bold">{text}<span className="animate-blink ml-1"> | </span></div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-sm animate-loading-bar"></div>
            </div>
        </div>
    );
};