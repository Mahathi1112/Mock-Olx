interface ItemType {
    name: string;
    location?: string;
    price: number;
    originalPrice: number;
    category: 'Clothes' | 'Electronics' | 'Books';
    imageURL: string;
    yearOfPurchase: number;
    id: number;
}


export const productList: ItemType[] = [{
    name: 'Blue Dress', location: 'Bangalore,India', price: 700, category: 'Clothes', originalPrice: 700,
    yearOfPurchase: 2000, imageURL: 'https://m.media-amazon.com/images/I/61oMsp+HiLL._SR500,500_.jpg', id: 1,
}, {
    name: 'Green Dress', location: 'Bangalore,India', price: 700, category: 'Clothes', originalPrice: 700,
    yearOfPurchase: 2000, imageURL: 'https://m.media-amazon.com/images/I/61MUzpQuozL._SR500,500_.jpg', id: 2,
}, {
    name: 'iPhone', location: 'Bangalore,India', price: 700, category: 'Electronics', originalPrice: 700,
    yearOfPurchase: 2000, imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyNc5F0R3vTixYlW0I1cMV1itisbXntjxaXg&usqp=CAU',
    id: 3,
}, {
    name: 'iPad', location: 'Bangalore,India', price: 700, category: 'Electronics', originalPrice: 700,
    yearOfPurchase: 2000, id: 4,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr64FRbhStnt3SYAuqm79J4mkGmo-rq689BQ&usqp=CAU',
}, {
    name: 'Harry Potter', location: 'Bangalore,India', price: 700, category: 'Books', originalPrice: 700,
    yearOfPurchase: 2000, id: 5,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDijN1IDi4AuCq1HpOzIICb6RwLB-qTdPCDw&usqp=CAU',
}];
