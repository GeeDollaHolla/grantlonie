import React from 'react'
import Home from '@material-ui/icons/HomeOutlined'

export const transitionTime = 500

export const headerHeight = 75

export const keys = { home: 'home', projects: 'projects', about: 'about' }

export const pages = [
	{ key: keys.home, label: 'Welcome', icon: <Home /> },
	{ key: keys.projects, label: 'Projects', icon: <Home /> },
	{ key: keys.about, label: 'About', icon: <Home /> },
]
