# Istruzioni (IT)

## Milestone 1 ✔
- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
- Non esagerate con i componenti: less is more.
- L’esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?). 

### Bonus
- Popoliamo le voci dell’header (sia le tre voci testuali che le tre icone) dinamicamente.

## Milestone 2 ✔
- Aggiungete un array di prodotti e stampateli in pagina usando un componente productCard e le props necessarie per visualizzarlo correttamente.
- Ciascun oggetto dell'array avrá le proprietá necessarie per stampare la card di prodotto.
- Createla in autonomia prendendo come riferimento il layout che avete costruito.

## Milestone 3 ✔
- Continuate a lavorare nella stessa repo di ieri. Installiamo la libreria json-server e aggiungiamo al package.json lo script “serve” necessario per avviarlo: “json-server --watch db.json”.
- Impostiamo uno stato globale: quali dati globali gestisce la nostra app?
- Infine, facciamo in modo che la nostra App, all’avvio, non legga più i dati dall’array statico presente nel componente, ma dall’API che ci rende disponibile json-server.

## Milestone 4
- Continuate a lavorare nella stessa repo di ieri.
- Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento “showProduct” verso il componente App.
- In App, quando riceviamo l’evento, apriamo una modale che mostra tutte le informazioni testuali del prodotto.
- Nella modale è presente una X (o un pulsante) per chiuderla.

### Bonus
- Proviamo a creare una modale più completa: mostriamo le immagini del prodotto sulla sinistra e le informazioni di testo sulla destra.

# Instructions (EN)
- Create a new project using Vite and Vue 3 and define the necessary components to structure the layout.
- Don't overdo it with components: less is more.
- You already know the exercise (html-css-boolando), but the challenge is to break it down into components and try to leverage SASS 👀 to make our style more readable and flexible (what variables might you need?).

## Bonus
- Dynamically populate the header items (both the three text items and the three icons).

## Milestone 2
- Add an array of products and display them on the page using a productCard component and the necessary props to display them correctly.
- Each object in the array will have the properties needed to display the product card.
- Create it independently, using the layout you have built as a reference.

## Milestone 3
- Continue working in the same repository as yesterday. Install the json-server library and add the necessary "serve" script to the package.json: "json-server --watch db.json".
- Set up global state: what global data does our app manage?
- Finally, ensure that our App, upon startup, no longer reads data from the static array present in the component, but from the API made available by json-server.

## Milestone 4
- Continue working in the same repository as yesterday.
- Ensure that clicking on the product name in the card emits a "showProduct" event to the App component.
- In App, upon receiving the event, open a modal that displays all the textual information of the product.
- The modal should have an X (or a button) to close it.

### Bonus
- Let's try to create a more complete modal: display the product images on the left and the text information on the right.