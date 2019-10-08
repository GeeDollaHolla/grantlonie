import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

import Header from './views/Header'
import Navigation from './views/Navigation'
import { keys } from './constants'
import Content from './views/Content'

const useStyles = makeStyles(() => ({
	content: { position: 'relative' },
}))

function App() {
	const [currentPageKey, setCurrentPageKey] = useState(keys.home)

	const classes = useStyles()

	return (
		<div>
			<Header atHome={currentPageKey === keys.home} />

			<div className={classes.content}>
				<Content currentPageKey={currentPageKey} />
				<Navigation currentPageKey={currentPageKey} onPageChange={setCurrentPageKey} />
			</div>
		</div>
	)
}

export default App
