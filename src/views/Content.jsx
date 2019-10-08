import React from 'react'
import { useWindowSize } from 'react-use'

import { headerHeight, pages, keys, transitionTime } from '../constants'
import { makeStyles } from '@material-ui/core'
import Home from './Home'

const useStyles = makeStyles({
	container: { height: ({ height }) => height, position: 'absolute', width: '100%', overflow: 'hidden' },
	carousel: {
		position: 'absolute',
		width: '100%',
		transform: ({ height, currentPageIndex }) => `translateY(${-height * currentPageIndex}px)`,
		transition: `${transitionTime}ms`,
	},
	pageWrapper: { height: ({ height }) => height, width: '100%' },
})

export default ({ currentPageKey }) => {
	const { height: windowHeight } = useWindowSize()
	const height = windowHeight - headerHeight
	const currentPageIndex = pages.findIndex(({ key }) => key === currentPageKey)
	const classes = useStyles({ height, currentPageIndex })

	return (
		<div className={classes.container}>
			<div className={classes.carousel}>
				{pages.map(({ key, label }) => (
					<div key={key} className={classes.pageWrapper}>
						<Page pageKey={key} />
					</div>
				))}
			</div>
		</div>
	)
}

const Page = ({ pageKey }) =>
	(() => {
		switch (pageKey) {
			case keys.home:
				return <Home />
			case keys.projects:
				return <Home />
			case keys.about:
				return <Home />
			default:
				console.error('No page exists')
		}
	})()
