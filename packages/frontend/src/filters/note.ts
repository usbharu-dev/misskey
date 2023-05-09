import * as misskey from "misskey-js";

export const notePage = (note:misskey.entities.Note) => {
	// return note.uri ?? `/notes/${note.id}`;
	return `/notes/${note.id}`;
};
