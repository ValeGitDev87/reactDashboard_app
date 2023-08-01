import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gradient-to-r from-blue-300 via-violet-700 to-pink-500 rounded-3xl">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
     <p className='text-slate-100'>Scrivi qui il testo</p>
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);
export default Editor;