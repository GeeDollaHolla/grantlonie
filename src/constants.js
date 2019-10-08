import React from 'react'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import ProjectsIcon from '@material-ui/icons/ViewListOutlined'
import HelpIcon from '@material-ui/icons/HelpOutline'

export const transitionTime = 500

export const headerHeight = 75

export const keys = { home: 'home', projects: 'projects', about: 'about' }

export const pages = [
	{ key: keys.home, label: 'Welcome', icon: <HomeIcon /> },
	{ key: keys.projects, label: 'Projects', icon: <ProjectsIcon /> },
	{ key: keys.about, label: 'About', icon: <HelpIcon /> },
]
