import { PrettyChatWindow } from 'react-chat-engine-pretty'

function PrettyChat(props) {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow projectId='5c300a1c-4a68-4075-b30c-3dd42cc4ad11' username={props.user.username} secret={props.user.secret} style={{ height: '100vh' }} />
        </div>
    )
}

export default PrettyChat;