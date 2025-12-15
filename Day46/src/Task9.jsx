import { useState } from "react";

function Task9() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Character Counter</h3>

      <textarea
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={30}
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default Task9;
