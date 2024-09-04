interface Product {
    id : number,
    name : string,
    quantity : number,
    price : number,
    category : "Electronics" | "Clothing" | "Food"

}

class Inventory {
    private products: Product[] = [];
    public add_id_for_item():number
    {
        let id=0;
        for(let i=0;i<this.products.length;i++)
        {
            id=Math.max(id,this.products[i].id);
        }

        return id+1;
    }
    public add(new_Product:Product):string
    {
        new_Product.id=this.add_id_for_item();
        this.products.push(new_Product);
        return "Product Added";
    }
    
    public update(new_id:number,update_Product:Partial<Product>) : string
    {
        let flag=-1;
        for(let i=0;i<this.products.length;i++)
        {
                if(this.products[i].id==new_id)
                    {
                        flag=i;
                    }
        }
        if(flag!=-1)
            {
                this.products[flag]={...this.products[flag],...update_Product};
                return "Product Updated";
            }
        else
            {
                return "Product not found";
            }   
    }
    public retrieve_products_by_id(id:number):Product | string
    {
        let flag=-1;
        for(let i=0;i<this.products.length;i++)
        {
                if(this.products[i].id==id)
                    {
                        flag=i;
                    }
        }
        if(flag!=-1)
            {
                return this.products[flag];
            }
        else
            {
                return "Product not found";
            }
    }
    public calculate_total_price():number
    {
        let total=0;
        for(let i=0;i<this.products.length;i++)
        {
            total+=this.products[i].price*this.products[i].quantity;
        }
        return total;
    }

}
function find_max<T = string | number>(obj: T[]): T
 {
    let max: T = obj[0];
    if (typeof obj[0] === "string") {
        for (let i = 1; i < obj.length; i++) {
            if ((obj[i] as string).length > (max as string).length) {
                max = obj[i];
            }
        }
    }
    else
    {
        for (let i = 1; i < obj.length; i++) {
            if (obj[i] > max) {
                max = obj[i];
            }
        }
    }
   
    return max;
}



function fetchProductData(id: number): Promise<Product> {
    return new Promise((resolve, reject) => {
        console.log("A3");
        setTimeout(() => {
            const sampleProduct: Product = {
                id: id,
                name: "ProductA1",
                quantity: 222,
                price: 111,
                category: "Electronics"
            };
            resolve(sampleProduct);
            console.log("A2");
        }, 3000); 
        console.log("A1");
    });
}


async function getProductData(id: number): Promise<void> {
    try {
        const product =  fetchProductData(id);
        console.log("Product fetched:", product);
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}



getProductData(3);
