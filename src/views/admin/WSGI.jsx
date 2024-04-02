import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
const WSGI = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="h-96 rounded">
      <Editor editorState={editorState} onChange={setEditorState} />;
    </div>
  );
};

export default WSGI;
