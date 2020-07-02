import React from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";

export const Form = () => {
	const [submittedData, setSubmittedData] = React.useState({});

	const { handleSubmit, register, control, errors, watch } = useForm();

	const onSubmit = (data) => {
		setSubmittedData(data);
	};

	const { startDate, endDate } = watch(["startDate", "endDate"]);

	return (
		<div className="layout">
			<h1>My Event Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-section">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						id="title"
						name="title"
						type="text"
						ref={register({
							required: { message: "The title is required", value: true },
							maxLength: {
								message: "The title must be less than 30 characters",
								value: 30,
							},
						})}
					/>
					{errors.title && (
						<span className="error">{errors.title.message}</span>
					)}
				</div>
				<div className="form-section">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea
						id="description"
						name="description"
						ref={register({
							maxLength: {
								message: "The description must have less than 100 characters",
								value: 100,
							},
						})}
					/>
					{errors.description && (
						<span className="error">{errors.description.message}</span>
					)}
				</div>
				<div className="form-section">
					<label htmlFor="startDate" className="form-label">
						Start Date
					</label>
					<Controller
						as={
							<DatePicker
								id="startDate"
								minDate={new Date()}
								showTimeSelect
								dateFormat="Pp"
								selectsStart
								startDate={startDate}
								endDate={endDate}
							/>
						}
						name="startDate"
						control={control}
						valueName="selected"
						rules={{
							validate: (data) => {
								const date = new Date(data);
								return date.getDate() !== 13;
							},
						}}
					/>
					{errors.startDate && (
						<span className="error">
							The start date must not be on the 13th!
						</span>
					)}
				</div>
				<div className="form-section">
					<label htmlFor="endDate" className="form-label">
						End Date
					</label>
					<Controller
						as={
							<DatePicker
								id="endDate"
								minDate={startDate || new Date()}
								showTimeSelect
								dateFormat="Pp"
								selectsEnd
								startDate={startDate}
								endDate={endDate}
							/>
						}
						name="endDate"
						control={control}
						valueName="selected"
						rules={{
							validate: (data) => {
								const date = new Date(data);
								return date.getDate() !== 13;
							},
						}}
					/>
					{errors.startDate && (
						<span className="error">The end date must not be on the 13th!</span>
					)}
				</div>
				<button type="submit">Submit</button>
			</form>
			<p>Submitted data:</p>
			<pre>{JSON.stringify(submittedData, null, 2)}</pre>
		</div>
	);
};
