import logo from "./logo.png";
import clean from "./clean.png";

import search_icon from "./search_icon.png";
import basket_icon from "./basket_icon.png";
import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import facebook_icon from "./facebook_icon.png";
import linkedin_icon from "./linkedin_icon.png";
import twitter_icon from "./twitter_icon.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import cross_icon from "./cross_icon.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";

import fullhouse from "./fullhouse.png";
import kitchen from "./kitchen.png";
import bedroom from "./bedroom.png";
import livingroom from "./livingroom.png";
import restroom from "./restroom.png";
import balcony from "./balcony.png";
import garden from "./garden.png";
import terrace from "./terrace.png";
import microwave_cleaning_service from "./microwave_cleaning_service.png";
import stove_cleaning_service from "./stove_cleaning_service.png";
import kitchen_sink_cleaning from "./kitchen_sink_cleaning.png";
import restroom_cleaning from "./restroom_cleaning.png";
import balcony_cleaning from "./balcony_cleaning.png";
import livingroom_cleaning from "./livingroom_cleaning.png";
import bedroom_cleaning from "./bedroom_cleaning.png";
import fullhouse_cleaning from "./fullhouse_cleaning.png";
import garden_cleaning from "./garden_cleaning.png";
import terrace_cleaning from "./terrace_cleaning.png";

import rating from "./rating_starts.png";

//export images in object format

export const assets = {
  logo,
  clean,

  search_icon,
  basket_icon,
  add_icon_white,
  add_icon_green,
  remove_icon_red,
  profile_icon,
  bag_icon,
  logout_icon,

  facebook_icon,
  linkedin_icon,
  twitter_icon,

  app_store,
  play_store,
  cross_icon,

  fullhouse,
  kitchen,
  bedroom,
  livingroom,
  restroom,
  balcony,
  garden,
  terrace,

  microwave_cleaning_service,
  stove_cleaning_service,
  kitchen_sink_cleaning,
  restroom_cleaning,
  balcony_cleaning,
  livingroom_cleaning,
  bedroom_cleaning,
  fullhouse_cleaning,
  garden_cleaning,
  terrace_cleaning,
  rating,
};

export const service_list = [
  {
    service_name: "Full House",
    service_image: fullhouse,
  },
  {
    service_name: "Kitchen",
    service_image: kitchen,
  },
  {
    service_name: "Bedroom",
    service_image: bedroom,
  },
  {
    service_name: "Living Room",
    service_image: livingroom,
  },
  {
    service_name: "Garden",
    service_image: garden,
  },
  {
    service_name: "Bathroom",
    service_image: restroom,
  },
  {
    service_name: "Balcony",
    service_image: balcony,
  },
  {
    service_name: "Terrace",
    service_image: terrace,
  },
];

export const service_list_details = [
  {
    _id: "1",
    name: "Microwave Cleaning",
    image: microwave_cleaning_service,
    price: 49,
    description:
      "Revitalize your microwave with our cleaning service, ensuring a hygienic appliance that cooks efficiently and safely!",
    category: "Kitchen",
  },
  {
    _id: "2",
    name: "Stove Cleaning",
    image: stove_cleaning_service,
    price: 29,
    description:
      "Transform your cooking space with our stove cleaning service, ensuring a sparkling surface that enhances safety and efficiency!",
    category: "Kitchen",
  },
  {
    _id: "3",
    name: "Kitchen Sink Cleaning",
    image: kitchen_sink_cleaning,
    price: 19,
    description:
      "Refresh your kitchen with our sink cleaning service, promoting a hygienic workspace and preventing unpleasant odors!",
    category: "Kitchen",
  },
  {
    _id: "4",
    name: "Bathroom Cleaning",
    image: restroom_cleaning,
    price: 69,
    description:
      "Ensure a spotless and sanitary restroom with our cleaning service, enhancing comfort and promoting a healthy environment!",
    category: "Bathroom",
  },
  {
    _id: "5",
    name: "Balcony Cleaning",
    image: balcony_cleaning,
    price: 29,
    description:
      "Elevate your outdoor space with our balcony cleaning service, creating a fresh, inviting area for relaxation and enjoyment!",
    category: "Balcony",
  },
  {
    _id: "6",
    name: "Living Room Cleaning",
    image: livingroom_cleaning,
    price: 89,
    description:
      "Revitalize your living room with our cleaning service, ensuring a pristine and welcoming space for family and guests!",
    category: "Living Room",
  },
  {
    _id: "7",
    name: "BedRoom Cleaning",
    image: bedroom_cleaning,
    price: 39,
    description:
      "Transform your bedroom with our cleaning service, creating a serene and healthy sanctuary for restful sleep!",
    category: "Bedroom",
  },
  {
    _id: "8",
    name: "Full House Cleaning",
    image: fullhouse_cleaning,
    price: 399,
    description:
      "Experience a thorough refresh with our full house cleaning service, ensuring every corner is spotless and promoting a healthier home environment!",
    category: "Full House",
  },
  {
    _id: "9",
    name: "Garden Cleaning",
    image: garden_cleaning,
    price: 69,
    description:
      "Revitalize your outdoor oasis with our garden cleaning service, enhancing beauty and ensuring a healthy, thriving space for relaxation and enjoyment!",
    category: "Garden",
  },
  {
    _id: "10",
    name: "Terrace Cleaning",
    image: terrace_cleaning,
    price: 49,
    description:
      "Refresh your terrace with our cleaning service, creating a clean, inviting space perfect for enjoying fresh air and stunning views!",
    category: "Terrace",
  },
];

//write a two liner to describe about "Microwave Cleaning" service and it's advantage
