export interface TokenPrice {
    id: string;
    symbol: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
}

export interface AnalyzeRequest {
    address: string;
    chain: string;
    duration: number;
} 

export interface TokenBalance {
    token_name: string;
    token_symbol: string;
    balance: string;
    token_id?: string;
}