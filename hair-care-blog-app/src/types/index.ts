export interface User {
    id: string;
    name: string;
    photoUrl: string;
    hairCarePreferences: string[];
    pointsBalance: number;
}

export interface Points {
    totalPoints: number;
    redeemableRewards: Reward[];
}

export interface Reward {
    id: string;
    description: string;
    pointsRequired: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    tips: string[];
}

export interface QuestionnaireResponse {
    scalpType: string;
    hairType: string;
    recommendations: Product[];
}