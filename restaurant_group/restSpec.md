<center><h1>Restaurant Empire

---

##<center>Features


- User directs the browser to the app's url.

> user types 104.236.100.58:3000 in the url.

This takes the user to the index.html.

```
$.ajax {type: "GET", url: 104.236.100.58:3000{}
```
<center><img src="/public/images/index MOCKUP.png" width="350">

Here's the index page broken up in divs.

<center><img src="/public/images/div MOCKUP.png" width="350">

The landing page consists of four divs within the main container.  
- A header div with name of the application and an image.  
- On left centered div will have a list of restaurants which will be buttons with drop down options for menu, edit and info pertaining to that restaurant.  
- The body, divided by two divs will extend the list buttons by showing the name and content according to which option is clicked.  
- The lower left div will have a button to create a new restaurant and an about button which displays info about developer of the site.

When the user clicks one of the restaurant buttons located in the `Restaurant List` div it will list the option buttons `MENU`, `EDIT`, and `INFO`.  Clicking one of the options will populate the body div with the corresponding content.

> The user clicks the second button from the `Restaurant List` div and the options drop-down.  The user then clicks the `MENU` button and the body displays the menu items for that particular restaurant.  The name of the restaurant and its details will be displayed at the top of the menu content.

```
$.ajax {type: "GET", url: "/restaurant"}  <-- The div will display a list.
```
> user clicks the second restaurant.

```
$.ajax {type: "GET", url:"/restaurant/:id"}  <-- Clicking particular restaurant.
```
> Then the first drop-down option which is `MENU`.

```
$.ajax {type: "GET", url:"/items"} <-- Option requests this restaurants menu.
```
<center><img src="/public/images/menu MOCKUP.png" width="350">

With the menu displayed in the body div, the user can see items from the menu. At the bottom of the list is the `CREATE NEW ITEM` button which will bring up a new input text field for each corresponding column.  They last column will have a `SAVE` button, which after clicking, will list the new item.

In addition to viewing, creating, and deleting items, the "Price" and "UNITS SOLD" columns will be multiplied together and be displayed in the "PROFIT" column.

```
$.ajax {type: "POST", url: "/items/id/"}  <--Add item request.
```
<center><img src="/public/images/create MOCKUP.png" width="350">

Every item row has a `DELETE` button which will remove that item.

```
$.ajax {type: "DELETE", url: "/item/id/"} <--Remove item request.
```

Back over in the `Restaurant List` div, the user can click another option at any time.  The `INFO` button will populate the body div with details about the selected restaurant.

<center><img src="/public/images/info MOCKUP.png" width="350">

Also in th `Restaurant List` div is the `EDIT` button option which will populate the body div with input text fields in which the user can edit the details about restaurant like its name, location and change the image url.

```
$.ajax {type: "PATCH", url: "/items/id"} <--Edit restaurant details.
```

The bottom left div contains two buttons, the `CREATE RESTAURANT` button and the `ABOUT` button.  Clicking the `CREATE RESTAURANT` button will populate the body div with several input text fields in which the user
will type in the corresponding text. Clicking the bottom `SAVE` button save new entry into the restaurant list.

```
$.ajax {type: "POST", url: "/restaurants"}  <--Make a new restaurant request.
```
<center><img src="/public/images/new rest MOCKUP.png" width="350">

Lastly, in the bottom left div, is the `ABOUT` button which shows the user info about the developer.

```
$.ajax {type: "GET", url: "/about"} <--Make a request for dev info.
```

<center><img src="/public/images/about MOCKUP.png" width="350">
