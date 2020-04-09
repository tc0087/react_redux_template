import React from 'react'
import moment from 'moment'

const timeWindow = ({
	state
}) => (
	<div className="flex-row width-100 create-input-detail centered-vertical">
	{state.calendarTimes.length > 0 ? <div className="text-grey text-16 margin-right-5">{moment(state.calendarTimes[0].startTime).format('MMM DD')}</div> : null}
	{state.calendarTimes.length > 0 && state.calendarTimes[0].startTimeSelected ? <div className="text-grey text-16 margin-right-5">{moment(state.calendarTimes[0].startTime).format('h:mm a')}</div> : null}
	{state.calendarTimes.length > 1 ? <div className="create-text text-16">{`(${state.calendarTimes.length} more)`}</div> : null}
</div>
)

export default timeWindow