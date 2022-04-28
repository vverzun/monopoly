/**
 * Chance cards are represented as an array of objects.
 * Each index in the array refers to a corresponding chance card.
 * We assume that all chance cards are consecutively enumerated from 0 to 15.
 */

const chanceMock = [
	{
		id: '9d75132f-3ef2-4402-a507-c137655c9ac9',
		type: 'goTo',
		origin: 'chance',
		text: 'Advance to "Go". (Collect $200)',
		cell: 0,
		isGoBonus: true,
	},
	{
		id: '4b54b8e8-7a03-4532-886f-a1b0d7e036f9',
		type: 'goTo',
		origin: 'chance',
		text: 'Advance to Trafalgar Square.',
		cell: 24,
		isGoBonus: false,
	},
	{
		id: '892d97eb-efd6-460d-87af-c59c690a320a',
		type: 'goTo',
		origin: 'chance',
		text: 'Advance to Pall Mall. If you pass Go, collect $200.',
		cell: 11,
		isGoBonus: true,
	},
	{
		id: 'f0fc7033-8022-41e0-8919-44e2c240b440',
		type: 'rentMultiplier',
		origin: 'chance',
		text: 'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 times the amount thrown.',
		target: 'service',
		nextRentTimes: 10,
	},
	{
		id: '0086e103-df97-4295-95d3-5145f416c979',
		type: 'rentMultiplier',
		origin: 'chance',
		text: 'Advance token to the nearest Railroad and pay owner twice the rental to which he/she is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.',
		target: 'railway',
		nextRentTimes: 2,
	},
	{
		id: 'e6d7e684-3989-4013-891a-7b534558ea58',
		type: 'balance',
		origin: 'chance',
		text: 'Bank pays you dividend of $50.',
		amount: 50,
	},
	{
		id: '1e79f6f3-3722-4ec6-8694-508539b8810a',
		type: 'prisonEscape',
		origin: 'chance',
		text: 'Get Out of Jail Free. This card may be kept until needed or sold/traded.',
		freePrisonEscape: 1,
	},
	{
		id: '3b6816cf-1bfa-4647-ab61-c20ef70d31c8',
		type: 'goBack',
		origin: 'chance',
		text: 'Go Back Three 3 Spaces.',
		cell: -3,
	},
	{
		id: 'e437d2a4-c759-4094-b083-6f89c8eb16a0',
		type: 'prison',
		origin: 'chance',
		text: 'Go to Jail. Go directly to jail. Do not pass Go, Do not collect $200.',
		isPrisoner: true,
	},
	{
		id: '482da80c-1194-4f13-849c-d6530c811873',
		type: 'propertyFee',
		origin: 'chance',
		text: 'Make general repairs on all your property: For each house pay $25, For each hotel $100.',
		pricePerHouse: 25,
		pricePerHotel: 100,
	},
	{
		id: '64307bcb-888a-488b-8d6a-aa209620301f',
		type: 'balance',
		origin: 'chance',
		text: 'Speeding fine $15.',
		price: -15,
	},
	{
		id: '43c682ee-3d0a-4c8b-9726-fcea648adac4',
		type: 'goTo',
		origin: 'chance',
		text: 'Take a trip to Kings Cross Station. If you pass Go, collect $200.',
		cell: 5,
		isGoBonus: true,
	},
	{
		id: '6cab3d76-9723-4142-a801-ba0edf251f49',
		type: 'goTo',
		origin: 'chance',
		text: 'Take a walk on the Mayfair. Advance token to Mayfair.',
		cell: 39,
		isGoBonus: false,
	},
	{
		id: '5b6c4c00-fba3-4742-8720-3bb731fa9d7d',
		type: 'balance',
		origin: 'chance',
		text: 'You have been elected Chairman of the Board. Pay each player $50.',
		amount: 50,
		toEach: true,
	},
	{
		id: '5db1e1a3-8f7a-4ea6-82a2-c3b85a4d88ee',
		type: 'balance',
		origin: 'chance',
		text: 'Your building loan matures. Receive $150.',
		amount: 150,
	},
	{
		id: '6eeb9f20-c6ee-4b08-8122-49fcd27d9aab',
		type: 'balance',
		origin: 'chance',
		text: 'You have won a crossword competition. Collect $100.',
		amount: 100,
	},
];

export default chanceMock;
