const m = [
    { 
        id: 'product1',
        url: 'https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/ktop5e80/tablet/s/l/b/mk2k3hn-a-apple-original-imag6yy7wn9are6s.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Apple iPad 9th Gen',
            longTitle: 'Apple iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)'
        }, 
        price: {
            mrp: 32900,
            cost: 30400,
            discount: '7%'
        },
        quantity: 1,
        description: 'N/A',
        discount: 'Extra 7% Off', 
        tagline: 'Top Deals' ,
        category:"Mobile"
    },

    { 
        id: 'product2',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/i/l/a/free-3-4-sleeve-joya-889-1-carat-fashion-original-imagyk7wep5dgykf.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/i/l/a/free-3-4-sleeve-joya-889-1-carat-fashion-original-imagyk7wep5dgykf.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Lehenga Choli',
            longTitle: 'Embellished Semi Stitched Lehenga Choli  (Multicolor)'
        },
        price: {
            mrp: 1599,
            cost: 474,
            discount: '70%'
        },
        quantity: 1,
        description: 'N/A',
        discount: '70% Off', 
        tagline: 'Lenenga Choli' ,
        category:"Fashion"
    },
    { 
        id: 'product3',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/n/g/i/free-sleeveless-fp-lc44-f-plus-fashion-original-imagzghqhdzcsefn.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/p/g/l/free-sleeveless-fp-lc44-f-plus-fashion-original-imagzghqxtqeraw9.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'Lehenga Choli  (Blue)',
            longTitle: 'Printed Semi Stitched Lehenga Choli  (Blue)'
        }, 
        price: {
            mrp: 999,
            cost: 598,
            discount: '40%'
        },
        quantity: 1,
        description: "N/A",
        discount: 'Upto 40% Off', 
        tagline: 'Just Here',
        category:"Fashion"

    },
    { 
        id: 'product4',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/b/b/v/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfkuev5jm8.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/x/g/9/free-full-sleeve-lehenga-lehenga-for-women-lehenga-choli-net-original-imaggcwfgeqmhtxz.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'Semi Stitched Lehenga Choli',
            longTitle: 'Embroidered Semi Stitched Lehenga Choli  (Purple)',
        }, 
        price: {
            mrp: 3499,
            cost: 559,
            discount: '84%'
        },
        quantity: 1,
        description: 'Lovely Embroidered Pattern Crafted with a beautiful and eye-catching embroidered design, the Cute Fellow Women’s Embroidered Semi-stitched Lehenga, Choli, and Dupatta Set adds charm to your festive look. So, you can wear this set for weddings, festivals, and for other functions. Designed with a round neck and long sleeves, this set adds a sophisticated and charming touch to your appearance.',
        discount: 'Extra 84% off', 
        tagline: 'Best Seller' ,
        category:"Fashion"

    },
    { 
        id: 'product5',
        url: 'https://rukminim2.flixcart.com/image/612/612/kufuikw0/lehenga-choli/m/j/c/free-full-sleeve-anokhi-purple-r-h-comapany-original-imag7kcxnbqkpyhy.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/832/832/kufuikw0/lehenga-choli/3/j/h/free-full-sleeve-anokhi-purple-r-h-comapany-original-imag7kcxb7hakedw.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'Lehenga Choli  (Yellow)',
            longTitle: 'Checkered Semi Stitched Lehenga Choli  (Yellow)'
        }, 
        price: {
            mrp: 999,
            cost: 300,
            discount: '69%'
        },
        quantity: 1,
        description: 'N/A',
        discount: 'Grab 69% off', 
        tagline: 'Just Here' ,
        category:"Fashion"

    },
    { 
        id: 'product6',
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/q/2/edge-40-neo-payj0001in-motorola-original-imagtkf5ewhafvhh.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/projector/d/d/c/zeb-pixaplay-22-green-16-zeb-pixaplay-22-green-led-zebronics-original-imagpqgabrrbsugz.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'ZEBRONICS PIXAPLAY',
            longTitle: 'ZEBRONICS PIXAPLAY 22 (3200 lm) Portable with Electronic Focus, Multi Connectivity & Supported Formats, In-built Speaker, Dual Band Connectivity, Cotton Swab Pack , Stunning 720p HD Smart Projector  (Green)'
        }, 
        price: {
            mrp: 37999,
            cost: 12999,
            discount: '65%'
        },
        quantity: 1,
        description: "The Zebronics ZEB-PIXAPLAY 22 projector is an innovative projector with an in-built speaker. This portable speaker is powered by a quad-core processor with a long-lasting 30000 hours LED. It offers dual band connectivity which supports 2.4 GHz and 5 GHz. With a whopping 406 cm (159.84) large display, this projector ensures that you enjoy an immersive visual experience. The 1080 P FHD display provides crystal clear clarity for every visual and brings them to life. You can easily cast the screen from any device using this projector to set up your own home theatre. You can connect USB, HDMI, and AUX to access unlimited entertainment to enjoy with your friends and family.",
        discount: 'Minimum 65% Off', 
        tagline: 'Top Selling',
        category:"electronic" 
    },
    { 
        id: 'product7',
        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/g/l/-original-imagwmfcskgf7jj9.jpeg?q=70',
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/monitor/2/s/j/-original-imagwmfcgppergxk.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'ViewSonic Monitor',
            longTitle: 'ViewSonic 27 inch Quad HD IPS Panel with HDR10, 137 sRGB, Height Adjustment, Swivel, Tilt, Pivot, Eye Care, 2 x HDMI, Display Port Gaming Monitor (VX2758A-2K-PRO-2)  (AMD Free Sync, Response Time: 1 ms, 170 Hz Refresh Rate)'
        }, 
        price: {
            mrp: 27990,
            cost: 19499,
            discount: '30%'
        },
        quantity: 1,
        description: 'ViewSonic Omni 27 Inch 170Hz IPS QHD 2K 2560x1440 Pixels Gaming Monitor, 1ms, HDR10, FreeSync ,137 sRGB, Height Adjustment, Swivel, Tilt, Pivot, Eye Care, 2 x HDMI, Display Port,- VX2758A-2K-PRO-2',
        discount: 'Minimum 25% Off', 
        tagline: 'Grab Now!',
        category:"electronic" 
    },
    { 
        id: 'product8',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/u/j/drift-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-vesco-68-original-imagmgwbffrxtfbs.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/l/s/0/drift-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-vesco-68-original-imagwtfearnpunyd.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'VESCO Drift 24T Bicycle',
            longTitle: 'VESCO Drift 24T Bicycle Big Kids Boys & Girls 9 to 15 age 24 T Mountain Cycle  (Single Speed, Grey)'
        }, 
        price: {
            mrp: 10599,
            cost: 5199,
            discount: '50%'
        },
        quantity: 1,
        description: 'VESCO CYCLES Launched Every Time User Friendly Bicycles with Attractively Priced & Extremely Good Looking and High Quality Cycles for Kids (Boys & Girls) and Adults (Men & Women). Our Vision is Bikes are made with the Sole Objective of Providing a Safe, Comfortable & Stylish ride to the all users. VESCO CYCLES are Proudly Made in India. Cycles are Attractive Sporty Frame Design For Durability And Safety. Side Handle Bar Ends For Safety And Protecting The Cycle When It Falls Down, Wide And Anti Skid Pedals For Better And Firm Grip Of The Footwear. P.U Foam Saddle With Spring For Extra Comfort And Cushioning.',
        discount: 'Extra 50% Off', 
        tagline: 'Deal of the day' ,
        category:"Toy and More"
    },
    { 
        id: 'product9',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/f/m/-original-imagz5z4cknamu9d.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/e/7/c/-original-imagzbdjfx89zpsq.jpeg?q=70&crop=false',
        title: {
            shortTitle: 'boAt Airdopes Supreme',
            longTitle: 'boAt Airdopes Supreme w/ 4 Mics AI ENx Tech, 50 HRS Playback,Multi Point Connectivity Bluetooth Headset  (Classic Black, True Wireless)'
        },
        price: {
            mrp: 5990,
            cost: 1499,
            discount: '74%'
        },
        quantity: 1,
        description: "Transcend audio chaos and enter the spatial realm with boAt Airdopes Supreme TWS Earbuds. Feel the sound envelop you from all directions, powered by 24-bit audio processing. Airdopes Supreme's spectacular surround sound fills the void for truly immersive listening, and you can enjoy it without interruptions as these earbuds boast a massive 50 hours of playtime. In addition, quad mics with advanced noise cancellation tackle pesky background sounds using Artificial Intelligence, AI-ENx, to deliver supremely thumping audio devoid of clutter. Simply pop in your Airdopes to start grooving as these earbuds feature seamless in-ear detection for a smooth audio hustle. Whether you want to juggle calls on multiple devices or tick off watchlists and work tasks, these earbuds have got your back. Connect to two devices and breeze through your schedule with multipoint connectivity. Not just streaming, you can even make a mark in the gaming arena with the 65 ms low latency of BEAST mode that syncs your moves with the sound for a befitting win. Airdopes Supreme is compatible with the boAt Hearables app giving you complete control with touch customization and a multitude of functions. For added playback boost, just charge these earbuds for 10 minutes and enjoy your gaming, listening to your playlist, and watching the latest OTT series for almost 150 minutes. Elevate your listening with the innovative boAt Airdopes Supreme!",

        discount: 'From 74% Off', 
        tagline: 'boAt is here',
        category:"electronic" 
    },
    { 
        id: 'product10',
        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/cupboard-almirah/e/r/8/-original-imagzzeyzevtv6s2.jpeg?q=70', 
        detailUrl: 'https://rukminim2.flixcart.com/image/416/416/xif0q/cupboard-almirah/l/b/s/-original-imagt4zgwkdyffph.jpeg?q=70&crop=false', 
        title: {
            shortTitle: 'Godrej Almirah',
            longTitle: 'Godrej Interio Neolite Metal Almirah  (Finish Color - Denim Blue, Knock Down)'
        }, 
        price: {
            mrp: 40644,
            cost: 31790,
            discount: '21%'
        },
        quantity: 1,
        description: "The Godrej Interio Neolite Metal Almirah transcends the concept of mere storage and becomes a statement of elegance and efficiency. With its versatile vertical and horizontal storage, welded knock-down construction, convenient hanging rod and locker, slam-shut locking mechanism, and leveler support, this almirah is more than just furniture – it's a lifestyle upgrade. Elevate your organization game and transform your space with the Neolite Metal Almirah, where style and function come together in perfect harmony. Choose Godrej Interio, and experience a new era of storage that's tailored to your needs and designed for the modern world.",
        discount: 'Upto 21% Off', 
        tagline: 'Godrej ',
        category: "Home & Furnitures " 
    },
]


module.exports.m = m;

