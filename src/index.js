import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { initiateStore } from "./store/store";
import * as actions from "./store/actions";

const store = initiateStore();

const App = (params) => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		store.subscribe(() => {
			setState(store.getState);
		});
	}, []);

	const completetask = (taskId) => {
		store.dispatch(actions.taskCompleted(taskId));
	};
	const changeTitle = (taskId) => {
		store.dispatch(actions.titleChanged(taskId));
	};

	return (
		<>
			<h1>App</h1>

			<ul>
				{state.map((el) => (
					<li key={el.id}>
						<p>{el.title}</p>
						<p>{`Completed: ${el.completed}`}</p>
						<button onClick={() => completetask(el.id)}>
							Complete
						</button>
						<button onClick={() => changeTitle(el.id)}>
							Change title
						</button>
						<hr />
					</li>
				))}
			</ul>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
