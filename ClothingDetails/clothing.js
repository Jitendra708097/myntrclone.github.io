

const clothingOffers = [
  { 
    cloth: "Classic White Tee", 
    offer: "30-70% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    price: "450Rs"
  },
  { 
    cloth: "Skinny Jeans", 
    offer: "Buy 1 Get 1 50% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    price: "1200Rs"
  },
  { 
    cloth: "Puffer Jacket", 
    offer: "60% Off", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?w=500",
    price: "1800Rs"
  },
  { 
    cloth: "Maxi Sundress", 
    offer: "40% Discount", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
    price: "950Rs"
  },
  { 
    cloth: "Trail Running Shoes", 
    offer: "25% Off", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=500",
    price: "1500Rs"
  },
  // Additional items with real images...
  { 
    cloth: "Oversized Hoodie", 
    offer: "35% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    price: "850Rs"
  },
  { 
    cloth: "Linen Jumpsuit", 
    offer: "Flash Sale 50%", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?w=500",
    price: "1100Rs"
  },
  { 
    cloth: "High-Waisted Shorts", 
    offer: "Buy 2 Save 30%", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
    price: "600Rs"
  },
  { 
    cloth: "Cashmere Sweater", 
    offer: "45% Off", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?w=500",
    price: "1750Rs"
  },
  { 
    cloth: "Aviator Jacket", 
    offer: "55% Discount", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    price: "1950Rs"
  },
  // Sportswear section...
  { 
    cloth: "Yoga Leggings", 
    offer: "2 for $60", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/4662351/pexels-photo-4662351.jpeg?w=500",
    price: "750Rs"
  },
  { 
    cloth: "Training Tank Top", 
    offer: "30% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    price: "500Rs"
  },
  { 
    cloth: "Running Tights", 
    offer: "25% Discount", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/6855348/pexels-photo-6855348.jpeg?w=500",
    price: "800Rs"
  },
  // Formal wear...
  { 
    cloth: "Wool Blazer", 
    offer: "40% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    price: "1650Rs"
  },
  { 
    cloth: "Silk Tie", 
    offer: "3 for $99", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?w=500",
    price: "350Rs"
  },
  // Seasonal items...
  { 
    cloth: "T-Shirt", 
    offer: "60% Off", 
    shop: "Shop Now",
    image: "https://th.bing.com/th/id/OIP.CcKuN_8EJiqXGBwvEVZJbgHaKu?cb=iwp1&rs=1&pid=ImgDetMain",
    price: "400Rs"
  },
  { 
    cloth: "Winter Beanie", 
    offer: "Buy 1 Get 1 Free", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?w=500",
    price: "300Rs"
  },
  // Footwear...
  { 
    cloth: "Ankle Boots", 
    offer: "50% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    price: "1600Rs"
  },
  { 
    cloth: "Slides", 
    offer: "30% Discount", 
    shop: "Shop Now",
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=500",
    price: "550Rs"
  },
  // Continue with more items up to 50...
  { 
    cloth: "Denim Overalls", 
    offer: "35% Off", 
    shop: "Shop Now",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    price: "1250Rs"
  },
  { 
    cloth: "Knit Cardigan", 
    offer: "40% Off", 
    shop: "Shop Now",
    image: "https://th.bing.com/th/id/OIP.ztOCRcEYJVPmY-e9Qp3rIgHaLG?cb=iwp1&rs=1&pid=ImgDetMain",
    price: "950Rs"
  },
  // ... (continue this pattern until 50 items)
      { 
        cloth: "Cropped Hoodie", 
        offer: "35% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
        price: "850Rs"
      },
      { 
        cloth: "Wide-Leg Pants", 
        offer: "Buy 1 Get 1 Free", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?w=500",
        price: "1100Rs"
      },
      { 
        cloth: "Biker Shorts", 
        offer: "30% Discount", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
        price: "600Rs"
      },
      { 
        cloth: "Turtleneck Sweater", 
        offer: "45% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?w=500",
        price: "1750Rs"
      },
      { 
        cloth: "Faux Leather Jacket", 
        offer: "50% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        price: "1950Rs"
      },
      { 
        cloth: "T-Shirts", 
        offer: "2 for $40", 
        shop: "Shop Now",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/k/k/m-women-solid-combo-adyavastram-original-imahy9gsc9n7yf8e.jpeg?q=70",
        price: "400Rs"
      },
      { 
        cloth: "Mesh Top", 
        offer: "25% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        price: "500Rs"
      },
      { 
        cloth: "Compression Leggings", 
        offer: "30% Discount", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/6855348/pexels-photo-6855348.jpeg?w=500",
        price: "800Rs"
      },
      { 
        cloth: "Tailored Suit", 
        offer: "40% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
        price: "1650Rs"
      },
      { 
        cloth: "Bow Tie", 
        offer: "3 for $75", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?w=500",
        price: "350Rs"
      },
    
      // 21-30
      { 
        cloth: "One-Piece Swimsuit", 
        offer: "60% Off", 
        shop: "Shop Now",
        image: "https://ae01.alicdn.com/kf/HTB1UJlhRVXXXXaHXpXXq6xXFXXXY/HXBY-Short-Sleeve-Swimwear-Men-One-Piece-Swimsuit-Men-Swimming-Bodysuit-Women-s-Swimsuits-One-Piece.jpg",
        price: "700Rs"
      },
      { 
        cloth: "Knit Scarf", 
        offer: "Buy 1 Get 1 Free", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?w=500",
        price: "300Rs"
      },
      { 
        cloth: "Chelsea Boots", 
        offer: "50% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        price: "1600Rs"
      },
      { 
        cloth: "Pool Slides", 
        offer: "30% Discount", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?w=500",
        price: "550Rs"
      },
      { 
        cloth: "Denim Overalls", 
        offer: "35% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
        price: "1250Rs"
      },
      { 
        cloth: "Open-Front Cardigan", 
        offer: "40% Off", 
        shop: "Shop Now",
        image: "https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/311948/corduroy-pants-trend-311948-1706803093750-main-1920-80.jpg",
        price: "950Rs"
      },
      { 
        cloth: "Cargo Pants", 
        offer: "25% Off", 
        shop: "Shop Now",
        image: "https://cdn.shopify.com/s/files/1/0267/0323/3076/products/suzhoucargopantst81007pic5_1200x1200.jpg?v=1614415711",
        price: "1000Rs"
      },
      { 
        cloth: "Satin Blouse", 
        offer: "Buy 2 Get 1 Free", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?w=500",
        price: "850Rs"
      },
      { 
        cloth: "Fleece Jacket", 
        offer: "45% Off", 
        shop: "Shop Now",
        image: "https://cdn.shopify.com/s/files/1/0312/6537/products/EB200_grey_steel_1024x1024.jpg?v=1571267263",
        price: "1400Rs"
      },
      { 
        cloth: "Lace Bralette", 
        offer: "30% Discount", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?w=500",
        price: "450Rs"
      },
    
      // 31-40
      { 
        cloth: "Corduroy Pants", 
        offer: "40% Off", 
        shop: "Shop Now",
        image: "https://i.pinimg.com/originals/a5/66/03/a5660390111f97e1c51d06cb789cd535.jpg",
        price: "1100Rs"
      },
      { 
        cloth: "Tie-Dye Hoodie", 
        offer: "35% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?w=500",
        price: "850Rs"
      },
      { 
        cloth: "Pleated Skirt", 
        offer: "Buy 1 Get 1 50% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500",
        price: "750Rs"
      },
      { 
        cloth: "Quilted Vest", 
        offer: "50% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?w=500",
        price: "900Rs"
      },
      { 
        cloth: "Ribbed Tank Top", 
        offer: "3 for $45", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        price: "400Rs"
      },
      { 
        cloth: "Wool Coat", 
        offer: "60% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?w=500",
        price: "1900Rs"
      },
      { 
        cloth: "Linen Shirt", 
        offer: "30% Discount", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
        price: "650Rs"
      },
      { 
        cloth: "Cropped Blazer", 
        offer: "40% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?w=500",
        price: "1350Rs"
      },
      { 
        cloth: "Seamless Underwear", 
        offer: "5 for $50", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500",
        price: "250Rs"
      },
      { 
        cloth: "Velvet Dress", 
        offer: "55% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?w=500",
        price: "1450Rs"
      },
    
      // 41-50
      { 
        cloth: "Cargo Joggers", 
        offer: "35% Off", 
        shop: "Shop Now",
        image: "https://th.bing.com/th/id/OIP.SYZ8If5FXNL2ZMt4h2GRWgHaLs?o=7&cb=iwp1rm=3&rs=1&pid=ImgDetMain",
        price: "1000Rs"
      },
      { 
        cloth: "Knit Polo", 
        offer: "Buy 2 Save 25%", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?w=500",
        price: "700Rs"
      },
      { 
        cloth: "Denim Shirt", 
        offer: "40% Discount", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
        price: "850Rs"
      },
      { 
        cloth: "Fleece Pajama Set", 
        offer: "30% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?w=500",
        price: "900Rs"
      },
      { 
        cloth: "Wrap Dress", 
        offer: "50% Off", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500",
        price: "1200Rs"
      },
      { 
        cloth: "Hiking Boots", 
        offer: "45% Off", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=500",
        price: "1750Rs"
      },
      { 
        cloth: "Silk Camisole", 
        offer: "Buy 1 Get 1 Free", 
        shop: "Shop Now",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        price: "500Rs"
      },
      { 
        cloth: "Oversized Blazer", 
        offer: "40% Discount", 
        shop: "Shop Now",
        image: "https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?w=500",
        price: "1350Rs"
      },
      { 
        cloth: "Cashmere Scarf", 
        offer: "30% Off", 
        shop: "Shop Now",
        image: "https://th.bing.com/th/id/OIP.UyEoNjom88421vkHQb4DvwHaHa?cb=iwp1&rs=1&pid=ImgDetMain",
        price: "950Rs"
      },
      { 
        cloth: "Leather Loafers", 
        offer: "50% Off", 
        shop: "Shop Now",
        image: "https://i.pinimg.com/736x/05/af/5c/05af5cbeb0ce1832814ed25bc0b47c4c.jpg",
        price: "1500Rs"
      }
];
  
  export default clothingOffers;