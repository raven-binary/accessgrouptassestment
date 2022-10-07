import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../Components/QuickLinks.css";
import Api from '../Api/Items.js';
import Header from "../Components/Header.js";
import AddItem from "../Components/AddItem.js";
import ItemList from "../Components/ItemList.js";

function QuickLinks() {
  const LOCAL_STORAGE_KEY = "Items";
  const [Items, setItems] = useState([]);
  //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  // );

  //Retrieve Items
  const retrieveItems = async () => {
    const response = await Api.get("/Items");
    return response.data;
  };
  retrieveItems();

  const AddItemHandler = (Items) => {
    console.log(Items);
    setItems([...Items, { id: uuid(), ...Items }]);
  };

  const removeContactHandler = (id) => {
    const newItemList = Items.filter((contact) => {
      return contact.id !== id;
    });

    setItems(newItemList);
  };

  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrieveItems();
      if (allItems) setItems(allItems);
    };
    getAllItems();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Items));
  }, [Items]);

  return (
    <div className="ui container">
      <Header />
      <AddItem AddItemHandler={AddItemHandler} />
      <ItemList Items={Items} getContactId={removeContactHandler} />
    </div>
  );
}

export default QuickLinks;