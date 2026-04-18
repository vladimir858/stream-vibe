import categoryItems from "../Categories/categoryItems";

const  collectionsGroups =[
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
       categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Adventure/1.jpg',
              '/src/assets/images/categories/Adventure/2.jpg',
              '/src/assets/images/categories/Adventure/3.jpg',
              '/src/assets/images/categories/Adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Comedy/1.jpg',
              '/src/assets/images/categories/Comedy/2.jpg',
              '/src/assets/images/categories/Comedy/3.jpg',
              '/src/assets/images/categories/Comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Drama/1.jpg',
              '/src/assets/images/categories/Drama/2.jpg',
              '/src/assets/images/categories/Drama/3.jpg',
              '/src/assets/images/categories/Drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Adventure/1.jpg',
              '/src/assets/images/categories/Adventure/2.jpg',
              '/src/assets/images/categories/Adventure/3.jpg',
              '/src/assets/images/categories/Adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Comedy/1.jpg',
              '/src/assets/images/categories/Comedy/2.jpg',
              '/src/assets/images/categories/Comedy/3.jpg',
              '/src/assets/images/categories/Comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Drama/1.jpg',
              '/src/assets/images/categories/Drama/2.jpg',
              '/src/assets/images/categories/Drama/3.jpg',
              '/src/assets/images/categories/Drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Adventure/1.jpg',
              '/src/assets/images/categories/Adventure/2.jpg',
              '/src/assets/images/categories/Adventure/3.jpg',
              '/src/assets/images/categories/Adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Comedy/1.jpg',
              '/src/assets/images/categories/Comedy/2.jpg',
              '/src/assets/images/categories/Comedy/3.jpg',
              '/src/assets/images/categories/Comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Drama/1.jpg',
              '/src/assets/images/categories/Drama/2.jpg',
              '/src/assets/images/categories/Drama/3.jpg',
              '/src/assets/images/categories/Drama/4.jpg',
            ],
          },
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Adventure/1.jpg',
              '/src/assets/images/categories/Adventure/2.jpg',
              '/src/assets/images/categories/Adventure/3.jpg',
              '/src/assets/images/categories/Adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Comedy/1.jpg',
              '/src/assets/images/categories/Comedy/2.jpg',
              '/src/assets/images/categories/Comedy/3.jpg',
              '/src/assets/images/categories/Comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/Drama/1.jpg',
              '/src/assets/images/categories/Drama/2.jpg',
              '/src/assets/images/categories/Drama/3.jpg',
              '/src/assets/images/categories/Drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        }

      }
    ]
  },

]

export default collectionsGroups