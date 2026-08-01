import type { JSX } from "react";
import { EventType, type Event } from "../utils/schedule";

interface EventPageConfig {
	id: string;
	timeString: string;
	signupInfo: string;
	description: JSX.Element;
	signup: string;
}

interface EventConfig extends Event {
	page?: EventPageConfig;
	hideFromSchedule?: boolean;
}

export const show = true;

const extraEvents: EventConfig[] = [
	{
		type: EventType.Event,
		start: "",
		event: "Rubber duck hunt",
		location: "Nygaard",
		page: {
			id: "rubberduck",
			timeString: "Time is but a concept...",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Yes, you are correct - this event is not shown on the schedule. Why? Glad you asked!
					<br />
					<br />
					Over the course of the weekend, rubber ducks will randomly spawn in the Nygaard building. What will
					you get for finding them? Only one way to find out... *insert mysterious sounds here*
				</>
			),
			signup: "No need to sign up!",
		},
		hideFromSchedule: true,
	},
];

const fridayEvents: EventConfig[] = [
	{ type: EventType.Mandatory, start: "13:00", end: "15:00", event: "Check-in", location: "Info stand" },
	{
		type: EventType.Event,
		start: "13:00",
		end: "15:30",
		event: "Bean bag toss w/ Knowit",
		location: "KnowIT",
		page: {
			id: "knowit",
			timeString: "Friday, 13:00-15:30",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Do you have a good aim?
					<br />
					Come by our stand and test your skills in bean bag toss. Participate in the competition, sign up for
					our career site - and enter the draw for a gift basket.
					<br />
					<br />
					Take a short break, try your luck and see if you hit the mark.
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{ type: EventType.Food, start: "13:30", end: "15:30", event: "Coffee cart", location: "Café area" },
	{
		type: EventType.Mandatory,
		start: "15:15",
		end: "16:00",
		event: "Opening ceremony",
		location: "Peter Bøgh Auditorium",
	},
	{
		type: EventType.Mandatory,
		start: "16:00",
		end: "16:30",
		event: "Guest lecture starring Bjarne Stroustrup",
		location: "Peter Bøgh Auditorium",
		page: {
			id: "guestlecture",
			timeString: "Friday, 16:00-16:30",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Join us for an exclusive guest lecture by Bjarne Stroustrup, the creator of C++! In this talk titled
					'Programming Languages and Technical Culture', Bjarne will explore the intricate relationship
					between programming language design and the culture of software development.
					<br />
					<br />
					Discover how language choices shape the way we think about problems, influence team dynamics, and
					impact the broader technical community. A rare opportunity to hear from one of the most influential
					figures in computer science!
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{
		type: EventType.Mandatory,
		start: "16:30",
		end: "17:00",
		event: "Case presentation",
		location: "Peter Bøgh Auditorium",
	},
	{
		type: EventType.Mandatory,
		start: "17:00",
		end: "18:00",
		event: "Ideation & group formation",
		location: "Peter Bøgh Auditorium",
	},
	{
		type: EventType.Food,
		start: "18:00",
		end: "20:30",
		event: "Dinner",
		location: "Café area & Nygaard-basement",
	},
	{ type: EventType.Mandatory, start: "18:00", event: "Hacking begins!", location: "Everywhere!" },
	{ type: EventType.Event, start: "18:00", event: "Robot minigolf begins!", location: "Info desk" },
	{
		type: EventType.Event,
		start: "18:00",
		event: "Build a van Gogh",
		location: "Nygaard-basement",
		page: {
			id: "vangogh",
			timeString: "All the time",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Feeling artsy? Why not come help is build van Gogh starry night out of LEGO?
					<br />
					<br />
					We have the LEGO, we just need your help to build it! Come by the Nygaard-basement and add a piece
					or two to our masterpiece!
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{
		type: EventType.Workshop,
		start: "19:30",
		end: "20:30",
		event: "Functional programming workshop w/ InCommodities",
		location: "Nygaard-192",
		page: {
			id: "functional_programming",
			timeString: "Friday, 19:30-20:30",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Join us for a hands-on workshop on functional programming with InCommodities. Learn the fundamentals
					of functional programming and how to apply them in your projects.
				</>
			),
			signup: "No need to sign up!",
		},
	},
];
const saturdayEvents: EventConfig[] = [
	{ type: EventType.Food, start: "07:00", end: "09:00", event: "Breakfast", location: "Café area" },
	{
		type: EventType.Event,
		start: "09:00",
		end: "10:00",
		event: "Yoga",
		location: "Nygaard-192",
		page: {
			id: "yoga",
			timeString: "Saturday, 09:00-10:00",
			signupInfo: "Sign up per person.",
			description: (
				<>
					The best way to wake up in the morning after breakfast - some yoga!
					<br />
					<br />
					As we all know, IT folk have terrible posture being bent over our laptops for the majority of our
					day - and possibly all night too! Attend this event if you want to have an edge on your competition
					or if you were supposed to have been to fitness this morning (but didn't go because AUHack is of
					course prioritized ;))
				</>
			),
			signup: "Sign up per person.",
		},
	},
	{
		type: EventType.Event,
		start: "10:00",
		end: "11:55",
		event: "LEGO MASTERS w/ InCommodities",
		location: "Info desk",
		page: {
			id: "legomasters",
			timeString: "Saturday, 10:00-11:55",
			signupInfo: "No need to sign up, but join as a group!",
			description: (
				<>
					Get ready to put your creativity and teamwork to the test in the InCommodities LEGO Masters
					challenge.
					<br />
					<br />
					Working in teams, you'll receive a set of criteria and a limited amount of time to design and build
					a LEGO creation that meets the challenge. Strategy, creativity, and collaboration will all play a
					role as you compete against the other teams.
					<br />
					<br />
					A panel of InCommodities judges will evaluate the builds based on how well they match the criteria,
					and the winning teams will of course take home a prize.
					<br />
					<br />
					But stay sharp - a surprise might appear during the challenge, adding an extra twist along the way
					🧱
				</>
			),
			signup: "No need to sign up, but join as a group!",
		},
	},
	{
		type: EventType.Event,
		start: "12:00",
		end: "15:00",
		event: "Masonic PC Gaming",
		location: "Nygaard-192",
		page: {
			id: "masonicgaming",
			timeString: "Saturday, 12:00-15:00",
			signupInfo: "Sign up per person.",
			description: (
				<>
					Join us for a Counter-Strike tournament! Sign up for a time slot of approximately 10-15 minutes, and
					you'll play a match against the other 9 participants who signed up for the same slot. At the end of
					the event, there will be a prize ceremony for the winners.
					<br />
					<br />
					Whether you're a seasoned CS player or just looking to have some fun, this is your chance to show
					off your skills and compete for prizes!
				</>
			),
			signup: "Sign up per person.",
		},
	},
	{ type: EventType.Food, start: "13:00", end: "14:30", event: "Lunch", location: "Café area" },
	{
		type: EventType.Event,
		start: "16:00",
		end: "16:45",
		event: "Playful Pitch Practice w/ CSG",
		location: "Peter Bøgh Auditorium",
		page: {
			id: "pitchpractice",
			timeString: "Saturday, 16:00-16:45",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Want to get a feel of presenting in the auditorium before the pitching round Sunday? Feel like
					practicing your pitch and getting some feedback? Care to have some fun with other participants for
					45 minutes?
					<br />
					<br />
					Join the playful pitch practice for some warm-up exercises, some playful presenting, and a chance to
					practice pitching.
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{ type: EventType.Food, start: "18:00", end: "19:30", event: "Dinner", location: "Café area" },
];
const sundayEvents: EventConfig[] = [
	{ type: EventType.Food, start: "07:00", end: "09:00", event: "Breakfast", location: "Café area" },
	{
		type: EventType.Mandatory,
		start: "11:00",
		end: "12:00",
		event: "One Minute Madness",
		location: "Peter Bøgh Auditorium",
		page: {
			id: "omm",
			timeString: "Sunday, 11:00-12:00",
			signupInfo: "No need to sign up!",
			description: (
				<>
					It's time. Show everybody what you have come up with and how far you got, and be sure to make full
					use of that minute! You will be given neither more nor less than 60 seconds, so good luck!
					<br />
					<br />
					Psst. Remember that your presentation will be part of the evaluation of your hack.
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{
		type: EventType.Mandatory,
		start: "12:00",
		end: "14:00",
		event: "Evaluation",
		location: "Nygaard-basement",
		page: {
			id: "eval",
			timeString: "Sunday, 12:00-14:00",
			signupInfo: "No need to sign up!",
			description: (
				<>
					Time for evaluation, the very last event of the weekend (with the exception of the award ceremony).
					You will want to make sure to be ready at your group table when our judges come by to ask questions
					about your hack.
					<br />
					<br />
					For more information on this very important part of AUHack, see the dedicated page{" "}
					<a href="expo.html">here</a>!
				</>
			),
			signup: "No need to sign up!",
		},
	},
	{
		type: EventType.Mandatory,
		start: "12:00",
		end: "14:00",
		event: "Return hardware",
		location: "Hardware area",
	},
	{ type: EventType.Food, start: "12:00", end: "14:30", event: "Lunch", location: "Café area" },
	{
		type: EventType.Mandatory,
		start: "14:00",
		end: "14:30",
		event: "Clearing of group tables",
		location: "Nygaard-basement",
	},
	{
		type: EventType.Mandatory,
		start: "14:30",
		end: "15:30",
		event: "Closing ceremony and prizes",
		location: "Peter Bøgh Auditorium",
	},
	{
		type: EventType.Event,
		start: "15:30",
		event: "The end. Thanks for participating!",
		location: "Peter Bøgh Auditorium",
	},
];

export const fridaySchedule = fridayEvents.filter((event) => !event.hideFromSchedule);
export const saturdaySchedule = saturdayEvents.filter((event) => !event.hideFromSchedule);
export const sundaySchedule = sundayEvents.filter((event) => !event.hideFromSchedule);

const allEvents = [...extraEvents, ...fridayEvents, ...saturdayEvents, ...sundayEvents];
export const eventsPage = allEvents
	.filter((event) => event.page)
	.map((event) => ({
		id: event.page!.id,
		name: event.event,
		time: event.page!.timeString,
		location: event.location,
		signup: event.page!.signupInfo,
		description: event.page!.description,
	}));
