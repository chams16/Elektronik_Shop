export interface ProductModel{

            id:number
            title:string
            image:string
            description:string
            category:string
            price:number
            qty:number

}

export interface ServeurResponse{
    count:number,
    product:ProductModel[]
}