// src/app/assortment/products.ts
export interface Product {
    name: string;
    images: string[]; // Array of image URLs for the carousel
    currentImageIndex: number; // Index of the current image in the carousel
    description: string;
}

export const PRODUCTS: Product[] = [
    {
        name: 'Nr. 31 Gevarieerde schotel vlees/vis',
        images: ['assets/assortment/31-1.jpg'],
        currentImageIndex: 0,
        description: '',
    },
    {
        name: 'Nr. 32 Royale schotel vlees/vis',
        images: ['assets/assortment/32-2.jpg', 'assets/assortment/32.jpg'],
        currentImageIndex: 0,
        description: 'Vlees en vis liggen op aparte plateaus.',
    },
    {
        name: 'Nr. 34 Gevarieerde visschotel gerookt',
        images: ['assets/assortment/34-1.jpg', 'assets/assortment/34.jpg'],
        currentImageIndex: 0,
        description: '',
    },
    {
        name: 'Nr. 36 Gevarieerde visschotel ”Jonas”',
        images: ['assets/assortment/36.jpg'],
        currentImageIndex: 0,
        description: '',
    },
    {
        name: 'Nr. 38 Delicatessenschotel',
        images: ['assets/assortment/38.jpg'],
        currentImageIndex: 0,
        description: 'Met halve baby kreeft',
    },
    {
        name: 'Nr. 40 Zeevruchtenschotel “Royal”',
        images: ['assets/assortment/40.jpg'],
        currentImageIndex: 0,
        description: 'Met halve baby kreeft',
    },
    {
        name: 'Nr. 41 Koud buffet vis/vlees',
        images: [
            'assets/assortment/41.jpg',
            'assets/assortment/41-1.jpg',
            'assets/assortment/41-2.jpg',
            'assets/assortment/41-3.jpg',
        ],
        currentImageIndex: 0,
        description: 'Vanaf 10 personen',
    },
    {
        name: 'Vispannetje',
        images: ['assets/assortment/vispannetje.jpg'],
        currentImageIndex: 0,
        description: '',
    },
    {
        name: 'Tapas/Peuzelschotel',
        images: ['assets/assortment/tapas-peuzelschotel.jpg'],
        currentImageIndex: 0,
        description: 'Vanaf 3 personen',
    },
    {
        name: 'Tapas/Peuzelschotel “De Luxe”',
        images: ['assets/assortment/tapas-peuzelschotel-de-luxe.jpg'],
        currentImageIndex: 0,
        description: 'Vanaf 3 personen',
    },
    {
        name: 'Houten Plankje',
        images: ['assets/assortment/houten-plankje-1.jpg', 'assets/assortment/houten-plankje.jpg'],
        currentImageIndex: 0,
        description: '',
    },
    {
        name: 'Lepelhapjes/Receptie',
        images: ['assets/assortment/lepelhapjes.jpg', 'assets/assortment/lepelhapjes-1.jpg'],
        currentImageIndex: 0,
        description: 'Vanaf 10 personen',
    },
    {
        name: '“Surf en turf” aperoboot',
        images: [
            'assets/assortment/surf-en-turf-aperoboot.jpg',
            'assets/assortment/surf-en-turf-aperoboot-1.jpg',
            'assets/assortment/surf-en-turf-aperoboot-2.jpg',
        ],
        currentImageIndex: 0,
        description: 'Surf en turf liggen apart op 2 boten',
    },
];
