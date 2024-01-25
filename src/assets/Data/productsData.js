// the sleep bed
import bed1 from '../images/bed1.jpg';
import bed2 from '../images/bed2.webp';
import bed3 from '../images/bed3.webp';
import bed4 from '../images/bed4.webp';

//tables
import table1 from '../images/table1.webp';
import table2 from '../images/table2.jpg';
import table3 from '../images/table3.webp';
import table4 from '../images/table4.webp';

//arm chair
import chair1 from '../images/chair1.webp';
import chair2 from '../images/chair2.webp';
import chair3 from '../images/chair3.webp';
import chair4 from '../images/chair4.webp';

//lighting
import light1 from '../images/light1.webp';
import light2 from '../images/light2.webp';
import light3 from '../images/light3.webp';
import light4 from '../images/light4.webp';



const products = [
    //  bed
    {
        id: "01",
        image: bed1,
        productName: "Abello 4 Piece Reversible Duvet",
        category: "bed sleep",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 30,
        delPrice: 68.9,
        avgRating: 4.7,
        reviews: [
            {
                name: "hi developer",
                rating: 4.5,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "Bedtime, SleepComfort, RestfulNights",
        stock: 5,
    },
    {
        id: "02",
        image: bed2,
        productName: "Shaliya 4 or 3 Piece Quilt",
        category: "bed sleep",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 199,
        delPrice: 278.9,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "Bedtime, SleepComfort, RestfulNights",
        stock: 5,
    },
    {
        id: "03",
        image: bed3,
        productName: "Mykonos 20 Piece Comforter Set",
        category: "bed sleep",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 499,
        delPrice: 733,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "Bedtime, SleepComfort, RestfulNights",
        stock: 5,
    },
    {
        id: "04",
        image: bed4,
        productName: "Dawn 2 Piece Duvet Cover Set ",
        category: "bed sleep",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 89,
        delPrice: 168,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "Bedtime, SleepComfort, RestfulNights",
        stock: 5,
    },


    //tables
    {
        id: "05",
        image: table1,
        productName: "Opus Dining Table",
        category: "Table",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 700,
        delPrice: 890,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "DiningTable, WorkTable, CoffeeTable",
        stock: 10
    },
    {
        id: "06",
        image: table2,
        productName: "Alto Bistro Table",
        category: "Table",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 540,
        delPrice: 610,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "DiningTable, WorkTable, CoffeeTable",
        stock: 10
    },
    {
        id: "07",
        image: table3,
        productName: "Molly Dining Table",
        category: "Table",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 133,
        delPrice: 499,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "DiningTable, WorkTable, CoffeeTable",
        stock: 10
    },
    {
        id: "08",
        image: table4,
        productName: "Amiens Dining Table",
        category: "Table",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 405,
        delPrice: 1002,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "DiningTable, WorkTable, CoffeeTable",
        stock: 10
    },

    //armchair
    {
        id: "09",
        image: chair1,
        productName: "22 Inch Dining Armchair",
        category: "Armchair",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 451,
        delPrice: 1129,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "ComfyChair, CozyArmchair, FurnitureDesign",
        stock: 7
    },
    {
        id: "10",
        image: chair2,
        productName: "20 Inch Dining Armchair, Velvet Seating",
        category: "Armchair",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 462,
        delPrice: 1152,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "ComfyChair, CozyArmchair, FurnitureDesign",
        stock: 7
    },
    {
        id: "11",
        image: chair3,
        productName: "Nuf 30 Inch Swivel Barstool Armchair",
        category: "Armchair",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 461,
        delPrice: 1212,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "ComfyChair, CozyArmchair, FurnitureDesign",
        stock: 7
    },
    {
        id: "12",
        image: chair4,
        productName: "Sez 26 Inch Modern Swivel Barstool Armchair",
        category: "Armchair",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 499,
        delPrice: 1202,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "ComfyChair, CozyArmchair, FurnitureDesign",
        stock: 7
    },

    //lighting
    {
        id: "13",
        image: light1,
        productName: "Meditterano 16'' High 1-Light Outdoor",
        category: "lighting",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 210,
        delPrice: 302,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "AmbientLighting, ModernLamps, TaskLighting",
        stock: 4
    },
    {
        id: "14",
        image: light2,
        productName: "Member's Mark 28 Black Lantern",
        category: "lighting",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 129,
        delPrice: 122,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "AmbientLighting, ModernLamps, TaskLighting",
        stock: 4
    },
    {
        id: "15",
        image: light3,
        productName: "Wood and Metal Lanterns",
        category: "lighting",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 181,
        delPrice: 452,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "AmbientLighting, ModernLamps, TaskLighting",
        stock: 4
    },
    {
        id: "16",
        image: light4,
        productName: "SAFAVIEH Cendra Outdoor Wall Lantern",
        category: "lighting",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga.",
        price: 499,
        delPrice: 1202,
        avgRating: 4.8,
        reviews: [
            {
                name: "hi developer",
                rating: 4.7,
                text:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maiores unde, minima excepturi nostrum asperiores. Enim excepturi ex qui, sunt maxime modi eaque veritatis, praesentium cum officia vero dolorem fuga."
            }
        ],
        tags: "AmbientLighting, ModernLamps, TaskLighting",
        stock: 4
    },
]

export default products