OK 1- crear propietarios: 
OK 2- editar propietarios
OK 3- traer uno o varios los propietarios
OK 4- eliminar uno
4.1 - varios propietarios
5- asociar con cars modificando el componente edit-cars para permitir agregar el propietario
OK 6- diseño con material design
OK 7- componente que muestre la lista de carros con sus propietarios (los carros deben tener su imagen)
8- componente que permita ver la lista de propietarios
9- tener un componente que permita crear o actualizar los propietarios
10- al eliminarse el propietario se debe eliminar la relacion que tenga con los carros

Se creo el servicio owner en la carpeta shared que tiene los metodos que consumen el api de la url de owners, asi mismo se creó el componente home donde se agregaron 2 botones: uno para car list y el otro para owner list, se crearon tambien los componentes get-owner que muestra la lista de los owners, el componente edit-owner que permite crear y para editar en la url de cada car se usó un pipe nativo de angular el cual nos permitia realizar un split para "/" sobre la propiedad _links.self.href la cual al final poseia el id de este elemento, entonces con el split se dividó esa url y se tomó la porción 4 que era la que tenia este id, cada componente con sus ajustes e importaciones de service y del archivo .ts de cada componente tambien se modifico home como la pagina principal, tambien se creo el path de cada componente, se creo tambien la relacion entre el dni del owner y el ownerdni de car donde se agrego un select en car-edit.html y se agrego una funcion que consumia todos los owners y de alli se alimento el select el cual el valor a mostrar era el nombre (owner.name) y el valor de este es el dni (owner.dni) teniendo en cuenta que en car-edit.ts la importacion de OwnerService y se le asigno un name al campo select para que el ngform pudiera detectar como uno de los campos a leer y guardar.