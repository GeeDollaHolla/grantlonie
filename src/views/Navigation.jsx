import React from 'react'
import { makeStyles, MenuList, MenuItem, Typography } from '@material-ui/core'

import { pages } from '../constants'

const useStyles = makeStyles(() => ({
	container: { position: 'absolute' },
}))

export default ({ currentPageKey, onPageChange }) => {
	const { container } = useStyles()

	return (
		<div className={container}>
			<MenuList>
				{pages.map(({ key, label, icon }) => (
					<MenuItem key={key} selected={key === currentPageKey} value={key} onClick={() => onPageChange(key)}>
						{icon}
						<Typography>{label}</Typography>
					</MenuItem>
				))}
			</MenuList>
		</div>
	)
}
