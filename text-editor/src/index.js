import React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import ReactDOM from 'react-dom';
import './index.css';

const EditorComponent = () => <Editor />

ReactDOM.render(<EditorComponent />, document.getElementById('root'));