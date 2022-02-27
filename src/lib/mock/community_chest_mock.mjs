/**
 * Community chest cards are represented as an array of objects.
 * Each index in the array refers to a corresponding card from a community chest.
 * We assume that all community chest cards are consecutively enumerated from 0 to 15 starting.
 */

const community_chest = [
    {   id: '0dbd82a8-1fdd-4cfe-9bcc-cd8ebc900bdc', 
        freePrisonEscape: 1
    },
    {   id: '3c65923c-41bc-4f4d-bf66-32c65b409f4f', 
        price: 50
    },
    {   id: '0a15b345-2fbb-474b-a1ee-ecbdff5054e8', 
        price: -100
    },
    {   id: 'e8e7369b-c6e9-43cc-ac1b-8dff7c477fd1', 
        price: -100
    },
    {   id: '51134f66-1f8b-4fcb-b0b4-9202e0e681e7', 
        price: 50
    },
    {   id: 'ff238329-0a5f-44fc-9aa6-0221d33d4b17', 
        price: -20
    },
    {   id: '4857a8f4-eb29-4d0d-aba6-9d8510cf6b12', 
        price: 100
    },
    {   id: 'a0c1a001-cab4-4674-9fec-7760ece513ff', 
        isPrisoner: true
    },
    {   id: 'ae7305ea-a3a9-42d9-95e9-74bf99fc9d3b', 
        price: -25
    },
    {   id: 'e26c3096-9125-41f3-a33d-e3e870f82cae', 
        price: -10,
        fromEach: true                                                          
    },
    {   id: '4066d8fe-76a2-448a-bf40-8e17977128d2', 
        price: -100
    },
    {   id: '3df2cde5-38e9-4b1d-96ec-c97d3f53586a', 
        price: -50
    },
    {   id: '684d98d4-32f4-4edb-80aa-fc1cae22ec1e', 
        price: -10
    },
    {   id: 'ca296fb0-53a2-4991-8cea-90d787e9f9da', 
        pricePerHouse: 40,                                                  
        pricePerHotel: 115                                                  
    },
    {},
    {   id: 'eee06fb1-5aff-448e-a507-ee9ac267fd2c',
        price: -200
    }
];

export default community_chest;
