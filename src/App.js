import React, { useState } from 'react'

import Header from './views/Header'
import Navigation from './views/Navigation'
import { keys } from './constants'
import Content from './views/Content'

function App() {
	const [currentPageKey, setCurrentPageKey] = useState(keys.home)

	return (
		<div>
			<Header atHome={currentPageKey === keys.home} />
			<Content currentPageKey={currentPageKey} />
			<Navigation currentPageKey={currentPageKey} onPageChange={setCurrentPageKey} />
		</div>
	)
}

export default App
