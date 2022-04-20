/**
 * Community chest cards are represented as an array of objects.
 * Each index in the array refers to a corresponding card from a chest.
 * We assume that all community chest cards are consecutively enumerated
 * from 0 to 15 starting.
 */

const communityChestMock = [
	{
		id: '4200d903-0fc8-4c13-9ca9-ac31d747804f',
		type: 'goTo',
		origin: 'communityChest',
		text: 'Advance to "Go". (Collect $200)',
		cell: 0,
		isGoBonus: true,
	},
	{
		id: 'eee06fb1-5aff-448e-a507-ee9ac267fd2c',
		type: 'balance',
		origin: 'communityChest',
		text: 'Bank error in your favor. Collect $200.',
		amount: 200,
	},
	{
		id: '3c65923c-41bc-4f4d-bf66-32c65b409f4f',
		type: 'balance',
		origin: 'communityChest',
		text: 'Doctor\'s fees. Pay $50.',
		amount: -50,
	},
	{
		id: '3df2cde5-38e9-4b1d-96ec-c97d3f53586a',
		type: 'balance',
		origin: 'communityChest',
		text: 'From sale of stock you get $50.',
		amount: 50,
	},
	{
		id: '0dbd82a8-1fdd-4cfe-9bcc-cd8ebc900bdc',
		type: 'prisonEscape',
		origin: 'communityChest',
		text: 'Get Out of Jail Free. This card may be kept until needed or sold/traded.',
		freePrisonEscape: 1,
	},
	{
		id: 'a0c1a001-cab4-4674-9fec-7760ece513ff',
		type: 'goTo',
		origin: 'communityChest',
		text: 'Go to Jail. Go directly to jail. Do not pass Go, Do not collect $200.',
		cell: 30,
		isGoBonus: false,
	},
	{
		id: 'e26c3096-9125-41f3-a33d-e3e870f82cae',
		type: 'balance',
		origin: 'communityChest',
		text: 'Grand Opera Night. Collect $50 from every player for opening night seats.',
		amount: 50,
		fromEach: true,
	},
	{
		id: '3c65923c-41bc-4f4d-bf66-32c65b409f4f',
		type: 'balance',
		origin: 'communityChest',
		text: 'Holiday Fund matures. Receive $100.',
		amount: 100,
	},
	{
		id: 'ff238329-0a5f-44fc-9aa6-0221d33d4b17',
		type: 'balance',
		origin: 'communityChest',
		text: 'Income tax refund. Collect $20.',
		amount: 20,
	},
	{
		id: '0a15b345-2fbb-474b-a1ee-ecbdff5054e8',
		type: 'balance',
		origin: 'communityChest',
		text: 'Life insurance matures – Collect $100.',
		amount: 100,
	},
	{
		id: '51134f66-1f8b-4fcb-b0b4-9202e0e681e7',
		type: 'balance',
		origin: 'communityChest',
		text: 'Hospital Fees. Pay $50.',
		amount: -50,
	},
	{
		id: 'e8e7369b-c6e9-43cc-ac1b-8dff7c477fd1',
		type: 'balance',
		origin: 'communityChest',
		text: 'School fees. Pay $50.',
		amount: -50,
	},
	{
		id: '4857a8f4-eb29-4d0d-aba6-9d8510cf6b12',
		type: 'balance',
		origin: 'communityChest',
		text: 'Receive $25 consultancy fee.',
		amount: 25,
	},
	{
		id: 'ca296fb0-53a2-4991-8cea-90d787e9f9da',
		type: 'propertyFee',
		origin: 'communityChest',
		text: 'You are assessed for street repairs: Pay $40 per house and $115 per hotel you own.',
		pricePerHouse: -40,
		pricePerHotel: -115,
	},
	{
		id: 'ae7305ea-a3a9-42d9-95e9-74bf99fc9d3b',
		type: 'balance',
		origin: 'communityChest',
		text: 'You have won second prize in a beauty contest. Collect $10.',
		amount: 10,
	},
	{
		id: '4066d8fe-76a2-448a-bf40-8e17977128d2',
		type: 'balance',
		origin: 'communityChest',
		text: 'You inherit $100.',
		amount: 100,
	},
];

export default communityChestMock;
