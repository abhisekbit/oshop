Shopaholic Architechture

Main Modules
CoreModule
--> Components
--> Navbar
--> Home
--> Login

    CoreModule
        --> Components
            --> Navbar
            --> Home **
            --> Login

    SharedModule
        --> Components
            --> Product Card
            --> Product Quantity
        --> Models
            --> App User
            --> Order
            --> Product
            --> Shopping Cart Item
            --> Shopping Cart
        --> Services
            --> Auth
            --> Admin Guard
            --> User
            --> Category
            --> Product
            --> Shopping Cart
            --> Order

    AdminModule
        --> Components
            --> Product Form
            --> Admin Products
            --> Admin Orders
        --> Services
            --> Admin Auth Guard

    ShoppingModule
        --> Components
            --> Products
            --> Shopping Cart
            --> Shopping Cart Summary
            --> Check Out
            --> Shipping Form
            --> Order Success
            --> My Order

Pages in the application

    Login       --> LoginComponent          --> Login

    Home        --> ProductsComponent       --> products                                    --> product-filter, product-card -> product-quantity

    Admin       --> AdminProductsComponent  --> admin/products                              -->
                --> ProductFormComponent    --> admin/products/new, admin/products/:id      --> product-card -> product-quantity
                --> AdminOrdersComponent    --> admin/orders

    Shopping    --> ProductsComponent       --> products
                --> ShoppingCartComponent   --> shopping-cart                               --> product-quantity
                --> CheckOutComponent       --> check-out                                   --> shipping-form, shopping-cart-summary
                --> OrderSuccessComponent   --> order-success/:id
                --> MyOrdersComponent       --> my/orders
