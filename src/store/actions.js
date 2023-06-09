import * as actionsTypes from "./actionTypes";

export function taskCompleted(id) {
	return {
		type: actionsTypes.taskUpdated,
		payload: { id, completed: true }
	};
}

export function titleChanged(id) {
	return {
		type: actionsTypes.taskUpdated,
		payload: { id, title: `New title for ${id}` }
	};
}

export function taskDeleted(id) {
	return {
		type: actionsTypes.taskDeleted,
		payload: { id }
	};
}
