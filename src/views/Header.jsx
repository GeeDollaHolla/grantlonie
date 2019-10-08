import React from 'react'
import { makeStyles } from '@material-ui/core'

import { transitionTime, headerHeight } from '../constants'

const useStyles = makeStyles(() => ({
	outer: { position: 'relative', zIndex: 1 },
	content: {
		position: 'absolute',
		backgroundColor: 'blue',
		width: '100%',
		height: ({ atHome }) => (atHome ? 0 : headerHeight),
		transition: `${transitionTime}ms`,
	},
}))

export default ({ atHome }) => {
	const { outer, content } = useStyles({ atHome })

	return (
		<div className={outer}>
			<div className={content} />
		</div>
	)
}
