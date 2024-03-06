export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  link: string;
  image: string[];
  type: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13',
    price: 291973,
    rating: 2.3,
    description: '6.1-inch Super Retina XDR display',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 2,
    name: 'Apple iPhone 15 Pro Max',
    price: 611884,
    rating: 3.3,
    description: 'heavy-duty flagship made of titanium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 3,
    name: 'Apple iPhone 14',
    price: 323135,
    rating: 5.0,
    description: 'the iPhone 14\'s sensor it is more aperture f/1.5 rather than the 13\'s f/1.6',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h0b/64400500097054.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc2/hfe/64400502915102.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 4,
    name: 'Apple iPhone 15',
    price: 374801,
    rating: 2.3,
    description: 'a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 5,
    name: 'Apple iPhone 13',
    price: 289641,
    rating: 2.2,
    description: 'Super Retina XDR, which features incredibly high pixel density - photos, videos and text look amazingly clear',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 6,
    name: 'Apple iPhone 15 Pro Max',
    price: 610337,
    rating: 1.3,
    description: 'heavy-duty flagship made of titanium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/hce/83559848640542.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hab/hed/83559848706078.png?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 7,
    name: 'Apple iPhone SE 2022',
    price: 233804,
    rating: 1.9,
    description: 'classic design with powerful hardware',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h7b/63993962364958.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/h35/63993964527646.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 8,
    name: 'Apple iPhone 11',
    price: 223579,
    rating: 5.0,
    description: 'Functional and stylish smartphone Apple iPhone 11 in a metal case can provide not only everyday communication and entertainment, but also productive work',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h70/63944536522782.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 9,
    name: 'Apple iPhone 13 Pro Max',
    price: 508735,
    rating: 4.2,
    description: 'received a 6.7-inch Super Retina XDR1 display with an adaptive refresh rate of up to 120Hz and ProMotion technology for faster, smoother interactions',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zolotistyi-102298917/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/he6/h2c/64109907345438.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbb/hdd/64109909508126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h81/h2d/64109911212062.jpg?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 10,
    name: 'Apple iPhone 12',
    price: 282540,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-fioletovyi-101395751/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha0/h22/64014163378206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha0/h22/64014163378206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'
    ],
    type: 'iphone',
    likes: 0
  },
  {
    id: 11,
    name: 'Samsung Galaxy S23 Ultra',
    price: 449889,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium'
    ],
    type: 'samsung',
    likes: 0
  },
  {
    id: 12,
    name: 'Samsung Galaxy S23 FE',
    price: 273561,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-fe-8-gb-256-gb-seryi-113977470/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/he4/haf/84251434516510.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h26/84251434582046.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd8/h65/84251434647582.jpg?format=gallery-medium'
    ],
    type: 'samsung',
    likes: 0
  },
  {
    id: 13,
    name: 'Samsung Galaxy S23 Ultra',
    price: 461667,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-zelenyi-109174565/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb0/hf3/69635680239646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf5/h84/69635688235038.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb2/hd9/69635688759326.jpg?format=gallery-medium'
    ],
    type: 'samsung',
    likes: 0
  },
  {
    id: 14,
    name: 'Samsung Galaxy S21 FE New',
    price: 215389,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-6-gb-128-gb-seryi-grafit--106336742/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h0a/h78/64482250031134.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'samsung',
    likes: 0
  },
  {
    id: 15,
    name: 'Samsung Galaxy S23 5G',
    price: 343433,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h87/h65/69065034727454.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcc/hf1/69065035251742.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/h10/69065035776030.jpg?format=gallery-medium'
    ],
    type: 'samsung',
    likes: 0
  },
  {
    id: 16,
    name: 'Xiaomi Redmi 12 4G',
    price: 69982,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'xiaomi',
    likes: 0
  },
  {
    id: 17,
    name: 'Xiaomi Redmi 13C',
    price: 67438,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'xiaomi',
    likes: 0
  },
  {
    id: 18,
    name: 'Xiaomi Redmi A2+',
    price: 32898,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-a2-3-gb-64-gb-chernyi-112151794/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h62/h60/82304904855582.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'xiaomi',
    likes: 0
  },
  {
    id: 19,
    name: 'Xiaomi Redmi Note 13 Pro 5G',
    price: 170901,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/hc0/84933514100766.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'xiaomi',
    likes: 0
  },
  {
    id: 20,
    name: 'Xiaomi Redmi Note 12',
    price: 82591,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-seryi-109734268/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hca/h10/79755729600542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'xiaomi',
    likes: 0
  },
  {
    id: 21,
    name: 'Nokia 105 2019 DS',
    price: 8142,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/nokia-105-2019-ds-chernyi-8801085/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/hfc/63807893962782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'nokia',
    likes: 0
  },
  {
    id: 22,
    name: 'Nokia 106',
    price: 7999,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/nokia-106-seryi-8800911/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h50/hd8/63778886516766.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'nokia',
    likes: 0
  },
  {
    id: 23,
    name: 'Nokia 105 2023 SS',
    price: 10470,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/nokia-105-2023-ss-chernyi-113897214/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h5c/84198371360798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'nokia',
    likes: 0
  },
  {
    id: 24,
    name: 'Nokia 125 DS',
    price: 16900,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/nokia-125-ds-chernyi-100600435/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd0/63908282662942.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'nokia',
    likes: 0
  },
  {
    id: 25,
    name: 'Nokia 130 2023 DS',
    price: 16870,
    rating: 4.4,
    description: 'A14 Bionic, the iPhone\'s fastest processor',
    link: 'https://kaspi.kz/shop/p/nokia-130-2023-ds-sinii-114046351/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h99/84341934817310.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h82/64482252718110.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/he0/64482254684190.jpg?format=gallery-medium'
    ],
    type: 'nokia',
    likes: 0
  }
];
