import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // searchResult: [] = [];
  p: any;
  config: PaginationInstance;
  title = 'angularsearchwithdatabinding';
  searchText: string = '';
  loadingProducts: boolean = false;

  products = [
    {
      id: '32',
      product_title: 'HeadPhone',
      product_price: '$178.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/8.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '31',
      product_title: 'Digital Watch',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/7.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '30',
      product_title: 'Sofa',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/6.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '29',
      product_title: 'Apple Laptop',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/5.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '28',
      product_title: 'Bag',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/4.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '27',
      product_title: 'Jean Shorts',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/3.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '26',
      product_title: 'Winter Jacket',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/2.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '25',
      product_title: 'T-shirt',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/1.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '24',
      product_title: 'HeadPhone',
      product_price: '$178.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/8.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '23',
      product_title: 'Digital Watch',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/7.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '22',
      product_title: 'Sofa',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/6.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '21',
      product_title: 'Apple Laptop',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/5.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '20',
      product_title: 'Bag',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/4.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '19',
      product_title: 'Jean Shorts',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/3.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '18',
      product_title: 'Winter Jacket',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/2.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '17',
      product_title: 'T-shirt',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/1.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '16',
      product_title: 'HeadPhone',
      product_price: '$178.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/8.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '15',
      product_title: 'Digital Watch',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/7.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '14',
      product_title: 'Sofa',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/6.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '13',
      product_title: 'Apple Laptop',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/5.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '12',
      product_title: 'Bag',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/4.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '11',
      product_title: 'Jean Shorts',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/3.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '10',
      product_title: 'Winter Jacket',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/2.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '9',
      product_title: 'T-shirt',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/1.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '8',
      product_title: 'HeadPhone',
      product_price: '$178.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/8.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '7',
      product_title: 'Digital Watch',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/7.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:42:08',
      updated_at: '2021-02-01 12:42:08',
    },
    {
      id: '6',
      product_title: 'Sofa',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/6.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '5',
      product_title: 'Apple Laptop',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/5.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:41:08',
      updated_at: '2021-02-01 12:41:08',
    },
    {
      id: '4',
      product_title: 'Bag',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/4.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '3',
      product_title: 'Jean Shorts',
      product_price: '$56.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/3.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:39:54',
      updated_at: '2021-02-01 12:39:54',
    },
    {
      id: '2',
      product_title: 'Winter Jacket',
      product_price: '$280.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/2.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
    {
      id: '1',
      product_title: 'T-shirt',
      product_price: '$179.00',
      product_image:
        'https://therichpost.com/testjsonapi/wp-content/themes/testjsonapi/assets/images/items/1.jpg',
      product_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      created_at: '2021-02-01 12:38:47',
      updated_at: '2021-02-01 12:38:47',
    },
  ];

  /**
   * Description
   *  */
  constructor() {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.products.length,
    };
  }
  /**
   * Description
   * @returns {any}
   *  */
  ngOnInit(): void {
    this.loadingProducts = true;
    setTimeout(() => {
      this.loadingProducts = false;
    }, 1000);
  }

  /**
   * Description
   * @param {any} event
   * @returns {any}
   *  */
  pageChanged(event: any) {
    this.config.currentPage = event;
    this.loadingProducts = true;
    setTimeout(() => {
      this.loadingProducts = false;
    }, 1000);
  }

  /**
   * Description
   * @returns {any}
   *  */ clearFilter(): void {
    // console.log(this.searchText);
    this.searchText = '';
  }
}
