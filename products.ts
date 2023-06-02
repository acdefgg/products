type IProduct = {
    id: number;
    name: string;
}


class ProductsImpl {

    private products: Array<IProduct> = [];

    addProduct(product: IProduct): boolean {
        const indexOfProduct = this.products.findIndex(item => item.id == product.id)
        if (indexOfProduct >= 0) {
            return false
        }
        this.products.push(product);
        return true;
    }

    deleteProduct(product: IProduct): boolean {
        const indexOfProduct = this.products.findIndex(item => item.id == product.id)
        if (indexOfProduct >= 0) {
            this.products.splice(indexOfProduct, 1);
            return true
        }
        return false;
    }

    getName(id: number): string {
        const product = this.products.find(item => item.id == id);

        if (product) {
            return product.name;
        }

        return "";
    }

    findByName(name: string): number[] {
        const products: IProduct[] = this.products.filter(item => item.name === name);
        const productsID: number[] = products.map(item => item.id)
        return productsID;
    }
}