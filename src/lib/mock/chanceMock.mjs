/**
 * Chance cards are represented as an array of objects.
 * Each index in the array refers to a corresponding chance card.
 * We assume that all chance cards are consecutively enumerated from 0 to 15.
 */

const chanceMock = [
	{type: 'goTo'},
	{type: 'goTo'},
	{
		id: 'e6d7e684-3989-4013-891a-7b534558ea58',
		type: 'balance',
		price: -150,
	},
	{type: 'goTo'},
	{
		id: '6cab3d76-9723-4142-a801-ba0edf251f49',
		type: 'rentMultiplier',
		nextRentTimes: 10,
	},
	{
		id: 'e437d2a4-c759-4094-b083-6f89c8eb16a0',
		type: 'prison',
		isPrisoner: true,
	},
	{type: 'goTo'},
	{
		id: '64307bcb-888a-488b-8d6a-aa209620301f',
		type: 'balance',
		price: -50,
	},
	{
		id: '482da80c-1194-4f13-849c-d6530c811873',
		type: 'propertyFee',
		pricePerHouse: 25,
		pricePerHotel: 100,
	},
	{
		id: '1e79f6f3-3722-4ec6-8694-508539b8810a',
		type: 'prisonEscape',
		freePrisonEscape: 1,
	},
	{type: 'goTo'},
	{
		id: '5b6c4c00-fba3-4742-8720-3bb731fa9d7d',
		type: 'balance',
		price: 50,
		toEach: true,
	},
	{type: 'goTo'},
	{
		id: '5db1e1a3-8f7a-4ea6-82a2-c3b85a4d88ee',
		type: 'balance',
		price: -15,
	},
	{
		id: '6eeb9f20-c6ee-4b08-8122-49fcd27d9aab',
		type: 'rentMultiplier',
		nextRentTimes: 2,
	},
	{
		id: 'b50395e5-2232-4e05-b429-a120397410ae',
		type: 'rentMultiplier',
		nextRentTimes: 2,
	},
];

export default chanceMock;