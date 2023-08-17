import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularsearchwithdatabinding';
  products = [
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
  searchText: string = '';
}
