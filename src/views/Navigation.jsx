import React from 'react'
import { makeStyles, MenuList, MenuItem, Typography } from '@material-ui/core'

import { pages } from '../constants'

const useStyles = makeStyles(({ spacing }) => ({
	container: { position: 'absolute', left: '50px', top: '50px' },
	label: { margin: spacing(0, 1) },
}))

export default ({ currentPageKey, onPageChange }) => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<MenuList>
				{pages.map(({ key, label, icon }) => (
					<MenuItem key={key} selected={key === currentPageKey} value={key} onClick={() => onPageChange(key)}>
						{icon}
						<Typography className={classes.label}>{label}</Typography>
					</MenuItem>
				))}
			</MenuList>
		</div>
	)
}
