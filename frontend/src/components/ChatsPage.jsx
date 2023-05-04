import Advanced from './AdvancedChat.jsx';
import Pretty from './PrettyChat.jsx';

import { useState } from "react";

function ChatsPage(props) {
    const [choice, setChoice] = useState("");

    return (
        <div style={{ height: "100vh", backgroundColor: "lightGreen", textAlign: "center" }}>
            {choice === "" ? <>
                <div className="form-subtitle" style={{ color: "black" }}>Choose which type of chat do you want try:</div>
                <div className="pretty">
                    <button className="auth-button" onClick={() => setChoice("pretty")} >
                        Pretty
                    </button>
                </div>
                <div className="advanced">
                    <button className="auth-button" onClick={() => setChoice("advanced")} >
                        Advanced
                    </button>
                </div>
            </> : choice === "pretty"
                ? <Pretty user={props.user} />
                : <Advanced user={props.user} />}
        </div>
    )
}

export default ChatsPage;