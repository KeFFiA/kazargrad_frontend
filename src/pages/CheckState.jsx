import { Result } from "antd";
import { useEffect, useState } from "react";

function CheckState() {
    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
    function closeTelegramAppWithDelay(delay = 100) {
        setTimeout(() => {
            window.Telegram.WebApp.close();
        }, delay);
    }

    useEffect(() => {
        if (status === "success" || status === "error") {
            closeTelegramAppWithDelay(1000);
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
            <Result
                status="success"
                title="Успех!"
                subTitle="Теперь вы можете сворачивать это окно и продолжать работу"
            />
        );
    }

    if (status === "error") {
        return (
            <Result
                status="error"
                title="Произошла ошибка"
                subTitle={message}
            />
        );
    }
}

export default CheckState;
