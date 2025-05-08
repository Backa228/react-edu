export default function MailBox({ username, messages }) {
    if (messages.length > 0) {
    return (
        <>
        {/* <p>Hello {username}</p>
        {messages.length > 0 && (
            <p>You have {messages.length} unread messages</p>
      )} */}

       {/* <p>Hello {username}</p>
       <p>
       {messages.length > 0 ?
        `You have ${messages.length} unread messages`
        : "No unread messages"}
       </p> */}

       <p>Hello {username}</p>
       <p>You have {messages.length} unread messages</p>
        </>
    )}
    return (
        <>
        <p>Hello {username}</p>
        <p>No unread messages</p>;
        </>
    )

} 