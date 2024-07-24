
interface Strategy{
    calculateDiscount(priceOriginal: number): number
}

class Context {
    private strategy: Strategy

    constructor(strategy: Strategy){
        this.strategy = strategy
    }

    public setStrategy(strategy: Strategy){
        this.strategy = strategy
    }

    public action(price: number): void {
        console.log(this.strategy.calculateDiscount(price))
    }
}

class BlackFriday implements Strategy{
    calculateDiscount(priceOriginal: number): number {
        return priceOriginal * 0.7 < 1000 ? priceOriginal * 0.7 : priceOriginal * 0.7 - 100
    }
}

class Weekend implements Strategy{
    calculateDiscount(priceOriginal: number): number {
        return priceOriginal * 0.9
    }
}

const test2 = ()=>{
    const typeDiscount = new BlackFriday()
    const originalPrice = 1000
    new Context(typeDiscount).action(originalPrice)
}

test2()

