import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

function AdvancedChat(props) {
    const chatProps = useMultiChatLogic('5c300a1c-4a68-4075-b30c-3dd42cc4ad11', props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
        </div>
    )
}

export default AdvancedChat;