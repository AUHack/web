export enum EventType {
	Mandatory = "mandatory",
	Food = "food",
	Event = "event",
	Workshop = "workshop",
}

export interface Event {
	type: EventType;
	start: string; // hh:mm
	end?: string; // hh:mm
	event: string;
	location: string;
}

export type IntervalEvent = Event & { end: string };

export interface ProcessedIntervalEvent extends IntervalEvent {
	startMin: number;
	endMin: number;
}

export type ImmediateEvent = Omit<IntervalEvent, "end">;

export function timeToMinutes(timeString: string) {
	if (!timeString) return 0;
	const [hours, minutes] = timeString.split(":").map(Number);
	return hours * 60 + (minutes || 0);
}

export function parallelizeEvents(events: ProcessedIntervalEvent[]) {
	const tracks: ProcessedIntervalEvent[][] = [];

	for (const item of events) {
		let placed = false;
		for (const track of tracks) {
			const lastItem = track[track.length - 1];
			if (lastItem.endMin <= item.startMin) {
				track.push(item);
				placed = true;
				break;
			}
		}
		if (!placed) {
			tracks.push([item]);
		}
	}

	return tracks;
}

export function sortIntervalEvents(a: ProcessedIntervalEvent, b: ProcessedIntervalEvent) {
	// Sort primarily by start time
	if (a.startMin !== b.startMin) {
		return a.startMin - b.startMin;
	}
	return b.endMin - b.startMin - (a.endMin - a.startMin);
}
