/**
 * Game fields are represented as an array of objects.
 * Each index in the array refers to a corresponding game field.
 * We assume that all game fields are consecutively enumerated from 0 to 39 starting from the 'Go' field.
 */

const gameboard = [
    {
        id: '5c8c2324-7dbc-4292-bd59-d3754c1258c7',
        type: 'go',
        price: -200
    },
    {
        id: '4e3c92c5-e0ad-46fb-98ed-bc0a90c08c10',
        type: 'street',
        group: ['4e3c92c5-e0ad-46fb-98ed-bc0a90c08c10', '6351bd75-ad23-49a9-a87b-626a9fcee0ab'],
        title: 'OLD KENT ROAD',
        price: 60,
        mortgage: 30,
        rent: 2,
        houseRent: [10, 30, 90, 160],
        hotelRent: 250,
        buildingPrice: 50,
        houses: 3,
        hotels: 1
    },
    {
        id: 'ad8da153-4fc5-4ecf-9a0e-69defb5f0b43',
        type: 'community chest',
    },
    {
        id: '6351bd75-ad23-49a9-a87b-626a9fcee0ab',
        type: 'street',
        group: ['4e3c92c5-e0ad-46fb-98ed-bc0a90c08c10', '6351bd75-ad23-49a9-a87b-626a9fcee0ab'],
        title: 'WHITECHAPEL ROAD',
        price: 60,
        mortgage: 30,
        rent: 4,
        houseRent: [20, 60, 180, 320],
        hotelRent: 450,
        buildingPrice: 50 
    },
    {
        id: '25de2832-31a7-4a85-9feb-156a934a6ecd',
        type: 'tax',
        tax: 200
    },
    {
        id: '48a0d64b-358e-4a2d-8a25-08bea25b5961',
        type: 'railway',
        group: ['48a0d64b-358e-4a2d-8a25-08bea25b5961', '48a0d64b-358e-4a2d-8a25-08bea25b5961', 'dcfffbcb-61b8-459c-8adb-dce44bfef750', '04de456f-53b2-4c85-9c97-12791331a20c'],
        title: 'KINGS CROSS STATION',
        price: 200,
        mortgage: 100,
        rent: [25, 50, 100, 200]
    },
    {
        id: 'b95e0aef-0b8a-4d2b-aa39-1b9a660b1cf5',
        type: 'street',
        group: ['b95e0aef-0b8a-4d2b-aa39-1b9a660b1cf5', '5ad1e96c-ef9b-4ab5-96b2-f9202d4debd2', '32c9c9f4-59ed-4521-8b71-c87764e5f0fc'],
        title: 'THE ANGEL ISLINGTON',
        price: 100,
        mortgage: 50,
        rent: 6,
        houseRent: [30, 90, 270, 400],
        hotelRent: 550,
        buildingPrice: 50
    },
    {
        id: '2cf7046b-7fae-427e-b9ac-cac9a25c9cdb',
        type: 'chance'
    },
    {
        id: '5ad1e96c-ef9b-4ab5-96b2-f9202d4debd2',
        type: 'street',
        group: ['b95e0aef-0b8a-4d2b-aa39-1b9a660b1cf5', '5ad1e96c-ef9b-4ab5-96b2-f9202d4debd2', '32c9c9f4-59ed-4521-8b71-c87764e5f0fc'],
        title: 'EUSTON ROAD',
        price: 100,
        mortgage: 50,
        rent: 6,
        houseRent: [30, 90, 270, 400],
        hotelRent: 550,
        buildingPrice: 50
    },
    {
        id: '32c9c9f4-59ed-4521-8b71-c87764e5f0fc',
        type: 'street',
        group: ['b95e0aef-0b8a-4d2b-aa39-1b9a660b1cf5', '5ad1e96c-ef9b-4ab5-96b2-f9202d4debd2', '32c9c9f4-59ed-4521-8b71-c87764e5f0fc'],
        title: 'PENTONVILLE ROAD',
        price: 120,
        mortgage: 60,
        rent: 8,
        houseRent: [40, 100, 300, 450],
        hotelRent: 600,
        buildingPrice: 50
    },
    {
        id: '4db6bc2d-46d8-4ab4-ad2e-e6e6459e3b4f',
        type: 'jail',
        isPrisoner: false
    },
    {
        id: '2f8e385a-f1f2-482e-96d3-4419c28f9c9a',
        type: 'street',
        group: ['2f8e385a-f1f2-482e-96d3-4419c28f9c9a', '4519b744-30d7-4daf-b4ef-232328f90b84', '32676efe-55da-4982-afcb-6ef5c00a58a8'],
        title: 'PALL MALL',
        price: 140,
        mortgage: 70,
        rent: 10,
        houseRent: [50, 150, 450, 625],
        hotelRent: 750,
        buildingPrice: 1000
    },
    {
        id: '4a0b03fd-5263-4664-b7c0-aff4a0c4aa0a',
        type: 'service',
        group: ['4a0b03fd-5263-4664-b7c0-aff4a0c4aa0a', '7956fc9c-1990-48fa-a423-472c1a33f166'],
        title: 'ELECTRIC COMPANY',
        price: 150,
        mortgage: 75 
    },
    {
        id: '4519b744-30d7-4daf-b4ef-232328f90b84',
        type: 'street',
        group: ['2f8e385a-f1f2-482e-96d3-4419c28f9c9a', '4519b744-30d7-4daf-b4ef-232328f90b84', '32676efe-55da-4982-afcb-6ef5c00a58a8'],
        title: 'WHITEHALL',
        price: 140,
        mortgage: 70,
        rent: 10,
        houseRent: [50, 150, 450, 625],
        hotelRent: 750,
        buildingPrice: 1000
    },
    {
        id: '32676efe-55da-4982-afcb-6ef5c00a58a8',
        type: 'street',
        group: ['2f8e385a-f1f2-482e-96d3-4419c28f9c9a', '4519b744-30d7-4daf-b4ef-232328f90b84', '32676efe-55da-4982-afcb-6ef5c00a58a8'],
        title: 'NORTHUMRL\'D AVENUE',
        price: 160,
        mortgage: 80,
        rent: 12,
        houseRent: [60, 180, 500, 700],
        hotelRent: 900,
        buildingPrice: 1000
    },
    {
        id: '9914f341-200b-4a3d-b648-de4d24942708',
        type: 'railway',
        group: ['48a0d64b-358e-4a2d-8a25-08bea25b5961', '9914f341-200b-4a3d-b648-de4d24942708', 'dcfffbcb-61b8-459c-8adb-dce44bfef750', '04de456f-53b2-4c85-9c97-12791331a20c'],
        title: 'MARYLEBONE STATION',
        price: 200,
        mortgage: 100,
        rent: [25, 50, 100, 200]
    },
    {
        id: '8c960fe6-a7ec-4f6f-95cb-96fb41a549d1',
        type: 'street',
        group: ['8c960fe6-a7ec-4f6f-95cb-96fb41a549d1', '46b3736d-533d-41f1-a0ec-c5b7e2a75242', 'f91bd417-bd3c-4134-97df-0b0256bdd236'],
        title: 'BOW STREET',
        price: 180,
        mortgage: 90,
        rent: 14,
        houseRent: [70, 200, 550, 750],
        hotelRent: 950,
        buildingPrice: 1000
    },
    {
        id: '6af30a51-4288-4a13-96ac-0f4a7ef8a7f0',
        type: 'community chest',
    },
    {
        id: '46b3736d-533d-41f1-a0ec-c5b7e2a75242',
        type: 'street',
        group: ['8c960fe6-a7ec-4f6f-95cb-96fb41a549d1', '46b3736d-533d-41f1-a0ec-c5b7e2a75242', 'f91bd417-bd3c-4134-97df-0b0256bdd236'],
        title: 'MARLBOROUGH STREET',
        price: 180,
        mortgage: 90,
        rent: 14,
        houseRent: [70, 200, 550, 750],
        hotelRent: 950,
        buildingPrice: 1000
    },
    {
        id: 'f91bd417-bd3c-4134-97df-0b0256bdd236',
        type: 'street',
        group: ['8c960fe6-a7ec-4f6f-95cb-96fb41a549d1', '46b3736d-533d-41f1-a0ec-c5b7e2a75242', 'f91bd417-bd3c-4134-97df-0b0256bdd236'],
        title: 'VINE STREET',
        price: 200,
        mortgage: 100,
        rent: 16,
        houseRent: [80, 220, 600, 800],
        hotelRent: 1000,
        buildingPrice: 1000
    },
    {},
    {
        id: '236a979f-9947-40ae-8955-c5f359c869f7',
        type: 'street',
        group: ['236a979f-9947-40ae-8955-c5f359c869f7', 'fff666a1-7aeb-4e4f-bca6-83b0b7a798ca', '5c02e291-af0e-4ea9-85f3-24c661d36935'],
        title: 'STRAND',
        price: 220,
        mortgage: 110,
        rent: 18,
        houseRent: [90, 250, 700, 875],
        hotelRent: 1050,
        buildingPrice: 150
    },
    {
        id: '2e383794-d593-4cc2-96e8-1b4662388720',
        type: 'chance'
    },
    {
        id: 'fff666a1-7aeb-4e4f-bca6-83b0b7a798ca',
        type: 'street',
        group: ['236a979f-9947-40ae-8955-c5f359c869f7', 'fff666a1-7aeb-4e4f-bca6-83b0b7a798ca', '5c02e291-af0e-4ea9-85f3-24c661d36935'],
        title: 'FLEET STREET',
        price: 220,
        mortgage: 110,
        rent: 18,
        houseRent: [90, 250, 700, 875],
        hotelRent: 1050,
        buildingPrice: 150
    },
    {
        id: '5c02e291-af0e-4ea9-85f3-24c661d36935',
        type: 'street',
        group: ['236a979f-9947-40ae-8955-c5f359c869f7', 'fff666a1-7aeb-4e4f-bca6-83b0b7a798ca', '5c02e291-af0e-4ea9-85f3-24c661d36935'],
        title: 'TRAFALGAR SQUARE',
        price: 240,
        mortgage: 120,
        rent: 20,
        houseRent: [100, 300, 750, 925],
        hotelRent: 1100,
        buildingPrice: 150
    },       
    {
        id: 'dcfffbcb-61b8-459c-8adb-dce44bfef750',
        type: 'railway',
        group: ['48a0d64b-358e-4a2d-8a25-08bea25b5961', '48a0d64b-358e-4a2d-8a25-08bea25b5961', 'dcfffbcb-61b8-459c-8adb-dce44bfef750', '04de456f-53b2-4c85-9c97-12791331a20c'],
        title: 'FENCHURCH ST. STATION',
        price: 200,
        mortgage: 100,
        rent: [25, 50, 100, 200]
    },
    {
        id: '1a2a7f73-5a91-4c68-8da9-3a9249074aee',
        type: 'street',
        group: ['1a2a7f73-5a91-4c68-8da9-3a9249074aee', '609bcab9-e29f-4a46-9add-5024337066da', '7956fc9c-1990-48fa-a423-472c1a33f166'],
        title: 'LEICESTER SQUARE',
        price: 260,
        mortgage: 130,
        rent: 22,
        houseRent: [110, 330, 800, 975],
        hotelRent: 1150,
        buildingPrice: 150
    },
    {
        id: '609bcab9-e29f-4a46-9add-5024337066da',
        type: 'street',
        group: ['1a2a7f73-5a91-4c68-8da9-3a9249074aee', '609bcab9-e29f-4a46-9add-5024337066da', '7956fc9c-1990-48fa-a423-472c1a33f166'],
        title: 'COVENTRY STREET',
        price: 260,
        mortgage: 130,
        rent: 22,
        houseRent: [110, 330, 800, 975],
        hotelRent: 1150,
        buildingPrice: 150
    },
    {
        id: '7956fc9c-1990-48fa-a423-472c1a33f166',
        type: 'service',
        group: ['4a0b03fd-5263-4664-b7c0-aff4a0c4aa0a', '7956fc9c-1990-48fa-a423-472c1a33f166'],
        title: 'WATER WORKS',
        price: 150,
        mortgage: 75
    },
    {
        id: '1a1649e6-a5b9-4558-a00f-49d9bcc7e45d',
        type: 'street',
        group: ['1a2a7f73-5a91-4c68-8da9-3a9249074aee', '609bcab9-e29f-4a46-9add-5024337066da', '7956fc9c-1990-48fa-a423-472c1a33f166'],
        title: 'PICCADILLY',
        price: 280,
        mortgage: 140,
        rent: 24,
        houseRent: [120, 360, 850, 1025],
        hotelRent: 1200,
        buildingPrice: 150
    },
    {
        id: '27ab011c-97f0-403a-85ce-07e32c41c9d8',
        type: 'jail',
        isPrisoner: true
    },
    {
        id: '5ae2d918-0725-4c3c-a272-49d602cddeca',
        type: 'street',
        group: ['5ae2d918-0725-4c3c-a272-49d602cddeca', '7cde65a8-b06d-4c64-b464-97cf04b138f4', 'eb777fd4-6694-4b25-ad69-6d8f8576d9ee'],
        title: 'REGENT STREET',
        price: 300,
        mortgage: 150,
        rent: 26,
        houseRent: [130, 390, 900, 1100],
        hotelRent: 1275,
        buildingPrice: 200
    },
    {
        id: '7cde65a8-b06d-4c64-b464-97cf04b138f4',
        type: 'street',
        group: ['5ae2d918-0725-4c3c-a272-49d602cddeca', '7cde65a8-b06d-4c64-b464-97cf04b138f4', 'eb777fd4-6694-4b25-ad69-6d8f8576d9ee'],
        title: 'OXFORD STREET',
        price: 300,
        mortgage: 150,
        rent: 26,
        houseRent: [130, 390, 900, 1100],
        hotelRent: 1275,
        buildingPrice: 200
    },
    {
        id: '177127bf-8820-4359-be48-881ca8ac2e69',
        type: 'community chest',
    },
    {
        id: 'eb777fd4-6694-4b25-ad69-6d8f8576d9ee',
        type: 'street',
        group: ['5ae2d918-0725-4c3c-a272-49d602cddeca', '7cde65a8-b06d-4c64-b464-97cf04b138f4', 'eb777fd4-6694-4b25-ad69-6d8f8576d9ee'],
        title: 'BOND STREET',
        price: 320,
        mortgage: 160,
        rent: 28,
        houseRent: [150, 450, 1000, 1200],
        hotelRent: 1400,
        buildingPrice: 200
    },
    {
        id: '04de456f-53b2-4c85-9c97-12791331a20c',
        type: 'railway',
        group: ['48a0d64b-358e-4a2d-8a25-08bea25b5961', '48a0d64b-358e-4a2d-8a25-08bea25b5961', 'dcfffbcb-61b8-459c-8adb-dce44bfef750', '04de456f-53b2-4c85-9c97-12791331a20c'],
        title: 'LIVERPOOL ST. STATION',
        price: 200,
        mortgage: 100,
        rent: [25, 50, 100, 200]
    },
    {
        id: 'f7971bd5-9623-4c6d-8ece-9f0a3c4cb4d0',
        type: 'chance'
    },
    {
        id: '261e177e-063d-494f-a032-918b83ea7a3d',
        type: 'street',
        group: ['261e177e-063d-494f-a032-918b83ea7a3d', '42adbb1a-e6bb-4ab8-89f4-504ef9259273'],
        title: 'PARK LANE',
        price: 350,
        mortgage: 175,
        rent: 35,
        houseRent: [175, 500, 1100, 1300],
        hotelRent: 1500,
        buildingPrice: 200
    },
    {
        id: 'f05d4cf7-de20-45de-9787-ab0f711d63e4',
        type: 'tax',
        tax: 100
    },
    {
        id: '42adbb1a-e6bb-4ab8-89f4-504ef9259273',
        type: 'street',
        group: ['261e177e-063d-494f-a032-918b83ea7a3d', '42adbb1a-e6bb-4ab8-89f4-504ef9259273'],
        title: 'MAYFAIR',
        price: 400,
        mortgage: 200,
        rent: 50,
        houseRent: [200, 600, 1400, 1700],
        hotelRent: 2000,
        buildingPrice: 200
    }
];

export default gameboard;