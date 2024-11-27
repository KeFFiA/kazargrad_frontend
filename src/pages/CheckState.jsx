import { Result } from "antd";
import { useEffect, useState } from "react";

function CheckState() {
    let WebApp = window.Telegram.WebApp
    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
    function closeTelegramAppWithDelay(delay = 100) {
        setTimeout(() => {
            WebApp.close();
        }, delay);
    }

    useEffect(() => {
        if (status === "True" || status === "error") {
            closeTelegramAppWithDelay(2000);
        }
    }, [status]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlStatus = urlParams.get("status");
        const urlMessage = urlParams.get("msg");

        if (urlStatus) {
            setStatus(urlStatus);
        }
        if (urlMessage) {
            setMessage(urlMessage);
        }
        }, []);

    if (status === "True") {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <Result
                    status="success"
                    title="Успех!"
                    subTitle="Теперь вы можете сворачивать это окно и продолжать работу"
                />
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <Result
                    status="error"
                    title="Произошла ошибка"
                    subTitle={message}
                />
            </div>
        );
    }
}

export default CheckState;
