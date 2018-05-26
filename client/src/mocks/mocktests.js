const info = [{
    id: "1",
    name: "Iphone X",
    frontImage: "https://i.imgur.com/AN8zOXO.png",
    specifications: "64GB / 3GB RAM / 5.8",
    logo: "https://i.imgur.com/Sd5I3t2.png",
    color: "black",
    price: "1103€",
    brand: "Apple",
    details: {
      os: "iOS 11",
      size: "5.8",
      ram: "3GB",
      memory: "64GB",
      camera: "12Mpx",
      conectivity: "WiFi, 4G, NFC"
    },
    images: [
      "https://i.imgur.com/Jf2Dm7C.png",
      "https://i.imgur.com/9yYwLYV.png",
      "https://i.imgur.com/d8OjpHx.png",
      "https://i.imgur.com/hldBFqr.png"
    ]
  },
  {
    id: "2",
    name: "Galaxy s9",
    frontImage: "https://i.imgur.com/tD0HPZR.png",
    specifications: "64GB / 6GB RAM / 6.2",
    logo: "https://i.imgur.com/5nTq3qn.png",
    color: "#c39bf7",
    price: "949€",
    brand: "Samsung",
    details: {
      os: "Android 8.0",
      size: "6.2",
      ram: "6GB",
      memory: "64GB",
      camera: "24Mpx",
      conectivity: "WiFi, 4G, NFC"
    },
    images: [
      "https://i.imgur.com/6N4smI6.png",
      "https://i.imgur.com/2znjaps.png",
      "https://i.imgur.com/H0KGspX.png",
      "https://i.imgur.com/0W01rf8.png"
    ]
  },
  {
    id: "3",
    name: "6T",
    frontImage: "https://i.imgur.com/wh6NLEe.png",
    specifications: "64GB / 3GB RAM / 5.8",
    logo: "https://i.imgur.com/ef8ChUq.png",
    color: "black",
    price: "619€",
    brand: "One Plus",
    details: {
      os: "OxygenOS",
      size: "6.2",
      ram: "8GB",
      memory: "256GB",
      camera: "16Mpx",
      conectivity: "WiFi, LTE, NFC"
    },
    images: [
      "https://i.imgur.com/og73iug.png",
      "https://i.imgur.com/6g6sc0H.png",
      "https://i.imgur.com/yG5NvFG.png",
      "https://i.imgur.com/PTl5HBc.png"
    ]
  },
  {
    id: "4",
    name: "MI A1",
    frontImage: "https://i.imgur.com/zIiH5Ti.png",
    specifications: "64GB / 3GB RAM / 5.8",
    logo: "https://i.imgur.com/NHuWTxE.png",
    color: "#c40135",
    price: "229€",
    brand: "Xiaomi",
    details: {
      os: "Android One",
      size: "5.5",
      ram: "4GB",
      memory: "256GB",
      camera: "12Mpx",
      conectivity: "WiFi, LTE, 4G"
    },
    images: [
      "https://i.imgur.com/h61qGYO.png",
      "https://i.imgur.com/iZrFA5j.png",
      "https://i.imgur.com/Ep3NXmb.png",
      "https://i.imgur.com/Y9q6ztS.png"
    ]
  },
  {
    id: "5",
    name: "P20 Pro",
    frontImage: "https://i.imgur.com/MMzXtqf.png",
    specifications: "64GB / 3GB RAM / 5.8",
    logo: "https://i.imgur.com/3XGjtGX.png",
    color: "#033082",
    price: "899€",
    brand: "Huawei",
    details: {
      os: "Android 8.0",
      size: "6.1",
      ram: "6GB",
      memory: "128GB",
      camera: "40Mpx",
      conectivity: "WiFi, 4G, NFC"
    },
    images: [
      "https://i.imgur.com/MoGfQAq.png",
      "https://i.imgur.com/FT0lk7Y.png",
      "https://i.imgur.com/r67572A.png",
      "https://i.imgur.com/wsWYFzo.png"
    ]
  },
  {
    id: "6",
    name: "9 Lite",
    frontImage: "https://i.imgur.com/QjKjbz7.png",
    specifications: "64GB / 3GB RAM / 5.8",
    logo: "https://i.imgur.com/6m9DIyG.png",
    color: "#dcdee2",
    price: "221€",
    brand: "Honor",
    details: {
      os: "Android 8.0",
      size: "5.6",
      ram: "3GB",
      memory: "32GB",
      camera: "13Mpx",
      conectivity: "WiFi, 4G, NFC"
    },
    images: [
      "https://i.imgur.com/ZbeI89z.png",
      "https://i.imgur.com/t0Ib1SB.png",
      "https://i.imgur.com/z5wLiUB.png",
      "https://i.imgur.com/MHQNe8M.png"
    ]
  }
]

export const stateWithoutSelectedPhone = {
  phones: [{
      id: 1,
      images: ['a', 'b', 'c']
    },
    {
      id: 2,
      images: ['c', 'a', 'b']
    },
    {
      id: 3,
      images: ['b', 'c', 'a']
    }
  ],
  selectedPhone: null,
  error: false,
  selectedImage: null
}

export const stateWithSelectedPhone = {
  phones: [{
      id: 1,
      images: ['a', 'b', 'c']
    },
    {
      id: 2,
      images: ['c', 'a', 'b']
    },
    {
      id: 3,
      images: ['b', 'c', 'a']
    }
  ],
  selectedPhone: {
    id: 2,
    images: ['c', 'a', 'b']
  },
  error: false,
  selectedImage: 'c'
}

export const stateWithNextImageSelected = {
  phones: [{
      id: 1,
      images: ['a', 'b', 'c']
    },
    {
      id: 2,
      images: ['c', 'a', 'b']
    },
    {
      id: 3,
      images: ['b', 'c', 'a']
    }
  ],
  selectedPhone: {
    id: 2,
    images: ['c', 'a', 'b']
  },
  error: false,
  selectedImage: 'a'
}

export const stateWithOtherImageSelected = {
  phones: [{
      id: 1,
      images: ['a', 'b', 'c']
    },
    {
      id: 2,
      images: ['c', 'a', 'b']
    },
    {
      id: 3,
      images: ['b', 'c', 'a']
    }
  ],
  selectedPhone: {
    id: 2,
    images: ['c', 'a', 'b']
  },
  error: false,
  selectedImage: 'b'
}

export default info
