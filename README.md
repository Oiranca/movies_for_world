# Reto Final

## Secciones 

* [***1- Descripción del reto.***](#descripcion)
* [***2- Instalación y ejecución***](#instalacion)
* [***3- Descripción del desarrollo.***](#desarrollo)
    * [***3.1- Componentes.***](#componentes)
    * [***3.2- Servicios.***](#servicios)



<div id='descripcion'/>

## ***1- Descripción del reto***

El reto consiste en la creación de una APP capaz de interactuar con los Endpoints de la API proporcionada por [themoviedb](https://developers.themoviedb.org/3).

***Tecnologías:***

* HTML5
* ES6
* Bootstrap
* REACT - REDUX
* API
* Git

***Extra points:***

- API Custom

***Funcionamiento:***

La aplicación nos permitirá buscar y mostrar títulos con los siguientes criterios:

- Título
- Título original
- Overview
- Listar 10 más populares

***Extra Points:***

- Género

***Funcionamiento:***

La aplicación nos permitirá mostrar información de un título.

- Poster
- Título, título original
- Fecha de lanzamiento
- Overview

***Extra Points:***

- Género
- Número de votos

***Funcionamiento Extra:***

¿Serías capaz de hacer un buscador alternativo de series por título dentro de la misma app?

Mostrando los mismos datos.

## Requisitos de evaluación:

* Uso correcto de React y Redux

* Endpoints variados de búsqueda

* README completo en Github

***El proyecto se evaluará por:***

* Uso correcto de React

* Especificación ES6

* README completo enGithub

***Extra:***

Uso de Redux

## Extra:

### Libre Elección

Si bien en vez de nutrir tu app de la API de themovieDB prefieres interactuar con una API custom u otra de tu elección, eres libre de escoger! En caso de crear una API custom, siéntete libre de crear un entorno de endpoints CRUD. **Recuerda que has de cumplimentar como mínimo todos los objetivos!**.

<div id='instalacion'/>

## **2- Instalación y ejecución**

Para poder usar la aplicación y comprobar su funcionamiento, debemos una vez clonado el repositorio usar el comando:

### **`npm install`**

Luego para poder levantarlo y que se ejecute, debemos usar el comando:

### **`yarn start`**

Recordar también poner, en la **raíz del proyecto**, nuestro **.env** con nuestra **API KEY**, tal cual como se indica el archivo del repositorio **.envExample**


<div id='desarrollo'/>

## ***3- Descripción del desarrollo***

Como se nos pide en la descripción de último reto del bootcamp, debemos ser capaz de conectarnos a una **API** y recuperar los datos según los parámetros pasados y mostrarlos en los diferentes componente **React** que desarrollemos.

En mi proyecto, he usado además de las tecnología nombradas en los requisitos, otro framework para estilos, un middleware para llamadas asíncronas, una librería para manejar variables de entorno y otra para realizar llamadas a la API.

* [**React Bootstrap**](https://react-bootstrap.github.io/), para los estilos de los componentes.
* [**Redux Thunk**](https://github.com/reduxjs/redux-thunk), para crear ese middleware y usar llamadas asíncronas en el action de redux.
* [**DotEnv**](https://github.com/motdotla/dotenv), la uso para la creación y utilización de variables entorno y así no exponer información sesible como la **key** de la API.
* [**Axios**](https://github.com/axios/axios), esta librería la usamos para realizar llamadas a la **API**.

<div id='componentes'/>

### **3.1-Componentes**

![](https://i.imgur.com/r9nsx3u.png)

He divido el proyecto en cuatro componentes principales.

* ***Navbar***: Este es el primero que nos econtramos, el cual nos muestra el logotipo del proyecto y dos botones donde podremos elegir entre **películas o series**.

![](https://i.imgur.com/CYvzo93.png)

* ***NavForSearch***: En este componente vamos a encontrar las diferente opciones de busqueda del proyecto, además de mostrarnos en dónde estamos haciendo la busqueda, **en películas o series**. 

    Los tipos de busqueda serían:
    * Por título.
    * Por género.
    * Las 10 más populares.

![](https://i.imgur.com/qfVpwuJ.png)

* ***Genres***:En este comoponente controlamos la búsqueda por géneros, ya sea para las películas o las series. Cargamos todos los géneros con una llamada al la **API**, ya que cada género tiene su **id** y además varían si buscas una película frente a la busqueda de series.

```
 useEffect(() => {

    if (typesForSearchGenre === 'movies') {
      getMoviesGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));


      }).catch(err => console.log(err));


    } else if (typesForSearchGenre === 'series') {
      getTvGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));

      }).catch(err => console.log(err));


    }

    if (searchType === 'SEARCH_BY_GENRE') {
      setTActive(true)
    } else {
      setTActive(false)
      setActiveContainer(false);

    }


  }, [typesForSearchGenre, searchType]);
    
```

* ***Container***: Este componente es el encargado de mostrar las busquedas y crear la lista para mostrarla.

    La información que podemos encontrar es:
    * Título.
    * Título original.
    * Conteo de votos.
    * Média de votos.
    * Géneros.
    * Poster.
    * Sinopsis

![](https://i.imgur.com/znJECyA.png)

<div id='servicios'/>

### **3.2-Servicios**

![](https://i.imgur.com/W8YikkX.png)

He dividído en dos los servicios utlizados en este proyecto.

* **Redux**: Aquí podremo encontrar la **store, el action y el reducer** de la aplicación y así poder usar **Redux**.
*  **TypeSearch**: Es donde tengo todos los **endpoints** de la aplicación y donde realizo las llamadas con **axios** y uso el middleware **Redux Thunk**.
