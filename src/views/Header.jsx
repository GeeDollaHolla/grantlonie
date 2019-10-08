import React from 'react'
import { makeStyles } from '@material-ui/core'

import { transitionTime, headerHeight } from '../constants'

const useStyles = makeStyles(() => ({
	outer: { height: headerHeight },
	inner: {
		position: 'relative',
		backgroundColor: 'blue',
		height: ({ atHome }) => (atHome ? 0 : headerHeight),
		transition: `${transitionTime}ms`,
	},
}))

export default ({ atHome }) => {
	const { outer, inner } = useStyles({ atHome })

	return (
		<div className={outer}>
			<div className={inner} />
		</div>
	)
}
