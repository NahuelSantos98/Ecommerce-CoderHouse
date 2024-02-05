E-commerce - Nahuel Martín Santos

Desarrollé un E-commerce totalmente funcional utilizando la biblioteca ReactJs. Los estilos fueron implementados con CSS sin utilizar librerías externas. La gestión de productos, procesamiento de pedidos y funciones de compra se llevaron a cabo mediante la plataforma Firebase. La implementación se desplegó en la plataforma en la nube Vercel: https://ecommerce-coder-house-pi.vercel.app/

La aplicación web consta de una página /home con una NavBar que contiene el nombre del E-commerce y diversas opciones de navegación, como el catálogo, filtrado de categoría de productos (Ropa masculina y femenina, Electrónica, Joyería) y un carrito de compras que muestra la cantidad de productos agregados. También hay un botón que redirige a la página del catálogo (ruta: /catalogo), donde se muestran los productos con su nombre, imagen, disponibilidad en stock, precio y un botón para obtener información detallada. En la vista detallada (ruta: /product/idProducto), se muestra la misma información junto con una descripción del producto. En lugar del botón de vista detallada, se utiliza el componente Counter para realizar un seguimiento de la cantidad deseada y agregar el producto al carrito.

Al agregar productos al carrito, aparece un botón que redirige a la página del carrito (ruta: /cart), donde se pueden ver los detalles del producto, la información de la compra y el costo total (suma de los precios individuales de los productos). El carrito también incluye botones para eliminar el producto agregado y ajustar la cantidad utilizando otro componente Counter. La página del carrito presenta dos botones adicionales: uno para vaciar completamente el carrito y otro para proceder al pago (ruta: /checkout). La página de pago presenta un formulario para la información del comprador y un botón de confirmación. En caso de dudas, los usuarios pueden regresar al carrito mediante un enlace proporcionado.

Al confirmar la compra, se muestra una tarjeta de confirmación con el número de pedido y opciones para continuar navegando o ver detalles de la compra (ruta: /purchases). La ruta /purchases incluye un campo de búsqueda mediante un ID de orden, mostrando detalles relevantes y una opción para cancelar la compra. Incluso si el carrito está vacío, los usuarios pueden buscar compras anteriores mediante un botón que  se encuentra en la ruta /cart que redirige a la ruta /purchases.

