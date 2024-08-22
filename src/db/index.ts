import {
    BankType,
    CardType,
    CurrencyType,
    InventoryType,
    LoanType,
    ServiceType,
    StockType,
    StokeType, UserType
} from "@/interfaces";

// =========================================
// Inventories
// =========================================
const currencies:CurrencyType[] = [
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
const positions:InventoryType[]=[
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
const categories:InventoryType[]=[
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
const banks:BankType[]=[
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
const creditCards:InventoryType[]=[
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
const services:ServiceType[]=[
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
const stocks:StokeType[]=[
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
const loans:LoanType[]=[
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
const cards : CardType[]=[
    {
        "CardNumber": "1234-5678-9012-3456",
        "balance": 1500,
        "holder": 5,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-01-15T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4567",
        "balance": 3200,
        "holder": 12,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-02-20T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5678",
        "balance": 2500,
        "holder": 8,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-03-10T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6789",
        "balance": 4200,
        "holder": 15,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-04-05T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7890",
        "balance": 1800,
        "holder": 20,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8901",
        "balance": 3000,
        "holder": 6,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9012",
        "balance": 2200,
        "holder": 10,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-07-30T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0123",
        "balance": 2900,
        "holder": 22,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-08-10T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1234",
        "balance": 1600,
        "holder": 18,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-09-25T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2345",
        "balance": 3500,
        "holder": 4,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-10-20T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3457",
        "balance": 2000,
        "holder": 14,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-11-15T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4568",
        "balance": 1700,
        "holder": 3,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5679",
        "balance": 4300,
        "holder": 9,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-01-10T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6780",
        "balance": 1100,
        "holder": 25,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-02-15T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7891",
        "balance": 3200,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-03-30T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8902",
        "balance": 2500,
        "holder": 13,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-04-20T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9013",
        "balance": 3700,
        "holder": 19,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0124",
        "balance": 2100,
        "holder": 21,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-06-10T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1235",
        "balance": 3000,
        "holder": 30,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2346",
        "balance": 1400,
        "holder": 2,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-08-20T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3458",
        "balance": 2700,
        "holder": 17,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-09-10T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4569",
        "balance": 4000,
        "holder": 11,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-10-05T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5670",
        "balance": 1500,
        "holder": 26,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-11-30T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6781",
        "balance": 2800,
        "holder": 23,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-12-10T00:00:00Z"
    },
    {
            "CardNumber": "5678-9012-3456-7892",
            "balance": 3500,
            "holder": 8,
            "type": 5,
            "bank": 5,
            "expireDate": "2024-01-30T00:00:00Z"
        },
    {
        "CardNumber": "6789-0123-4567-8903",
        "balance": 2700,
        "holder": 12,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9014",
        "balance": 3200,
        "holder": 18,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-03-20T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0125",
        "balance": 1800,
        "holder": 4,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-04-10T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1236",
        "balance": 4500,
        "holder": 20,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-05-15T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2347",
        "balance": 2500,
        "holder": 6,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-06-20T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3459",
        "balance": 1500,
        "holder": 15,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-07-25T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4560",
        "balance": 3000,
        "holder": 9,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-08-30T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5671",
        "balance": 2000,
        "holder": 23,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-09-15T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6782",
        "balance": 3200,
        "holder": 30,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-10-20T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7893",
        "balance": 1800,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-11-25T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8904",
        "balance": 2900,
        "holder": 13,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-12-15T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9015",
        "balance": 2200,
        "holder": 5,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-01-10T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0126",
        "balance": 3200,
        "holder": 8,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-02-05T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1237",
        "balance": 1500,
        "holder": 10,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2348",
        "balance": 2500,
        "holder": 19,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-04-30T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3460",
        "balance": 3100,
        "holder": 2,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4561",
        "balance": 2200,
        "holder": 14,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-06-10T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5672",
        "balance": 4000,
        "holder": 21,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-07-05T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6783",
        "balance": 1700,
        "holder": 11,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-08-15T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7894",
        "balance": 3200,
        "holder": 17,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-09-20T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8905",
        "balance": 1800,
        "holder": 6,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-10-30T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9016",
        "balance": 2900,
        "holder": 8,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-11-10T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0127",
        "balance": 2000,
        "holder": 23,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
            "CardNumber": "9012-3456-7890-1238",
            "balance": 3500,
            "holder": 12,
            "type": 9,
            "bank": 9,
            "expireDate": "2024-01-20T00:00:00Z"
        },
    {
        "CardNumber": "0123-4567-8901-2349",
        "balance": 1800,
        "holder": 3,
        "type": 10,
        "bank": 10,
        "expireDate": "2024-02-10T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3461",
        "balance": 2700,
        "holder": 16,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-03-25T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4562",
        "balance": 4000,
        "holder": 22,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-04-15T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5673",
        "balance": 1500,
        "holder": 9,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-05-30T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6784",
        "balance": 3200,
        "holder": 20,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7895",
        "balance": 2500,
        "holder": 7,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-07-10T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8906",
        "balance": 3000,
        "holder": 11,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-08-25T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9017",
        "balance": 2200,
        "holder": 18,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-09-20T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0128",
        "balance": 3500,
        "holder": 24,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-10-05T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1239",
        "balance": 1400,
        "holder": 4,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-11-15T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2350",
        "balance": 3200,
        "holder": 19,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-12-30T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3462",
        "balance": 2000,
        "holder": 6,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-01-05T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4563",
        "balance": 3100,
        "holder": 12,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5674",
        "balance": 1800,
        "holder": 15,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6785",
        "balance": 2400,
        "holder": 20,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-04-30T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7896",
        "balance": 1500,
        "holder": 8,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-05-10T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8907",
        "balance": 3100,
        "holder": 11,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-06-20T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9018",
        "balance": 2500,
        "holder": 14,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0129",
        "balance": 3000,
        "holder": 16,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-08-05T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1240",
        "balance": 2000,
        "holder": 21,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-09-30T00:00:00Z"
    },
    {
            "CardNumber": "0123-4567-8901-2351",
            "balance": 3500,
            "holder": 13,
            "type": 10,
            "bank": 10,
            "expireDate": "2024-01-20T00:00:00Z"
        },
    {
        "CardNumber": "1234-5678-9012-3463",
        "balance": 2000,
        "holder": 17,
        "type": 1,
        "bank": 11,
        "expireDate": "2024-02-25T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4564",
        "balance": 2700,
        "holder": 4,
        "type": 2,
        "bank": 12,
        "expireDate": "2024-03-15T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5675",
        "balance": 1800,
        "holder": 19,
        "type": 3,
        "bank": 13,
        "expireDate": "2024-04-20T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6786",
        "balance": 3100,
        "holder": 6,
        "type": 4,
        "bank": 14,
        "expireDate": "2024-05-25T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7897",
        "balance": 2500,
        "holder": 12,
        "type": 5,
        "bank": 15,
        "expireDate": "2024-06-30T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8908",
        "balance": 3200,
        "holder": 8,
        "type": 6,
        "bank": 16,
        "expireDate": "2024-07-15T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9019",
        "balance": 2200,
        "holder": 20,
        "type": 7,
        "bank": 17,
        "expireDate": "2024-08-25T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0130",
        "balance": 1500,
        "holder": 25,
        "type": 8,
        "bank": 18,
        "expireDate": "2024-09-10T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1241",
        "balance": 3500,
        "holder": 10,
        "type": 9,
        "bank": 19,
        "expireDate": "2024-10-15T00:00:00Z"
    },
    {
        "CardNumber": "0123-4567-8901-2352",
        "balance": 1800,
        "holder": 7,
        "type": 10,
        "bank": 20,
        "expireDate": "2024-11-20T00:00:00Z"
    },
    {
        "CardNumber": "1234-5678-9012-3464",
        "balance": 2700,
        "holder": 18,
        "type": 1,
        "bank": 1,
        "expireDate": "2024-12-05T00:00:00Z"
    },
    {
        "CardNumber": "2345-6789-0123-4565",
        "balance": 3200,
        "holder": 3,
        "type": 2,
        "bank": 2,
        "expireDate": "2024-01-15T00:00:00Z"
    },
    {
        "CardNumber": "3456-7890-1234-5676",
        "balance": 1500,
        "holder": 11,
        "type": 3,
        "bank": 3,
        "expireDate": "2024-02-20T00:00:00Z"
    },
    {
        "CardNumber": "4567-8901-2345-6787",
        "balance": 2900,
        "holder": 22,
        "type": 4,
        "bank": 4,
        "expireDate": "2024-03-25T00:00:00Z"
    },
    {
        "CardNumber": "5678-9012-3456-7898",
        "balance": 3200,
        "holder": 5,
        "type": 5,
        "bank": 5,
        "expireDate": "2024-04-10T00:00:00Z"
    },
    {
        "CardNumber": "6789-0123-4567-8909",
        "balance": 2000,
        "holder": 16,
        "type": 6,
        "bank": 6,
        "expireDate": "2024-05-20T00:00:00Z"
    },
    {
        "CardNumber": "7890-1234-5678-9020",
        "balance": 2700,
        "holder": 19,
        "type": 7,
        "bank": 7,
        "expireDate": "2024-06-15T00:00:00Z"
    },
    {
        "CardNumber": "8901-2345-6789-0131",
        "balance": 1800,
        "holder": 8,
        "type": 8,
        "bank": 8,
        "expireDate": "2024-07-30T00:00:00Z"
    },
    {
        "CardNumber": "9012-3456-7890-1242",
        "balance": 3500,
        "holder": 14,
        "type": 9,
        "bank": 9,
        "expireDate": "2024-08-20T00:00:00Z"
    }
]
const users:UserType[]=[
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




