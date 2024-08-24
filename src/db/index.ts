import {
    BankType,
    CardType,
    CurrencyType,
    InventoryType,
    LoanType,
    ServiceType,
    StockType,
    StokeType, TransactionType, UserType
} from "@/interfaces";

// =========================================
// Inventories
// =========================================
export const currencies:CurrencyType[] = [
    {
        "id": "USD",
        "label": "United States Dollar",
        "symbol": "$"
    },
    {
        "id": "GBP",
        "label": "British Pound Sterling",
        "symbol": "£"
    },
    {
        "id": "JPY",
        "label": "Japanese Yen",
        "symbol": "¥"
    },
    {
        "id": "AUD",
        "label": "Australian Dollar",
        "symbol": "A$"
    },
    {
        "id": "CAD",
        "label": "Canadian Dollar",
        "symbol": "C$"
    },
    {
        "id": "CHF",
        "label": "Swiss Franc",
        "symbol": "CHF"
    },
    {
        "id": "CNY",
        "label": "Chinese Yuan",
        "symbol": "¥"
    },
    {
        "id": "INR",
        "label": "Indian Rupee",
        "symbol": "₹"
    },
    {
        "id": "RUB",
        "label": "Russian Ruble",
        "symbol": "₽"
    },
    {
        "id": "BRL",
        "label": "Brazilian Real",
        "symbol": "R$"
    }
]
export const positions:InventoryType[]=[
    {
        "id": 1,
        "label": "Software Engineer"
    },
    {
        "id": 2,
        "label": "Data Scientist"
    },
    {
        "id": 3,
        "label": "Project Manager"
    },
    {
        "id": 4,
        "label": "Product Manager"
    },
    {
        "id": 5,
        "label": "UX Designer"
    },
    {
        "id": 6,
        "label": "DevOps Engineer"
    },
    {
        "id": 7,
        "label": "Marketing Manager"
    },
    {
        "id": 8,
        "label": "Sales Representative"
    },
    {
        "id": 9,
        "label": "Human Resources Manager"
    },
    {
        "id": 10,
        "label": "Financial Analyst"
    },
    {
        "id": 11,
        "label": "Customer Support Specialist"
    },
    {
        "id": 12,
        "label": "Operations Manager"
    },
    {
        "id": 13,
        "label": "Business Analyst"
    },
    {
        "id": 14,
        "label": "Network Administrator"
    },
    {
        "id": 15,
        "label": "Content Writer"
    },
    {
        "id": 16,
        "label": "Graphic Designer"
    },
    {
        "id": 17,
        "label": "Quality Assurance Engineer"
    },
    {
        "id": 18,
        "label": "Cybersecurity Specialist"
    },
    {
        "id": 19,
        "label": "Supply Chain Manager"
    },
    {
        "id": 20,
        "label": "Legal Counsel"
    }
];
export const categories:InventoryType[]=[
    {
        "id": 1,
        "label": "Electronics"
    },
    {
        "id": 2,
        "label": "Home Appliances"
    },
    {
        "id": 3,
        "label": "Groceries"
    },
    {
        "id": 4,
        "label": "Clothing"
    },
    {
        "id": 5,
        "label": "Footwear"
    },
    {
        "id": 6,
        "label": "Toys"
    },
    {
        "id": 7,
        "label": "Furniture"
    },
    {
        "id": 8,
        "label": "Sporting Goods"
    },
    {
        "id": 9,
        "label": "Automotive"
    },
    {
        "id": 10,
        "label": "Health & Beauty"
    },
    {
        "id": 11,
        "label": "Pharmacy"
    },
    {
        "id": 12,
        "label": "Books"
    },
    {
        "id": 13,
        "label": "Jewelry"
    },
    {
        "id": 14,
        "label": "Garden & Outdoor"
    },
    {
        "id": 15,
        "label": "Pet Supplies"
    },
    {
        "id": 16,
        "label": "Stationery"
    },
    {
        "id": 17,
        "label": "Kitchenware"
    },
    {
        "id": 18,
        "label": "Home Decor"
    },
    {
        "id": 19,
        "label": "Baby Products"
    },
    {
        "id": 20,
        "label": "Video Games"
    }
];
export const banks:BankType[]=[
    {
        "id": 1,
        "label": "JPMorgan Chase",
        "abbreviation": "JPM"
    },
    {
        "id": 2,
        "label": "Bank of America",
        "abbreviation": "BOA"
    },
    {
        "id": 3,
        "label": "Wells Fargo",
        "abbreviation": "WFC"
    },
    {
        "id": 4,
        "label": "Citibank",
        "abbreviation": "CIT"
    },
    {
        "id": 5,
        "label": "Goldman Sachs",
        "abbreviation": "GS"
    },
    {
        "id": 6,
        "label": "Morgan Stanley",
        "abbreviation": "MS"
    },
    {
        "id": 7,
        "label": "HSBC",
        "abbreviation": "HSBC"
    },
    {
        "id": 8,
        "label": "Barclays",
        "abbreviation": "BAR"
    },
    {
        "id": 9,
        "label": "Deutsche Bank",
        "abbreviation": "DB"
    },
    {
        "id": 10,
        "label": "UBS",
        "abbreviation": "UBS"
    },
    {
        "id": 11,
        "label": "Credit Suisse",
        "abbreviation": "CS"
    },
    {
        "id": 12,
        "label": "BNP Paribas",
        "abbreviation": "BNP"
    },
    {
        "id": 13,
        "label": "Santander",
        "abbreviation": "SAN"
    },
    {
        "id": 14,
        "label": "Royal Bank of Canada",
        "abbreviation": "RBC"
    },
    {
        "id": 15,
        "label": "ING Group",
        "abbreviation": "ING"
    },
    {
        "id": 16,
        "label": "TD Bank",
        "abbreviation": "TD"
    },
    {
        "id": 17,
        "label": "Mizuho Bank",
        "abbreviation": "MH"
    },
    {
        "id": 18,
        "label": "Sumitomo Mitsui Banking Corporation",
        "abbreviation": "SMB"
    },
    {
        "id": 19,
        "label": "Standard Chartered",
        "abbreviation": "SCB"
    },
    {
        "id": 20,
        "label": "Societe Generale",
        "abbreviation": "SG"
    }
];
export const creditCards:InventoryType[]=[
    {
        "id": 1,
        "label": "Visa"
    },
    {
        "id": 2,
        "label": "Mastercard"
    },
    {
        "id": 3,
        "label": "American Express"
    },
    {
        "id": 4,
        "label": "Discover"
    },
    {
        "id": 5,
        "label": "Diners Club"
    },
    {
        "id": 6,
        "label": "JCB"
    },
    {
        "id": 7,
        "label": "UnionPay"
    },
    {
        "id": 8,
        "label": "Maestro"
    },
    {
        "id": 9,
        "label": "RuPay"
    },
    {
        "id": 10,
        "label": "Verve"
    }
]
export const services:ServiceType[]=[
    {
        "id": 1,
        "label": "Insurance",
        "description": "Banks offer various types of insurance products including life, health, and property insurance. These products help protect against financial losses and provide peace of mind. Customers can choose coverage options that best fit their needs."
    },
    {
        "id": 2,
        "label": "Online Banking",
        "description": "Online banking allows customers to manage their accounts and conduct transactions via the internet. Services include checking account balances, transferring funds, and paying bills. It offers convenience and 24/7 access to financial services."
    },
    {
        "id": 3,
        "label": "Loans",
        "description": "Banks provide various loan options such as personal, auto, and home loans. These loans come with different terms and interest rates to meet the financial needs of customers. Loan approval depends on creditworthiness and financial status."
    },
    {
        "id": 4,
        "label": "Savings Accounts",
        "description": "Savings accounts offer a safe place to deposit money and earn interest over time. They typically have lower interest rates compared to investment accounts but provide liquidity and security. Ideal for building an emergency fund or saving for future goals."
    },
    {
        "id": 5,
        "label": "Credit Cards",
        "description": "Credit cards allow customers to borrow money up to a certain limit to make purchases or withdraw cash. They come with various benefits such as rewards, cashback, and travel perks. Responsible usage can help build a positive credit history."
    },
    {
        "id": 6,
        "label": "Wealth Management",
        "description": "Wealth management services assist clients in managing their investments, retirement planning, and estate planning. These services are tailored to high-net-worth individuals looking to grow and preserve their wealth. Professional advisors offer personalized financial strategies."
    },
    {
        "id": 7,
        "label": "Investment Services",
        "description": "Investment services include advisory and management of various investment products such as stocks, bonds, and mutual funds. Banks provide tools and expertise to help customers achieve their financial goals. Services may also include portfolio management and financial planning."
    },
    {
        "id": 8,
        "label": "Mortgages",
        "description": "Mortgages are loans specifically for purchasing or refinancing real estate. They typically have longer terms and lower interest rates compared to other types of loans. Banks offer various mortgage products to meet different home-buying needs."
    },
    {
        "id": 9,
        "label": "Foreign Exchange",
        "description": "Foreign exchange services facilitate the conversion of one currency into another for international travel or trade. Banks offer competitive exchange rates and assist with currency exchange needs. This service is essential for global business transactions and travel."
    },
    {
        "id": 10,
        "label": "Safety Deposit Boxes",
        "description": "Safety deposit boxes provide secure storage for valuable items such as documents, jewelry, and collectibles. Located in a bank's vault, they offer high-level protection against theft or loss. Customers can access their boxes during bank hours for added security."
    },]
export const stocks:StokeType[]=[
    {
        "id": 1,
        "label": "Microsoft Corporation",
        "amount": 300,
        "return": 5.2,
        type:StockType.positive
    },
    {
        "id": 2,
        "label": "Apple Inc.",
        "amount": 150,
        "return": 7.8,
        type:StockType.positive
    },
    {
        "id": 3,
        "label": "Amazon.com Inc.",
        "amount": 3300,
        "return": -3.4,
        type:StockType.negative
    },
    {
        "id": 4,
        "label": "Alphabet Inc.",
        "amount": 2700,
        "return": 4.1,
        type:StockType.positive
    },
    {
        "id": 5,
        "label": "Tesla Inc.",
        "amount": 700,
        "return": 8.9,
        type:StockType.positive
    },
    {
        "id": 6,
        "label": "Meta Platforms Inc.",
        "amount": 320,
        "return": -1.5,
        type:StockType.negative
    },
    {
        "id": 7,
        "label": "NVIDIA Corporation",
        "amount": 500,
        "return": 12.3,
        type:StockType.positive
    },
    {
        "id": 8,
        "label": "Berkshire Hathaway Inc.",
        "amount": 310,
        "return": 2.8,
        type:StockType.positive
    },
    {
        "id": 9,
        "label": "Johnson & Johnson",
        "amount": 165,
        "return": 6.0,
        type:StockType.positive
    },
    {
        "id": 10,
        "label": "Procter & Gamble Co.",
        "amount": 140,
        "return": -2.2,
        type:StockType.negative
    }
]
export const loans:LoanType[]=[
    {
        "total": 100000,
        "paid": 25000,
        "duration": 12,
        "interestRate": 5.0,
        "installment": 8333
    },
    {
        "total": 50000,
        "paid": 15000,
        "duration": 6,
        "interestRate": 4.5,
        "installment": 8333
    },
    {
        "total": 200000,
        "paid": 50000,
        "duration": 24,
        "interestRate": 6.0,
        "installment": 8333
    },
    {
        "total": 75000,
        "paid": 20000,
        "duration": 18,
        "interestRate": 7.0,
        "installment": 4167
    },
    {
        "total": 120000,
        "paid": 30000,
        "duration": 24,
        "interestRate": 5.5,
        "installment": 5000
    },
    {
        "total": 250000,
        "paid": 100000,
        "duration": 36,
        "interestRate": 8.0,
        "installment": 4167
    },
    {
        "total": 60000,
        "paid": 10000,
        "duration": 12,
        "interestRate": 4.0,
        "installment": 5000
    },
    {
        "total": 80000,
        "paid": 20000,
        "duration": 24,
        "interestRate": 6.5,
        "installment": 3333
    },
    {
        "total": 180000,
        "paid": 50000,
        "duration": 30,
        "interestRate": 7.5,
        "installment": 6000
    },
    {
        "total": 90000,
        "paid": 25000,
        "duration": 15,
        "interestRate": 5.0,
        "installment": 6000
    },
    {
        "total": 300000,
        "paid": 100000,
        "duration": 36,
        "interestRate": 6.5,
        "installment": 8333
    },
    {
        "total": 150000,
        "paid": 50000,
        "duration": 24,
        "interestRate": 7.0,
        "installment": 6250
    },
    {
        "total": 40000,
        "paid": 8000,
        "duration": 12,
        "interestRate": 3.5,
        "installment": 3333
    },
    {
        "total": 70000,
        "paid": 20000,
        "duration": 18,
        "interestRate": 5.5,
        "installment": 3889
    },
    {
        "total": 130000,
        "paid": 30000,
        "duration": 24,
        "interestRate": 6.0,
        "installment": 5417
    },
    {
        "total": 220000,
        "paid": 60000,
        "duration": 36,
        "interestRate": 7.0,
        "installment": 6667
    },
    {
        "total": 95000,
        "paid": 25000,
        "duration": 15,
        "interestRate": 4.5,
        "installment": 6333
    },
    {
        "total": 170000,
        "paid": 50000,
        "duration": 30,
        "interestRate": 5.0,
        "installment": 5667
    },
    {
        "total": 50000,
        "paid": 10000,
        "duration": 12,
        "interestRate": 4.0,
        "installment": 4167
    },
    {
        "total": 250000,
        "paid": 75000,
        "duration": 36,
        "interestRate": 8.5,
        "installment": 6944
    }
]


// =========================================
// Others
// =========================================
export const cards : CardType[]=[
    {
        "cardNumber": "1234-5678-9012-3456",
        "balance": 1500,
        "holder": 5,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-01-15T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4567",
        "balance": 3200,
        "holder": 12,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-02-20T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5678",
        "balance": 2500,
        "holder": 8,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-03-10T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6789",
        "balance": 4200,
        "holder": 15,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-04-05T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7890",
        "balance": 1800,
        "holder": 20,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8901",
        "balance": 3000,
        "holder": 6,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9012",
        "balance": 2200,
        "holder": 10,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-07-30T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0123",
        "balance": 2900,
        "holder": 22,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-08-10T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1234",
        "balance": 1600,
        "holder": 18,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-09-25T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2345",
        "balance": 3500,
        "holder": 4,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-10-20T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3457",
        "balance": 2000,
        "holder": 14,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-11-15T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4568",
        "balance": 1700,
        "holder": 3,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5679",
        "balance": 4300,
        "holder": 9,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-01-10T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6780",
        "balance": 1100,
        "holder": 25,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-02-15T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7891",
        "balance": 3200,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-03-30T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8902",
        "balance": 2500,
        "holder": 13,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-04-20T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9013",
        "balance": 3700,
        "holder": 19,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0124",
        "balance": 2100,
        "holder": 21,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-06-10T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1235",
        "balance": 3000,
        "holder": 30,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2346",
        "balance": 1400,
        "holder": 2,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-08-20T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3458",
        "balance": 2700,
        "holder": 17,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-09-10T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4569",
        "balance": 4000,
        "holder": 11,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-10-05T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5670",
        "balance": 1500,
        "holder": 26,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-11-30T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6781",
        "balance": 2800,
        "holder": 23,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-12-10T00:00:00Z"
    },
    {
            "cardNumber": "5678-9012-3456-7892",
            "balance": 3500,
            "holder": 8,
            "type": 5,
            "bank": 5,
            "expireDate": "2024-01-30T00:00:00Z"
        },
    {
        "cardNumber": "6789-0123-4567-8903",
        "balance": 2700,
        "holder": 12,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9014",
        "balance": 3200,
        "holder": 18,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-03-20T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0125",
        "balance": 1800,
        "holder": 4,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-04-10T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1236",
        "balance": 4500,
        "holder": 20,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-05-15T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2347",
        "balance": 2500,
        "holder": 6,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-06-20T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3459",
        "balance": 1500,
        "holder": 15,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-07-25T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4560",
        "balance": 3000,
        "holder": 9,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-08-30T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5671",
        "balance": 2000,
        "holder": 23,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-09-15T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6782",
        "balance": 3200,
        "holder": 30,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-10-20T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7893",
        "balance": 1800,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-11-25T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8904",
        "balance": 2900,
        "holder": 13,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-12-15T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9015",
        "balance": 2200,
        "holder": 5,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-01-10T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0126",
        "balance": 3200,
        "holder": 8,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-02-05T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1237",
        "balance": 1500,
        "holder": 10,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2348",
        "balance": 2500,
        "holder": 19,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-04-30T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3460",
        "balance": 3100,
        "holder": 2,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4561",
        "balance": 2200,
        "holder": 14,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-06-10T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5672",
        "balance": 4000,
        "holder": 21,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-07-05T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6783",
        "balance": 1700,
        "holder": 11,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-08-15T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7894",
        "balance": 3200,
        "holder": 17,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-09-20T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8905",
        "balance": 1800,
        "holder": 6,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-10-30T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9016",
        "balance": 2900,
        "holder": 8,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-11-10T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0127",
        "balance": 2000,
        "holder": 23,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
            "cardNumber": "9012-3456-7890-1238",
            "balance": 3500,
            "holder": 12,
            "type": 9,
            "bank": 9,
            "expireDate": "2024-01-20T00:00:00Z"
        },
    {
        "cardNumber": "0123-4567-8901-2349",
        "balance": 1800,
        "holder": 3,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-02-10T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3461",
        "balance": 2700,
        "holder": 16,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-03-25T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4562",
        "balance": 4000,
        "holder": 22,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-04-15T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5673",
        "balance": 1500,
        "holder": 9,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-05-30T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6784",
        "balance": 3200,
        "holder": 20,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7895",
        "balance": 2500,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-07-10T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8906",
        "balance": 3000,
        "holder": 11,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-08-25T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9017",
        "balance": 2200,
        "holder": 18,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-09-20T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0128",
        "balance": 3500,
        "holder": 24,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-10-05T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1239",
        "balance": 1400,
        "holder": 4,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-11-15T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2350",
        "balance": 3200,
        "holder": 19,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-12-30T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3462",
        "balance": 2000,
        "holder": 6,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-01-05T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4563",
        "balance": 3100,
        "holder": 12,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5674",
        "balance": 1800,
        "holder": 15,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6785",
        "balance": 2400,
        "holder": 20,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-04-30T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7896",
        "balance": 1500,
        "holder": 8,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-05-10T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8907",
        "balance": 3100,
        "holder": 11,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-06-20T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9018",
        "balance": 2500,
        "holder": 14,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0129",
        "balance": 3000,
        "holder": 16,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-08-05T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1240",
        "balance": 2000,
        "holder": 21,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-09-30T00:00:00Z"
    },
    {
            "cardNumber": "0123-4567-8901-2351",
            "balance": 3500,
            "holder": 13,
            "type": 10,
            "bank": 10,
            "expireDate": "2024-01-20T00:00:00Z"
        },
    {
        "cardNumber": "1234-5678-9012-3463",
        "balance": 2000,
        "holder": 17,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4564",
        "balance": 2700,
        "holder": 4,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5675",
        "balance": 1800,
        "holder": 19,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-04-20T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6786",
        "balance": 3100,
        "holder": 6,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7897",
        "balance": 2500,
        "holder": 12,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-06-30T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8908",
        "balance": 3200,
        "holder": 8,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9019",
        "balance": 2200,
        "holder": 20,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-08-25T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0130",
        "balance": 1500,
        "holder": 25,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-09-10T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1241",
        "balance": 3500,
        "holder": 10,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-10-15T00:00:00Z"
    },
    {
        "cardNumber": "0123-4567-8901-2352",
        "balance": 1800,
        "holder": 7,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-11-20T00:00:00Z"
    },
    {
        "cardNumber": "1234-5678-9012-3464",
        "balance": 2700,
        "holder": 18,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
        "cardNumber": "2345-6789-0123-4565",
        "balance": 3200,
        "holder": 3,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-01-15T00:00:00Z"
    },
    {
        "cardNumber": "3456-7890-1234-5676",
        "balance": 1500,
        "holder": 11,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-02-20T00:00:00Z"
    },
    {
        "cardNumber": "4567-8901-2345-6787",
        "balance": 2900,
        "holder": 22,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-03-25T00:00:00Z"
    },
    {
        "cardNumber": "5678-9012-3456-7898",
        "balance": 3200,
        "holder": 5,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-04-10T00:00:00Z"
    },
    {
        "cardNumber": "6789-0123-4567-8909",
        "balance": 2000,
        "holder": 16,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-05-20T00:00:00Z"
    },
    {
        "cardNumber": "7890-1234-5678-9020",
        "balance": 2700,
        "holder": 19,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "cardNumber": "8901-2345-6789-0131",
        "balance": 1800,
        "holder": 8,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-07-30T00:00:00Z"
    },
    {
        "cardNumber": "9012-3456-7890-1242",
        "balance": 3500,
        "holder": 14,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-08-20T00:00:00Z"
    }
]
export const users:UserType[]=[
    {
        "id": 1,
        "avatar": "",
        "fullName": "Alice Johnson",
        "position": 2,
        "cards": ["1234-5678-9012-3456", "2345-6789-0123-4567"]
    },
    {
        "id": 2,
        "avatar": "",
        "fullName": "Bob Smith",
        "position": 5,
        "cards": ["3456-7890-1234-5678", "4567-8901-2345-6789", "5678-9012-3456-7890"]
    },
    {
        "id": 3,
        "avatar": "",
        "fullName": "Carol Williams",
        "position": 8,
        "cards": ["6789-0123-4567-8901", "7890-1234-5678-9012"]
    },
    {
        "id": 4,
        "avatar": "",
        "fullName": "David Brown",
        "position": 10,
        "cards": ["8901-2345-6789-0123"]
    },
    {
        "id": 5,
        "avatar": "",
        "fullName": "Eva Davis",
        "position": 12,
        "cards": ["9012-3456-7890-1234", "0123-4567-8901-2345", "1234-5678-9012-3457"]
    },
    {
        "id": 6,
        "avatar": "",
        "fullName": "Frank Miller",
        "position": 3,
        "cards": ["2345-6789-0123-4568"]
    },
    {
        "id": 7,
        "avatar": "",
        "fullName": "Grace Wilson",
        "position": 6,
        "cards": ["3456-7890-1234-5679", "4567-8901-2345-6790", "5678-9012-3456-7891"]
    },
    {
        "id": 8,
        "avatar": "",
        "fullName": "Henry Moore",
        "position": 15,
        "cards": ["6789-0123-4567-8902"]
    },
    {
        "id": 9,
        "avatar": "",
        "fullName": "Ivy Taylor",
        "position": 7,
        "cards": ["7890-1234-5678-9013", "8901-2345-6789-0124", "9012-3456-7890-1235"]
    },
    {
        "id": 10,
        "avatar": "",
        "fullName": "Jack Anderson",
        "position": 18,
        "cards": ["0123-4567-8901-2346", "1234-5678-9012-3458"]
    },
    {
        "id": 11,
        "avatar": "",
        "fullName": "Kara Thomas",
        "position": 4,
        "cards": ["2345-6789-0123-4569", "3456-7890-1234-5680"]
    },
    {
        "id": 12,
        "avatar": "",
        "fullName": "Liam Jackson",
        "position": 11,
        "cards": ["4567-8901-2345-6791", "5678-9012-3456-7892"]
    },
    {
        "id": 13,
        "avatar": "",
        "fullName": "Mia White",
        "position": 14,
        "cards": ["6789-0123-4567-8903", "7890-1234-5678-9014", "8901-2345-6789-0125"]
    },
    {
        "id": 14,
        "avatar": "",
        "fullName": "Noah Harris",
        "position": 20,
        "cards": ["9012-3456-7890-1236", "0123-4567-8901-2347"]
    },
    {
        "id": 15,
        "avatar": "",
        "fullName": "Olivia Clark",
        "position": 9,
        "cards": ["1234-5678-9012-3459"]
    },
    {
        "id": 16,
        "avatar": "",
        "fullName": "Paul Lewis",
        "position": 13,
        "cards": ["2345-6789-0123-4570", "3456-7890-1234-5681"]
    },
    {
        "id": 17,
        "avatar": "",
        "fullName": "Quinn Robinson",
        "position": 17,
        "cards": ["4567-8901-2345-6792", "5678-9012-3456-7893"]
    },
    {
        "id": 18,
        "avatar": "",
        "fullName": "Rachel Walker",
        "position": 8,
        "cards": ["6789-0123-4567-8904", "7890-1234-5678-9015"]
    },
    {
        "id": 19,
        "avatar": "",
        "fullName": "Samuel Young",
        "position": 16,
        "cards": ["8901-2345-6789-0126"]
    },
    {
        "id": 20,
        "avatar": "",
        "fullName": "Tina Allen",
        "position": 19,
        "cards": ["9012-3456-7890-1237", "0123-4567-8901-2348"]
    },
    {
        "id": 21,
        "avatar": "",
        "fullName": "Uma King",
        "position": 1,
        "cards": ["1234-5678-9012-3460"]
    },
    {
        "id": 22,
        "avatar": "",
        "fullName": "Victor Adams",
        "position": 5,
        "cards": ["2345-6789-0123-4571", "3456-7890-1234-5682"]
    },
    {
        "id": 23,
        "avatar": "",
        "fullName": "Wendy Scott",
        "position": 6,
        "cards": ["4567-8901-2345-6793", "5678-9012-3456-7894"]
    },
    {
        "id": 24,
        "avatar": "",
        "fullName": "Xander Bell",
        "position": 11,
        "cards": ["6789-0123-4567-8905", "7890-1234-5678-9016"]
    },
    {
        "id": 25,
        "avatar": "",
        "fullName": "Yara Green",
        "position": 14,
        "cards": ["8901-2345-6789-0127", "9012-3456-7890-1238"]
    },
    {
        "id": 26,
        "avatar": "",
        "fullName": "Zachary Carter",
        "position": 20,
        "cards": ["0123-4567-8901-2350"]
    },
    {
        "id": 27,
        "avatar": "",
        "fullName": "Anna Walker",
        "position": 2,
        "cards": ["1234-5678-9012-3461", "2345-6789-0123-4572"]
    },
    {
        "id": 28,
        "avatar": "",
        "fullName": "Ben Hall",
        "position": 7,
        "cards": ["3456-7890-1234-5683", "4567-8901-2345-6794"]
    },
    {
        "id": 29,
        "avatar": "",
        "fullName": "Cleo Murphy",
        "position": 13,
        "cards": ["5678-9012-3456-7895", "6789-0123-4567-8906"]
    },
    {
        "id": 30,
        "avatar": "",
        "fullName": "Derek Long",
        "position": 19,
        "cards": ["7890-1234-5678-9017", "8901-2345-6789-0128"]
    }
]
export const transactions:TransactionType[]=[
    {
        "id": "txn001",
        "label": "Finance",
        "date": "2024-03-05T14:23:47Z",
        "amount": 487.23,
        "type": 1,
        "method": 0,
        "description": "Payment received",
        "category": 4,
        "status": 0,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn002",
        "label": "Health",
        "date": "2024-01-20T09:12:30Z",
        "amount": 152.75,
        "type": 0,
        "method": 1,
        "description": "Medicine purchase",
        "category": 2,
        "status": 1,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn003",
        "label": "Beauty",
        "date": "2024-04-14T16:45:12Z",
        "amount": 87.99,
        "type": 0,
        "method": 0,
        "description": "Salon payment",
        "category": 3,
        "status": 2,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn004",
        "label": "Finance",
        "date": "2024-05-22T11:17:05Z",
        "amount": 2450.00,
        "type": 1,
        "method": 1,
        "description": "Salary deposit",
        "category": 1,
        "status": 0,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn005",
        "label": "Shopping",
        "date": "2024-06-01T08:34:12Z",
        "amount": 324.56,
        "type": 0,
        "method": 0,
        "description": "Online purchase",
        "category": 5,
        "status": 1,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn006",
        "label": "Health",
        "date": "2024-07-15T10:45:33Z",
        "amount": 58.22,
        "type": 1,
        "method": 1,
        "description": "Doctor's fee",
        "category": 6,
        "status": 2,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn007",
        "label": "Beauty",
        "date": "2024-02-25T14:20:44Z",
        "amount": 129.99,
        "type": 0,
        "method": 0,
        "description": "Cosmetics purchase",
        "category": 7,
        "status": 0,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn008",
        "label": "Finance",
        "date": "2024-03-11T17:55:09Z",
        "amount": 800.00,
        "type": 1,
        "method": 1,
        "description": "Loan payment",
        "category": 8,
        "status": 1,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn009",
        "label": "Shopping",
        "date": "2024-04-08T13:47:22Z",
        "amount": 99.99,
        "type": 0,
        "method": 0,
        "description": "Gift purchase",
        "category": 9,
        "status": 2,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn010",
        "label": "Finance",
        "date": "2024-06-27T15:23:36Z",
        "amount": 1500.00,
        "type": 1,
        "method": 1,
        "description": "Transfer",
        "category": 10,
        "status": 0,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn011",
        "label": "Health",
        "date": "2024-05-15T09:32:11Z",
        "amount": 350.00,
        "type": 0,
        "method": 0,
        "description": "Health checkup",
        "category": 11,
        "status": 1,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn012",
        "label": "Beauty",
        "date": "2024-03-03T11:12:09Z",
        "amount": 75.75,
        "type": 0,
        "method": 0,
        "description": "Spa treatment",
        "category": 12,
        "status": 2,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn013",
        "label": "Shopping",
        "date": "2024-04-17T14:45:22Z",
        "amount": 49.99,
        "type": 1,
        "method": 1,
        "description": "Grocery shopping",
        "category": 13,
        "status": 0,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn014",
        "label": "Finance",
        "date": "2024-07-10T10:05:47Z",
        "amount": 200.00,
        "type": 1,
        "method": 1,
        "description": "Utility bill",
        "category": 14,
        "status": 1,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn015",
        "label": "Health",
        "date": "2024-02-21T09:12:30Z",
        "amount": 120.00,
        "type": 0,
        "method": 0,
        "description": "Pharmacy payment",
        "category": 15,
        "status": 2,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn016",
        "label": "Beauty",
        "date": "2024-05-19T16:45:12Z",
        "amount": 60.00,
        "type": 0,
        "method": 1,
        "description": "Makeup products",
        "category": 16,
        "status": 0,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn017",
        "label": "Finance",
        "date": "2024-04-22T11:17:05Z",
        "amount": 1300.00,
        "type": 1,
        "method": 0,
        "description": "Mortgage payment",
        "category": 17,
        "status": 1,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn018",
        "label": "Shopping",
        "date": "2024-03-12T08:34:12Z",
        "amount": 280.45,
        "type": 0,
        "method": 1,
        "description": "Clothes purchase",
        "category": 18,
        "status": 2,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn018",
        "label": "Shopping",
        "date": "2024-03-12T08:34:12Z",
        "amount": 280.45,
        "type": 0,
        "method": 1,
        "description": "Clothes purchase",
        "category": 18,
        "status": 2,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn019",
        "label": "Health",
        "date": "2024-01-09T09:21:34Z",
        "amount": 75.00,
        "type": 0,
        "method": 0,
        "description": "Consultation fee",
        "category": 19,
        "status": 0,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn020",
        "label": "Finance",
        "date": "2024-05-27T15:12:09Z",
        "amount": 500.00,
        "type": 1,
        "method": 1,
        "description": "Investment",
        "category": 20,
        "status": 1,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn021",
        "label": "Beauty",
        "date": "2024-06-01T10:22:11Z",
        "amount": 299.99,
        "type": 0,
        "method": 0,
        "description": "Hair products",
        "category": 3,
        "status": 2,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn022",
        "label": "Shopping",
        "date": "2024-04-10T13:45:23Z",
        "amount": 420.85,
        "type": 1,
        "method": 1,
        "description": "Electronics purchase",
        "category": 5,
        "status": 0,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn023",
        "label": "Finance",
        "date": "2024-05-30T14:52:19Z",
        "amount": 1100.00,
        "type": 1,
        "method": 0,
        "description": "Tax payment",
        "category": 1,
        "status": 1,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn024",
        "label": "Health",
        "date": "2024-02-18T09:43:56Z",
        "amount": 55.50,
        "type": 0,
        "method": 1,
        "description": "Clinic visit",
        "category": 2,
        "status": 2,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn025",
        "label": "Beauty",
        "date": "2024-07-03T11:25:47Z",
        "amount": 89.00,
        "type": 0,
        "method": 1,
        "description": "Skincare products",
        "category": 7,
        "status": 0,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn026",
        "label": "Shopping",
        "date": "2024-03-16T12:30:12Z",
        "amount": 150.00,
        "type": 1,
        "method": 1,
        "description": "Bookstore",
        "category": 9,
        "status": 1,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn027",
        "label": "Finance",
        "date": "2024-01-28T08:45:00Z",
        "amount": 3000.00,
        "type": 1,
        "method": 0,
        "description": "Property tax",
        "category": 10,
        "status": 2,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn028",
        "label": "Health",
        "date": "2024-06-22T16:35:24Z",
        "amount": 140.60,
        "type": 0,
        "method": 1,
        "description": "Prescription",
        "category": 11,
        "status": 0,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn029",
        "label": "Beauty",
        "date": "2024-02-11T14:42:56Z",
        "amount": 45.99,
        "type": 0,
        "method": 0,
        "description": "Nail polish",
        "category": 16,
        "status": 1,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn030",
        "label": "Finance",
        "date": "2024-05-18T13:23:19Z",
        "amount": 900.00,
        "type": 1,
        "method": 0,
        "description": "Insurance premium",
        "category": 14,
        "status": 2,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn031",
        "label": "Shopping",
        "date": "2024-04-02T09:11:37Z",
        "amount": 150.00,
        "type": 0,
        "method": 1,
        "description": "Clothing",
        "category": 15,
        "status": 0,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn032",
        "label": "Health",
        "date": "2024-06-15T14:55:23Z",
        "amount": 75.75,
        "type": 0,
        "method": 0,
        "description": "Dental check",
        "category": 17,
        "status": 1,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn033",
        "label": "Beauty",
        "date": "2024-07-09T10:43:01Z",
        "amount": 60.00,
        "type": 0,
        "method": 1,
        "description": "Haircut",
        "category": 18,
        "status": 2,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn034",
        "label": "Finance",
        "date": "2024-03-01T15:45:55Z",
        "amount": 200.00,
        "type": 1,
        "method": 0,
        "description": "Loan interest",
        "category": 8,
        "status": 0,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn035",
        "label": "Shopping",
        "date": "2024-05-05T14:32:14Z",
        "amount": 120.25,
        "type": 0,
        "method": 1,
        "description": "Gadgets",
        "category": 13,
        "status": 1,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn036",
        "label": "Health",
        "date": "2024-02-27T09:45:10Z",
        "amount": 90.00,
        "type": 1,
        "method": 0,
        "description": "Yoga class",
        "category": 19,
        "status": 2,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn037",
        "label": "Beauty",
        "date": "2024-06-11T11:15:30Z",
        "amount": 49.99,
        "type": 0,
        "method": 0,
        "description": "Facial treatment",
        "category": 12,
        "status": 0,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn038",
        "label": "Finance",
        "date": "2024-04-14T10:22:12Z",
        "amount": 600.00,
        "type": 1,
        "method": 1,
        "description": "Rent payment",
        "category": 6,
        "status": 1,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn039",
        "label": "Shopping",
        "date": "2024-07-04T14:55:12Z",
        "amount": 250.00,
        "type": 0,
        "method": 1,
        "description": "Sports gear",
        "category": 11,
        "status": 2,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn040",
        "label": "Health",
        "date": "2024-03-08T09:30:47Z",
        "amount": 150.00,
        "type": 1,
        "method": 0,
        "description": "Physiotherapy",
        "category": 10,
        "status": 0,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn041",
        "label": "Beauty",
        "date": "2024-02-14T11:12:34Z",
        "amount": 35.99,
        "type": 0,
        "method": 1,
        "description": "Perfume",
        "category": 3,
        "status": 2,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn042",
        "label": "Finance",
        "date": "2024-01-10T10:30:00Z",
        "amount": 2200.00,
        "type": 1,
        "method": 0,
        "description": "Mortgage payment",
        "category": 14,
        "status": 1,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn043",
        "label": "Shopping",
        "date": "2024-04-25T09:45:37Z",
        "amount": 75.00,
        "type": 0,
        "method": 1,
        "description": "Grocery shopping",
        "category": 16,
        "status": 0,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn044",
        "label": "Health",
        "date": "2024-05-20T13:20:11Z",
        "amount": 60.50,
        "type": 1,
        "method": 0,
        "description": "Pharmacy",
        "category": 9,
        "status": 2,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn045",
        "label": "Beauty",
        "date": "2024-07-12T15:22:01Z",
        "amount": 110.00,
        "type": 0,
        "method": 1,
        "description": "Spa treatment",
        "category": 18,
        "status": 0,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn046",
        "label": "Finance",
        "date": "2024-03-21T10:14:23Z",
        "amount": 400.00,
        "type": 1,
        "method": 0,
        "description": "Credit card bill",
        "category": 15,
        "status": 1,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn047",
        "label": "Shopping",
        "date": "2024-06-09T16:35:12Z",
        "amount": 250.00,
        "type": 0,
        "method": 1,
        "description": "Online shopping",
        "category": 19,
        "status": 2,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn048",
        "label": "Health",
        "date": "2024-02-19T11:12:14Z",
        "amount": 85.75,
        "type": 0,
        "method": 0,
        "description": "Optometrist visit",
        "category": 13,
        "status": 0,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn049",
        "label": "Beauty",
        "date": "2024-04-03T09:41:59Z",
        "amount": 49.50,
        "type": 0,
        "method": 1,
        "description": "Makeup purchase",
        "category": 2,
        "status": 1,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn050",
        "label": "Finance",
        "date": "2024-05-29T08:30:01Z",
        "amount": 500.00,
        "type": 1,
        "method": 0,
        "description": "Savings deposit",
        "category": 5,
        "status": 2,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn051",
        "label": "Shopping",
        "date": "2024-06-14T14:22:14Z",
        "amount": 300.00,
        "type": 0,
        "method": 1,
        "description": "Furniture",
        "category": 17,
        "status": 0,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn052",
        "label": "Health",
        "date": "2024-07-02T12:45:19Z",
        "amount": 120.00,
        "type": 0,
        "method": 0,
        "description": "Chiropractor visit",
        "category": 20,
        "status": 1,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn053",
        "label": "Beauty",
        "date": "2024-01-18T10:35:23Z",
        "amount": 59.99,
        "type": 0,
        "method": 1,
        "description": "Body lotion",
        "category": 14,
        "status": 2,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn054",
        "label": "Finance",
        "date": "2024-03-27T13:30:15Z",
        "amount": 800.00,
        "type": 1,
        "method": 0,
        "description": "Loan payment",
        "category": 6,
        "status": 0,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn055",
        "label": "Shopping",
        "date": "2024-02-08T15:42:47Z",
        "amount": 200.00,
        "type": 0,
        "method": 1,
        "description": "Appliances",
        "category": 10,
        "status": 1,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn056",
        "label": "Health",
        "date": "2024-04-20T11:11:34Z",
        "amount": 95.25,
        "type": 0,
        "method": 0,
        "description": "Massage therapy",
        "category": 4,
        "status": 2,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn057",
        "label": "Beauty",
        "date": "2024-05-13T09:54:12Z",
        "amount": 69.99,
        "type": 0,
        "method": 1,
        "description": "Haircare",
        "category": 12,
        "status": 0,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn058",
        "label": "Finance",
        "date": "2024-06-26T08:45:00Z",
        "amount": 150.00,
        "type": 1,
        "method": 0,
        "description": "Utility payment",
        "category": 7,
        "status": 1,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn059",
        "label": "Shopping",
        "date": "2024-01-22T16:25:10Z",
        "amount": 350.00,
        "type": 0,
        "method": 1,
        "description": "Garden tools",
        "category": 1,
        "status": 2,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn060",
        "label": "Health",
        "date": "2024-03-12T10:30:45Z",
        "amount": 65.00,
        "type": 0,
        "method": 0,
        "description": "Health check",
        "category": 8,
        "status": 0,
        "destinationCardNumber": ""
    },
    {
        "id": "txn061",
        "label": "Beauty",
        "date": "2024-07-21T09:45:32Z",
        "amount": 79.99,
        "type": 0,
        "method": 1,
        "description": "Skincare",
        "category": 9,
        "status": 1,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn062",
        "label": "Finance",
        "date": "2024-06-07T11:22:56Z",
        "amount": 1400.00,
        "type": 1,
        "method": 0,
        "description": "Insurance premium",
        "category": 10,
        "status": 2,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn063",
        "label": "Shopping",
        "date": "2024-01-19T14:30:00Z",
        "amount": 275.00,
        "type": 0,
        "method": 1,
        "description": "Clothing",
        "category": 11,
        "status": 0,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn064",
        "label": "Health",
        "date": "2024-02-23T12:14:27Z",
        "amount": 88.50,
        "type": 1,
        "method": 0,
        "description": "Dental visit",
        "category": 12,
        "status": 1,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn065",
        "label": "Beauty",
        "date": "2024-05-06T16:12:34Z",
        "amount": 45.00,
        "type": 0,
        "method": 1,
        "description": "Nail salon",
        "category": 13,
        "status": 2,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn066",
        "label": "Finance",
        "date": "2024-03-30T09:00:00Z",
        "amount": 600.00,
        "type": 1,
        "method": 0,
        "description": "Tax payment",
        "category": 14,
        "status": 0,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn067",
        "label": "Shopping",
        "date": "2024-04-17T14:22:43Z",
        "amount": 320.00,
        "type": 0,
        "method": 1,
        "description": "Electronics",
        "category": 15,
        "status": 1,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn068",
        "label": "Health",
        "date": "2024-06-13T11:11:15Z",
        "amount": 52.75,
        "type": 1,
        "method": 0,
        "description": "Physiotherapy",
        "category": 16,
        "status": 2,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn069",
        "label": "Beauty",
        "date": "2024-07-28T10:34:22Z",
        "amount": 129.99,
        "type": 0,
        "method": 1,
        "description": "Hair treatment",
        "category": 17,
        "status": 0,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn070",
        "label": "Finance",
        "date": "2024-02-09T13:23:10Z",
        "amount": 900.00,
        "type": 1,
        "method": 0,
        "description": "Loan repayment",
        "category": 18,
        "status": 1,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn071",
        "label": "Shopping",
        "date": "2024-01-15T15:11:12Z",
        "amount": 215.00,
        "type": 0,
        "method": 1,
        "description": "Footwear",
        "category": 19,
        "status": 2,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn072",
        "label": "Health",
        "date": "2024-04-24T09:35:45Z",
        "amount": 70.00,
        "type": 0,
        "method": 0,
        "description": "Eye checkup",
        "category": 20,
        "status": 0,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn073",
        "label": "Beauty",
        "date": "2024-03-08T12:55:30Z",
        "amount": 59.00,
        "type": 0,
        "method": 1,
        "description": "Facial",
        "category": 1,
        "status": 1,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn074",
        "label": "Finance",
        "date": "2024-05-25T11:48:23Z",
        "amount": 1200.00,
        "type": 1,
        "method": 0,
        "description": "Rent payment",
        "category": 2,
        "status": 2,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn075",
        "label": "Shopping",
        "date": "2024-07-05T14:10:59Z",
        "amount": 305.00,
        "type": 0,
        "method": 1,
        "description": "Home decor",
        "category": 3,
        "status": 0,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn076",
        "label": "Health",
        "date": "2024-01-27T10:22:19Z",
        "amount": 40.00,
        "type": 1,
        "method": 0,
        "description": "Prescription",
        "category": 4,
        "status": 1,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn077",
        "label": "Beauty",
        "date": "2024-06-10T13:33:15Z",
        "amount": 99.99,
        "type": 0,
        "method": 1,
        "description": "Cosmetics",
        "category": 5,
        "status": 2,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn078",
        "label": "Finance",
        "date": "2024-02-18T08:25:12Z",
        "amount": 300.00,
        "type": 1,
        "method": 0,
        "description": "Loan fee",
        "category": 6,
        "status": 0,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn079",
        "label": "Shopping",
        "date": "2024-03-19T14:47:35Z",
        "amount": 230.00,
        "type": 0,
        "method": 1,
        "description": "Pet supplies",
        "category": 7,
        "status": 1,
        "destinationCardNumber": "0123-4567-8901-2345"},
    {
        "id": "txn080",
        "label": "Health",
        "date": "2024-03-12T10:30:45Z",
        "amount": 65.00,
        "type": 0,
        "method": 0,
        "description": "Health check",
        "category": 8,
        "status": 0,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn081",
        "label": "Beauty",
        "date": "2024-04-29T12:12:44Z",
        "amount": 89.99,
        "type": 0,
        "method": 1,
        "description": "Fragrance",
        "category": 8,
        "status": 2,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn082",
        "label": "Finance",
        "date": "2024-06-08T11:50:01Z",
        "amount": 1600.00,
        "type": 1,
        "method": 0,
        "description": "Mortgage payment",
        "category": 9,
        "status": 0,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn083",
        "label": "Shopping",
        "date": "2024-05-19T14:20:37Z",
        "amount": 250.00,
        "type": 0,
        "method": 1,
        "description": "Sporting goods",
        "category": 10,
        "status": 1,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn084",
        "label": "Health",
        "date": "2024-02-12T09:33:10Z",
        "amount": 95.50,
        "type": 0,
        "method": 0,
        "description": "Nutritionist",
        "category": 11,
        "status": 2,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn085",
        "label": "Beauty",
        "date": "2024-03-06T16:11:28Z",
        "amount": 75.00,
        "type": 0,
        "method": 1,
        "description": "Makeup kit",
        "category": 12,
        "status": 0,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn086",
        "label": "Finance",
        "date": "2024-07-22T10:25:32Z",
        "amount": 720.00,
        "type": 1,
        "method": 0,
        "description": "Car insurance",
        "category": 13,
        "status": 1,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn087",
        "label": "Shopping",
        "date": "2024-01-29T13:55:47Z",
        "amount": 140.00,
        "type": 0,
        "method": 1,
        "description": "Books",
        "category": 14,
        "status": 2,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn088",
        "label": "Health",
        "date": "2024-06-24T08:40:18Z",
        "amount": 110.00,
        "type": 0,
        "method": 0,
        "description": "Counseling",
        "category": 15,
        "status": 0,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn089",
        "label": "Beauty",
        "date": "2024-07-07T14:50:20Z",
        "amount": 99.99,
        "type": 0,
        "method": 1,
        "description": "Manicure set",
        "category": 16,
        "status": 1,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn090",
        "label": "Finance",
        "date": "2024-03-15T10:12:11Z",
        "amount": 1000.00,
        "type": 1,
        "method": 0,
        "description": "Investment",
        "category": 17,
        "status": 2,
        "destinationCardNumber": "0123-4567-8901-2345"
    },
    {
        "id": "txn091",
        "label": "Shopping",
        "date": "2024-02-03T09:22:30Z",
        "amount": 400.00,
        "type": 0,
        "method": 1,
        "description": "Jewelry",
        "category": 18,
        "status": 0,
        "destinationCardNumber": "1234-5678-9012-3456"
    },
    {
        "id": "txn092",
        "label": "Health",
        "date": "2024-05-18T11:44:02Z",
        "amount": 75.25,
        "type": 0,
        "method": 0,
        "description": "Fitness session",
        "category": 19,
        "status": 1,
        "destinationCardNumber": "2345-6789-0123-4567"
    },
    {
        "id": "txn093",
        "label": "Beauty",
        "date": "2024-04-10T13:18:40Z",
        "amount": 47.50,
        "type": 0,
        "method": 1,
        "description": "Hair gel",
        "category": 20,
        "status": 2,
        "destinationCardNumber": "3456-7890-1234-5678"
    },
    {
        "id": "txn094",
        "label": "Finance",
        "date": "2024-07-11T08:52:19Z",
        "amount": 1300.00,
        "type": 1,
        "method": 0,
        "description": "Savings deposit",
        "category": 1,
        "status": 0,
        "destinationCardNumber": "4567-8901-2345-6789"
    },
    {
        "id": "txn095",
        "label": "Shopping",
        "date": "2024-02-20T16:34:11Z",
        "amount": 275.00,
        "type": 0,
        "method": 1,
        "description": "Home appliances",
        "category": 2,
        "status": 1,
        "destinationCardNumber": "5678-9012-3456-7890"
    },
    {
        "id": "txn096",
        "label": "Health",
        "date": "2024-06-02T10:42:50Z",
        "amount": 55.00,
        "type": 0,
        "method": 0,
        "description": "Pharmacy visit",
        "category": 3,
        "status": 2,
        "destinationCardNumber": "6789-0123-4567-8901"
    },
    {
        "id": "txn097",
        "label": "Beauty",
        "date": "2024-03-28T09:29:30Z",
        "amount": 69.99,
        "type": 0,
        "method": 1,
        "description": "Skincare set",
        "category": 4,
        "status": 0,
        "destinationCardNumber": "7890-1234-5678-9012"
    },
    {
        "id": "txn098",
        "label": "Finance",
        "date": "2024-05-04T11:11:11Z",
        "amount": 900.00,
        "type": 1,
        "method": 0,
        "description": "Credit card bill",
        "category": 5,
        "status": 1,
        "destinationCardNumber": "8901-2345-6789-0123"
    },
    {
        "id": "txn099",
        "label": "Shopping",
        "date": "2024-04-01T14:14:14Z",
        "amount": 215.00,
        "type": 0,
        "method": 1,
        "description": "Gaming console",
        "category": 6,
        "status": 2,
        "destinationCardNumber": "9012-3456-7890-1234"
    },
    {
        "id": "txn100",
        "label": "Health",
        "date": "2024-07-15T13:13:13Z",
        "amount": 85.50,
        "type": 0,
        "method": 0,
        "description": "Therapy session",
        "category": 7,
        "status": 0,
        "destinationCardNumber":"8901-2345-6789-0123"}
]






