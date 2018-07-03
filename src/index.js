import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorComponent = () => <Editor />

ReactDOM.render(
  <EditorComponent/>,
  document.getElementById('root')
);