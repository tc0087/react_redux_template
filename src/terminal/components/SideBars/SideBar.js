import React from 'react'
import Section from './Section'

const sections = [
	{
		label: 'Explore',
		value: 'explore',
		options: [
			{
				label: 'BoutIt',
				value: 'boutit'	,
				icon: 'FiZap'
			},
			{
				label: 'Posts',
				value: 'posts',
				icon: 'FiImage'
			},
			{
				label: 'People',
				value: 'people',
				icon: 'FiUser'
			}
		]
	},
	{
		label: 'Admin',
		value: 'admin',
		options: [
			{
				label: 'BoutIt',
				value: 'boutit'	,
				icon: 'FiZap'
			},
			{
				label: 'Posts',
				value: 'posts',
				icon: 'FiImage'
			},
			{
				label: 'People',
				value: 'people',
				icon: 'FiUser'
			}
		]
	}
]

const sideBar = (props) => (
	<div className="hide-below-1150 width-250p flex-col height-100 background-white">
		<div className="height-100 width-100 relative border-right-grey flex-col">
			<div className="height-60p width-100 flex-col">
				<div className="height-100 border-bottom-grey">

				</div>
			</div>
			<div className="flex-100 flex-col padding-vertical-10">
				{sections.map((data, i) => <Section key={i + data.value} i={i} data={data} />)}
			</div>
		</div>
	</div>
)

export default sideBar