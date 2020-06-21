import React from "react";
import DatePicker from "react-datepicker";

export const Form = () => {
	const [startDate, setStartDate] = React.useState(null);
	const [endDate, setEndDate] = React.useState(null);

	return (
		<div className="layout">
			<h1>My Event Form</h1>
			<form>
				<div className="form-section">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input id="title" name="title" type="text" />
				</div>
				<div className="form-section">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea id="description" name="description" />
				</div>
				<div className="form-section">
					<label htmlFor="startDate" className="form-label">
						Start Date
					</label>
					<DatePicker
						id="startDate"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						minDate={new Date()}
						showTimeSelect
						dateFormat="Pp"
						selectsStart
						startDate={startDate}
						endDate={endDate}
					/>
				</div>
				<div className="form-section">
					<label htmlFor="endDate" className="form-label">
						Start Date
					</label>
					<DatePicker
						id="endDate"
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						minDate={startDate || new Date()}
						showTimeSelect
						dateFormat="Pp"
						selectsEnd
						startDate={startDate}
						endDate={endDate}
					/>
				</div>
			</form>
		</div>
	);
};
