import React from 'react';
import parse from 'url-parse'
import Terminal from './terminal/hoc/Terminal'
import Editor from './editor/hoc/Editor'
import WebApp from './web_app/hoc/WebApp'

const parsedUrl = parse(window.location.href)
const host = parsedUrl.host

const App = () => (
	<div>
		{host === 'localhost:3000' && <Terminal />}
		{host === 'editor.localhost:3000' && <Editor />}
		{host !== 'localhost:3000' && host !== 'editor.localhost:3000' && <WebApp />}
	</div>
)


export default App;
